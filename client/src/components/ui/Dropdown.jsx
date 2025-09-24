import React from "react";
import { Link } from "react-router-dom"; // अगर आप react-router-dom का उपयोग कर रहे हैं
import { RotateCcw } from "lucide-react";

const Dropdown = ({ items = [], className = "" }) => {
  const gridColsClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    }[items.length] || "grid-cols-1";

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
                    to={item.path || "#"} // अगर path नहीं है तो "#" पर जाएगा
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

export default Dropdown;
