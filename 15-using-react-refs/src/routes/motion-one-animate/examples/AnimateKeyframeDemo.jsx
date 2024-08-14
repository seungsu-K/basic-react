// --------------------------------------------------------------------------
// ✅ animate() 함수 키프레임 사용법
// --------------------------------------------------------------------------
// - [ ] 사커볼이 화면 벽면에 부딫힌 후, 다시 돌아오도록 애니메이션 설정합니다.
// - [ ] 사커볼 움직임이 좀 더 자연스러워지도록 이징(easing)도 키프레임을 적용하세요.
// - [ ] 옵션(duration, delay, easing, direction, repeat, autoPlay)을 설정해보세요.
// --------------------------------------------------------------------------

import { animate /* spring */ } from 'motion';
import SoccerBall from '../components/SoccorBall';
import S from './AnimateDemo.module.css';
import { useRef } from 'react';

function AnimateKeyframeDemo() {
  const soccerBallRef = useRef(null);

  const handleMoveAnimate = () => {
    const soccerBallElement = soccerBallRef.current;

    animate(
      soccerBallElement,
      {
        x: [0, 400, 0],
        rotate: [0, 360 * 3, -360 * 3],
        scaleY: [1, 0.8, 1],
      },
      { duration: 2, easing: 'ease-out' }
      // {
      //   y: {
      //     easing: spring({
      //       velocity: 1000,
      //       stiffness: 500,
      //       damping: 5,
      //     }),
      //   },
      // }
    );
  };

  return (
    <div className={S.component}>
      <button className={S.button} type="button" onClick={handleMoveAnimate}>
        키프레임 애니메이션
      </button>

      <SoccerBall ref={soccerBallRef} size={60} />
    </div>
  );
}

export default AnimateKeyframeDemo;
