import Avatar from '@/components/Avatar';
import { avatarsData } from '@/data/avatars';
import { useState } from 'react';

function AvatarListPage() {
  const [list, setList] = useState(avatarsData);

  const handleDeleteItem = (deleteId) => () => {
    console.log(deleteId);

    const nextList = list.filter((item) => item.id !== deleteId);

    setList(nextList);
  };

  if (list.length === 0) {
    return <p>화면에 표시할 아바타가 없습니다.</p>;
  }

  return (
    <ul className="AvatarList">
      {list.map((item) => (
        <li key={item.id}>
          <Avatar name={item.name} photo={item.photo} status={item.status} />
          <button
            type="button"
            onClick={handleDeleteItem(item.id)}
            style={{ marginBlockStart: 8 }}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
