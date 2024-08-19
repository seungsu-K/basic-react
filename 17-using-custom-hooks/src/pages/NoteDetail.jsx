import { Link } from 'react-router-dom';

function NoteDetail() {
  return (
    <main>
      <h1>노트 상세페이지</h1>

      <p>
        <Link to={{ pathname: '/' }}>홈페이지로 이동</Link>
      </p>
    </main>
  );
}

export default NoteDetail;
