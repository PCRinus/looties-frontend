import RedArrowDown from "../../assets/RedArrowDown.svg";
import React, { useState, useEffect, useRef } from "react";

interface Props {
    filterName: string;
    options: string[];
    handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

export const CustomFilter: React.FC<Props> = ({
                                                  filterName,
                                                  options,
                                                  handleFilterChange,
                                                  value,
                                              }) => {
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
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="w-full">
            <div className="relative inline-block cursor-pointer w-full">
                <div
                    ref={buttonRef}
                    className="flex items-center gap-2 justify-center bg-[#2C3034] rounded-xl px-4 py-2 h-12"
                    onClick={toggleDropdown}
                >
                    <span className="text-custom_gray_2 whitespace-nowrap font-semibold">{filterName}:</span>
                    <span className="text-[#F03033] whitespace-nowrap font-semibold">{selectedOption}</span>
                    <img
                        src={RedArrowDown}
                        alt="provably-svg-icon"
                        className={`w-4 h-4 transition-transform duration-300 ${
                            isDropdownOpen ? 'transform rotate-180' : ''
                        }`}
                    />
                </div>
                <ul
                    ref={dropdownRef}
                    className={`absolute top-full z-[100] left-0 w-full border border-[#2C3034] bg-[#2C3034] rounded-xl mt-1 overflow-hidden transition-opacity duration-300 ease-in-out transform ${
                        isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`px-4 py-2 h-12 ${
                                selectedOption === option ? 'text-[#F03033]' : 'text-[#848B8D]'
                            } bg-[#2C3034] text-base font-sans ${
                                index !== 0 ? 'border-t-2 border-[#373A3D]' : ''
                            } flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-500 hover:text-white`}
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
