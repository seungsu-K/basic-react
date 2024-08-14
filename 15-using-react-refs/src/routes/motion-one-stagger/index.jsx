// --------------------------------------------------------------------------
// ✅ 스태거 애니메이션
// --------------------------------------------------------------------------
// - [ ] stagger() 함수를 사용해 스태거 애니메이션을 적용합니다.
// - [ ] getMap 함수를 작성해 참조 객체의 current 값으로 Map 객체를 반환하도록 합니다.
// - [ ] <SoccorBall /> 요소에 mountedRef 속성을 사용해 맵(map) 데이터로 수집합니다.
// - [ ] 사용자가 버튼을 누르면 스태거 애니메이션이 적용되도록 구현합니다.
// --------------------------------------------------------------------------
import { useRef, useState } from 'react';
import SoccorBall from './components/SoccorBall';
import S from './style.module.css';
import { animate, stagger } from 'motion';

function MotionOneStagger() {
  const [balls] = useState(Array(6).fill(null));

  const soccerBallsRef = useRef(null);

  const getMap = () => {
    if (!soccerBallsRef.current) {
      soccerBallsRef.current = new Map();
    }

    return soccerBallsRef.current;
  };

  const handleAnimateBalls = () => {
    // 1. testid로 관리
    // const soccerBalls = Array.from(
    //   document.querySelectorAll('[data-testid="soccer-ball"]')
    // );

    // 2. 배열로 관리
    // const soccerBalls = soccerBallsRef.current;

    // 3. Map으로 관리
    const map = getMap();
    const mapArray = Array.from(map.values());

    if (mapArray.length > 0) {
      animate(
        mapArray,
        { x: [0, 400, 0], rotate: [0, 360, -360] },
        {
          duration: 2,
          delay: stagger(0.3),
        }
      );
    }
  };

  const mountedCallBack = (index, el) => {
    // 배열
    // const soccerBalls = soccerBallsRef.current;
    // soccerBalls.push(soccerBallElement);

    // Map
    const map = getMap();

    if (el) {
      map.set(index, el);
    } else {
      map.delete(index);
    }
  };

  return (
    <main className={S.component}>
      <h1 className={S.headline} lang="en">
        stagger()
      </h1>
      <div className={S.description}>
        <p>
          Motion One 라이브러리를 사용해 실제 DOM 노드에 애니메이션을
          적용합니다.
        </p>
        <p>
          자세한 사용법은{' '}
          <a
            href="https://motion.dev/docs/stagger"
            rel="noreferrer noopener"
            target="_blank"
          >
            stagger()
          </a>
          문서를 참고합니다.
        </p>
      </div>

      <div className={S.description}>
        <p>
          사커볼이 화면 벽면에 부딫힌 후, 다시 돌아오도록 애니메이션을
          설정합니다.
        </p>
      </div>

      <button className={S.button} type="button" onClick={handleAnimateBalls}>
        스태거 애니메이션
      </button>

      <div className={S.balls}>
        {balls.map((color, index) => {
          return (
            // 매개 변수로 index와 값을 전달하기 위해서 bind 메서드를 사용
            <SoccorBall ref={mountedCallBack.bind(null, index)} key={index} />
          );
        })}
      </div>
    </main>
  );
}

export default MotionOneStagger;
