import React, { useState } from "react";
import GradientTitleBox from "../micro/GradientTitleBox";
import { NftCard } from "../micro/NftCard";
import { NFC_CARDS_DATA } from "../../mocks/nftsMocks";
import NFTPriceCard from "../micro/NFTPriceCard";
import Scrollbars from "react-custom-scrollbars-2";
import FireIcon from "../../assets/FireIcon.svg";

const RecommendedBoxes = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="h-[calc(100vh-120px)] w-full flex-col justify-center overflow-hidden ">
      <Scrollbars
        // This will activate auto hide
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      >
        <GradientTitleBox className="my-9 flex items-center justify-center">
          <img src={FireIcon} alt="Img-svg"></img>
          <span className="ml-5 font-sans text-[24px] font-bold text-custom_white_1">Last 24 hours top NFT's</span>
        </GradientTitleBox>
        <div className=" flex items-start justify-center">
          <NFTPriceCard />
        </div>

        {/* <div className="mt-9 flex flex-row flex-wrap items-start justify-center gap-4">
          {NFC_CARDS_DATA.filter((nft) => nft.cardTitle.toLowerCase().includes(searchValue.toLowerCase()))
            .slice(0, 4)
            .map((nft, index) => (
              <NftCard
                key={index}
                cardTitle={nft.cardTitle}
                cost={nft.cost}
                label={nft.label}
                itemsCount={nft.itemsCount}
                icon={nft.icon}
              />
            ))}
        </div> */}
      </Scrollbars>
    </div>
  );
};

export default RecommendedBoxes;
