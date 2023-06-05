import React from "react";
import PrizeCard from "../micro/PrizeCard";
import NFTPriceCard from "../micro/NFTPriceCard";

const NFTLootBoxContent = () => {
  return (
    <div className="flex-col justify-center">
      <span className="ml-1 font-sans font-bold text-custom_white_1 xs:mt-12 xs:text-[20px] md:max-2xl:mt-[52px] md:max-2xl:text-2xl 2xl:mt-[52px] 2xl:text-2xl">
        NFT’S lootbox contents
      </span>
      <div className="flex flex-row flex-wrap justify-normal gap-4 xs:mt-[26px] md:max-2xl:mb-[36px] 2xl:mt-[36px]">
        <NFTPriceCard />
        <PrizeCard />
      </div>
    </div>
  );
};

export default NFTLootBoxContent;
