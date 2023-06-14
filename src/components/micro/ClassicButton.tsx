import React from "react";
import Star from "../../assets/Star.svg";
import StarRed from "../../assets/StarRed.svg";
import { useLocation } from "react-router-dom";

const ClassicButton: React.FC = () => {
  const location = useLocation();
  const isClassicPage = location.pathname === "/classic";
  return (
    <div>
      <button
        className={`flex items-center justify-center rounded-xl bg-opacity-20 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-[136px] ${
          isClassicPage ? "border border-red-500 bg-red-500" : "bg-custom_gray_1"
        }`}
      >
        <img className="h-5 w-5" src={isClassicPage ? StarRed : Star} alt="star-svg-icon" />
        <span
          className={`ml-2 font-sans text-base font-semibold ${
            isClassicPage ? "text-custom_red_1" : "text-custom_gray_2"
          }`}
        >
          Classic
        </span>
      </button>
    </div>
  );
};

export default ClassicButton;
