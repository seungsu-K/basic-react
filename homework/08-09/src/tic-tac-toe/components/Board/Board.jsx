import './Board.css';

import Squares from '../Squares/Squares';
import Status from '../Status/Status';
import Reset from '../Reset/Reset';
import { arrayOf, bool, func, number, oneOf, shape } from 'prop-types';
import { PLAYER_LIST } from '@/constant';

Board.propTypes = {
  currentPlayer: oneOf(PLAYER_LIST),
  winnerInfo: shape({
    winner: oneOf(PLAYER_LIST),
    condition: arrayOf(number),
  }),
  isDraw: bool,
  squares: arrayOf(oneOf(PLAYER_LIST)),
  isGameOver: bool,
  onPlay: func,
  onReset: func,
};

function Board({
  currentPlayer,
  winnerInfo,
  isDraw,
  squares,
  isGameOver,
  onPlay,
  onReset,
}) {
  return (
    <div className="Board">
      <Status
        currentPlayer={currentPlayer}
        winnerInfo={winnerInfo}
        isDraw={isDraw}
      />
      <Squares squares={squares} winnerInfo={winnerInfo} onPlay={onPlay} />
      <Reset isGameOver={isGameOver} onReset={onReset} />
    </div>
  );
}

export default Board;
