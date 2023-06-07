import React from "react";
import PrizeCard from "../micro/PrizeCard";
import NFTPriceCard from "../micro/NFTPriceCard";

const NFTLootBoxContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <span className="ml-1 font-sans font-bold text-custom_white_1 xs:mt-12 xs:text-[20px] 2xl:mt-[52px] 2xl:text-2xl">
        NFT’S lootbox contents
      </span>
      <div
        className="flex flex-row flex-wrap justify-center xs:mt-[26px] xs:gap-[1.3rem] 2xl:mt-[36px] 2xl:gap-6
      "
      >
        <NFTPriceCard />
        <PrizeCard />
      </div>
    </div>
  );
};

export default NFTLootBoxContent;
