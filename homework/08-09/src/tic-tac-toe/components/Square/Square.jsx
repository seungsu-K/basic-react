import './Square.css';

import { node, func } from 'prop-types';

Square.propTypes = {
  children: node,
  onPlay: func,
};

function Square({ children, onPlay }) {
  const isDisabled = !!children;

  return (
    <button className="Square" onClick={onPlay} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
