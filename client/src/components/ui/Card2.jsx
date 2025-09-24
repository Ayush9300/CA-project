import React from 'react';

const PricingCard = ({
  title,
  price,
  gst = "18%",
  buttonText,
  features = [],
  icon,
  className = ""
}) => {
  return (
    <div className={`bg-white border rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex justify-center mb-4">
        {icon && <div className="w-12 h-12">{icon}</div>}
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-2xl font-extrabold text-center mb-1">₹{price}</p>
      <p className="text-sm text-center text-gray-500 mb-4">+ {gst} GST</p>
      <div className="text-center mb-4">
        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          {buttonText}
        </button>
      </div>
      <ul className="space-y-2 text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
