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
