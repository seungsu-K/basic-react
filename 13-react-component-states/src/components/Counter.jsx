// --------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// --------------------------------------------------------------------------
// - [ ] `count` 속성(prop)을 전달받아 화면에 표시
// - [ ] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [ ] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함
// - [ ] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [ ] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [ ] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [ ] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작을 경우 감소 버튼 비활성화
// - [ ] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 클 경우 증가 버튼 비활성화
// --------------------------------------------------------------------------

import { number } from 'prop-types';
import { useState } from 'react';

Counter.propTypes = {
  count: number,
  step: number,
  min: number,
  max: number,
};

/**@type {({ count?: number, step?: number, min?: number, max?: number}) => JSX.Element} */
function Counter({ count: initialCount = 1, step = 1, min = 1, max = 1000 }) {
  const [count, setCount] = useState(initialCount);

  const handleDecrease = () => {
    const nextCount = count - step;
    setCount(nextCount);
  };

  const handleIncrease = () => {
    const nextCount = count + step;
    setCount(nextCount);
  };

  return (
    <div className="Counter">
      <button type="button" onClick={handleDecrease}>
        -{step}
      </button>
      <output>{count}</output>
      <button type="button" onClick={handleIncrease}>
        +{step}
      </button>
    </div>
  );
}

export default Counter;
