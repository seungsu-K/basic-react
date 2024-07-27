import { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

import Input from "./component/Input.function.js";
import InputForm from "./component/InputForm.function.js";

const container = document.getElementById("react-app");

const formContainer = {
  items: [
    { id: "1", status: "id" },
    { id: "2", status: "pw" },
    { id: "3", status: "email" },
  ],
};

const inputForm = h(InputForm, {
  children: formContainer.items.map(({ id, status }) =>
    h(Input, { id, status })
  ),
});

if (container) {
  createRoot(container).render(inputForm);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
