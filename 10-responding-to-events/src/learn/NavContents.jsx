function NavContents() {
  // 이벤트 핸들러는 컴포넌트 내부에 정의

  // 사이드 이펙트(부수 효과) 처리 함수
  // 리액트 렌더링 프로세스와 연관이 없는 것을 처리
  const handleClick = (e) => {
    e.preventDefault();
    console.log('이벤트 핸들러');
  };

  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a href="#jsx-markup" onClick={handleClick}>
        JSX 마크업
      </a>
      <a href="#responding-to-events" className="active">
        이벤트 응답
      </a>
    </nav>
  );
}

export default NavContents;
