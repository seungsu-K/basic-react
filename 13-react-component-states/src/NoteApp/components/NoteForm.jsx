import { useId, useState } from 'react';
import { func, number, oneOf } from 'prop-types';
import { getUser, getUserList } from '../api/getUser';
import './NoteForm.css';
import { NoteType } from '../types/note';
import {
  convertHTMLToText,
  convertTextToHTMLString,
} from '@/utils/convertTextToHTMLString';

const userList = getUserList();

NoteForm.propTypes = {
  newNoteId: number,
  onCreate: func,
  onEdit: func,
  onDelete: func,
  onBackToList: func,
  mode: oneOf(['create', 'edit']),
  note: NoteType, // optional
};

function NoteForm({
  newNoteId,
  onCreate,
  onEdit,
  onDelete,
  onBackToList,
  mode = 'create',
  note,
}) {
  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const [formData, setFormData] = useState(() => {
    // 노트 생성 모드
    if (mode === 'create') {
      return {
        title: '',
        content: '',
        userId: 0,
      };
    }

    // 노트 데이터가 존재하고 편집 모드
    if (mode === 'edit' && note) {
      return {
        title: note.title,
        content: convertHTMLToText(note.content),
        userId: note.userId,
      };
    } else {
      throw new Error('노트(note) 데이터가 존재하지 않습니다.');
    }
  });

  // [상태 업데이트]
  // 제목, 내용, 작성자 정보를 하나의 handler로 업데이트

  // 데이터 관리 방식
  // 1. 리액트 (성능 이슈 주의)
  // 2. 네이티브(웹)으로 관리
  const handleUpdateFormData = (e) => {
    const { name, value } = e.target;

    const nextFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(nextFormData);
  };

  // 노트 생성
  const handleCreate = (e) => {
    e.preventDefault();

    // 유효성 검사(생략)
    const { title, content, userId } = formData;

    const newUserId = Number(userId);

    const newNote = {
      id: newNoteId,
      title: title.trim(),
      content: convertTextToHTMLString(content),
      userId: newUserId,
      expand: {
        user: getUser(newUserId),
      },
    };

    onCreate?.(newNote);
    onBackToList();
  };

  // 노트 수정
  const handleEdit = (e) => {
    e.preventDefault();

    const editNote = {
      ...note,
      ...formData,
    };

    onEdit?.(editNote);
    onBackToList?.();
  };

  // 노트 초기화
  const handleReset = (e) => {
    e.preventDefault();
  };

  // 노트 삭제
  const handleDelete = () => {
    onDelete?.(note.id);
    onBackToList?.();
  };

  // "생성" 또는 "수정" 모드 확인
  const isCreateMode = mode.includes('create');
  const submitButtonLabel = isCreateMode ? '추가' : '수정';
  const handleSubmit = isCreateMode ? handleCreate : handleEdit;

  return (
    <form className="NoteForm" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          type="text"
          id={titleId}
          name="title"
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          value={formData.content}
          onChange={handleUpdateFormData}
        />
      </div>

      {isCreateMode && (
        <div className="formControl">
          <label htmlFor={userId}>작성자</label>
          <select
            id={userId}
            name="userId"
            value={formData.userId}
            onChange={handleUpdateFormData}
          >
            <option>작성자 선택</option>
            {userList.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="buttonGroup">
        <button type="submit">{submitButtonLabel}</button>

        {isCreateMode ? (
          <button type="reset">초기화</button>
        ) : (
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
