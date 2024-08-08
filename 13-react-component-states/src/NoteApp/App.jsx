// --------------------------------------------------------------------------
// ✅ 노트 앱 (with React)
// --------------------------------------------------------------------------
// - [ ] 노트 앱, 세부 구성 해설
// - [ ] 노트 생성 (Create)
// - [ ] 노트 리스트 또는 아이템 읽기 (Read)
// - [ ] 노트 수정 (Update)
// - [ ] 노트 삭제 (Delete)
// --------------------------------------------------------------------------

import { useState } from 'react';
import { ROUTES } from './constants/routes';
import NoteListPage from './pages/NoteListPage';
import NoteCreatePage from './pages/NoteCreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NoteEditPage from './pages/NoteEditPage';
import { getNoteList } from './api/getNote';

function NoteApp() {
  const [routeInfo, setRouteInfo] = useState({
    // 화면에 출력할 페이지 경로
    route: ROUTES.list,
    // 선택된 노트의 ID 식별자
    noteId: null,
  });

  const [list, setList] = useState(() => getNoteList());

  const handleChangeRoute = (nextRoute, pickNoteId) => {
    // useState 훅에서 업데이트 함수는 상태를 합성하지 않고 덮어쓴다.
    // noteId가 없어짐
    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
      noteId: pickNoteId ? pickNoteId : routeInfo.noteId,
    });
  };

  // 노트 생성 기능
  const handleCreateNote = (newNoteItem) => {
    setList([...list, newNoteItem]);
  };

  // 노트 수정 기능
  const handleEditNote = (editNote) => {
    const nextList = list.map((item) =>
      item.id === editNote.id ? editNote : item
    );

    setList(nextList);
  };

  // 노트 삭제 기능
  const handleDeleteNote = (deleteNoteId) => {
    const nextList = list.filter((item) => item.id !== deleteNoteId);
    setList(nextList);
  };

  const newNoteId = list.length + 1;

  // 페이지 경로에 따라 페이지 마크업
  switch (routeInfo.route) {
    default:
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />;
    case ROUTES.create:
      return (
        <NoteCreatePage
          newNoteId={newNoteId}
          onCreate={handleCreateNote}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.detail:
      return (
        <NoteDetailPage
          noteId={routeInfo.noteId}
          onChangeRoute={handleChangeRoute}
        />
      );
    case ROUTES.edit:
      return (
        <NoteEditPage
          noteId={routeInfo.noteId}
          onEdit={handleEditNote}
          onChangeRoute={handleChangeRoute}
          onDelete={handleDeleteNote}
        />
      );
  }
}

export default NoteApp;
