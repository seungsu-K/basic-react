import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function Input({ inputType, status = "id" }) {
  let label = "";
  let inputHint = "";

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
  // JSX
  return (
    <div className={`input_${status} Input`}>
      <label for={`user${status}`} className={`label_${status} sr-only`}>
        {label}
      </label>
      <input
        type={inputType}
        id={`user${status}`}
        name={`user${status}`}
        placeholder={label}
        required
      />
      <span className="input_hint"> {inputHint} </span>
      <button type="reset" class="button_clear"></button>
    </div>
  );
}

function InputForm() {
  return (
    <form className="InputForm" id="form_login" action="/" method="post">
      <Input status="id" />
      <Input status="password" />
      <Input status="email" />
      <button type="submit" className="button_submit">
        확인
      </button>
    </form>
  );
}

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<InputForm />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
