import React from "react";
import { ICardData, cardData } from "../../mocks/prizeCardsMocks";
import PrizeCardCanva from "./PrizeCardCanva";
import PrizeCardContent from "./PrizeCardContent";
import FreeOpenCard from "./FreeOpenCard";

const PrizeCard: React.FC = () => {
  return (
    <>
      {cardData.slice(0, 3).map((data: ICardData, index: number) => (
        <div className="" key={index}>
          <PrizeCardCanva
            cardTitle={data.cardInfo}
            cardInfo={data.cardPercentage}
            className=" flex-col items-center justify-center"
          >
            {data.cardInfo === "Coins" && (
              <>
                <PrizeCardContent value={16.444} />
              </>
            )}
            {data.cardInfo === "Open" && (
              <>
                <FreeOpenCard />
              </>
            )}
          </PrizeCardCanva>
        </div>
      ))}
    </>
  );
};

export default PrizeCard;
