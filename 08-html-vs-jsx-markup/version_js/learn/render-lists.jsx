import { Fragment } from 'react';
// prop-types 라이브러리, 리액트 업데이트되면 지원 안될 예정
// import { arrayOf, exact, string } from 'prop-types';
import { ItemsType, ReactLibraryType } from '../@types/types.d';

function RenderLists({ items /* string[], Array<string> */, reactLibrary }) {
  // 함수 내부에 리스트 렌더링 코드를 작성해보세요.
  const renderList = ({ reverse = false } = {}) => {
    // const { reverse = false } = options;

    let listItems = items;

    if (reverse) {
      // reverse는 원본을 훼손시킴
      listItems = items.toReversed();
    }
    // 리스트 렌더링 결과 반환
    // - [ ] Array.prototype.forEach?
    // - [x] Array.prototype.map?
    return listItems.map((item) /* string */ => {
      // JSX(React Element) Markup
      return <li key={item}>{item}</li>;
    });
  };

  const reversedList = renderList().toReversed();

  // 실습
  const demoList = items.map((item, index) => {
    return <li key={index.toString()}>{item}</li>;
  });

  const renderDemoList = () => demoList;

  // 객체 순환
  // 1. for...in 문 순환 -> 문이기 때문에 함수 몸체에서 사용해야 함
  // 2. Object.entries() 메서드 -> 식이기 때문에 jsx안에서 사용 가능

  const renderDefinitionList = () => {
    return Object.entries(reactLibrary).map(([key, value]) => {
      return (
        <Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
      );
    });
  };

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>

      <dd>
        <p>상태 메시지(status messages) 배열을 리스트 렌더링합니다.</p>
        <ul className="renderList">{renderList?.()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 역순 정렬하여 렌더링합니다.</p>
        {/* <ul className="renderList">{renderList?.({ reverse: true })}</ul> */}
        <ul className="renderList">{reversedList}</ul>
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        <dl className="reactLibrary">
          {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
        </dl>
      </dd>
      <dd>
        <p>실습</p>
        {/* 직접 포함 */}
        <ul>
          {items.map((item, index) => {
            return <li key={index.toString()}>{item}</li>;
          })}
        </ul>

        {/* 지역 변수 참조 */}
        <ul>{demoList}</ul>

        {/* 함수 실행 결과물 활용 */}
        <ul>{renderDemoList()}</ul>
      </dd>
      <dd>
        <p>reactLibrary 객체의 키 값을 렌더링</p>
        <dl className="reactLibrary">{renderDefinitionList()}</dl>
      </dd>
    </>
  );
}

export default RenderLists;

// 타입 검사
RenderLists.propTypes = {
  items: ItemsType.isRequired,

  reactLibrary: ReactLibraryType.isRequired,
};
