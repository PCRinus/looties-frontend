import React from "react";
import FastOpeningIcon from "../../assets/FastOpeningIcon.svg";
const FastOpeningButton = () => {
  return (
    <button className="flex h-12 w-[204px] items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1">
      <img src={FastOpeningIcon} alt="fast-opening-icon" />
      <span className="ml-2 font-sans text-[20px] font-semibold text-custom_gray_2">Fast opening</span>
    </button>
  );
};

export default FastOpeningButton;
