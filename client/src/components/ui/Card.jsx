import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, description, className = "" }) => {
  return (
    <div
      className={`
        bg-white p-8 rounded-xl shadow-lg text-center
        hover:shadow-2xl transition-shadow duration-300 hover:shadow-blue-100
        ${className}
      `}
    >
      <h3 className="text-2xl font-bold text-blue-600 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
