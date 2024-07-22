// --------------------------------------------------------------------------
// spread syntax
// - 전개 구문을 사용해 배열 병합 (합성, 복사해서 결합)
// - 전개 구문을 사용해 객체 병합 (합성, 복사해서 결합)
// --------------------------------------------------------------------------

function combineArray() {
  const numberList = [2, -2, 1];
  const countList = [101, 201, 301];

  // 두 배열을 하나로 병합하려면?
  const nList = numberList.concat(countList);
  console.log(nList);

  // 배열을 자르고 병합하려면?
  const combineList = countList
    .slice(0, 2)
    .concat(numberList)
    .concat(countList.slice(2));

  console.log(combineList);

  // 🔶 전개 구문을 사용해 spreadCombineList 배열 병합 코드를 작성하세요.
  // 참고: https://mzl.la/43TCLgA | https://mzl.la/3VTzEDh | https://mzl.la/3vC07ec
  const spreadCombineList = [
    ...countList.slice(0, 2),
    ...numberList,
    countList.at(-1),
  ];
  console.log(spreadCombineList);

  // 아래 결과 값이 true가 나와야 합니다.
  console.log(Object.is(combineList.length, spreadCombineList.length));
}

function combineObject() {
  // 개발자 작성한 기본 옵션
  const defaultOptions = {
    startIndex: 0,
    loop: false,
  };

  // 사용자가 설정한 커스텀 옵션
  const customOptions = {
    loop: true,
  };

  // 여러 object를 병합할 수 있음
  // 빈 객체 넣어줘야 원본을 훼손하지 않음
  const combineOptions = Object.assign({}, defaultOptions, customOptions);
  console.log(combineOptions);

  // 🔶 전개 구문을 사용해 spreadCombineOptions 객체 병합 코드를 작성하세요.
  // 참고: https://mzl.la/43TCLgA
  const spreadCombineOptions = {
    ...defaultOptions,
    ...customOptions,
  };
  console.log(spreadCombineOptions);

  // 아래 결과 값이 true가 나와야 합니다.
  console.log(Object.is(combineOptions.loop, spreadCombineOptions.loop));
}

function run() {
  combineArray();
  combineObject();
}

run();
