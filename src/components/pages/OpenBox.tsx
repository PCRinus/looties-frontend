import React, { useState } from "react";
import GradientTitleBox from "../micro/GradientTitleBox";
import { NftCard } from "../micro/NftCard";
import { NFC_CARDS_DATA } from "../../mocks/nftsMocks";
import NFTPriceCard from "../micro/NFTPriceCard";
import Scrollbars from "react-custom-scrollbars-2";
import FireIcon from "../../assets/FireIcon.svg";
import NftCardHeader from "../micro/NftCardHeader";
import OfficialBoxHeader from "../micro/OfficialBoxHeader";
import OfficialBoxBottom from "../micro/OfficialBoxBottom";
import OfficialBoxSpinner from "../micro/OfficialBoxSpinner";
import TrophyIcon from "../../assets/Trophy.svg";
import PrizeCard from "../micro/PrizeCard";
import NftCardOpen from "../micro/NftCardOpen";

const OpenBox: React.FC = () => {
  return (
    <div className="xs:w-screen 2xl:w-[calc(100vw-744px)]">
      <div className="w-full flex-col justify-center overflow-hidden xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
        <Scrollbars
          // This will activate auto hide
          autoHide
          // Hide delay in ms
          autoHideTimeout={1000}
          // Duration for hide animation in ms.
          autoHideDuration={200}
        >
          <GradientTitleBox className="flex xs:mt-[32px] xs:!h-[40px] 2xl:mt-[52px] 2xl:!h-12">
            <OfficialBoxHeader />
          </GradientTitleBox>

          <div className="flex items-center justify-center xs:my-[32px] 2xl:my-9">
            <OfficialBoxSpinner />
          </div>

          <GradientTitleBox className="my-9 flex items-center justify-center xs:h-[68px]">
            <OfficialBoxBottom />
          </GradientTitleBox>

          <h1 className=" font-sans font-bold text-custom_white_1 xs:mb-[26px] xs:ml-6 xs:mt-12 xs:text-[20px] 2xl:mb-[36px] 2xl:ml-[52px] 2xl:mt-[52px] 2xl:text-[24px]">
            NFT’S lootbox contents
          </h1>
          {/*  mobile done |*/}
          <div className="flex flex-row flex-wrap items-start justify-start xs:ml-5 xs:gap-4 2xl:ml-[54px] 2xl:gap-4">
            <NFTPriceCard />
            {/* <PrizeCard /> */}
          </div>

          <GradientTitleBox className="my-9 flex items-center justify-center">
            <img src={FireIcon} alt="Img-svg"></img>
            <span className="ml-5 font-sans text-[24px] font-bold text-custom_white_1">Last 24 hours top NFT's</span>
          </GradientTitleBox>

          <div className="flex flex-row flex-wrap items-start justify-center gap-4">
            <NFTPriceCard />
          </div>

          <GradientTitleBox className="my-9 flex items-center justify-center">
            <img src={TrophyIcon} alt="Img-svg"></img>
            <span className="ml-5 font-sans text-[24px] font-bold text-custom_white_1">Recomended Boxes</span>
          </GradientTitleBox>

          <div className="flex flex-row flex-wrap items-start justify-center gap-4">
            <NftCardOpen />
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default OpenBox;
