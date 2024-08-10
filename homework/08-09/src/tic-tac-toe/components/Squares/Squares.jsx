import './Squares.css';

import Square from '../Square/Square';
import { arrayOf, oneOf, func } from 'prop-types';
import { PLAYER_LIST } from '@/constant';

Squares.propTypes = {
  squares: arrayOf(oneOf(PLAYER_LIST)),
  onPlay: func,
};

function Squares({ squares, onPlay }) {
  return (
    <div className="Squares">
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
