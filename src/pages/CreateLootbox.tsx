import { Chat } from "../components/macro/Chat";
import React, { useState } from "react";
import InfoIcon from "../assets/InfoIcon.svg";
import Discord from "../assets/Discord.svg";
import RedTwitter from "../assets/RedTwitter.svg";
import SupportChat from "../assets/SupportChat.svg";
import Copy from "../assets/Copy.svg";
import toast from "react-hot-toast";
import { ReduxEvents } from "../reducers/events";
import { NftLootboxCard } from "../components/micro/NftLootboxCard";
import { useDispatch } from "react-redux";
import { COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS } from "../mocks/filtersMocks";
import { CustomFilter } from "../components/micro/CustomFilter";
import { MobileFiltersButton } from "../components/micro/MobileFiltersButton";

export const CreateLootbox = () => {
  const [referralInput, setReferralInput] = useState<string>("");
  const randomGeneratedNumber = Math.random().toString(36).substring(2, 12);

  const [notifications, setNotifications] = useState(false);
  const [collection, setCollection] = useState<string>(COLLECTION_OPTIONS[0]);
  const [price, setPrice] = useState<string>(PRICE_OPTIONS[0]);
  const [sortBy, setSortBy] = useState<string>(SORT_BY_OPTIONS[0]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [appliedFiltersCount, setAppliedFiltersCount] = useState<number>(0);

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

  const list = [
    {
      id: 1,
      name: "Looties #255",
      image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
      availableToClaim: 5,
      minPrice: 600,
      price: 1200,
      maxPrice: 1500,
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
      minPrice: 630,
      price: 1200,
      maxPrice: 1203,
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
      minPrice: 232,
      price: 1200,
      maxPrice: 3212332,
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
      minPrice: 605,
      price: 1200,
      maxPrice: 2332313,
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
      minPrice: 343,
      price: 1500,
      maxPrice: 433223,
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
      minPrice: 540,
      price: 1200,
      maxPrice: 5290.321,
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

  const handleReferralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setReferralInput(value);
  };

  const copyToClipboard = () => {
    const affiliateCode = `https://looties.app.land/${randomGeneratedNumber || "LOOTIES"}`;
    navigator.clipboard
      .writeText(affiliateCode)
      .then(() => {
        return toast.success("Code copied to clipboard!");
      })
      .catch((error) => {
        return toast.error("Failed to copy the code!");
      });
  };
  const notificationsChange = () => {
    setNotifications(!notifications);
  };
  const handleTwitterShare = () => {
    const affiliateLink = `https://looties.app/affiliates/${randomGeneratedNumber}`;
    const tweetText = `Play Now on Looties! Use my promo code for increased game rewards!`;
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      affiliateLink
    )}&text=${encodeURIComponent(tweetText)}`;
    window.open(shareUrl);
  };

  const handleDiscordShare = () => {
    const affiliateLink = `https://looties.app/affiliates/${randomGeneratedNumber}`;
    const message = `Play Now on Looties! Use my promo code for increased game rewards! ${affiliateLink}`;
    const shareUrl = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0&response_type=code&redirect_uri=${encodeURIComponent(
      affiliateLink
    )}&state=${encodeURIComponent(message)}`;
    // TO-DO: Add Discord Bot and replace your_client_id with the bot's client id
    window.open(shareUrl);
  };

  return (
    <div className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full flex-col overflow-y-scroll lg:h-full lg:flex-row lg:overflow-y-hidden">
          <div className="flex h-full max-h-full w-full flex-col gap-10 bg-[#151719] xs:px-6 xs:pt-8 lg:max-w-[392px] lg:overflow-y-scroll 2xl:py-[52px] 2xl:pl-[52px] 2xl:pr-0 ">
            <div className="flex h-full max-h-full w-full flex-col gap-10 bg-[#151719]">
              <div className="w-full rounded-xl text-white">
                <div className="autoheight w-full">
                  <div
                    className={`relative flex flex-col rounded-[12px] bg-[#1A1D20] p-[24px] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px] md:p-[32px]`}
                  >
                    <div className="mt-2 flex flex-col items-start justify-start gap-4">
                      <div className="flex w-full flex-col items-start justify-center gap-2 lg:w-[275px]">
                        <div className="flex w-full flex-row items-center justify-between">
                          <h1 className="text-xs font-semibold text-[#848B8D]">Name lootbox</h1>
                          <h1 className="text-xs font-semibold text-[#848B8D]">
                            {referralInput.length > 0 ? referralInput.length : randomGeneratedNumber.toString().length}
                            /14
                          </h1>
                        </div>
                        <div className="flex h-[48px] w-full items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2 md:justify-center">
                          <input
                            type="text"
                            className="h-full w-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] px-[5px] py-[3px] font-sans text-sm font-semibold text-white outline-0 md:w-[142px] md:text-base"
                            placeholder={randomGeneratedNumber.toString()}
                            value={referralInput}
                            onChange={handleReferralChange}
                            maxLength={14}
                          />
                          <button className="top-[56-px] ml-auto flex h-full w-[77px] items-center justify-center rounded-xl bg-transparent px-[8px] text-[#F03033]">
                            <span className="font-sans text-base font-bold text-[#F03033]">Change</span>
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 flex w-full flex-col items-start justify-center gap-2 lg:w-[275px]">
                        <div className="flex h-[48px] w-full items-center justify-between gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] px-[10px] py-[7px] font-sans font-semibold text-custom_gray_2 lg:max-w-[278px]">
                          <div className="flex flex-row items-center justify-center gap-2">
                            <h1 className="h-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-sm font-semibold text-white outline-0 md:text-base">
                              Notifications
                            </h1>
                            <img src={InfoIcon} className="h-4 w-4" alt="info-icon-svg"></img>
                          </div>

                          <button
                            className={`top-[56-px] ml-auto mr-[6px] h-[63%] w-[48px] px-[2px] ${
                              notifications ? "bg-gray-500" : "bg-[#F03033]"
                            } flex items-center justify-start rounded-2xl border border-[#2C3034] transition-all duration-200 `}
                            onClick={notificationsChange}
                          >
                            <div
                              className={`flex h-3 w-3 rounded-full bg-white transition-all duration-200 ${
                                notifications ? "" : "translate-x-7"
                              }`}
                            ></div>
                          </button>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-start justify-center gap-2">
                        <h1 className="text-xs font-semibold text-[#848B8D]">Copy and share your lootbox</h1>
                        <div className="flex h-[48px] w-full items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2 md:justify-center lg:max-w-[278px]">
                          <h1 className="h-full w-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-sm font-semibold text-white outline-0 md:text-base lg:w-[142px]">
                            https://looties.app/
                            {randomGeneratedNumber.toString().length > 5
                              ? `${randomGeneratedNumber.toString().substring(0, 5)}...`
                              : randomGeneratedNumber}
                          </h1>
                          <button className="mr-[8px] flex items-center justify-center" onClick={copyToClipboard}>
                            <img src={Copy} alt="copy-icon-svg" className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex min-w-[155px] flex-col items-start justify-center gap-4">
                        <h1 className="text-xs font-semibold text-[#848B8D]">Share your lootbox in social</h1>
                        <div className="flex flex-row items-center justify-center gap-2">
                          <div>
                            <button
                              className="active_modal flex h-[48px] w-[48px] items-center justify-center rounded-xl border bg-custom_gray_1"
                              onClick={handleTwitterShare}
                            >
                              <img src={RedTwitter} alt="twitter-icon-svg" className="h-5 w-5" />
                            </button>
                          </div>
                          <div>
                            <button
                              className="flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-custom_gray_1 bg-custom_gray_1"
                              onClick={handleDiscordShare}
                            >
                              <img src={Discord} alt="discord-icon-svg" className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-full rounded-xl text-white lg:flex">
                <div className="autoheight w-full">
                  <div className="footer mb-10 flex flex-col items-center justify-between gap-5 rounded-[12px] bg-[#1A1D20] px-8 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-center text-xl font-bold text-[#DFDFDF]">If you have an issue ?</span>
                    </div>
                    <div className="flex w-full items-center gap-2">
                      <button className="flex h-[44.57px] w-full min-w-[204px] items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white">
                        <img src={SupportChat} alt="Support Chat" />
                        <span>Contact support</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 w-full bg-[#151719] xs:px-6 xs:pt-8 lg:h-full lg:max-h-full lg:overflow-y-scroll 2xl:p-[52px]">
            <div className="autoheight w-full">
              <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                <div className="mx-auto flex items-center gap-2 md:pl-[30px]">
                  <span className="text-2xl font-bold text-[#DFDFDF]">Create a lootbox</span>
                </div>
              </div>
              <div
                className={`relative flex flex-col bg-[#1a1d20] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px]`}
              >
                <div
                  className="lg:autoheight lg:modal--content lg:h-[calc(100vh - 144px)] flex w-full flex-col lg:justify-start"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mx-[32px] mt-6 flex flex-nowrap justify-start gap-4 xs:flex-col 2xl:flex-row">
                    <div className="flex flex-wrap gap-4 xs:grid xs:grid-cols-2 xs:items-center xs:justify-center 2xl:flex 2xl:flex-row 2xl:justify-start">
                      <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearchChange}
                        className="h-10 flex-1 items-center justify-center rounded-xl border border-custom_gray_1 bg-transparent p-[15px] font-sans font-semibold text-custom_gray_2 outline-0 md:h-[44.57px] 2xl:w-[215px]"
                      />
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
                  <div className="m-[32px] flex flex-row items-center justify-between">
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
                  <div
                    className={`noscroll mb-6 flex h-auto flex-col px-[32px] lg:h-[355px] lg:max-h-[500px] lg:overflow-y-auto`}
                  >
                    <div className="content-cardbox mb-8 flex flex-row lg:mb-0">
                      <div className="row-cardbox grid w-full grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
                        {list
                          .filter((nft) => nft.name.toLowerCase().includes(searchValue.toLowerCase()))
                          .map((nft) => (
                            <NftLootboxCard
                              key={nft.id}
                              id={nft.id}
                              name={nft.name}
                              image={nft.image}
                              availableToClaim={nft.availableToClaim}
                              timeStaked={nft.timeStaked}
                              atStaking={nft.atStaking}
                              minPrice={nft.minPrice}
                              price={nft.price}
                              maxPrice={nft.maxPrice}
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

                  <div className="pointer-events-none absolute bottom-0 h-[85px] w-full bg-gradient-to-b from-transparent to-[#151719] lg:bottom-[77px]"></div>
                  <div className="footer mt-auto flex hidden flex-row items-center justify-center gap-5 rounded-b-[12px] border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4 lg:flex">
                    <button className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] px-[10px] font-sans font-semibold text-white">
                      Cancel
                    </button>
                    <button
                      className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
                      onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "CreatedLootbox" } })}
                    >
                      Create the lootbox
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-h-full w-full flex-col gap-10 bg-[#151719] px-6 pb-10 pt-2 lg:hidden lg:max-w-[392px] lg:overflow-y-scroll 2xl:py-[52px] 2xl:pl-[52px] 2xl:pr-0 ">
            <div className="flex w-full rounded-xl text-white lg:hidden">
              <div className="autoheight w-full">
                <div className="footer mb-4 flex flex-col items-center justify-between gap-5 rounded-[12px] bg-[#1A1D20] px-8 py-6">
                  <div className="flex items-center gap-2">
                    <span className="text-center text-xl font-bold text-[#DFDFDF]">If you have an issue ?</span>
                  </div>
                  <div className="flex w-full items-center gap-2">
                    <button className="flex h-[44.57px] w-full min-w-[204px] items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white lg:basis-[50%]">
                      <img src={SupportChat} alt="Support Chat" />
                      <span>Contact support</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer mt-auto flex flex flex-row items-center justify-center gap-5 border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4 lg:hidden">
          <button className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] px-[10px] font-sans font-semibold text-white">
            Cancel
          </button>
          <button
            className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
            onClick={() => {
              dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "CreatedLootbox" } });
            }}
          >
            Create the lootbox
          </button>
        </div>
      </div>
      <Chat />
    </div>
  );
};
