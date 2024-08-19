import { Link } from 'react-router-dom';

function NewNote() {
  return (
    <main>
      <h1>새로운 노트</h1>
      <p>
        <Link to={{ pathname: '/' }}>홈페이지로 이동</Link>
      </p>
    </main>
  );
}

export default NewNote;
