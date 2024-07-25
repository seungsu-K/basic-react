// 가상 요소를 구분하는 함수

import { VIRTUAL_ELEMENT_TYPE } from "./createElement.js";

/** @type{(node: any) => boolean} */
function isValidElement(node) {
  if ("$$typeof" in node && node?.$$typeof === VIRTUAL_ELEMENT_TYPE) {
    return true;
  } else {
    return false;
  }
}

export default isValidElement;
