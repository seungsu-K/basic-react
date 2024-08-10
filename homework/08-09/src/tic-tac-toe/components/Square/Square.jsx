import './Square.css';

import { node, func } from 'prop-types';

Square.propTypes = {
  children: node,
  onClick: func,
};

function Square({ children, onClick }) {
  const isDisabled = !!children;

  return (
    <button className="Square" onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
