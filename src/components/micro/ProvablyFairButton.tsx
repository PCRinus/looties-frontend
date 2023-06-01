import React from "react";
import ShieldIcon from "../../assets/Shield.svg";
const ProvablyFairButton = () => {
  return (
    <div className="flex items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:h-10 xs:w-10 2xl:h-12 2xl:w-[176px]">
      <img src={ShieldIcon} alt="shield-icon-svg" />
      <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2 xs:hidden 2xl:inline">
        Provably fair
      </span>
    </div>
  );
};

export default ProvablyFairButton;
