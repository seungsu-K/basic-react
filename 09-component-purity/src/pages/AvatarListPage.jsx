// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// - [x] 데이터 분리
// - [x] 리스트 렌더링
// - [x] 컴포넌트 속성 검사
// - [ ] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------
import { arrayOf } from 'prop-types';
import Avatar from '@/components/Avatar';
import { UserType } from '@/@types/globals.d';

const anotherData = {
  count: 10,
};

function AvatarListPage(props) {
  // props는 읽기 전용 데이터이므로 전달 받은 하위 컴포넌트에서 수정하면 안된다
  // 로컬에서 복제한 뒤 데이터를 가공한다
  const myList = [...props.list];

  myList.pop();

  // 리액트 렌더링 프로세스와 관련 없는 코드는 들어오면 안됨
  // DOM 요소에 대한 접근
  // 타이머 API
  // let renderCount = 0;
  // setInterval(() => {
  //   console.log(renderCount);
  //   document.getElementById('react-app').dataset.render = ++renderCount;
  // }, 1000);

  return (
    <ul className="AvatarList">
      {myList.map((user) => (
        <li key={user.id}>
          <Avatar user={user} /> {anotherData.count++}
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;

AvatarListPage.propTypes = {
  list: arrayOf(UserType).isRequired,
};
