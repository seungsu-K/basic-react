import './Squares.css';

import Square from '../Square/Square';
import { arrayOf, oneOf, shape, number, func } from 'prop-types';
import { PLAYER_LIST, WINNERS_COLOR } from '@/constant';

Squares.propTypes = {
  squares: arrayOf(oneOf(PLAYER_LIST)),
  winnerInfo: shape({
    winner: oneOf(PLAYER_LIST),
    condition: arrayOf(number),
  }),
  onPlay: func,
};

function Squares({ squares, winnerInfo, onPlay }) {
  return (
    <div className="Squares">
      {squares.map((square, index) => {
        const winnerStyles = { backgroundColor: null };

        if (winnerInfo) {
          const [x, y, z] = winnerInfo.condition;

          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square key={index} style={winnerStyles} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
