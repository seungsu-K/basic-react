import React, { createElement as h } from "https://esm.sh/react";

// TODO: <ul> 리액트 엘리먼트를 생성하는 클래스 컴포넌트

class ArchitectureList extends React.Component {
  render() {
    // props 객체
    const { lang, children } = this.props;

    return React.createElement(
      "ul",
      { className: "architectures", lang },
      children
    );
  }
}

export default ArchitectureList;
