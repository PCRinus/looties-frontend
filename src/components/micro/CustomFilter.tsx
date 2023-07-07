import RedArrowDown from "../../assets/RedArrowDown.svg";
import React, { useState, useEffect, useRef } from "react";

interface Props {
  filterName: string;
  options: string[];
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const CustomFilter: React.FC<Props> = ({ filterName, options, handleFilterChange, value }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="relative inline-block w-full cursor-pointer">
        <div
          ref={buttonRef}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#2C3034] px-4 py-2"
          onClick={toggleDropdown}
        >
          <span className="whitespace-nowrap font-semibold text-custom_gray_2">{filterName}:</span>
          <span className="whitespace-nowrap font-semibold text-[#F03033]">{selectedOption}</span>
          <img
            src={RedArrowDown}
            alt="provably-svg-icon"
            className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 transform" : ""}`}
          />
        </div>
        <ul
          ref={dropdownRef}
          className={`absolute left-0 top-full z-[100] mt-1 w-full transform overflow-hidden rounded-xl border border-[#2C3034] bg-[#2C3034] transition-opacity duration-300 ease-in-out ${
            isDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`h-12 px-4 py-2 ${
                selectedOption === option ? "text-[#F03033]" : "text-[#848B8D]"
              } bg-[#2C3034] font-sans text-base ${
                index !== 0 ? "border-t-2 border-[#373A3D]" : ""
              } flex cursor-pointer items-center justify-center font-semibold hover:bg-gray-500 hover:text-white`}
              onClick={() => handleOptionChange(option)}
              value={option}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
