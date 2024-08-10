import './Status.css';

import { PLAYER_LIST } from '@/constant';
import { oneOf } from 'prop-types';

Status.propTypes = {
  currentPlayer: oneOf(PLAYER_LIST),
};

function Status({ currentPlayer }) {
  {
    /* <h2>승자! : 🟨</h2> */
  }
  {
    /* <h2>비겼어요... 😳</h2> */
  }
  return <h2 className="Status">플레이어 : {currentPlayer}</h2>;
}

export default Status;
