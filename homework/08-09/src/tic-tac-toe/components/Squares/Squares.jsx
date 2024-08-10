import './Squares.css';

import Square from '../Square/Square';
import { INITIAL_SQUARES } from '@/constant';
import { useState } from 'react';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  return (
    <div className="Squares">
      {squares.map((square, index) => {
        return <Square key={index}>{square}</Square>;
      })}
    </div>
  );
}

export default Squares;
