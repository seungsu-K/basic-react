import { forwardRef } from 'react';

/* eslint-disable react/prop-types */

function CircleLine({ strokeColor = '#4729B4', strokeWidth = 6 }, ref) {
  return (
    <svg ref={ref} width={210} height={41} viewBox="0 0 210 41" fill="none">
      <circle
        cx="20.5"
        cy="20.5"
        r="17.5"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        pathLength={1}
      />
      <line
        x1={35}
        y1={20}
        x2={173}
        y2={20}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        pathLength={1}
      />
      <circle
        cx="189.5"
        cy="20.5"
        r="17.5"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        pathLength={1}
      />
    </svg>
  );
}

export default forwardRef(CircleLine);
