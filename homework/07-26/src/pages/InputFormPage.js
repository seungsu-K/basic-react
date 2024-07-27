import React, { createElement as h } from "https://esm.sh/react";

import InputItem from "../component/Input.function.js";

export function InputFormPage() {
  return h(
    "form",
    { className: "InputForm", id: "form_login", action: "/", method: "post" },
    h(InputItem, { status: "id" }),
    h(InputItem, { status: "password" }),
    h(InputItem, { status: "email" }),
    h("button", { className: "button_submit", type: "submit" }, "확인")
  );
}
