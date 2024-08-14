// --------------------------------------------------------------------------
// ✅ Figma → SVG 패스 애니메이션
// --------------------------------------------------------------------------
// - [x] Figma를 사용해 SVG 패스 애니메이션을 적용할 아이콘 또는 다이어그램을 그립니다.
// - [x] 드로잉 시, 고려할 점
//   - [x] Stroke 속성으로 그립니다.
// - [x] 애니메이션을 적용하기 위해 고려할 점
//   - [x] strokeDasharray
//   - [x] strokeDashoffset
//   - [x] visibility
//   - [x] pathLength
// --------------------------------------------------------------------------

import S from './PracticeSVGPathAnimation.module.css';
import { useRef } from 'react';
import { timeline } from 'motion';
import CircleLine from './CircleLine';

function PracticeSVGPathAnimation() {
  const svgRef = useRef(null);

  const handleSVGPathAnimation = async () => {
    const svgElement = svgRef.current;

    const [circle1Element, circle2Element] = Array.from(
      svgElement.querySelectorAll('circle')
    );
    const lineElement = svgElement.querySelector('line');

    if (!circle1Element || !circle2Element || !lineElement) {
      throw new Error('SVG 내부 요소를 확인해주세요');
    }

    const animationControls = [
      [
        circle1Element,
        { strokeDashoffset: [1, 0], visibility: 'visible' },
        { duration: 1 },
      ],
      [
        lineElement,
        { strokeDashoffset: [1, 0], visibility: 'visible' },
        { duration: 1 },
      ],
      [
        circle2Element,
        { strokeDashoffset: [1, 0], visibility: 'visible' },
        { duration: 1 },
      ],
    ];

    timeline(animationControls);

    await animationControls.finished;

    // 모든 타임라인 애니메이션이 종료된 이후에 정리(cleanup)가 필요해~!
    // circle1, line, circle2 요소에 visibility: hidden
    Array.from(svgElement.children).forEach((child) => {
      child.style.visibility = 'hidden';
    });
  };

  return (
    <>
      <button
        className={S.button}
        type="button"
        onClick={handleSVGPathAnimation}
      >
        svg 패스 애니메이션
      </button>
      <div className={S.component}>
        <CircleLine ref={svgRef} />
      </div>
    </>
  );
}

export default PracticeSVGPathAnimation;
