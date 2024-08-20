import { useId } from 'react';
import S from './Counter.module.css';

import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useLocalStorage, useSessionStorage } from '@/hooks/useWebStorage';

const COUNTER_COUNT = '@counter/count';
const COUNTER_STEP = '@counter/step';
const DOCUMENT_INITIAL_TITLE = '문서 제목 동기화';

function Counter() {
  const id = useId();

  // const [count, setCount] = useState(() =>
  //   getStorageData(COUNTER_COUNT, 0, 'session')
  // );

  const [count, setCount, { setItem: setCountItem }] = useLocalStorage(
    COUNTER_COUNT,
    0
  );
  console.log(count, setCount, setCountItem);

  // 문서 제목 변경 로직
  const documentTitle = `(${count})` + DOCUMENT_INITIAL_TITLE;
  useDocumentTitle(documentTitle);

  // useEffect(() => {
  //   document.title = `(${count}) ` + DOCUMENT_INITIAL_TITLE;
  // }, [count]);

  // -------------------------------------------------------

  // const [step, setStep] = useState(() =>
  //   getStorageData(COUNTER_STEP, 1, 'session')
  // );

  const [step, setStep, { setItem: setStepItem }] = useSessionStorage(
    COUNTER_STEP,
    1,
    true
  );

  const handleDecrease = () => {
    let nextCount = count - step;
    if (nextCount <= 1) nextCount = 1;
    setCount(nextCount);
  };

  const handleIncrease = () => {
    setCount(count + step);
  };

  const handleChangeStep = (e) => {
    setStep(Number(e.target.value));
  };

  const handleSaveToStorage = () => {
    setCountItem(count);
    setStepItem(step);

    // setStorageData(COUNTER_COUNT, count, 'session');
    // setStorageData(COUNTER_STEP, step, 'session');
  };

  const isDisabled = count <= 1;

  return (
    <>
      <div className={S.component}>
        <div style={{ marginBlockEnd: 20 }}>
          <button type="button" onClick={handleSaveToStorage}>
            이벤트로 웹 스토리지 동기화
          </button>
        </div>

        <button
          type="button"
          aria-label="카운트 감소"
          title="카운트 감소"
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
        <button
          type="button"
          aria-label="카운트 증가"
          title="카운트 증가"
          onClick={handleIncrease}
        >
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
