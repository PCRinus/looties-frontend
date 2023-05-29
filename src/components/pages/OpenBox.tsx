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

const OpenBox: React.FC = () => {
  return (
    <div className="w-[calc(100vw-744px)]">
      <div className="h-[calc(100vh-120px)] w-full flex-col justify-center overflow-hidden ">
        <Scrollbars
          // This will activate auto hide
          autoHide
          // Hide delay in ms
          autoHideTimeout={1000}
          // Duration for hide animation in ms.
          autoHideDuration={200}
        >
          <OfficialBoxHeader />
          <div className="flex items-center justify-center ">
            <OfficialBoxSpinner />
          </div>

          <GradientTitleBox className="my-9 flex items-center justify-center">
            <OfficialBoxBottom />
          </GradientTitleBox>

          <h1 className=" mb-[36px] ml-[52px] mt-[52px] font-sans text-[24px] font-bold text-custom_white_1">
            NFT’S lootbox contents
          </h1>

          <div className="ml-[54px]  flex flex-row flex-wrap items-start justify-start gap-4">
            <NFTPriceCard />
            <PrizeCard />
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

          <div className="mt-9 flex flex-row flex-wrap items-start justify-center gap-4">
            {NFC_CARDS_DATA.slice(0, 4).map((nft, index) => (
              <NftCard
                key={index}
                cardTitle={nft.cardTitle}
                cost={nft.cost}
                label={nft.label}
                itemsCount={nft.itemsCount}
                icon={nft.icon}
              />
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default OpenBox;
