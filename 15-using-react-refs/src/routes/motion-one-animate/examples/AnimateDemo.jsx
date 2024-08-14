// --------------------------------------------------------------------------
// ✅ animate() 함수 사용법
// --------------------------------------------------------------------------
// - [ ] animate(선택자_또는_DOM_요소_집합, 속성, 옵션)
// - [ ] 롤리팝을 x축 방향으로 400px만큼 이동해보세요.
// - [ ] 롤리팝을 360도(시계 방향) 회전해 굴러가도록 설정해보세요.
// - [ ] 롤리팝 애니메이션 진행 속도를 4초로 설정해보세요.
// - [ ] 진행률이 화면에 표시되도록 애니메이션해봅니다.
// --------------------------------------------------------------------------

import { useRef } from 'react';
import S from './AnimateDemo.module.css';

import { animate } from 'motion';

function AnimateDemo() {
  const lollipopRef = useRef(null); // {current: null}

  const handleMoveAnimate = () => {
    const lollipopElement = lollipopRef.current;
    animate(
      lollipopElement,
      // { transform: 'translateX(400px) rotate(360deg)' },
      { x: 400, rotate: 360 * 5 },
      { duration: 4 }
    );
  };

  const progressRef = useRef(null);

  const handleProgressAnimate = () => {
    const { current: element } = progressRef;
    console.log(element);

    const progressAnimation = (progress) => {
      const animationValue = Math.round(progress * 100) + '%';
      element.value = animationValue;
    };

    const progressAniOption = {
      duration: 2,
      easing: 'linear',
    };
    animate(progressAnimation, progressAniOption);
  };

  return (
    <div className={S.component}>
      <button className={S.button} type="button" onClick={handleMoveAnimate}>
        무빙 애니메이션
      </button>

      <figure className={S.lollipop} ref={lollipopRef} />

      <div className={S.wrapper}>
        <button
          type="button"
          className={S.button}
          onClick={handleProgressAnimate}
        >
          진행률 애니메이션
        </button>
        <output ref={progressRef} className={S.output}>
          0%
        </output>
      </div>
    </div>
  );
}

export default AnimateDemo;
