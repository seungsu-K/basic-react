import './Board.css';

import Squares from '../Squares/Squares';
import Status from '../Status/Status';
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
  onPlay: func,
};

function Board({ currentPlayer, winnerInfo, isDraw, squares, onPlay }) {
  return (
    <div className="Board">
      <Status
        currentPlayer={currentPlayer}
        winnerInfo={winnerInfo}
        isDraw={isDraw}
      />
      <Squares squares={squares} winnerInfo={winnerInfo} onPlay={onPlay} />
    </div>
  );
}

export default Board;
