import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import arrow from '../../assets/dropdown_arrow.svg';
import arrowUp from '../../assets/dropdown_arrow_up.svg';
import { ReduxEvents } from '../../reducers/events';
import { useDispatch } from 'react-redux';
import ProfileIconRed from '../../assets/ProfileIcon.svg';
import GameIcon from '../../assets/Games.svg';
import TransactionIcon from '../../assets/TransactionsGrey.svg';
import LogoutIcon from '../../assets/LogoutImg.svg';
import InventoryIcon from '../../assets/InventoryIcon.svg';
import GamesRedIcon from '../../assets/GamesRed.svg';
import InventoryRedIcon from '../../assets/InventoryRed.svg';
import Afiliates from '../../assets/AfiliatesIcon.svg';
import AfiliatesRed from '../../assets/AffiliatesRed.svg';
import TransactionRed from '../../assets/TransactionsRed.svg';
import LogoutRed from '../../assets/LogoutRed.svg';
import ProfileIcon from '../../assets/ProfileGrey.svg';
type OptionType = {
  id: number;
  name: string;
  icon: string;
  selectedIcon: string;
};
const options: OptionType[] = [
  { id: 1, name: 'Profile', icon: ProfileIcon, selectedIcon: ProfileIconRed },
  { id: 2, name: 'Affiliates', icon: Afiliates, selectedIcon: AfiliatesRed },
  { id: 3, name: 'Inventory', icon: InventoryIcon, selectedIcon: InventoryRedIcon },
  { id: 4, name: 'Games', icon: GameIcon, selectedIcon: GamesRedIcon },
  { id: 5, name: 'Transactions', icon: TransactionIcon, selectedIcon: TransactionRed },
  { id: 6, name: 'Log out', icon: LogoutIcon, selectedIcon: LogoutRed },
];

const ProfileOptionsDropDown: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  useEffect(() => {
    const matchedOption = options.find(
      (option) => `/${option.name.toLowerCase().replace(/ /g, '')}` === location.pathname
    );
    if (matchedOption) {
      setSelectedOption(matchedOption);
      setSelectedColor(matchedOption.id);
    } else {
      setSelectedOption(options[0]);
      setSelectedColor(options[0].id);
    }
  }, []);
  useEffect(() => {
    const matchedOption = options.find(
      (option) => `/${option.name.toLowerCase().replace(/ /g, '')}` === location.pathname
    );
    if (matchedOption) {
      setSelectedOption(matchedOption);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/profile') {
      setSelectedOption(options[0]);
      setSelectedOptionId(options[0].id);
      setSelectedColor(options[0].id);
    }
  }, [location.pathname]);
  const handleSelect = (option: OptionType) => {
    setSelectedOption(option); // Add this line
    setSelectedOptionId(option.id);
    setSelectedColor(option.id);
    if (option.name.toLowerCase() === 'log out') {
      handleLogout();
    } else if (option.name.toLowerCase() === 'profile') {
      navigate('/profile');
    } else {
      navigate(`${option.name.toLowerCase()}`);
    }
  };

  const handleLogout = () => {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'LogOut' } });
  };

  return (
    <div className="relative w-full">
      {selectedOption ? (
        <button
          onClick={() => setSelectedOption(null)}
          className="box-border flex items-center justify-center gap-1 rounded-lg border border-red-500 bg-red-500 bg-opacity-20 xs:h-10 xs:w-full"
        >
          <img src={selectedOption.selectedIcon} alt="option-icon" />
          <span className="font-sans text-base font-semibold text-custom_red_1">{selectedOption.name}</span>
          <img className="" src={arrow} alt="svg" />
        </button>
      ) : (
        <div className="absolute top-full z-[1000] grid w-full grid-cols-1">
          {options.map((option, index) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`box-border flex cursor-pointer items-center justify-center border-y  border-custom_gray_1 xs:h-10 xs:w-full ${
                index === 0
                  ? 'rounded-t-lg  border-b-[2px] border-b-[#373A3D] bg-custom_gray_1'
                  : index === options.length - 1
                  ? 'rounded-b-lg   bg-custom_gray_1'
                  : ' border-b-[2px] border-b-[#373A3D] bg-custom_gray_1'
              }`}
            >
              <img
                className="mr-2"
                src={option.id === selectedOptionId ? option.selectedIcon : option.icon}
                alt={`${option.name} icon`}
              />
              <span
                className={`font-sans text-base font-semibold ${
                  selectedColor === option.id ? 'text-custom_red_1' : 'text-custom_gray_2'
                }`}
              >
                {option.name}
              </span>
              {index === 0 && <img className="ml-1" src={arrowUp} alt="svg" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileOptionsDropDown;
