import React, { useEffect, useState } from 'react';
import { CustomFilter } from '../micro/CustomFilter';
import { SearchBar } from '../micro/SearchBar';
import { NFC_CARDS_DATA } from '../../mocks/nftsMocks';
import { CATEGORY_OPTIONS, COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS } from '../../mocks/filtersMocks';
import { MobileFiltersButton } from '../micro/MobileFiltersButton';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxEvents } from '../../reducers/events';
import { NftCard } from '../micro/NftCard';
import NftLootboxCard from '../micro/NftLootboxCard';
import Icon from '../../assets/CardIcons/NFTCardIcon.svg';

export const LootboxCardsDisplay: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [category, setCategory] = useState<string>(CATEGORY_OPTIONS[0]);
  const [collection, setCollection] = useState<string>(COLLECTION_OPTIONS[0]);
  const [price, setPrice] = useState<string>(PRICE_OPTIONS[0]);
  const [sortBy, setSortBy] = useState<string>(SORT_BY_OPTIONS[0]);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState<number>(0);
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1536);
  const [numColumns, setNumColumns] = useState(1);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };
  const handleCollectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCollection(event.target.value);
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(event.target.value);
  };
  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleToggleFilters = (event: any) => {
    setOpenFilters(!openFilters);
  };

  useEffect(() => {
    const setFiltersCount = () => {
      let counter = 0;
      if (category !== CATEGORY_OPTIONS[0]) counter++;
      if (collection !== COLLECTION_OPTIONS[0]) counter++;
      if (price !== PRICE_OPTIONS[0]) counter++;
      if (sortBy !== SORT_BY_OPTIONS[0]) counter++;

      setAppliedFiltersCount(counter);
    };
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
    };

    window.addEventListener('resize', handleResize);
    setFiltersCount();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [category, collection, price, sortBy]);

  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  interface NFT {
    id: string;
    name: string;
    price: number;
    nftImage: string;
  }

  const [list, setList] = useState<NFT[]>([]);

  useEffect(() => {
    const fetchAvailableNFTs = async () => {
      if (user.id) {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/lootbox?page=1`, {
            headers: {
              Authorization: `Bearer ${auth.jwt}`,
            },
          });
          const availableNfts = response?.data;
          setList(availableNfts);
          console.log(list);
          // console.log(response.data);
        } catch (error) {
          console.log('Error while fetching your NFTs:', error);
          toast.error('Failed to fetch your NFTs');
        }
      }
    };

    fetchAvailableNFTs();
  }, [user.id]);

  //Grid responsivness controller
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
    <div
      id="lootbox-cards-display"
      className="h-full max-h-full w-full overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]"
    >
      <div className="flex flex-nowrap justify-start gap-4 xs:flex-col 2xl:flex-row">
        <div className="gap-4 xs:grid xs:grid-cols-2 xs:items-center xs:justify-center 2xl:flex 2xl:flex-row 2xl:justify-start">
          <SearchBar onSearchChange={handleSearchChange} />
          <MobileFiltersButton
            openFilters={openFilters}
            appliedFiltersCount={appliedFiltersCount}
            toggleFilters={handleToggleFilters}
          />
          {/* desktop lootbox filters */}
          {screenWidth > 1536 && (
            <>
              {/* <CustomFilter
                filterName="Category"
                options={CATEGORY_OPTIONS}
                handleFilterChange={handleCategoryChange}
                value={category}
              /> */}
              <CustomFilter
                filterName="Collection"
                options={COLLECTION_OPTIONS}
                handleFilterChange={handleCollectionChange}
                value={collection}
              />
              <CustomFilter
                filterName="Filter"
                options={PRICE_OPTIONS}
                handleFilterChange={handlePriceChange}
                value={price}
              />
              {/* <CustomFilter
                filterName="Sory by"
                options={SORT_BY_OPTIONS}
                handleFilterChange={handleSortByChange}
                value={sortBy}
              /> */}
            </>
          )}
        </div>
        {/* mobile lootbox filters */}
        <div
          className={`xs:${
            openFilters ? 'flex' : 'hidden'
          } xs:flex-col xs:items-center xs:justify-around xs:gap-4 xs:rounded-xl xs:border xs:border-solid xs:border-[#2C3034] xs:bg-[#1A1D20] xs:p-6 2xl:hidden`}
        >
          {/* <CustomFilter
            filterName="Category"
            options={CATEGORY_OPTIONS}
            handleFilterChange={handleCategoryChange}
            value={category}
          /> */}
          <CustomFilter
            filterName="Collection"
            options={COLLECTION_OPTIONS}
            handleFilterChange={handleCollectionChange}
            value={collection}
          />
          <CustomFilter
            filterName="Filter"
            options={PRICE_OPTIONS}
            handleFilterChange={handlePriceChange}
            value={price}
          />
          {/* <CustomFilter
            filterName="Sory by"
            options={SORT_BY_OPTIONS}
            handleFilterChange={handleSortByChange}
            value={sortBy}
          /> */}
        </div>
      </div>
      {!list ||
      list.filter((lootbox) => lootbox.name.toLowerCase().includes(searchValue.toLowerCase())).length === 0 ? (
        <div className="mt-9 flex flex-row flex-wrap items-start justify-center gap-4">
          <div className="mt-32 flex h-full flex-col items-center justify-center text-center">
            <div className="text-center text-[24px] font-bold text-[#F03033]">No lootbox matched</div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="text-center text-[12px] font-semibold text-[#848B8D]">
                Your search "<span className="text-semibold text-[#F03033]">{searchValue}</span>" returned no results.
              </div>
              <div className="text-center text-[12px] font-semibold text-[#848B8D]">
                Please check your spelling or try again with a less accurate term.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
          }}
          className={`mt-4 auto-rows-max place-content-start gap-4 xs:gap-4 2xl:gap-[14px]`}
        >
          {list &&
            list
              .filter((lootbox) => lootbox.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((lootbox, index) => (
                <NftLootboxCard
                  key={index}
                  cardTitle={lootbox.name}
                  cost={lootbox.price}
                  label={'Created'}
                  itemsCount={'3'}
                  icon={lootbox.nftImage}
                  lootboxId={lootbox.id}
                />
                // <>
                //   {' Test '}
                //   {Array.from({ length: 30 }).map((_, index) => (
                //     <NftLootboxCard
                //       key={index}
                //       cardTitle={`Mock Item ${index + 1}`}
                //       itemsCount={Math.floor(Math.random() * 100)}
                //       label={`Label ${index + 1}`}
                //       cost={Math.floor(Math.random() * 1000)}
                //       icon={Icon}
                //       lootboxId="123"
                //     />
                //   ))}
                // </>
              ))}
        </div>
      )}
    </div>
  );
};
