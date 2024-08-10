import './Board.css';

import Squares from '../Squares/Squares';
import Status from '../Status/Status';
import { useState } from 'react';
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/constant';

function Board() {
  // [상태]
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  // [상태 업데이트]
  const handlePlay = (index) => () => {
    // 게임이 종료되었다면 더 이상 상태 업데이트를 하지 못하도록 조건 추가
    if (winnerInfo) {
      alert('GAME OVER');
      return;
    }
    // Square를 클릭 했을 때 해당 인덱스와 동일한 인덱스에 currnetPlayer를 넣고 상태 업데이트
    const nextSquares = squares.map((square, squareIndex) => {
      return index === squareIndex ? currentPlayer : square;
    });

    setSquares(nextSquares);
  };

  // [파생된 상태]
  // 게임 순서 : Square 컴포넌트 중 null이 아닌 값들을 배열로 모아 length 반환
  const gameIndex = squares.filter(Boolean).length;

  // 현재 플레이어 : gameIndex를 플레이어 인원으로 나누어 0이면 플레이어 1 차례
  const currentPlayer =
    gameIndex % PLAYER_COUNT === 0 ? PLAYER.ONE : PLAYER.TWO;

  // 게임 종료
  // 1. 승리
  const winnerInfo = checkWinner(squares);

  // 2. 무승부
  const isDraw = !winnerInfo && squares.every(Boolean);

  return (
    <div className="Board">
      <Status
        currentPlayer={currentPlayer}
        winnerInfo={winnerInfo}
        isDraw={isDraw}
      />
      <Squares squares={squares} winnerInfo={winnerInfo} onPlay={handlePlay} />
    </div>
  );
}

export default Board;
