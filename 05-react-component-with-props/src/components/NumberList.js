import React, { createElement as h } from "https://esm.sh/react";

class NumberList extends React.Component {
  // 렌더(render) 메서드 (인스턴스 공용)
  render() {
    // 컴포넌트 속성(props) 접근
    // props는 읽기 전용
    // console.log(this.props);

    const children = Array(this.props.count)
      .fill(null)
      .map((_, index) => h("li", {}, `${index + 1}01`));

    // 리액트 엘리먼트 반환
    return h(
      "ul",
      { id: this.props.id, className: "number-list" },
      ...children
      // h("li", { className: "item" }, 101),
      // h("li", { className: "item" }, 201),
      // h("li", { className: "item" }, 301)
    );
  }
}

export default NumberList;
