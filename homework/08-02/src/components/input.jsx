import { string, bool } from "prop-types";

Input.propTypes = {
  inputType: string.isRequired,
  isHintActive: bool,
};

function Input({ inputType = "text", isHintActive = false }) {
  let label = "";
  let inputHint = "";

  if (isHintActive) {
    isHintActive = "isActive";
  } else {
    isHintActive = "";
  }

  switch (inputType) {
    default:
    case "text":
      inputType = "text";
      label = "텍스트";
      inputHint = "텍스트를 입력해주세요";
      break;
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

  return (
    <div className={`input_${inputType} Input`}>
      <label
        htmlFor={`user${inputType}`}
        className={`label_${inputType} sr-only`}
      >
        {label}
      </label>
      <input
        type={inputType}
        id={`user${inputType}`}
        name={`user${inputType}`}
        placeholder={label}
        required
      />
      <span className={`input_hint ${isHintActive}`}> {inputHint} </span>
      <button type="reset" className="button_clear"></button>
    </div>
  );
}

export default Input;
