import './Status.css';

import { PLAYER_LIST } from '@/constant';
import { oneOf, shape, arrayOf, number, bool } from 'prop-types';

Status.propTypes = {
  currentPlayer: oneOf(PLAYER_LIST),
  winnerInfo: shape({
    winner: oneOf(PLAYER_LIST),
    condition: arrayOf(number),
  }),
  isDraw: bool,
};

function Status({ currentPlayer, winnerInfo, isDraw }) {
  if (winnerInfo) {
    return <h2 className="Status">승리 : {winnerInfo.winner}</h2>;
  }

  if (isDraw) {
    return <h2 className="Status">무승부!</h2>;
  }

  return <h2 className="Status">플레이어 : {currentPlayer}</h2>;
}

export default Status;
