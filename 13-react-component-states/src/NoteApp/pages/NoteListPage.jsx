import NoteList from '../components/NoteList';
import './NoteListPage.css';
import { func } from 'prop-types';
import { ROUTES } from '../constants/routes';
import { NoteListType } from '../types/note';

NoteListPage.propTypes = {
  list: NoteListType.isRequired,
  onChangeRoute: func.isRequired,
};

function NoteListPage({ list, onChangeRoute }) {
  // useState 훅의 초기화 함수
  // useState(getNoteList())로 초기값을 설정하면 계속해서 note리스트를 가져옴
  // 아래 코드는 최초 한번만 랜더링하고 캐시에 저장함

  // 상태 끌어올리기
  // const [list] = useState(() => getNoteList());

  const handleClick = (e) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create);
  };

  return (
    <div className="NoteListPage">
      <NoteList list={list} onChangeRoute={onChangeRoute} />
      <a onClick={handleClick} className="createNoteLink" href="#create-note">
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
