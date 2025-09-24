import React from 'react';
import TickSquareIcon from "../../assets/icons/CheckColor";
import RoundedCheckBox from '../../assets/icons/RoundedCheckbox';

function CheckboxContainer({
  checked,
  onChange,
  label,
  className = '',
  boxClass = '',
  disabled = false,
  checkBoxClass='',
  unCheckBox =''
}) {
  return (
    <div
      className={`flex items-center cursor-pointer select-none ${className}`}
      onClick={() => !disabled && onChange(!checked)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <div className="flex gap-3 items-center">
        {/* Hide native checkbox for accessibility */}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-px h-px opacity-0 absolute pointer-events-none"
          onClick={(e) => e.stopPropagation()}
          disabled={disabled}
          tabIndex={-1}
        />

        {/* Show custom icons */}
        {checked ? (
          <TickSquareIcon
            className={` h-6 w-6   text-[#8210FB]  ${checkBoxClass}`}
          />
        ) : (
         <RoundedCheckBox
                     className={` h-6 w-6 dark:border text-[#FFFFFF] border border-[#CACACA] rounded-lg dark:rounded-md dark:border-[#B5B5B5] dark:text-[#333333]  ${unCheckBox}`}
                   />
        )}

        {/* {label && <span className="select-none">{label}</span>} */}
      </div>
    </div>
  );
}

export default CheckboxContainer;
