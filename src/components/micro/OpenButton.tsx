import React, { ReactNode } from 'react';
import { ReduxEvents } from '../../reducers/events';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

interface IProps {
  className?: string;
  children?: ReactNode;
}

type LootboxPrize = {
  prize: 'NFT' | 'TOKEN' | 'EMPTY_BOX';
  data: any;
};

const OpenButton: React.FC<IProps> = ({ className, children }) => {
  const dispatch = useDispatch();

  const { lootboxId } = useParams();
  const auth = useSelector((state: any) => state.auth);
  const user = useSelector((state: any) => state.user);

  const navigate = useNavigate();

  const handleOpenLootbox = async (lootboxId?: string) => {
    if (!lootboxId) {
      toast.error('Could not fetch the lootbox ID, try again later');
    }

    try {
      const { data: prize } = await axios.post<LootboxPrize>(
        `${process.env.REACT_APP_API_URL}/lootbox/${lootboxId}/open-lootbox`,
        {
          userId: user.id,
        },
        {
          headers: { Authorization: `Bearer ${auth.jwt}` },
        }
      );

      dispatch({ type: ReduxEvents.StoreModalData, payload: { data: prize } });
      dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'LootboxWin' } });

      // get token balance after open box if user won tokens
      if (prize.prize === 'TOKEN') {
        const { data: tokensBalance } = await axios.get(`${process.env.REACT_APP_API_URL}/tokens/${user.id}/balance`, {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        });
        dispatch({ type: ReduxEvents.SetTokensBalance, payload: Math.floor(parseFloat(tokensBalance) * 100) / 100 });
      }
    } catch (error) {
      console.log('Open box error: ', error);
      toast.error('Failed to try the lootbox, try again later!');
    }
  };

  return (
    <button
      className={`rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white xs:text-xs md:max-2xl:text-base 2xl:text-base ${className}`}
      onClick={() => handleOpenLootbox(lootboxId)}
    >
      Open
    </button>
  );
};

export default OpenButton;
