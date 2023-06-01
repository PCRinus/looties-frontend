import React from "react";
import FastOpeningIcon from "../../assets/FastOpeningIcon.svg";
const FastOpeningButton = () => {
  return (
    <button className="flex items-center justify-center rounded-xl border  border-custom_gray_1 bg-custom_gray_1 xs:mr-6 xs:h-[32px] xs:w-[130px] xs:rounded-lg 2xl:h-12 2xl:w-[204px]">
      <img src={FastOpeningIcon} alt="fast-opening-icon" className="xs:w-3" />
      <span className="ml-2 font-sans font-semibold text-custom_gray_2 xs:text-[11px] 2xl:text-[20px]">
        Fast opening
      </span>
    </button>
  );
};

export default FastOpeningButton;
