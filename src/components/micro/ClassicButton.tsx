import React from "react";
import Star from "../../assets/Star.svg";

const ClassicButton: React.FC = () => {
  return (
    <div>
      <button className="w-[136px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center">
        <img src={Star} alt="star-svg-icon" />
        <span className="ml-2 text-custom_gray_2 font-semibold text-base font-sans">
          Classic
        </span>
      </button>
    </div>
  );
};

export default ClassicButton;
