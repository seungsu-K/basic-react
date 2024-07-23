// --------------------------------------------------------------------------
// rest parameters

function _sum() {
  //arguments는 유사 배열이기 때문에 데이터 타입을 변환 시켜줌
  const numbers = Array.from(arguments);
  return numbers.reduce((result, number) => result + number, 0);
}

// 🔶 나머지 매개변수를 사용해 sum 함수 코드 로직을 다시 작성합니다.
// 참고: https://mzl.la/43Ro9yp

// 화살표 함수는 arguments를 바인딩하지 않아서 나머지 매개변수를 사용하며
// 배열이다
const sum = (...restParams) =>
  restParams.reduce((total, number) => total + number);

let result1_1 = _sum(2, 3, 9, 12, 105);
let result1_2 = sum(2, 3, 9, 12, 105);
console.log(Object.is(result1_1, result1_2));

let result2_1 = _sum(90, 418, -7);
let result2_2 = sum(90, 418, -7);
console.log(Object.is(result2_1, result2_2));
