import React from "react";
import ShieldIcon from "../../assets/Shield.svg";
const ProvablyFairButton = () => {
  return (
    <div className="flex h-12 w-[176px] items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1">
      <img src={ShieldIcon} alt="shield-icon-svg" />
      <span className="ml-2 font-sans text-base font-semibold text-custom_gray_2">Provably fair</span>
    </div>
  );
};

export default ProvablyFairButton;
