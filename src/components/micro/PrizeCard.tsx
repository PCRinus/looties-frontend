import React from 'react';
import { ICardData, cardData } from '../../mocks/prizeCardsMocks';
import PrizeCardCanva from './PrizeCardCanva';
import PrizeCardContent from './PrizeCardContent';
import FreeOpenCard from './FreeOpenCard';
import { ILootboxContent } from '../macro/NFTLootBoxContent';
import EmptyBoxCardContent from './EmptyBoxCardContent';

interface Props {
  lootboxContent?: ILootboxContent;
}

const PrizeCard: React.FC<Props> = ({ lootboxContent }) => {
  return (
    <>
      {lootboxContent && lootboxContent.tokens && (
        <PrizeCardCanva
          cardTitle="Coins"
          cardInfo={lootboxContent.tokens.dropChance}
          className=" flex-col items-center justify-center"
        >
          <PrizeCardContent value={lootboxContent.tokens.amount} />
        </PrizeCardCanva>
      )}
      {lootboxContent && lootboxContent.emptyBoxChance && (
        <PrizeCardCanva
          cardTitle="Empty box"
          cardInfo={lootboxContent.emptyBoxChance}
          className=" flex-col items-center justify-center"
        >
          <EmptyBoxCardContent />
        </PrizeCardCanva>
      )}
    </>
  );
};

export default PrizeCard;
