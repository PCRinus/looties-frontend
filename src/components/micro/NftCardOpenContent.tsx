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
      <img className="rounded-lg xs:h-[139px] xs:w-[139px] 2xl:h-56 2xl:w-56" src={icon} alt="NFT icon" />
      <div className="flex flex-row items-center justify-between xs:py-3 2xl:py-4">
        {label.toLowerCase() === "official" ? (
          <div className="flex items-center justify-center border border-solid  border-[#F03033] bg-[#F03033] bg-opacity-20 font-semibold leading-[10px] text-[#F03033] xs:h-[15px] xs:w-[42px] xs:rounded xs:text-[7px] md:max-2xl:h-[23px] md:max-2xl:w-[57px] md:max-2xl:rounded md:max-2xl:text-xs 2xl:h-[23px] 2xl:w-[57px] 2xl:rounded 2xl:text-xs">
            {label}
          </div>
        ) : (
          <div className="flex items-center justify-center border border-solid border-[#00FFF0] bg-[#00FFF0] bg-opacity-20 text-[#00FFF0] xs:h-[15px] xs:w-[42px]  xs:rounded xs:text-[7px] xs:leading-[10px] md:max-2xl:h-[23px] md:max-2xl:w-[57px] md:max-2xl:rounded md:max-2xl:text-xs 2xl:h-[23px] 2xl:w-[57px] 2xl:rounded 2xl:text-xs">
            {label}
          </div>
        )}

        <div className="flex flex-row items-center justify-end gap-1 text-xs">
          <img className="xs:h-3 xs:w-3 2xl:h-4 2xl:w-4" src={dolarFrame} alt="Dolar svg" />
          <span className="font-bold text-[#F03033] xs:text-[8px] xs:leading-[10px] 2xl:text-base">{`${cost} Coins`}</span>
        </div>
      </div>
      <OpenButton className=" xs:h-[33px] xs:w-[140px] 2xl:h-[40px] 2xl:w-[224px]" />
    </div>
  );
};

export default NftCardOpenContent;
