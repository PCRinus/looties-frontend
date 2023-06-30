import React from "react";
import { useLocation } from "react-router";

interface DepositsButtonProps {
  onClick: () => void;
  enabled: boolean;
}

const DepositsButton: React.FC<DepositsButtonProps> = ({ onClick, enabled }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`box-border flex items-center justify-center rounded-xl bg-opacity-20 xs:h-10 xs:w-[139px] 2xl:h-12 2xl:w-[159px] ${
          enabled ? "border border-red-500 bg-red-500" : "bg-custom_gray_1"
        }`}
      >
        <span
          className={`ml-2 font-sans text-base font-semibold leading-6 ${
            enabled ? "text-custom_red_1" : "text-custom_gray_2"
          }`}
        >
          Deposits
        </span>
      </button>
    </>
  );
};

export default DepositsButton;
