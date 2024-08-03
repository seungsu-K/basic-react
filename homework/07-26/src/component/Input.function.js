import { createElement as h } from "https://esm.sh/react";

function InputItem({ status = "id" }) {
  let label = "";
  let inputHint = "";
  let inputType = "";

  switch (status) {
    default:
    case "id":
      inputType = "text";
      label = "아이디";
      inputHint = "영문, 숫자 조합 6-12자리";
      break;
    case "password":
      inputType = "password";
      label = "비밀번호";
      inputHint = "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리";
      break;

    case "email":
      inputType = "email";
      label = "이메일";
      inputHint = "이메일 주소를 입력해 주세요";
      break;
  }

  return h(
    "div",
    {
      className: "Input",
    },
    h(
      "label",
      {
        for: `user${status}`,
        className: "label_id sr-only",
      },
      "아이디"
    ),
    h("input", {
      type: inputType,
      id: `user${status}`,
      name: `user${status}`,
      placeholder: label,
      required: "true",
    }),
    h("span", { className: "input_hint" }, inputHint),
    h("button", { type: "reset", className: "button_clear" }, "리셋")
  );
}

export default InputItem;
