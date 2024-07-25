const list = document.querySelector(".list");

const listItems = Array.from(list.querySelectorAll("li"));

const DRAGGING_CLASSNAME = "dragging";

listItems.forEach((item) => {
  item.setAttribute("draggable", true);

  item.addEventListener("dragstart", (e) =>
    e.currentTarget.classList.add(DRAGGING_CLASSNAME)
  );

  item.addEventListener("dragend", (e) => {
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);

    // offsetTop(문서 기준 Y축 위치) 기준 listItem 재정렬
    listItems.sort((a, b) => a.offsetTop - b.offsetTop);
  });

  const handleButton = item.querySelector('[data-role="handle"]');

  if (handleButton) {
    handleButton.addEventListener("keyup", (e) => {
      // e.key 이벤트에 입력한 키
      switch (e.key) {
        case "ArrowUp":
          const prevItem = item.previousElementSibling;

          if (prevItem) {
            prevItem.before(item);

            e.currentTarget.focus();

            listItems.sort((a, b) => a.offsetTop - b.offsetTop);
          }
          break;

        case "ArrowDown":
          const nextItem = item.nextElementSibling;

          if (nextItem) {
            nextItem.after(item);

            e.currentTarget.focus();

            listItems.sort((a, b) => a.offsetTop - b.offsetTop);
          }
          break;
      }
    });
  }
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();

  const draggedItem = listItems.find((item) =>
    item.classList.contains(DRAGGING_CLASSNAME)
  );

  const restItem = listItems.filter((item) => !Object.is(item, draggedItem));

  const replaceItem = restItem.find((item, index) => {
    // console.log(`
    //   ${index} / e.clientY : ${e.clientY} / offsetTop : ${
    //   item.offsetTop
    // } / offsetHeight : ${item.offsetHeight * 0.5}
    //   `);
    return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
  });

  // e.clientY = 뷰포트 위에서부터의 높이
  // offsetTop = 문서 기준 Y축 위치 값
  // offsetHeight = 요소의 height 값(boarder, padding 포함)
  // replaceItem : draggedItem의 현재 y축 위치가(e.clientY)
  //               restItem의 y축 값과 높이의 절반보다 작을 경우

  if (replaceItem) {
    list.insertBefore(draggedItem, replaceItem);
  } else {
    list.appendChild(draggedItem);
  }
});
