import React from "react";
import HomeIcon from "../../assets/HomeIcon.svg";
import HomeIconRed from "../../assets/HomeIconRed.svg";
import { useLocation } from "react-router-dom";
const HomeButton: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <button
      className={`flex items-center justify-center rounded-xl  bg-opacity-20 xs:h-10 xs:w-24 xs:gap-2 2xl:h-12 2xl:w-12 2xl:gap-0 ${
        isHomePage ? "border border-red-500 bg-red-500" : "bg-custom_gray_1"
      }`}
    >
      <img className="h-5 w-5" src={isHomePage ? HomeIconRed : HomeIcon} alt="home-svg-icon" />
      <span
        className={`font-sans text-base font-semibold xs:inline-block 2xl:hidden ${
          isHomePage ? "text-custom_red_1" : "text-custom_gray_2"
        }`}
      >
        Home
      </span>
    </button>
  );
};
export default HomeButton;
