import React from "react";
import DropBoxIcon from "../../assets/DropboxIcon.svg";
const LootBoxesButton: React.FC = () => {
  return (
    <>
      <button className="box-border w-[159px] h-12 left-474 top-[56-px] bg-opacity-20 bg-red-500 border border-red-500 rounded-xl flex justify-center items-center">
        <img src={DropBoxIcon} alt="dropboxicon-svg-icon" />
        <span className="ml-2 font-semibold text-base leading-6 text-custom_red_1 font-sans">
          Lootboxes
        </span>
      </button>
    </>
  );
};

export default LootBoxesButton;
