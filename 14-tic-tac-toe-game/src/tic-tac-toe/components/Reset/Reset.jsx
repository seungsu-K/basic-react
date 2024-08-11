import './Reset.css';

import { bool, func } from 'prop-types';

Reset.propTypes = {
  isGameOver: bool,
  onReset: func,
};

function Reset({ isGameOver, onReset }) {
  return (
    <button
      type="button"
      className="Reset"
      disabled={!isGameOver}
      onClick={onReset}
    >
      다시하기
    </button>
  );
}

export default Reset;
