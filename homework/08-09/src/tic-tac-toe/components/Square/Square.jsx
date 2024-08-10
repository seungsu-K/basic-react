import './Square.css';

import { node } from 'prop-types';

Square.propTypes = {
  children: node,
};

function Square({ children }) {
  const isDisabled = !!children;

  return (
    <button className="Square" disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
