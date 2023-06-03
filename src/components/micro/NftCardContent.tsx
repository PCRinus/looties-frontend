import React from "react";
import Elipse from "../../assets/Ellipse.svg";

interface INftCardContentProps {
  priceLeft?: string;
  price?: string;
  priceRight?: string;
  cardName?: string;
  icon?: string;
}

const NftCardContent: React.FC<INftCardContentProps> = ({ priceLeft, price, priceRight, cardName, icon }) => {
  return (
    <div className="flex-column items-center justify-center">
      <img
        src={icon}
        alt="nft-icon-svg"
        className="xs:h-[139px] xs:w-[139px] md:max-2xl:h-56 md:max-2xl:w-56 2xl:h-56 2xl:w-56"
      />
      <div className="flex-column xs:mt-[2px] md:max-2xl:mt-[12px] 2xl:mt-[12px]">
        <label className="font-sans font-bold  text-custom_white_1 xs:text-xs md:max-2xl:text-lg 2xl:text-lg">
          {cardName}
        </label>
        <div className="relative h-1 rounded bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 xs:mt-[10px] md:max-2xl:mt-4 md:max-2xl:w-[224px] 2xl:mt-4 2xl:w-[224px]">
          <img
            src={Elipse}
            alt="ellipse.svg"
            className="absolute xs:ml-[2.25rem] xs:mt-[-1.75rem] md:max-2xl:ml-[5.25rem] md:max-2xl:mt-[-1.75rem] 2xl:ml-[5.25rem] 2xl:mt-[-1.75rem] "
          ></img>
        </div>
        <div className=" mt-[8px] flex justify-between">
          <label className="font-sans font-semibold text-[#848B8D] xs:text-[8px] md:max-2xl:text-[10px] 2xl:text-[10px]">
            {priceLeft}
          </label>
          <label className="font-sans font-bold text-custom_white_1 xs:text-xs md:max-2xl:text-lg 2xl:text-lg">
            {price}
          </label>
          <label className="font-sans font-semibold text-[#848B8D] xs:text-[8px] md:max-2xl:text-[10px] 2xl:text-[10px]">
            {priceRight}
          </label>
        </div>
      </div>
    </div>
  );
};

export default NftCardContent;
