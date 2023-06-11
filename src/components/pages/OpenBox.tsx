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
    <div className="xs:w-screen md:max-2xl:w-[calc(100vw)] 2xl:w-[calc(100vw)]">
      <div className=" w-full flex-col justify-center overflow-hidden xs:h-[calc(100vh-80px-64px)] md:max-2xl:h-[calc(100vh-120px)] 2xl:h-[calc(100vh-120px)]">
        <Scrollbars
          // This will activate auto hide
          autoHide
          // Hide delay in ms
          autoHideTimeout={1000}
          // Duration for hide animation in ms.
          autoHideDuration={200}
        >
          <GradientTitleBox className="flex xs:mt-[32px] xs:!h-[40px] md:max-2xl:mt-[52px] md:max-2xl:!h-12 2xl:mt-[52px] 2xl:!h-12">
            <OfficialBoxHeader />
          </GradientTitleBox>

          <div className="flex items-center justify-center xs:my-[32px] md:max-2xl:my-9 2xl:my-9">
            <OfficialBoxSpinner />
          </div>

          <GradientTitleBox className="my-9 flex items-center justify-center xs:h-[68px]">
            <OfficialBoxBottom />
          </GradientTitleBox>

          <h1 className=" font-sans font-bold text-custom_white_1 xs:mb-[26px] xs:ml-6 xs:mt-12 xs:text-[20px] md:max-2xl:mb-[36px] md:max-2xl:ml-[52px] md:max-2xl:mt-[52px] md:max-2xl:text-2xl 2xl:mb-[36px] 2xl:ml-[52px] 2xl:mt-[52px] 2xl:text-2xl">
            NFT’S lootbox contents
          </h1>

          <div className=" justify- flex flex-row flex-wrap items-start gap-4 xs:ml-5 xs:gap-4 md:max-2xl:ml-[36px] md:max-2xl:gap-4 2xl:ml-[36px] 2xl:gap-4">
            <NFTPriceCard />
            <PrizeCard />
          </div>

          <GradientTitleBox className="my-9 flex items-center justify-center xs:h-[68px] md:max-2xl:h-[80px]  2xl:h-[80px]">
            <img
              src={FireIcon}
              alt="Img-svg"
              className="xs:h-[22px] xs:w-[20px] md:max-2xl:h-[26.35px] md:max-2xl:w-6 2xl:h-[26.35px] 2xl:w-6"
            ></img>
            <span className="font-sans font-bold text-custom_white_1 xs:ml-3 xs:text-xl md:max-2xl:ml-5 md:max-2xl:text-2xl 2xl:ml-5 2xl:text-2xl">
              Last 24 hours top NFT's
            </span>
          </GradientTitleBox>

          <div className="flex flex-row flex-wrap items-start justify-center gap-4">
            <NFTPriceCard />
          </div>

          <GradientTitleBox className="my-9 flex items-center justify-center xs:h-[68px] md:max-2xl:h-[80px] 2xl:h-[80px]">
            <img
              src={TrophyIcon}
              alt="Img-svg"
              className="xs:h-[22px] xs:w-[20px] md:max-2xl:h-[26.35px] md:max-2xl:w-6 2xl:h-[26.35px] 2xl:w-6"
            ></img>
            <span className="font-sans font-bold text-custom_white_1 xs:ml-3 xs:text-xl md:max-2xl:ml-5 md:max-2xl:text-2xl 2xl:ml-5 2xl:text-2xl">
              Recomended Boxes
            </span>
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
