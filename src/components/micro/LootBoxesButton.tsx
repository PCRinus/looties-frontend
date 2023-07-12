import React from "react";
import DropBoxIcon from "../../assets/DropBoxIcon.svg";
import DropBoxIconRed from "../../assets/DropboxIconRed.svg";
import { useLocation } from "react-router-dom";
const LootBoxesButton: React.FC = () => {
  const location = useLocation();
  const isLootboxesPage = location.pathname.includes("/lootboxes");
  return (
    <>
      <button
        className={`box-border flex  items-center justify-center rounded-xl  bg-opacity-20 xs:h-10 xs:w-[139px] 2xl:h-12 2xl:w-[159px] ${
          isLootboxesPage ? "border border-red-500 bg-red-500" : "bg-custom_gray_1"
        }`}
      >
        <img className="h-5 w-5" src={isLootboxesPage ? DropBoxIconRed : DropBoxIcon} alt="dropboxicon-svg-icon" />
        <span
          className={`ml-2 font-sans text-base font-semibold leading-6 ${
            isLootboxesPage ? "text-custom_red_1" : "text-custom_gray_2"
          }`}
        >
          Lootboxes
        </span>
      </button>
    </>
  );
};

export default LootBoxesButton;
