import React from "react";

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
      <img src={icon} alt="nft-icon-svg" />
      <div className="flex-column mt-[12px]">
        <label className="font-sans text-lg font-bold text-custom_white_1">{cardName}</label>
        <div className="mt-4 h-1 w-[224px] rounded bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500"></div>
        <div className=" mt-[8px] flex justify-between">
          <label className="font-sans text-[10px] font-semibold text-[#848B8D]">{priceLeft}</label>
          <label className="font-sans font-bold text-custom_white_1 ">{price}</label>
          <label className="font-sans text-[10px] font-semibold text-[#848B8D]">{priceRight}</label>
        </div>
      </div>
    </div>
  );
};

export default NftCardContent;
