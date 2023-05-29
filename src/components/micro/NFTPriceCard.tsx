import React from "react";
import NftGradientCanva from "./NftGradientCanva";
import NftCardContent from "./NftCardContent";
import PrizeCardCanva from "./PrizeCardCanva";
import { ICardData, cardData } from "../../mocks/nftPriceCardMocks";

const NFTPriceCard = () => {
  return (
    <>
      {cardData.slice(0, 4).map((data: ICardData, index: number) => (
        <NftGradientCanva key={index} cardTitle={data.cardTitle} cardInfo={data.cardInfo}>
          <div className="mx-3 mt-3">
            <NftCardContent
              priceLeft={data.priceLeft}
              price={data.price}
              priceRight={data.priceRight}
              cardName={data.cardName}
              icon={data.icon}
            />
          </div>
        </NftGradientCanva>
      ))}
    </>
  );
};

export default NFTPriceCard;
