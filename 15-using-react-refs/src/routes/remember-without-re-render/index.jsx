// --------------------------------------------------------------------------
// ✅ 리액트 탈출구(Escape Hatches) - useRef 훅
// --------------------------------------------------------------------------
// - [ ] 함수 지역 변수 vs. 클래스 인스턴스 멤버(변수)
// - [ ] 리-렌더 없이 컴포넌트 내부의 데이터를 기억하는 방법
// - [ ] useState() 훅으로 리-렌더 없이 기억하기
// --------------------------------------------------------------------------

import { useId, useRef, useState } from 'react';
import S from './style.module.css';

function RememberWithoutReRender() {
  const refInputId = useId();
  const stateInputId = useId();

  // 매뉴얼 방식의 리렌더 함수
  const reRender = useState(0)[1];

  // [함수 내 지역 변수]
  // 리렌더링하면 값을 기억하지 못하고 초기화 됨
  // let message = '';

  // [함수 내 데이터 기억하는 방법]
  // 1. useState
  // 불필요한 리렌더링을 많이함
  // input의 onChange에 바인딩하면 입력할 때마다 리렌더링 실행
  const [message, setMessage] = useState('');

  const handleStateChange = ({ target: { value } }) => {
    // JS 방식 지역 변수 변경
    // message = value;

    setMessage(value);
  };

  // 2. useRef
  // 지역 변수를 기억하지만 리렌더링 요청을 하지 않음
  // ref 객체는 업데이트되어도 리액트가 신경쓰지 않음(리렌더링 x)
  const messageRef = useRef(''); // return {current: initialValue}

  const handleRefChange = ({ target: { value } }) => {
    messageRef.current = value;
  };

  const handleClick = () => {
    console.log({ messageRef });
  };

  const handleReRender = () => {
    document.getElementById(refInputId).value = '';
    document.getElementById(stateInputId).value = '';

    setMessage('');
    reRender((r) => --r);
  };

  console.log({ message, messageRef });

  return (
    <main className={S.component}>
      <h1 className={S.headline}>다시 렌더링 하지 않고 기억</h1>

      <div className={S.description}>
        <p>다시 렌더링 되더라도 사용자 메시지를 기억해야 합니다.</p>
        <p>하지만 사용자가 입력할 때마다 다시 렌더링되지 않아야 합니다.</p>
        <p>어떻게 해야 리-렌더 요청 없이 메시지를 기억할 수 있을까요?</p>
      </div>

      <div className={S.control}>
        <label htmlFor={refInputId} className="sr-only">
          메시지
        </label>
        <input
          id={refInputId}
          type="text"
          defaultValue={messageRef.current}
          onChange={handleRefChange}
        />
      </div>

      <div className={S.control}>
        <label htmlFor={stateInputId} className="sr-only">
          메시지
        </label>
        <input
          id={stateInputId}
          type="text"
          defaultValue={message}
          onChange={handleStateChange}
        />
      </div>

      <div className={S.group}>
        <button type="button" onClick={handleClick}>
          메시지 확인
        </button>
        <button type="button" onClick={handleReRender}>
          다시 렌더링
        </button>
      </div>

      <div style={{ marginBlockStart: 40 }}>
        <h3>Ref 메시지 값</h3>
        <p>{messageRef.current}</p>
        <h3>State 메시지 값</h3>
        <p>{message}</p>
      </div>
    </main>
  );
}

export default RememberWithoutReRender;
