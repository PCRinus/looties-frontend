import React from "react";
import BackIcon from "../../assets/chevron-down.svg";
const BackButton = () => {
  return (
    <div className="top-[56-px] flex h-12 w-[118px] items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1">
      <img src={BackIcon} alt="back-icon-svg" />
      <p className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Back</p>
    </div>
  );
};

export default BackButton;
