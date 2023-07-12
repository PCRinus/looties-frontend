import React from "react";

interface ToggleProps {
  onToggle: () => void;
  isEnabled: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ onToggle, isEnabled }) => {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="relative mr-5 inline-flex cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" checked={isEnabled} readOnly />
          <div
            onClick={onToggle}
            className={`peer h-4 w-[38px] rounded-full bg-custom_gray_1 after:absolute  after:left-[2px] after:top-[2px] after:h-3 after:w-3 after:rounded-full after:border after:border-[#1A1D20] after:transition-all after:content-[''] peer-checked:bg-custom_red_1 peer-checked:after:translate-x-[22px] peer-checked:after:border-white peer-focus:ring-green-300 ${
              isEnabled ? "after:bg-white" : "after:border-[#1A1D20] after:bg-[#1A1D20] "
            }`}
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
