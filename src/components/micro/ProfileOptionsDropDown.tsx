import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/dropdown_arrow.svg";
import arrowUp from "../../assets/dropdown_arrow_up.svg";
import { ReduxEvents } from "../../reducers/events";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(options[0]);
  const [selectedColor, setSelectedColor] = useState<number | null>(options[0].id);

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
    setSelectedColor(option.id);
    if (option.name.toLowerCase() === "log out") {
      handleLogout();
    } else if (option.name.toLowerCase() === "profile") {
      navigate("/profile");
    } else {
      navigate(`${option.name.toLowerCase()}`);
    }
  };

  const handleLogout = () => {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "LogOut" } });
  };

  return (
    <>
      {selectedOption ? (
        <button
          onClick={() => setSelectedOption(null)}
          className="box-border flex items-center justify-center gap-1 rounded-lg border border-red-500 bg-red-500 bg-opacity-20 xs:h-10 xs:w-full"
        >
          <span className="font-sans text-base font-semibold text-custom_red_1">{selectedOption.name}</span>
          <img className="" src={arrow} alt="svg" />
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
              {index === 0 && <img className="ml-1" src={arrowUp} alt="svg" />}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProfileOptionsDropDown;
