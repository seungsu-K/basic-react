// --------------------------------------------------------------------------
// ✅ 이벤트 전파
// --------------------------------------------------------------------------
// - [ ] 전파 중지
// - [ ] 전파 대안으로 핸들러 전달
// - [ ] 기본 작동 방지
// --------------------------------------------------------------------------

import LayoutBox from './layoutBox';

// event.preventDefault(); // 이벤트 기본 작동을 차단

// Event Delegation (위임)
// Event Propagation (전파)
// event.stopPropagation(); // 이벤트 전파 중지

function EventPropagation() {
  const printLayoutBox = (color) => /* 이벤트 핸들러 반환 */ (e) => {
    console.log(color, e.currentTarget);
  };

  return (
    <details>
      <summary>
        <b>이벤트 전파 &amp; 기본 작동 방지</b>
      </summary>
      {/* 상위 컴포넌트 */}
      <div
        onClick={(e) => {
          console.log(e.currentTarget);
        }}
        className="box"
        style={styles.cyan}
      >
        {/* 하위 컴포넌트 */}
        <div
          onClick={(e) => {
            console.log(e.currentTarget);
          }}
          className="box"
          style={styles.magenta}
        >
          <div
            onClick={(e) => {
              console.log(e.currentTarget);
            }}
            className="box"
            style={styles.yellow}
          ></div>
        </div>
      </div>

      <LayoutBox
        onClick={printLayoutBox('cyan')}
        className="box"
        style={styles.cyan}
      >
        <LayoutBox
          onClick={printLayoutBox('magenta')}
          className="box"
          style={styles.magenta}
        >
          <LayoutBox
            onClick={printLayoutBox('yellow')}
            className="box"
            style={styles.yellow}
          ></LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  );
}

const styles = {
  cyan: {
    '--color': 'var(--cyan)',
  },
  magenta: {
    '--color': 'var(--magenta)',
  },
  yellow: {
    '--color': 'var(--yellow)',
  },
};

export default EventPropagation;
