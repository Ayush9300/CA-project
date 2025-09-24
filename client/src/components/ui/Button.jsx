import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        bg-[#001C35]
        hover:bg-blue-900 
        hover:backdrop-blur-sm 
        text-white 
        font-semibold 
        px-6 py-4 
        rounded-lg 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
