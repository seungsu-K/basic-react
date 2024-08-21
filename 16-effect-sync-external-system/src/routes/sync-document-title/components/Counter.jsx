// --------------------------------------------------------------------------
// ✅ 문서 제목 동기화
// --------------------------------------------------------------------------
// - [ ] 카운터 앱의 count 상태가 변경되면 문서 제목을 동기화합니다.
// - [ ] step 값이 변경될 때에는 불필요한 문서 제목 동기화가 되지 않도록 설정합니다.
// --------------------------------------------------------------------------

import { useEffect, useId, useState } from 'react';
import S from './Counter.module.css';

const DOCUMENT_TITLE = document.title;

function Counter() {
  const id = useId();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleDecrease = () => {
    let nextCount = count - step;
    if (nextCount <= 1) nextCount = 1;
    setCount(nextCount);
  };

  useEffect(() => {
    // 반응성 상태가 변경되면
    // 외부 시스템인 브라우저의 문서 제목을 변경하려 한다.
    console.log(
      'count 반응성 상태 데이터가 변경되었기 때문에 이펙트가 호출됩니다.'
    );
    document.title = `(${count}) ` + DOCUMENT_TITLE;
  }, [count]);

  const handleIncrease = () => {
    setCount(count + step);
  };

  const handleChangeStep = (e) => {
    setStep(Number(e.target.value));
  };

  const isDisabled = count <= 1;

  // [이펙트]
  useEffect(() => {
    console.log('effect');
  });

  return (
    <>
      <div className={S.component}>
        <button
          type="button"
          aria-label="카운트 감소"
          disabled={isDisabled}
          onClick={handleDecrease}
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            width={12}
            height={12}
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <output>{count}</output>
        <button type="button" aria-label="카운트 증가" onClick={handleIncrease}>
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className={S.changeStep}>
        <label htmlFor={id}>step 변경</label>
        <input type="number" id={id} value={step} onChange={handleChangeStep} />
      </div>
    </>
  );
}

export default Counter;