// SETP 1. Vanilla Script (ES + DOM API)
// SETP 2. Class Programing
// SETP 3. Web Components API

// TODO 5 : 드래깅 상태 제어를 위한 상수 선언
const DRAGGING_CLASSNAME = "dragging";

// TODO 1 : .list 요소 찾기
const list = document.querySelector(".list");

// TODO 2 : .list 자식(children, 집합) 찾기
// NodeList -> Array
const listItems = Array.from(list.querySelectorAll("li"));

// TODO 3 : listItems 배열을 순환해서 드래그 가능하게 처리
listItems.forEach((item) => {
  item.setAttribute("draggable", true);

  // TODO 4 : 각 리스트 아이템에 드래그 이벤트 핸들링
  item.addEventListener("dragstart", (e) => {
    // console.log(e.type, e.currentTarget);
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });

  item.addEventListener("dragend", (e) => {
    // console.log(e.type, e.currentTarget);
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
  });

  // TODO 10 : 추가한 버튼에 이벤트 핸들링
  const handleButton = item.querySelector('[data-role="handle"]');

  if (handleButton) {
    handleButton.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowUp":
          const prevItem = item.previousElementSibling;
          if (prevItem) {
            prevItem.before(item);

            e.currentTarget.focus();
          }

          break;

        case "ArrowDown":
          const nextItem = item.nextElementSibling;
          if (nextItem) {
            nextItem.after(item);

            e.currentTarget.focus();
          }

          break;
      }
    });
  }
});

// TODO 6 : list 드래그 이벤트 핸들링
list.addEventListener("dragover", (e) => {
  e.preventDefault();

  // TODO 7 : 현재 드래깅 중인 아이템 찾기
  const draggedItem = listItems.find((item) =>
    item.classList.contains(DRAGGING_CLASSNAME)
  );

  // TODO 8 : 드래깅 중인 요소가 아닌 나머지 아이템 집합 찾기
  const restItems = listItems.filter((item) => !Object.is(item, draggedItem));

  // TODO 9 : 나머지 아이템 중에 드래깅 중인 요소의 화면 높이와
  //          드롭 대상 요소의 화면에서의 top 위치 + (높이 * 0.5) 비교해서
  //          교체할 아이템 찾기

  // 드래깅 중인 요소가 리스트 안에서 움직일 때 화면에서의 높이 값
  // console.log(e.clientY);

  const replaceItem = restItems.find((item, index) => {
    // console.log(index, item.offsetTop);
    // console.log(index, item.offsetHeight);
    // console.log(index, item.offsetHeight * 0.5);
    return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
  });

  if (replaceItem) {
    list.insertBefore(draggedItem, replaceItem);
  } else {
    list.appendChild(draggedItem);
  }
});
