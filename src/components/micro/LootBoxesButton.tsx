import React from "react";
import DropBoxIcon from "../../assets/DropBoxIcon.svg";
const LootBoxesButton: React.FC = () => {
  return (
    <>
      <button className="box-border flex  items-center justify-center rounded-xl border border-red-500 bg-red-500 bg-opacity-20 xs:h-10 xs:w-[139px] 2xl:h-12 2xl:w-[159px]">
        <img src={DropBoxIcon} alt="dropboxicon-svg-icon" />
        <span className="ml-2 font-sans text-base font-semibold leading-6 text-custom_red_1">Lootboxes</span>
      </button>
    </>
  );
};

export default LootBoxesButton;
