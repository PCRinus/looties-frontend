import React from "react";
import GradientTitleBox from "../micro/GradientTitleBox";
import NFTPriceCard from "../micro/NFTPriceCard";
import FireIcon from "../../assets/FireIcon.svg";

const LastTopNFTs = () => {
  return (
    <>
      <GradientTitleBox className="my-9 flex justify-center xs:h-[68px] 2xl:h-[80px]">
        <img src={FireIcon} alt="Img-svg" className="xs:h-[22px] xs:w-[20px] 2xl:h-[26.35px] 2xl:w-6"></img>
        <span className="font-sans font-bold text-custom_white_1 xs:ml-3 xs:text-xl 2xl:ml-5 2xl:text-2xl">
          Last 24 hours top NFT's
        </span>
      </GradientTitleBox>
      <div className="flex flex-row flex-wrap justify-center xs:gap-[1.3rem] 2xl:gap-6">
        <NFTPriceCard />
      </div>
    </>
  );
};

export default LastTopNFTs;
