import React from "react";
import { Link } from "react-router-dom";
import { RotateCcw, ChevronDown, ChevronRight } from "lucide-react";

// Mobile Dropdown Component
const MobileDropdown = ({ items = [], isOpen, onClose, onItemClick, title = "Menu" }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    if (onClose) onClose(); // Dropdown close
    if (onItemClick) onItemClick(); // Mobile menu close
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Content - Simple List */}
      <div className="px-4 py-3">
        {items.map((section, idx) => (
          <div key={idx} className="mb-6">
            {/* Section Title */}
            <h3 className="font-semibold text-sm text-blue-600 mb-3">
              {section.title}
            </h3>

            {/* Section Items - Simple List */}
            <div className="space-y-0">
              {section.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path || "#"}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 py-3 border-b border-gray-200 last:border-b-0"
                >
                  <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dropdown = ({ items = [], className = "", simpleView = false }) => {
  const gridColsClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    }[items.length] || "grid-cols-1";

  if (simpleView) {
    // Simple plain list view (for mobile or Company Setup)
    return (
      <div
        className={`absolute top-full mt-4 -translate-x-1/2 max-w-screen-xl bg-white border border-gray-100 z-50 rounded-xl overflow-hidden ${className}`}
      >
        <div className="p-4 space-y-1">
          {items.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold mb-2 text-sm text-[#0658A3]">{section.title}</h3>
              <ul className="list-none ml-2">
                {section.items.map((item, index) => (
                  <li key={index} className="py-1 border-b border-gray-200 last:border-none">
                    <Link
                      to={item.path || "#"}
                      className="block text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Original card + icon version for desktop
  return (
    <div
      className={`absolute top-full mt-4 -translate-x-1/2 max-w-screen-xl bg-white shadow-2xl border border-gray-100 z-50 rounded-xl overflow-hidden ${className}`}
    >
      <div className={`grid h-full ${gridColsClass}`}>
        {items.map((section, sectionIndex) => {
          const isLast = sectionIndex === items.length - 1;
          return (
            <div
              key={sectionIndex}
              className={`p-8 h-full ${
                sectionIndex < items.length - 1
                  ? "border-r border-gray-100"
                  : ""
              }`}
              style={
                isLast ? { backgroundColor: "#EBF4FF", color: "#001C35" } : {}
              }
            >
              <h3
                className={`font-bold mb-6 text-sm uppercase tracking-wider ${
                  isLast ? "text-[#0658A3]" : "text-[#0658A3]"
                }`}
              >
                {section.title}
              </h3>

              <div className="space-y-1">
                {section.items.map((item, idx) => (
                  <Link
                    to={item.path || "#"}
                    key={idx}
                    className={`group block cursor-pointer hover:bg-blue-50 border border-transparent hover:border-black rounded-lg px-3 py-2 transition-all duration-200`}
                  >
                    <div className="flex items-start gap-8">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 mt-1 ${
                          isLast
                            ? "bg-blue-100 group-hover:bg-blue-200"
                            : "bg-blue-100 group-hover:bg-blue-200"
                        }`}
                      >
                        <RotateCcw
                          className={`w-5 h-5 ${
                            isLast ? "text-blue-600" : "text-blue-600"
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4
                            className={`font-semibold transition-colors ${
                              isLast
                                ? ""
                                : "text-gray-800 group-hover:text-blue-600"
                            }`}
                          >
                            {item.name}
                          </h4>
                          {item.isNew && (
                            <span
                              className={`px-1 py-1 text-[8px] rounded-full font-medium ${
                                isLast
                                  ? "bg-green-300 text-green-900"
                                  : "bg-green-200 text-green-900"
                              }`}
                            >
                              NEW
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-xs leading-normal ${
                            isLast ? "" : "text-gray-600"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { MobileDropdown };
export default Dropdown;