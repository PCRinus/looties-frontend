import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { ReactComponent as Close } from '../../assets/Close.svg';
import NftGradientCanva from '../micro/NftGradientCanva';
import NftCardContent from '../micro/NftCardContent';
import { ReduxEvents } from '../../reducers/events';
import PrizeCardCanva from '../micro/PrizeCardCanva';
import PrizeCardContent from '../micro/PrizeCardContent';
import EmptyBoxCardContent from '../micro/EmptyBoxCardContent';

type LootboxPrize = {
  prize: 'NFT' | 'TOKEN' | 'EMPTY_BOX';
  data: any;
};

const LootboxWin = () => {
  const dispatch = useDispatch();
  const modalData: LootboxPrize = useSelector((state: any) => state.modals.modalData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: ReduxEvents.CloseModal });
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch]);

  return (
    <div
      className="flex h-auto w-auto flex-col items-center justify-center rounded-xl"
      onClick={(e) => e.stopPropagation()}
      style={{
        boxShadow: '#cc282a 0px 0px 5.4em',
      }}
    >
      {modalData.prize === 'NFT' && (
        <NftGradientCanva cardTitle={modalData.data.name} className="">
          <div className="card_item mx-2 mt-2 2xl:mx-3 2xl:mt-3">
            <NftCardContent icon={modalData.data.url} />
          </div>
        </NftGradientCanva>
      )}
      {modalData.prize === 'TOKEN' && (
        <PrizeCardCanva cardTitle="Coins" className=" flex-col items-center justify-center">
          <PrizeCardContent value={modalData.data.amount} />
        </PrizeCardCanva>
      )}
      {modalData.prize === 'EMPTY_BOX' && (
        <PrizeCardCanva cardTitle="Coins" className=" flex-col items-center justify-center">
          <EmptyBoxCardContent />
        </PrizeCardCanva>
      )}
    </div>
  );
};

export { LootboxWin };
