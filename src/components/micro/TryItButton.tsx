import { useState } from 'react';
import { ReduxEvents } from '../../reducers/events';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

type LootboxPrize = {
  prize: 'NFT' | 'TOKEN' | 'EMPTY_BOX';
  data: any;
};

const TryItButton = () => {
  const dispatch = useDispatch();

  const { lootboxId } = useParams();
  const auth = useSelector((state: any) => state.auth);

  const handleTryLootbox = async (lootboxId?: string) => {
    if (!lootboxId) {
      toast.error('Could not fetch the lootbox ID, try again later');
    }

    try {
      const { data: prize } = await axios.get<LootboxPrize>(
        `${process.env.REACT_APP_API_URL}/lootbox/${lootboxId}/try-lootbox`,
        {
          headers: { Authorization: `Bearer ${auth.jwt}` },
        }
      );

      dispatch({ type: ReduxEvents.StoreModalData, payload: { data: prize } });
      dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'LootboxWin' } });
    } catch (error) {
      console.log('Self exclude error: ', error);
      toast.error('Failed to try the lootbox, try again later!');
    }
  };

  return (
    <button
      className="md-max:2xl:w-[98px] mr-4 flex items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 xs:mr-3 xs:h-[32px] xs:w-[62px] xs:rounded-lg md:max-2xl:h-12 2xl:h-12 2xl:w-[98px]"
      onClick={() => {
        handleTryLootbox(lootboxId);
      }}
    >
      <span className="font-sans font-bold text-white xs:text-[12px] md:max-2xl:text-[20px] 2xl:text-lg">Try it</span>
    </button>
  );
};

export default TryItButton;
