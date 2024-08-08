// --------------------------------------------------------------------------
// ✅ TermAndConditions 컴포넌트
// --------------------------------------------------------------------------
// - [ ] 사용자가 이용 약관에 동의하면 확인 버튼 활성화
// - [ ] 사용자가 이용 약관에 동의하지 않으면 확인 버튼 비활성화
// --------------------------------------------------------------------------

import React from 'react';

// [2018] React Hooks (functions) API 공개
//        - const [state, setState] = React.useState(initialState);
// [2019] 패러다임 시프트 : Class 기반 프로그래밍 (객체 지향) → Functional 기반 프로그래밍 (함수형)

function TermAndConditions() {
  // 일반 변수를 사용하면 state가 변한 것을 인식할 수 없음
  // let checked = false;

  // 리액트의 훅 API를 사용해 (함수형) 컴포넌트의 상태 선언
  const [checked, setChecked] = React.useState(false);

  // 상태 업데이트 함수가 실행되는 코드를 포함하는 함수
  const handleCheck = (e) => {
    const nextCheckedValue = e.target.checked;

    // 선언된 리액트의 컴포넌트 상태 업데이트 트리거(렌더 요청)
    // - 리액트는 선언된 상태 업데이트 함수 실행에 관심이 많습니다.
    setChecked(nextCheckedValue);
  };

  const isDisabled = checked ? false : true;

  return (
    <form className="TermAndConditions">
      <h2>이용 약관</h2>
      <p>
        OOO 서비스를 이용함으로써 귀하는 본 약관에 동의하게 되므로 본 약관을
        숙지하는 것이 중요합니다. 본 약관 외에도 OOO은 개인정보처리방침을
        게시합니다.
      </p>
      <div>
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />{' '}
        <label htmlFor="terms">이용 약관에 동의합니다.</label>
      </div>
      <button type="submit" disabled={isDisabled}>
        확인
      </button>
    </form>
  );
}

export default TermAndConditions;
