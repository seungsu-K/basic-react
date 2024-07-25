// Virtual DOM
// 가상 문서 객체 모델
// Actual DOM을 추상화(단순화)

// react 패키지
// 1. react-dom 패키지 -> 웹 앱
// 2. react-native 패키지 -> 모바일 앱
// 3. 데스크탑 앱

import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

// 실제 DOM (Element tree)
// 웹 API를 사용해 문서 객체(Document Object) 생성
// <figure> 요소 생성

const figureElement = document.createElement("figure");
console.dir(figureElement);

// 자식 요소
const figcaptionElement = document.createElement("figcaption");
figureElement.append(figcaptionElement);
console.dir(figureElement);

// -> 프로퍼티가 아주 많고 prototype이 아주 복잡한 객체가 만들어짐
// Object -> Node -> Element -> HTMLElement -> figureHTMLElement

// -----------------------------------------------------------------

// 가상(추상화, 단순화) 요소(Element) 생성
// const figureVElement = createElement("figure");
// console.log(figureVElement);

// 자식 요소
const figcaptionVElement = createElement("figcation");

// API : createElement(type, props, ...children)
const figureVElement = createElement("figure", null, figcaptionVElement);
console.log(figureVElement);

// -----------------------------------------------------------------

// 실제 DOM에 마운트(mount, 착장 === 렌더링)
const actualDomElement = document.getElementById("actual-dom");
console.log(actualDomElement);

actualDomElement.append(figureElement);

// 가상 요소를 실제 DOM 요소로 렌더링
// API : createRoot(container)
const virtualRootElement = document.getElementById("virtual-dom");
const vRoot = createRoot(virtualRootElement);
vRoot.render(figureVElement);
console.log(vRoot);
