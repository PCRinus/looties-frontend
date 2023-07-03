import { ReduxEvents } from "../../reducers/events";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { NftModalCard } from "../micro/NftModalCard";
import { useDispatch } from "react-redux";
import { CATEGORY_OPTIONS, COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS } from "../../mocks/filtersMocks";
import { CustomFilter } from "../micro/CustomFilter";
import React, { useState } from "react";
import RedArrowDown from "../../assets/RedArrowDown.svg";
import { MobileFiltersButton } from "../micro/MobileFiltersButton";

const DepositNft = () => {
  const [collection, setCollection] = useState<string>(COLLECTION_OPTIONS[0]);
  const [price, setPrice] = useState<string>(PRICE_OPTIONS[0]);
  const [category, setCategory] = useState<string>(CATEGORY_OPTIONS[0]);

  const [sortBy, setSortBy] = useState<string>(SORT_BY_OPTIONS[0]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  const [appliedFiltersCount, setAppliedFiltersCount] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleToggleFilters = (event: any) => {
    setOpenFilters(!openFilters);
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectOption = (id: number) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((optionId) => optionId !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleUnselectAll = () => {
    setSelectedOptions([]);
    setSelectAll(false);
  };

  const handleSelectAll = () => {
    const allOptionIds = list.map((card) => card.id);
    setSelectedOptions(allOptionIds);
    setSelectAll(true);
  };

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("Deposit NFT's");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (selectedOption === "Deposit NFT's") {
  } else if (selectedOption === "Withdraw coins") {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "WithdrawCoins" } });
  } else if (selectedOption === "Add coins") {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "AddCoins" } });
  } else if (selectedOption === "Withdraw NFT's") {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "WithdrawNft" } });
  }

  const list = [
    {
      id: 1,
      name: "Looties #255",
      image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
      availableToClaim: 5,
      timeStaked: "2 days",
      atStaking: true,
      locked: false,
      percentage: 80,
      rarity: "Rare",
      containerWidth: 300,
      titleSize: 16,
      labelSize: 12,
      selected: true,
    },
    {
      id: 2,
      name: "Looties #256",
      image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
      availableToClaim: 2,
      timeStaked: "1 week",
      atStaking: false,
      locked: true,
      percentage: 50,
      rarity: "Common",
      containerWidth: 250,
      titleSize: 16,
      labelSize: 12,
      selected: false,
    },
    {
      id: 3,
      name: "Looties #257",
      image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
      availableToClaim: 0,
      timeStaked: "1 month",
      atStaking: true,
      locked: true,
      percentage: 95,
      rarity: "Legendary",
      containerWidth: 350,
      titleSize: 16,
      labelSize: 12,
      selected: true,
    },
    {
      id: 4,
      name: "NFT Card 2",
      image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
      availableToClaim: 2,
      timeStaked: "1 week",
      atStaking: false,
      locked: true,
      percentage: 50,
      rarity: "Common",
      containerWidth: 250,
      titleSize: 16,
      labelSize: 12,
      selected: true,
    },
    {
      id: 5,
      name: "NFT Card 2",
      image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
      availableToClaim: 2,
      timeStaked: "1 week",
      atStaking: false,
      locked: true,
      percentage: 50,
      rarity: "Common",
      containerWidth: 250,
      titleSize: 16,
      labelSize: 12,
      selected: true,
    },
    {
      id: 6,
      name: "NFT Card 2",
      image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
      availableToClaim: 2,
      timeStaked: "1 week",
      atStaking: false,
      locked: true,
      percentage: 50,
      rarity: "Common",
      containerWidth: 250,
      titleSize: 16,
      labelSize: 12,
      selected: true,
    },
  ];

  return (
    <div
      className="flex--column autoheight modal--content w-[100vw] md:w-[81vw] lg:w-[986px]"
      style={{ height: `calc(100vh - 144px)`, justifyContent: "start" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mx-[32px] mt-[32px] hidden  flex-wrap items-center justify-start gap-4 md:flex">
        <div className="">
          <div>
            <button
              className="top-[56-px] flex h-12 w-auto items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 px-[24px]"
              onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "AddCoins" } })}
            >
              <span className="font-sans text-base font-semibold text-custom_gray_2">Add coins</span>
            </button>
          </div>
        </div>
        <div className="">
          <div>
            <button
              className="top-[56-px] flex h-12 w-auto items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 px-[24px]"
              onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "WithdrawCoins" } })}
            >
              <span className="font-sans text-base font-semibold text-custom_gray_2">Withdraw coins</span>
            </button>
          </div>
        </div>
        <div className="">
          <div>
            <button className="active_modal top-[56-px] flex h-12 w-auto items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 px-[24px]">
              <span className="font-sans text-base font-semibold text-[#F03033]">Deposit NFT'S</span>
            </button>
          </div>
        </div>
        <div className="">
          <div>
            <button
              className="top-[56-px] flex h-12 w-auto items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1 px-[24px]"
              onClick={() => {
                dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "WithdrawNft" } });
              }}
            >
              <span className="font-sans text-base font-semibold text-custom_gray_2">Withdraw NFT'S</span>
            </button>
          </div>
        </div>
        <div
          className="close close--unset ml-auto"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          <Close />
        </div>
      </div>

      <div className="mx-[32px] mt-[32px] flex flex-wrap items-center justify-start gap-4 md:hidden">
        <div className="flex-1">
          <div className="w-full">
            <div className="relative">
              <div className="relative inline-block w-full cursor-pointer">
                <div
                  className="active_modal flex h-12 items-center justify-center gap-2 rounded-xl px-4 py-2"
                  onClick={toggleDropdown}
                >
                  <span className="font-semibold text-[#F03033]">{selectedOption}</span>
                  <img
                    src={RedArrowDown}
                    alt="provably-svg-icon"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180 transform" : ""
                    }`}
                  />
                </div>
                <ul
                  className={`absolute left-0 top-full z-[100] mt-1 w-full transform overflow-hidden rounded-xl border border-[#2C3034] bg-[#2C3034] transition-opacity duration-300 ease-in-out ${
                    isDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  }`}
                >
                  <li
                    className="flex h-12 cursor-pointer items-center justify-center bg-[#2C3034] px-4 py-2 font-sans text-base font-semibold text-custom_gray_2 hover:bg-gray-500 hover:text-white"
                    onClick={() => handleOptionChange("Add coins")}
                  >
                    Add coins
                  </li>
                  <li
                    className="flex h-12 cursor-pointer items-center justify-center border-t-2 border-[#373A3D] bg-[#2C3034] px-4 py-2 font-sans text-base font-semibold text-custom_gray_2 hover:bg-gray-500 hover:text-white"
                    onClick={() => handleOptionChange("Withdraw coins")}
                  >
                    Withdraw coins
                  </li>
                  <li
                    className="flex h-12 cursor-pointer items-center justify-center border-t-2 border-[#373A3D] bg-[#2C3034] px-4 py-2 font-sans text-base font-semibold text-[#F03033] hover:bg-gray-500 hover:text-white"
                    onClick={() => handleOptionChange("Deposit NFT's")}
                  >
                    Deposit NFT's
                  </li>
                  <li
                    className="custom_gray_2 flex h-12 cursor-pointer items-center justify-center border-t-2 border-[#373A3D] bg-[#2C3034] px-4 py-2 font-sans text-base font-semibold text-custom_gray_2 hover:bg-gray-500 hover:text-white"
                    onClick={() => handleOptionChange("Withdraw NFT's")}
                  >
                    Withdraw NFT's
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="close close--unset ml-auto"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          <Close />
        </div>
      </div>
      <div className="mx-[32px] flex flex-nowrap justify-start gap-4 xs:flex-col 2xl:flex-row">
        <div className="flex flex-row gap-4 xs:grid xs:grid-cols-2 xs:items-center xs:justify-center 2xl:flex 2xl:flex-row 2xl:justify-start">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
            className="h-10 flex-1 items-center justify-center rounded-xl border border-custom_gray_1 bg-transparent p-[15px] font-sans font-semibold text-custom_gray_2 outline-0 md:h-[44.57px] 2xl:w-[215px]"
          />
          {/* desktop lootbox filters */}
          <span className="flex md:hidden">
            <MobileFiltersButton
              openFilters={openFilters}
              appliedFiltersCount={appliedFiltersCount}
              toggleFilters={handleToggleFilters}
            />
          </span>
          <span className="hidden md:flex">
            <CustomFilter
              filterName="Collection"
              options={COLLECTION_OPTIONS}
              handleFilterChange={handleCollectionChange}
              value={collection}
            />
          </span>
          <span className="hidden md:flex">
            <CustomFilter
              filterName="Price"
              options={PRICE_OPTIONS}
              handleFilterChange={handlePriceChange}
              value={price}
            />
          </span>
          <span className="hidden md:flex">
            <CustomFilter
              filterName="Sort by"
              options={SORT_BY_OPTIONS}
              handleFilterChange={handleSortByChange}
              value={sortBy}
            />
          </span>
        </div>
        {/* mobile lootbox filters */}
        <div
          className={`xs:${
            openFilters ? "flex" : "hidden"
          } xs:flex-col xs:items-center xs:justify-around xs:gap-4 xs:rounded-xl xs:border xs:border-solid xs:border-[#2C3034] xs:bg-[#1A1D20] xs:p-6 md:hidden`}
        >
          <CustomFilter
            filterName="Collection"
            options={COLLECTION_OPTIONS}
            handleFilterChange={handleCollectionChange}
            value={collection}
          />
          <CustomFilter
            filterName="Price"
            options={PRICE_OPTIONS}
            handleFilterChange={handlePriceChange}
            value={price}
          />
          <CustomFilter
            filterName="Sort by"
            options={SORT_BY_OPTIONS}
            handleFilterChange={handleSortByChange}
            value={sortBy}
          />
        </div>
      </div>
      <div className="mx-[32px] flex flex-row items-center justify-between">
        <div className="font-bold">
          All NFT’s <span className="text-[#F03033]">({list.length})</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="hidden font-bold lg:block">
            <span className="text-[#F03033]">({selectedOptions.length})</span> NFT’s selected
          </div>
          <button
            className="flex h-8 w-[100px] items-center justify-center rounded-lg border border-custom_gray_1 bg-custom_gray_1 font-sans text-xs font-semibold text-custom_gray_2 outline-0"
            onClick={handleUnselectAll}
          >
            Unselect all
          </button>
          <button
            className="flex h-8 w-[87px] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans text-xs font-bold text-white outline-0"
            onClick={handleSelectAll}
          >
            Select all
          </button>
        </div>
      </div>
      <div className={`noscroll flex h-auto flex-col overflow-y-auto px-[32px] md:h-[355px] md:max-h-[500px]`}>
        <div className="content-cardbox flex flex-row">
          <div className="row-cardbox grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {list
              .filter((nft) => nft.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((nft) => (
                <NftModalCard
                  key={nft.id}
                  id={nft.id}
                  name={nft.name}
                  image={nft.image}
                  availableToClaim={nft.availableToClaim}
                  timeStaked={nft.timeStaked}
                  atStaking={nft.atStaking}
                  locked={nft.locked}
                  percentage={100 / 1 - ((1 - 1) * 2) / 1}
                  rarity={nft.rarity}
                  containerWidth={nft.containerWidth}
                  labelSize={nft.labelSize}
                  titleSize={nft.titleSize}
                  selected={selectAll || selectedOptions.includes(nft.id)}
                  onSelect={handleSelectOption}
                  selectAll={selectAll}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[77px] h-[136px] w-full bg-gradient-to-b from-transparent to-[#151719]"></div>
      <div className="footer mt-auto flex flex-row items-center justify-center gap-5 rounded-b-[12px] border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] px-[10px] font-sans font-semibold text-white"
          onClick={() => {
            dispatch({ type: ReduxEvents.CloseModal });
          }}
        >
          Cancel
        </button>
        <button
          className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
          onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "Wallet" } })}
        >
          Deposit
        </button>
      </div>
    </div>
  );
};

export { DepositNft };