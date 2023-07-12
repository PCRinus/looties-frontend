import React, { useState, useEffect } from 'react';
import SpinnerNft from './SpinnerNft';
import SpinnerBar from '../../assets/SpinnerBar.svg';

import '../../styles/micro/SpinnerNft.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import EmptyBox from '../../assets/EmptyBox.svg';
import Coins from '../../assets/CoinsIcon.svg';

type LootboxContentsResponse = {
  emptyBoxChance: string;
  nft: {
    id: string;
    name: string;
    url: string;
    price: string;
  };
  tokens: {
    id: string;
    amount: string;
  };
};

type SpinnerItem = {
  name: string;
  imgSrc: string;
  rarity: 'red' | 'purple' | 'blue' | 'green';
};

const useItemCount = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1280) {
        setCount(5);
      } else if (window.innerWidth >= 1024) {
        setCount(4);
      } else {
        setCount(3);
      }
    };

    window.addEventListener('resize', updateCount);
    updateCount();
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  return count;
};

const OfficialBoxSpinner = () => {
  const itemCount = useItemCount();
  const { lootboxId } = useParams();

  const [lootboxContents, setLootboxContents] = useState<SpinnerItem[]>([]);

  useEffect(() => {
    const fetchLootboxContents = async () => {
      if (!lootboxId) return;
      try {
        const { data } = await axios.get<LootboxContentsResponse>(
          `${process.env.REACT_APP_API_URL}/lootbox/${lootboxId}/contents`
        );

        const mappedLootboxContents: SpinnerItem[] = [];

        if (data.emptyBoxChance) {
          mappedLootboxContents.push({
            name: 'Empty box',
            imgSrc: EmptyBox,
            rarity: 'blue',
          });
        }

        if (data.nft) {
          mappedLootboxContents.push({
            name: data.nft.name,
            imgSrc: data.nft.url,
            rarity: 'red',
          });
        }

        if (data.tokens) {
          mappedLootboxContents.push({
            name: 'Tokens',
            imgSrc: Coins,
            rarity: 'green',
          });
        }

        //TODO: this is so shit, we need to do it again
        const nestedMappedLootboxContents = [
          mappedLootboxContents,
          mappedLootboxContents,
          mappedLootboxContents,
          mappedLootboxContents,
        ];

        setLootboxContents(nestedMappedLootboxContents.flat(1));
      } catch (error) {}
    };

    fetchLootboxContents();
  }, [lootboxId]);

  return (
    <div className="relative w-full rounded-xl border-solid border-[#2C3034] xs:h-[180px] xs:border-2 2xl:h-[268px] 2xl:border-4">
      <div className="horizontal-fade flex h-full 2xl:px-10">
        {lootboxContents.slice(0, itemCount).map((data: SpinnerItem, index: number) => (
          <SpinnerNft key={index} cardTitle={data.name} icon={data.imgSrc} rarity={data.rarity} />
        ))}
      </div>
      <img
        src={SpinnerBar}
        alt="Spinner"
        className="absolute left-1/2 -translate-x-1/2 transform xs:top-[-16px] xs:h-[209px]  2xl:top-[-22px] 2xl:h-fit"
      />
    </div>
  );
};

export default OfficialBoxSpinner;
