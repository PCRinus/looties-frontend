import React from "react";
import GradientBorderBox from "./GradientBorderBox";
import UserIcon from "../../assets/UserIcon.svg";
import DolarFrame from "../../assets/DolarFrameMini.svg";
import RefreshIcon from "../../assets/Refresh.svg";

interface Props {
  name: string;
  price: string;
  color: string;
  lootboxId: string;
}

export const LiveDrop: React.FC<Props> = ({ name, price, color, lootboxId }) => {
  const handleOpenBoxRefresh = () => {
    console.log(lootboxId);
  };

  return (
    <GradientBorderBox className="relative flex" color={color}>
      {/* TODO: show incoming NFT, not this UserIcon */}
      <img src={UserIcon} alt="user-icon-svg" className="ml-2"></img>
      <div className="ml-2 flex-col items-center justify-normal">
        <label className=" block font-sans font-semibold text-custom_white_1">{name}</label>
        <div className="flex">
          <img className="mr-1" src={DolarFrame} alt="dolar-svg-icon"></img>
          <label className="block font-sans text-[12px] font-light text-red-500">{price}</label>
        </div>
      </div>
      <button onClick={handleOpenBoxRefresh}>
        <img className="absolute right-[13px] top-[10px]" src={RefreshIcon} alt="refresh-icon-svg"></img>
      </button>
    </GradientBorderBox>
  );
};
