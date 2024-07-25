// 리액트 요소(React Element === 가상 DOM 요소 노드) 생성

const listData = {
  items: [],
};

// 리액트로 li 생성
const listItems = listData.items.map((item) => {
  const itemElement = React.createElement(
    "li",
    { className: "item" },
    React.createElement("img", {
      src: `/architectures/architecture-${item.id}.jpg`,
      alt: "",
    }),
    React.createElement("span", { className: "content" }, item.title),
    React.createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      React.createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
  return itemElement;
});

// 리액트로 ul 생성
const list = React.createElement(
  // type
  "ul",

  // props
  { className: "architectures", lang: "en" },

  // ..children
  ...listItems
);

console.log(list);
console.log(React.isValidElement(list)); // true

// 리액트 앱 렌더링
// ReactDOM / Server or Client
// ReactDOM.createRoot(container : mount할 실제 DOM 요소)

const container = document.getElementById("root");

const reactDomRoot = ReactDOM.createRoot(container);

// 특정 시간이 지나면 랜더링하고 unmount
function render() {
  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount();
}

// 최초 렌더링
render();

// setTimeout(render, 2000);
// setTimeout(unmount, 4000);

// listData는 일반 JavaScript 객체이기에 데이터가 추가 됬을 때
// 렌더링이 추가되는 반응성을 구현할 수 없다.
// 이를 해결하기 위해 Proxy 객체 활용 (like Vue.js)

const reactiveListData = new Proxy(listData, {
  // get (원본 수정 대신, 프록시를 이용해 가로채서 읽기)
  get(target, prop) {
    // 객체의 속성을 반환

    console.log("[GET]");
    return target[prop];
  },

  // set (원본 수정 대신, 프록시를 이용해 가로채서 쓰기)
  set(target, prop, newValue) {
    // 이전 값
    const oldValue = target[prop];

    // 새로운 값
    target[prop] = newValue;

    console.log("[SET] update", JSON.stringify(newValue));

    // SET이 감지되면 화면을 다시 랜더링
    render();

    return true;
  },
});

console.log(reactiveListData);

// TODO : 1초마다 데이터에 새로운 아이템 추가 (업데이트)

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: 1,
      title: "Climatology",
    },
  ];
}, 1000);

setTimeout(() => {
  console.log("2초 지남");
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id: "2",
      title: "Climatology",
    },
  ];
}, 2000);
