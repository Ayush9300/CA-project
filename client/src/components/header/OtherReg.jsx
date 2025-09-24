import React, { useState, useEffect, useRef } from "react"; 
import { FiChevronDown } from "react-icons/fi";  
import Dropdown from "../ui/Dropdown";  

const Compliance = () => {   
  const [open, setOpen] = useState(false);    
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null); // Timer reference

  const menuData = [     
    {       
      title: "LICENSES",       
      items: [         
         { name: "IEC Registration", description: "Get your Import Export Code (IEC) and go global.", path: "/Licenses/IEC" },
        { name: "ESIC", description: "Register your company under Employee State Insurance (ESIC).", path: "/Licenses/ESIC" },
        { name: "EPF", description: "Register for Employee Provident Fund (EPF) for your workforce.", path: "/Licenses/EPF" },
        { name: "FSSAI Registration", description: "Obtain FSSAI license for your food business legally.", isNew: true, path: "/Licenses/FSSAI" },
        { name: "LEI", description: "Get your Legal Entity Identifier (LEI) for global compliance.", path: "/Licenses/LEI" },
      ],
    },
    {
      title: "DIGITAL TOOLS",
      title: "DIGITAL TOOLS",       
      items: [         
        { name: "Digital Signature Certificate", description: "Get your Digital Signature Certificate (DSC) issued quickly.", isNew: true, path: "/DigitalTools/DSC" },
        { name: "PAN Application", description: "Apply for your Permanent Account Number (PAN) easily.", path: "/DigitalTools/PAN" },
        { name: "TAN Application", description: "Register your Tax Deduction Account Number (TAN) smoothly.", path: "/DigitalTools/TAN" },
      ],
    },
    {       
      title: "CLOSURE SERVICES",       
      items: [         
        { name: "Strike Off Company", description: "Close your inactive company with official strike-off.", path: "/Closure/Company" },
        { name: "Strike Off LLP", description: "Easily strike off your non-operational LLP.", path: "/Closure/LLP" },
        { name: "Dissolution of Firms", description: "Dissolve your partnership firm legally and formally.", path: "/Closure/Firm" },
        { name: "Strike Off OPC", description: "Close your One Person Company (OPC) effortlessly.", path: "/Closure/OPC" },
      ],        
    },   
  ];    

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clean up timer on unmount
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel closing timer
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200); // Close after 200ms
  };

  return (     
    <div       
      className="relative inline-block"       
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}       
    >       
      {/* Button */}       
      <button         
        className="items-center px-1 py-2 hover:text-blue-600 font-medium transition-colors duration-200 relative flex"       
      >         
        <span>Other Reg.</span>         
        <FiChevronDown className={`ml-1 mt-1 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />       
      </button>        

      {/* Dropdown */}       
      {open && (         
        <div className="absolute top-full mt-1">
          <Dropdown items={menuData} className="w-[1200px] h-[520px]"/> 
        </div>    
      )}     
    </div>   
  ); 
};  

export default Compliance;
