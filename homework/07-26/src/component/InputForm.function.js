import { createElement as h } from "https://esm.sh/react";

function InputForm(props) {
  const { children } = props;
  return h(
    "form",
    { className: "InputForm", id: "form_login", action: "/", method: "post" },
    children,
    h("button", { className: "button_submit", type: "submit" }, "확인")
  );
}

export default InputForm;
