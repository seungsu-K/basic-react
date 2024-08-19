import { Link } from 'react-router-dom';

function NoteList() {
  return (
    <main>
      <h1>노트 목록</h1>

      <ul>
        <li>
          <Link to={{ pathname: '/' }}>홈페이지로 이동</Link>
        </li>
        <li>
          <Link to={{ pathname: '/notes/new' }}>노트 작성</Link>
        </li>
        <li>
          <Link to={{ pathname: '/notes/detail' }}>노트 1</Link>
        </li>
        <li>
          <Link to={{ pathname: '/notes/detail' }}>노트 2</Link>
        </li>
      </ul>
    </main>
  );
}

export default NoteList;
