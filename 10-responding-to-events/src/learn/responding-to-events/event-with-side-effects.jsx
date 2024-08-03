// --------------------------------------------------------------------------
// ✅ 이벤트 핸들러와 사이드 이펙트
// --------------------------------------------------------------------------
// - [ ] 웹 API 활용
// - [ ] 접근성 준수
// --------------------------------------------------------------------------

function EventWithSideEffects() {
  const handleCountDown = () => {
    const countElement = document.querySelector('.countDown .count');

    const clearIntervalId = setInterval(() => {
      const currentCountValue = Number(countElement.value);
      const nextCountValue = currentCountValue - 1;
      if (nextCountValue < 0) {
        clearInterval(clearIntervalId);
        countElement.value = 100;
        return;
      }

      countElement.value = nextCountValue.toString();
    }, 10);
  };

  return (
    <details open>
      <summary>
        <b>이벤트 핸들러와 사이드 이펙트</b>
      </summary>
      <p>이벤트 핸들러는 사이드 이펙트를 위한 최고의 위치입니다.</p>
      <p>
        함수를 렌더링하는 것과 다르게 이벤트 핸들러는 순수할 필요가 없기에
        <br />
        무언가를 변경하는데 최적의 위치입니다.
      </p>
      <div className="countDown">
        <button type="button" onClick={handleCountDown}>
          카운트 다운
        </button>
        <output className="count">100</output>
      </div>
    </details>
  );
}

export default EventWithSideEffects;