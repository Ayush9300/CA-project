import React, { useState, useEffect, useRef } from "react"; 
import { FiChevronDown } from "react-icons/fi";  
import Dropdown, { MobileDropdown } from "../ui/Dropdown";  

const OtherReg = () => {   
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

   const handleItemClick = () => {
    setOpen(false);
    if (onItemClick) onItemClick();
  };


  return (     
    <div       
      className="relative inline-block"       
      ref={dropdownRef}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}       
    >       
      <button         
        className="items-center px-1 py-2 hover:text-blue-600 font-medium transition-colors duration-200 relative flex"
        onClick={() => setOpen((prev) => !prev)}
      >         
        <span>Other Reg.</span>         
        <FiChevronDown className={`ml-1 mt-1 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />       
      </button>

      {isMobile && (
        <MobileDropdown
          items={menuData}
          isOpen={open}
          onClose={() => setOpen(false)}
          onItemClick={handleItemClick}
          title="Other Reg."
        />
      )}

      {!isMobile && open && (         
        <div className="absolute top-full mt-3">
          <Dropdown items={menuData} className="w-[1200px] h-[520px]"/> 
        </div>    
      )}     
    </div>   
  ); 
};  

export default OtherReg;