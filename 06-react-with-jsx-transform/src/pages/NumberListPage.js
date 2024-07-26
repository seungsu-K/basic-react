import React, { createElement as h } from "https://esm.sh/react";
import NumberList from '../components/NumberList.function.js';

function NumberListPage() {
  return {
    h(NumberList, {count:9})
  }
}

export default NumberListPage;