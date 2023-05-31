import React from "react";
import "../../styles/micro/SpinnerNft.scss";
import DolarFrame from "../../assets/Frame.svg";

interface INftProps {
  className?: string;
  cardTitle: string;
  icon: string;
  coins: number | string;
  rarity: "red" | "purple" | "blue" | "green"; // Add rarity prop
}

const SpinnerNft: React.FC<INftProps> = ({ cardTitle, icon, coins, className, rarity }) => {
  const style = `card-style-${rarity}`;
  return (
    <div className={`${style} flex h-full w-full items-center justify-center ${className}`}>
      <div className=" flex-column">
        <span className="p-8 font-sans font-bold text-custom_white_1">{cardTitle}</span>
        <img src={icon} alt="icon-svg" className="mt-2 w-[148px]"></img>
        <div className="mt-3 flex px-4 font-sans font-bold text-custom_red_1">
          <img src={DolarFrame} alt="frame-svg" className="mr-2"></img>
          {coins} Coins
        </div>
      </div>
    </div>
  );
};

export default SpinnerNft;
