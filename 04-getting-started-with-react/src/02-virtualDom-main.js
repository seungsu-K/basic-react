// 실습 (Practice)
import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

// Data
const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Graphics" },
    { id: "4", title: "Building design" },
  ],
};

const listItems = listData.items.map(({ id, title }) => {
  // 가상 요소 반환
  const itemElement = createElement(
    "li",
    { className: "item" },
    createElement("img", {
      src: `/architectures/architecture-${id}.jpg`,
      alt: "",
    }),
    createElement("span", { className: "content" }, title),
    createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
  return itemElement;
});

// TODO: <ul class="architectures" lang="en"></ul> 가상 요소 생성
// API : createElement(type, props, ...children)

const list = createElement(
  // type
  "ul",

  // props
  { className: "architectures", lang: "en" },

  // ...chiledren
  ...listItems
);

console.log(list);

const root = createRoot(document.getElementById("virtual-dom"));
root.render(list);
