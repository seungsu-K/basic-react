import React, { createElement as h } from "https://esm.sh/react";

// React 함수 컴포넌트 (functional Component)

function ArchitectureListFunc(props) {
  // console.log(props);
  const { lang, children } = props;

  return h("ul", { className: "architectures", lang }, children);
}

export default ArchitectureListFunc;
