import './History.css';

import { arrayOf, func, number, oneOf } from 'prop-types';
import { PLAYER_LIST } from '@/constant';

History.propTypes = {
  gameHistory: arrayOf(arrayOf(oneOf(PLAYER_LIST))),
  gameIndex: number,
  onJumpTo: func,
};

function History({ gameHistory, gameIndex, onJumpTo }) {
  const handleClick = (index) => () => {
    onJumpTo(index);
  };

  return (
    <div className="History">
      <ol>
        {gameHistory.map((history, index) => {
          const buttonLabel = index === 0 ? '게임 시작' : `게임 # ${index}`;
          const isDisabled = gameIndex === index;

          return (
            <li key={index}>
              <button
                type="button"
                disabled={isDisabled}
                onClick={handleClick(index)}
              >
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default History;
