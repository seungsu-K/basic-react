import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

import NumberList from "./components/NumberList.js";
import NumberListFunc from "./components/NumberList.function.js";
import ArchitectureList from "./components/architectures/ArchitectureList.js";
import ArchitectureListFunc from "./components/architectures/ArchitectureList.function.js";
import ArchitectureItem from "./components/architectures/ArchitectureItem.js";
import ArchitectureItemFunc from "./components/architectures/ArchitectureItem.function.js";

import listData from "./data/list.js";

// 1. 리액트 클래스 컴포넌트 (재사용)
// 웹 컴포넌트 이름은 반드시 케밥케이스 (kebab-case)
// 리액트 컴포넌트 이름은 반드시 파스칼케이스 (Pascal-case)
// class NumberList extends React.Component {
//   // 렌더(render) 메서드 (인스턴스 공용)
//   render() {
//     // 컴포넌트 속성(props) 접근
//     // props는 읽기 전용
//     console.log(this.props);

//     const children = Array(this.props.count)
//       .fill(null)
//       .map((_, index) => h("li", {}, `${index + 1}01`));

//     // 리액트 엘리먼트 반환
//     return h(
//       "ul",
//       { id: this.props.id, className: "architectures", lang: "en" },
//       ...children
//       // h("li", { className: "item" }, 101),
//       // h("li", { className: "item" }, 201),
//       // h("li", { className: "item" }, 301)
//     );
//   }
// }

// 리액트 컴포넌트를 사용해 리액트 엘리먼트 생성하기
// React.createElement(컴포넌트_참조)

// const list1 = h(NumberList, { id: "list-1", count: 5 });
// console.log(list1);

// const listContainer = h("div", { className: "list-container" }, list1);

// 리액트 앱을 랜더링 할 DOM 요소
const container = document.getElementById("react-app");

// DOM 요소가 존재한다면
if (container) {
  // ArchitectureList 컴포넌트로 엘리먼트(ul) 생성
  const architectureList = React.createElement(ArchitectureList, {
    lang: "en",
    // props로 하위 요소 전달
    // ArchitectureItem 컴포넌트로 엘리먼트(li) 생성
    children: listData.items.map(({ id, title }) =>
      React.createElement(ArchitectureItem, { id, title })
    ),
  });

  // NumberList 컴포넌트로 엘리먼트(li) 생성
  const numberList = h(NumberListFunc, { count: 9 });

  // const architectureItemFunc = h(ArchitectureItemFunc, {
  //   id: "1",
  //   title: "hi",
  // });

  const architectureListFunc = h(ArchitectureListFunc, {
    lang: "en",
    children: listData.items.map(({ id, title }) =>
      h(ArchitectureItemFunc, { id, title })
    ),
  });

  createRoot(container).render(architectureListFunc);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
