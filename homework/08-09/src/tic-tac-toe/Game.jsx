import './Game.css';
import './styles/main.css';

import Board from './components/Board/Board';
import History from './components/History/History';
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/constant';
import { useState } from 'react';

function Game() {
  // [상태]
  // 게임판 상태 히스토리
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);

  // 게임 히스토리 순서
  const [gameIndex, setGameIndex] = useState(0);

  // [상태 업데이트]
  // 게임 진행
  const handlePlay = (index) => () => {
    // 게임이 종료되었다면 더 이상 상태 업데이트를 하지 못하도록 조건 추가
    if (winnerInfo) {
      alert('GAME OVER');
      return;
    }

    // 게임이 진행될 때마다 게임 인덱스를 저장
    const nextGameIndex = gameIndex + 1;
    setGameIndex(nextGameIndex);

    // Square를 클릭 했을 때 해당 인덱스와 동일한 인덱스에 currnetPlayer를 넣고 상태 업데이트
    const nextSquares = currentSquares.map((square, squareIndex) => {
      return index === squareIndex ? currentPlayer : square;
    });

    // 게임이 진행될 때마다 변하는 Squares를 배열로 저장해 상태 업데이트
    const nextGameHistory = [...gameHistory, nextSquares];
    setGameHistory(nextGameHistory);
  };

  // 해당 GameHistory 인덱스로 돌아가는 기능
  const handleTimeTravel = (index) => {
    setGameIndex(index);
  };

  // [파생된 상태]
  // 현재 게임판 : 게임 히스토리 배열 중 현재 인덱스
  const currentSquares = gameHistory[gameIndex];

  // 게임 순서 : Square 컴포넌트 중 null이 아닌 값들을 배열로 모아 length 반환
  const gameTurn = currentSquares.filter(Boolean).length;

  // 현재 플레이어 : gameIndex를 플레이어 인원으로 나누어 0이면 플레이어 1 차례
  const currentPlayer = gameTurn % PLAYER_COUNT === 0 ? PLAYER.ONE : PLAYER.TWO;

  // 게임 종료
  // 1. 승리
  const winnerInfo = checkWinner(currentSquares);

  // 2. 무승부
  const isDraw = !winnerInfo && currentSquares.every(Boolean);

  return (
    <div className="Game">
      <Board
        currentPlayer={currentPlayer}
        winnerInfo={winnerInfo}
        isDraw={isDraw}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <History
        gameHistory={gameHistory}
        gameIndex={gameIndex}
        onTimeTravel={handleTimeTravel}
      />
    </div>
  );
}

export default Game;
