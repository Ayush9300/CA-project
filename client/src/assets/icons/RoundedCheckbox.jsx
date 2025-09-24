import React from 'react';

const RoundedCheckBox = ({
  width = 17,
  height = 17,
  className = ' ',
  fillColor = 'currentColor',
  strokeColor = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="0.5"
      y="0.5"
      width="17"
      height="17"
      rx="5.5"
      fill={fillColor}
      stroke={strokeColor}
    />
  </svg>
);

export default RoundedCheckBox;
