import React from "react";
import PrizeCard from "../micro/PrizeCard";
import NFTPriceCard from "../micro/NFTPriceCard";

const NFTLootBoxContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <span className="ml-1 font-sans font-bold text-custom_white_1 xs:mt-12 xs:text-[20px] md:max-2xl:mt-[52px] md:max-2xl:text-2xl 2xl:mt-[52px] 2xl:text-2xl">
        NFT’S lootbox contents
      </span>
      <div
        className="3xl:gap-[2.2rem] flex flex-row flex-wrap justify-normal xs:mt-[26px] xs:gap-[1.3rem] md:max-2xl:mb-[36px] 2xl:mt-[36px] 2xl:gap-4
      "
      >
        <NFTPriceCard />
        <PrizeCard />
      </div>
    </div>
  );
};

export default NFTLootBoxContent;
