import React from "react";
import Star from "../../assets/Star.svg";

const ClassicButton: React.FC = () => {
  return (
    <div>
      <button className="top-[56-px] flex h-12 w-[136px] items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1">
        <img src={Star} alt="star-svg-icon" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
    </div>
  );
};

export default ClassicButton;
