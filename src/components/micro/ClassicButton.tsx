import React from "react";
import Star from "../../assets/Star.svg";

const ClassicButton: React.FC = () => {
  return (
    <div>
      <button className="flex items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-[116px] 2xl:h-12 2xl:w-[136px]">
        <img src={Star} alt="star-svg-icon" />
        <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Classic</span>
      </button>
    </div>
  );
};

export default ClassicButton;
