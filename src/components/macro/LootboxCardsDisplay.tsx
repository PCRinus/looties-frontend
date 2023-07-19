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

export const LootboxCardsDisplay: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [category, setCategory] = useState<string>(CATEGORY_OPTIONS[0]);
  const [collection, setCollection] = useState<string>(COLLECTION_OPTIONS[0]);
  const [price, setPrice] = useState<string>(PRICE_OPTIONS[0]);
  const [sortBy, setSortBy] = useState<string>(SORT_BY_OPTIONS[0]);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState<number>(0);
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  console.log(list);
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
      <div className="mt-9 flex flex-row flex-wrap items-start justify-center gap-4">
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
            ))}
        {list &&
          list.filter((lootbox) => lootbox.name.toLowerCase().includes(searchValue.toLowerCase())).length === 0 && (
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
          )}
      </div>
    </div>
  );
};
