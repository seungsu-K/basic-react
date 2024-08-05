// --------------------------------------------------------------------------
// ✅ 선언형 프로그래밍
// --------------------------------------------------------------------------
// - [ ] 체크박스 활성 상태를 선언합니다.
// - [ ] 체크박스 및 버튼을 "렌더링 하는 함수"를 작성합니다.
// - [ ] 선언된 상태가 변경되면, 체크박스와 버튼을 "다시 렌더링"합니다.
// --------------------------------------------------------------------------

import createState from "../lib/createState";

// 상태로 사용할 데이터 정의
const data = {
  checked: false,
};

// 리액트
// 선언적 상태 변경 감지 -> 설정된 렌더 함수 실행
// UI 업데이트 제어
// 컴포넌트 렌더링 프로세스 (작동, 다시 작동 ....)

// 상태 업데이트가 감지되면 실행될 콜백 함수 (상태 변경 구독)
const render = () => {
  const { checked } = state;
  // console.log('[checked 업데이트]:', checked);
  // UI 업데이트(다시 렌더링)
  (checkbox as HTMLInputElement).checked = checked;
  if (checked) {
    button.removeAttribute("disabled");
    button.textContent = "활성 상태";
  } else {
    button.setAttribute("disabled", "true");
    button.textContent = "비활성 상태";
  }
};

const update = (globalThis.update = (value: boolean): void => {
  setState("checked", value);
});

const [state, setState] = createState(data, render);

// 최초 렌더링
// render();

const container = document.getElementById("declarative-programming");
const checkbox = container.querySelector('input[type="checkbox"]');
const button = container.querySelector("button");

checkbox.addEventListener("change", (e: Event) => {
  const { checked: nextCheckedValue } = e.target as HTMLInputElement;
  // 상태 업데이트 시도
  update(nextCheckedValue);
});
