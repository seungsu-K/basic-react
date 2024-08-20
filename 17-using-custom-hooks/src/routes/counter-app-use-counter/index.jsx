import useCounter from '@/hooks/useCounter';
import S from './style.module.css';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';

function CounterApp() {
  const counterState = useCounter({ count: 1, max: 10, step: 2 });

  const {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset,
  } = counterState;

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">카운터 앱</h1>
      <p>useCounter() 훅을 사용해 카운터 앱 기능 구현</p>

      <button
        type="button"
        title={`${step} 증가`}
        disabled={isMaxDisabled}
        onClick={increment}
      >
        <IoChevronUp />
      </button>
      <output>{count}</output>
      <button
        type="button"
        title={`${step} 감소`}
        disabled={isMinDisabled}
        onClick={decrement}
      >
        <IoChevronDown />
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </main>
  );
}

export default CounterApp;
