import { useId } from 'react';
import { string, bool, func } from 'prop-types';
import './UserSearchBox.css';
import { throttle } from '@/utils';

UserSearchBox.propTypes = {
  searchTerm: string.isRequired,
  isInstantSearch: bool,
  onSearch: func,
  onReset: func,
};

function UserSearchBox({
  searchTerm,
  onSearch,
  onReset,
  isInstantSearch = false,
}) {
  const id = useId();

  const handleSearch = (e) => {
    // 브라우저의 기본 작동 방지
    // <form> 요소의 action에 설정된 주소로 폼 데이터 전송 시도
    e.preventDefault();

    // Side Effects
    // DOM 접근, 속성 값 읽기
    const input = document.getElementById(id);
    const button = input.closest('form').querySelector('[type="submit"]');
    const value = input.value.trim();

    if (value.length > 0) {
      // 사용자 찾기 기능 실행
      onSearch?.(value);
      // 실행 이후, 검색 필드 초기화
      input.value = '';
      // 검색 기능은 찾기 버튼을 눌렀을 때
      // 실행되므로 버튼 요소에 초점 이동
      button.focus();
    } else {
      alert('검색어를 입력해주세요.');
      input.value = '';
      input.focus();
    }
  };

  const handleReset = () => {
    onReset?.();

    const input = document.getElementById(id);
    input.focus();
  };

  // const handleChange = (e) => {
  //   onSearch?.(e.target.value);
  // };

  let handleChange = null;

  if (isInstantSearch) {
    // handleChange = debounce((e) => onSearch?.(e.target.value));
    handleChange = throttle((e) => onSearch?.(e.target.value));
  }

  return (
    <form
      className="UserSearchBox"
      onSubmit={handleSearch}
      onReset={handleReset}
    >
      <div className="control">
        <label htmlFor={id}>사용자 검색</label>
        <input
          id={id}
          type="search"
          placeholder="사용자 정보 입력"
          defaultValue={searchTerm}
          // value={searchTerm}
          onChange={handleChange}
          // readOnly
        />
      </div>
      {/* 조건부 표시가 더 나은 선택 */}
      <button hidden={isInstantSearch} type="submit">
        찾기
      </button>
      <button hidden={isInstantSearch} type="reset">
        목록 초기화
      </button>

      {/* 조건부 렌더링은 토글이 잦을 경우, 렌더링 비용 발생 */}
      {/* {isInstantSearch ? null : (
        <>
          <button type="submit">찾기</button>
          <button type="reset">목록 초기화</button>
        </>
      )} */}
    </form>
  );
}

export default UserSearchBox;
