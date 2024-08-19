import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>

      <div style={{ display: 'flex', flexFlow: 'column' }}>
        <Link to="/notes">노트 목록</Link>
        <Link to={{ pathname: '/notes' }}>노트 목록</Link>
      </div>
    </div>
  );
}
export default Home;
