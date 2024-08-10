import './Squares.css';

import Square from '../Square/Square';
import { PLAYER } from '@/constant';

function Squares() {
  return (
    <div className="Squares">
      <Square>{PLAYER.ONE}</Square>
      <Square>{PLAYER.TWO}</Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
  );
}

export default Squares;
