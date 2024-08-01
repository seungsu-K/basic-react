import { StatusMessagesType } from '../@types/types.d';
import { randomNumber } from '../utils';

function DataBinding({ statusMessages }) {
  const statusMessage =
    statusMessages[randomNumber(0, statusMessages.length - 1)];

  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
          {statusMessage}
        </span>
      </dd>
    </>
  );
}

export default DataBinding;

// 컴포넌트 속성 타입 검사
// Prop Types Validation

// Component.propTypes

DataBinding.propTypes = {
  // 필수 속성 설정 시, isRequired 추가

  // 특정 타입만 허용하는 배열 검사
  // Typed Array
  // [TS] string[] -> [props-types] arrayOf(string)
  // [TS] number[] -> [props-types] arrayOf(number)
  // [TS] boolean[] -> [props-types] arrayOf(bool)
  statusMessages: StatusMessagesType.isRequired,
};
