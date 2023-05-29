import React from "react";
import { ICardData, cardData } from "../../mocks/nftPriceCardMocks";
import PrizeCardCanva from "./PrizeCardCanva";

const PrizeCard: React.FC = () => {
  return (
    <>
      {cardData.slice(0, 3).map((data: ICardData, index: number) => (
        <PrizeCardCanva key={index} cardTitle={data.cardTitle} cardInfo={data.cardInfo} />
      ))}
    </>
  );
};

export default PrizeCard;
