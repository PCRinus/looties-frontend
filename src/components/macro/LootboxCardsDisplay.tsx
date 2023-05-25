import { useEffect, useState } from "react";
import { Filter } from "../micro/Filter";
import { SearchBar } from "../micro/SearchBar";
import { NFC_CARDS_DATA } from "../../mocks/nftsMocks";
import { NftCard } from "../micro/NftCard";
import { CATEGORY_OPTIONS, COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS } from "../../mocks/filtersMocks";
import { MobileFiltersButton } from "../micro/MobileFiltersButton";

export const LootboxCardsDisplay: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>(CATEGORY_OPTIONS[0]);
  const [collection, setCollection] = useState<string>(COLLECTION_OPTIONS[0]);
  const [price, setPrice] = useState<string>(PRICE_OPTIONS[0]);
  const [sortBy, setSortBy] = useState<string>(SORT_BY_OPTIONS[0]);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState<number>(0);
  const [openFilters, setOpenFilters] = useState<boolean>(false);

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
    setFiltersCount();
  }, [category, collection, price, sortBy]);

  return (
    <div
      id="lootbox-cards-display"
      className="h-full max-h-full w-full overflow-y-scroll bg-[#151719] xs:p-6 2xl:p-[52px]"
    >
      <div className="flex flex-nowrap justify-start gap-4 xs:flex-col 2xl:flex-row">
        <div className="flex-wrap gap-4 xs:grid xs:grid-cols-2 xs:items-center xs:justify-center 2xl:flex 2xl:flex-row 2xl:justify-start">
          <SearchBar onSearchChange={handleSearchChange} />
          <MobileFiltersButton
            openFilters={openFilters}
            appliedFiltersCount={appliedFiltersCount}
            toggleFilters={handleToggleFilters}
          />
          {/* desktop lootbox filters */}
          {window.innerWidth > 1536 && (
            <>
              <Filter
                filterName="Category"
                options={CATEGORY_OPTIONS}
                handleFilterChange={handleCategoryChange}
                value={category}
              />
              <Filter
                filterName="Collection"
                options={COLLECTION_OPTIONS}
                handleFilterChange={handleCollectionChange}
                value={collection}
              />
              <Filter filterName="Price" options={PRICE_OPTIONS} handleFilterChange={handlePriceChange} value={price} />
              <Filter
                filterName="Sory by"
                options={SORT_BY_OPTIONS}
                handleFilterChange={handleSortByChange}
                value={sortBy}
              />
            </>
          )}
        </div>
        {/* mobile lootbox filters */}
        <div
          className={`xs:${
            openFilters ? "flex" : "hidden"
          } xs:flex-col xs:items-center xs:justify-around xs:gap-4 xs:rounded-xl xs:border xs:border-solid xs:border-[#2C3034] xs:bg-[#1A1D20] xs:p-6 2xl:hidden`}
        >
          <Filter
            filterName="Category"
            options={CATEGORY_OPTIONS}
            handleFilterChange={handleCategoryChange}
            value={category}
          />
          <Filter
            filterName="Collection"
            options={COLLECTION_OPTIONS}
            handleFilterChange={handleCollectionChange}
            value={collection}
          />
          <Filter filterName="Price" options={PRICE_OPTIONS} handleFilterChange={handlePriceChange} value={price} />
          <Filter
            filterName="Sory by"
            options={SORT_BY_OPTIONS}
            handleFilterChange={handleSortByChange}
            value={sortBy}
          />
        </div>
      </div>
      <div className="mt-9 flex flex-row flex-wrap items-start justify-center gap-4">
        {NFC_CARDS_DATA.filter((nft) => nft.cardTitle.toLowerCase().includes(searchValue.toLowerCase())).map(
          (nft, index) => (
            <NftCard
              key={index}
              cardTitle={nft.cardTitle}
              cost={nft.cost}
              label={nft.label}
              itemsCount={nft.itemsCount}
              icon={nft.icon}
            />
          )
        )}
      </div>
    </div>
  );
};
