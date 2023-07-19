import React, { useEffect, useState } from 'react';
import PrizeCard from '../micro/PrizeCard';
import NFTPriceCard from '../micro/NFTPriceCard';
import { useSelector } from 'react-redux';
import EditBox from '../../assets/EditBox.svg';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import NftLootboxCard from '../micro/NftLootboxCard';
import Icon from '../../assets/CardIcons/NFTCardIcon.svg';
export interface ILootboxContent {
  tokens: any;
  nft: any;
  emptyBoxChance: string;
}

const NFTLootBoxContent = () => {
  const user = useSelector((state: any) => state.user);
  const { lootboxId } = useParams<string>();
  const auth = useSelector((state: any) => state.auth);
  const [lootboxContent, setLootboxContent] = useState<ILootboxContent>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1536);
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    const getLootboxContent = async () => {
      try {
        const { data: lootboxContent } = await axios.get(
          `${process.env.REACT_APP_API_URL}/lootbox/${lootboxId}/contents`,
          { headers: { Authorization: `Bearer ${auth.jwt}` } }
        );
        setLootboxContent(lootboxContent);
      } catch (err) {
        console.log('Error fetching lootobox content: ', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getLootboxContent();
  }, [auth.jwt, lootboxId]);

  const handleResizeMobile = () => {
    const windowWidth = window.innerWidth;
    let numCols = 1;

    const intervals = [
      { min: 400, max: 570, cols: 2 },
      { min: 570, max: 740, cols: 3 },
      { min: 740, max: 920, cols: 4 },
      { min: 920, max: 1100, cols: 5 },
      { min: 1100, max: 1280, cols: 6 },
      { min: 1280, max: 1450, cols: 7 },
      { min: 1450, max: 1536, cols: 8 },
    ];

    for (let i = 0; i < intervals.length; i++) {
      if (windowWidth > intervals[i].min && windowWidth <= intervals[i].max) {
        numCols = intervals[i].cols;
        break;
      }
    }

    setNumColumns(numCols);
  };

  const handleResizeDesktop = () => {
    const windowWidth = window.innerWidth;
    let numCols = 1;

    const intervals = [
      { min: 1536, max: 1675, cols: 2 },
      { min: 1675, max: 1900, cols: 3 },
      { min: 1900, max: 2125, cols: 4 },
      { min: 2125, max: 2345, cols: 5 },
      { min: 2345, max: 2575, cols: 6 },
      { min: 2575, max: 2800, cols: 7 },
      { min: 2800, max: 3000, cols: 8 },
      { min: 3000, max: 3250, cols: 9 },
      { min: 3250, max: 3420, cols: 10 },
      { min: 3420, max: 3650, cols: 11 },
      { min: 4800, max: 5101, cols: 11 },
    ];

    for (let i = 0; i < intervals.length; i++) {
      if (windowWidth > intervals[i].min && windowWidth <= intervals[i].max) {
        numCols = intervals[i].cols;
        break;
      }
    }

    setNumColumns(numCols);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const currentIsMobile = windowWidth < 1536;

      if (currentIsMobile !== isMobile) {
        setIsMobile(currentIsMobile);
      }

      if (currentIsMobile) {
        handleResizeMobile();
      } else {
        handleResizeDesktop();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);
  return (
    <div className="flex flex-col justify-center">
      <span className="ml-1 flex flex-row justify-between font-sans font-bold text-custom_white_1 xs:mt-12 xs:text-[20px] 2xl:mt-[52px] 2xl:text-2xl">
        <span>NFT’S lootbox contents</span>
        {/* {user.id && user.profile ? (
          <button className="flex h-[38px] items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[14px] font-sans font-semibold leading-4 text-white lg:h-[44.57px]">
            <img src={EditBox} alt="Create lootbox"></img>
            <span className="whitespace-nowrap font-bold text-white xs:text-xs 2xl:text-base">Edit lootbox</span>
          </button>
        ) : (
          <div></div>
        )} */}
      </span>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        }}
        className={`auto-rows-max place-content-start gap-4 xs:gap-4 2xl:gap-[14px]`}
      >
        <NFTPriceCard lootboxContent={lootboxContent} />
        <PrizeCard lootboxContent={lootboxContent} />
        {/* {Array.from({ length: 30 }).map((_, index) => (
          <NftLootboxCard
            key={index}
            cardTitle={`Mock Item ${index + 1}`}
            itemsCount={Math.floor(Math.random() * 100)}
            label={`Label ${index + 1}`}
            cost={Math.floor(Math.random() * 1000)}
            icon={Icon}
            lootboxId="123"
          />
        ))} */}
      </div>
    </div>
  );
};

export default NFTLootBoxContent;
