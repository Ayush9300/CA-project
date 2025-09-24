import React from 'react';

const TickSquareIcon = ({ width = 17, height = 17, className = ' text-[#8210FB]' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="17" height="17" rx="6" fill="currentColor" /> {/* background will now be dynamic */}
    <path
      d="M12.6004 6.30005L7.65039 11.25L5.40039 9.00005"
      stroke="#fff" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TickSquareIcon;