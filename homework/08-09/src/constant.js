// 플레이어
export const PLAYER = {
  ONE: '🐧',
  TWO: '🐸',
};

// 게임 플레이어
export const PLAYER_LIST = Object.values(PLAYER);

// 플레이어 인원
export const PLAYER_COUNT = Object.keys(PLAYER).length;

// Squares 초기 상태
export const INITIAL_SQUARES = Array(9).fill(null);

// 게임의 승리 조건
const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//  게임 종료 함수
export const checkWinner = (squares) => {
  let winnerInfo = null;

  // 승리 조건을 순환하면서 condition x, y, z가 같은 PLAYER인지 확인
  for (const [x, y, z] of WINNER_CONDITIONS) {
    const condition1 = squares[x];

    if (condition1 && condition1 === squares[y] && condition1 === squares[z]) {
      winnerInfo = {
        winner: condition1,
        condition: [x, y, z],
      };
      break;
    }
  }

  return winnerInfo;
};

// 승리 발판 색
export const WINNERS_COLOR = 'dodgerblue';
