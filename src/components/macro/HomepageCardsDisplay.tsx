import { useState } from "react";
import { Filter } from "../micro/Filter";
import { SearchBar } from "../micro/SearchBar";
import { NFC_CARDS_DATA } from "../../mocks/nftsMocks";
import { NftCard } from "../micro/NftCard";
import { CATEGORY_OPTIONS, COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS } from "../../mocks/filtersMocks";

const HomepageCardsDisplay: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>(CATEGORY_OPTIONS[0]);
  const [collection, setCollection] = useState<string>(COLLECTION_OPTIONS[0]);
  const [price, setPrice] = useState<string>(PRICE_OPTIONS[0]);
  const [sortBy, setSortBy] = useState<string>(SORT_BY_OPTIONS[0]);

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

  return (
    <div
      id="homepage-cards-display"
      className="h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] w-full overflow-y-scroll bg-[#151719] p-[52px]"
    >
      <div className="flex flex-row flex-wrap justify-start gap-4">
        <SearchBar onSearchChange={handleSearchChange} />
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
        <Filter filterName="Sory by" options={SORT_BY_OPTIONS} handleFilterChange={handleSortByChange} value={sortBy} />
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
export default HomepageCardsDisplay;
