import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type OptionType = {
  id: number;
  name: string;
};
const options: OptionType[] = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Settings" },
  { id: 3, name: "Games" },
  { id: 4, name: "Inventory" },
  { id: 5, name: "Dashboard" },
  { id: 6, name: "My lootboxes" },
  { id: 7, name: "Affiliates" },
  { id: 8, name: "Transactions" },
  { id: 9, name: "Log out" },
];
const ProfileOptionsDropDown: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(options[0]);
  const [selectedColor, setSelectedColor] = useState<number | null>(options[0].id);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
    setSelectedColor(option.id);
    if (option.name.toLowerCase() === "profile") {
      navigate("/profile");
    } else {
      navigate(`${option.name.toLowerCase()}`);
    }
  };

  return (
    <>
      {selectedOption ? (
        <button
          onClick={() => setSelectedOption(null)}
          className="box-border flex items-center justify-center rounded-lg border border-red-500 bg-red-500 bg-opacity-20 xs:h-10 xs:w-full"
        >
          <span className="font-sans text-base font-semibold text-custom_red_1">{selectedOption.name}</span>
        </button>
      ) : (
        <div className=" grid grid-cols-1">
          {options.map((option, index) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`box-border flex cursor-pointer items-center justify-center border border-custom_gray_1 xs:h-10 xs:w-full ${
                index === 0
                  ? "rounded-t-lg  border-b-[2px] border-b-[#373A3D] bg-custom_gray_1"
                  : index === options.length - 1
                  ? "rounded-b-lg   bg-custom_gray_1"
                  : " border-b-[2px] border-b-[#373A3D] bg-custom_gray_1"
              }`}
            >
              <span
                className={`font-sans text-base font-semibold ${
                  selectedColor === option.id ? "text-custom_red_1" : "text-custom_gray_2"
                }`}
              >
                {option.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProfileOptionsDropDown;
