import './Squares.css';

import Square from '../Square/Square';
import { INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/constant';
import { useState } from 'react';

function Squares() {
  // [상태]
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  // [상태 업데이트]
  const handlePlay = (index) => () => {
    // Square를 클릭 했을 때 해당 인덱스와 동일한 인덱스에 currnetPlayer를 넣기
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

  return (
    <div className="Squares">
      {squares.map((square, index) => {
        return (
          <Square key={index} onClick={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
