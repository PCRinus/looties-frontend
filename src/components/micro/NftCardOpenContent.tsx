import React from "react";
import dolarFrame from "../../assets/DolarFrame.svg";
import OpenButton from "./OpenButton";

interface INftCardContentProps {
  label: string;
  cost: string | number;
  icon: string;
}
const NftCardOpenContent: React.FC<INftCardContentProps> = ({ label, cost, icon }) => {
  return (
    <div className="flex-column items-center justify-center">
      <img className="mx-auto my-0 h-[224px] w-[224px] rounded-lg" src={icon} alt="NFT icon" />
      <div className="flex flex-row items-center justify-between py-4">
        {label.toLowerCase() === "official" ? (
          <div className="flex h-[23px] w-[57px] items-center justify-center rounded-[4px] border border-solid border-[#F03033] bg-[#F03033] bg-opacity-20 text-xs font-semibold text-[#F03033]">
            {label}
          </div>
        ) : (
          <div className="flex h-[23px] w-[57px] items-center justify-center rounded-[4px] border border-solid border-[#00FFF0] bg-[#00FFF0]  bg-opacity-20 text-xs text-[#00FFF0]">
            {label}
          </div>
        )}

        <div className="flex flex-row items-center justify-end gap-1 text-xs">
          <img className="h-4 w-4" src={dolarFrame} alt="Dolar svg" />
          <span className="font-bold text-[#F03033]">{`${cost} Coins`}</span>
        </div>
      </div>
      <OpenButton className=" h-[40px] w-[224px] " />
    </div>
  );
};

export default NftCardOpenContent;
