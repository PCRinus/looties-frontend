import React from "react";
import DropBoxIcon from "../../assets/DropBoxIcon.svg";
const LootBoxesButton: React.FC = () => {
  return (
    <>
      <button className="left-474 top-[56-px] box-border flex h-12 w-[159px] items-center justify-center rounded-xl border border-red-500 bg-red-500 bg-opacity-20">
        <img src={DropBoxIcon} alt="dropboxicon-svg-icon" />
        <span className="ml-2 font-sans text-base font-semibold leading-6 text-custom_red_1">Lootboxes</span>
      </button>
    </>
  );
};

export default LootBoxesButton;
