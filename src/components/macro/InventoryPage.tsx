import React, { useEffect, useState } from 'react';
import ProfileOptionsHeader from '../micro/ProfileOptionsHeader';
import Scrollbars from 'react-custom-scrollbars-2';
import InventoryItemCard from '../micro/InventoryItemCard';
import { useSelector } from 'react-redux';
import axios from 'axios';
import NFTPriceCard from '../micro/NFTPriceCard';
import { NftCard } from '../micro/NftCard';
import Icon from '../../assets/CardIcons/ApeIcon.svg';
import NftLootboxCard from '../micro/NftLootboxCard';
interface IAppState {
  user: { id: string };
  auth: { jwt: string };
}
interface NftProps {
  name: string;
  url: string;
  price: number;
}
const InventoryPage: React.FC = () => {
  const [numColumns, setNumColumns] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const user = useSelector((state: IAppState) => state.user);
  const auth = useSelector((state: IAppState) => state.auth);
  const [nfts, setNfts] = useState<NftProps[]>([]);
  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/nft/${user.id}`, {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        });

        const nftsData: NftProps[] = response.data.map((item: any) => ({
          name: item.name,
          url: item.url,
          price: item.price,
        }));
        setNfts(nftsData);
      } catch (error) {
        console.log('Error while fetching NFTs:', error);
      }
    };

    if (user.id && auth.jwt) {
      fetchNfts();
    }
  }, [user.id, auth.jwt]);

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
    <div className="2xl:autoheight bottom-fade flex-auto rounded-xl bg-custom_black_2 xs:min-h-[337px] 2xl:min-h-0 2xl:w-full">
      <ProfileOptionsHeader title={'Inventory'} />
      <div id="content" className="  h-full w-full xs:p-6  2xl:p-8">
        {nfts.length === 0 ? (
          <div className="h-full w-full">
            {/* <Scrollbars
              // This will activate auto hide
              autoHide
              // Hide delay in ms
              autoHideTimeout={1000}
              // Duration for hide animation in ms.
              autoHideDuration={200}
              autoHeight
              autoHeightMin={0}
              autoHeightMax={800} // Specify maximum height here
              thumbMinSize={30}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                }}
                className={`auto-rows-max place-content-start gap-4 xs:gap-4 2xl:gap-[14px]`}
              >
                {nfts.map((item, index) => (
                  <InventoryItemCard
                    key={index}
                    name={nfts[index]?.name}
                    price={nfts[index]?.price}
                    url={nfts[index]?.url}
                  />
                ))}
              </div>
            </Scrollbars> */}
            <InventoryItemCard name="NFT box name" url={Icon} price={2421} />
            <NftCard
              cardTitle="NFT box name"
              itemsCount="7"
              label="created"
              cost={2421}
              icon={Icon}
              lootboxId="123"
            ></NftCard>
            <NftLootboxCard
              cardTitle="NFT box name"
              itemsCount="7"
              label="created"
              cost={2421}
              icon={Icon}
              lootboxId="123"
            ></NftLootboxCard>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center  xs:px-6  xs:py-[58px]  2xl:min-h-[664px] 2xl:p-0">
            <div className="flex flex-col items-center justify-center gap-4 font-sans ">
              <h2 className="text-center font-bold text-custom_red_1 xs:text-xl  2xl:text-2xl">
                Your inventory is empty
              </h2>
              <p className="text-center text-base font-semibold text-custom_gray_2 ">
                Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className=" h-10 w-full bg-custom_black_2"></div>
    </div>
  );
};

export default InventoryPage;
