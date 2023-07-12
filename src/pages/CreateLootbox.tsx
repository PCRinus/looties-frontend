import { Chat } from "../components/macro/Chat";
import React, { useCallback, useEffect, useState } from "react";
import InfoIcon from "../assets/InfoIcon.svg";
import Discord from "../assets/Discord.svg";
import RedTwitter from "../assets/RedTwitter.svg";
import RedCoins from "../assets/RedCoins.svg";
import EmptyBox from "../assets/EmptyBox.svg";
import SupportChat from "../assets/SupportChat.svg";
import Copy from "../assets/Copy.svg";
import toast from "react-hot-toast";
import { ReduxEvents } from "../reducers/events";
import { NftLootiesCard } from "../components/micro/NftLootiesCard";
import { useDispatch, useSelector } from "react-redux";
import { COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS } from "../mocks/filtersMocks";
import { CustomFilter } from "../components/micro/CustomFilter";
import { MobileFiltersButton } from "../components/micro/MobileFiltersButton";
import axios from "axios";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { EventEmitter } from "events";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;
export const emitter = new EventEmitter();

export const CreateLootbox = () => {
  const [lootboxInput, setlootboxInput] = useState<string>("");
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

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  // const [InputPercentage, setInputPercentage] = useState(0);

  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const handleStateChange = (index: any, value: any, id: any) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value,
    }));
  };

  // const calculateSum = () => {
  //   const sum = Object.values(inputValues).reduce((accumulator: number, currentValue: string) => accumulator + Number(currentValue), 0);
  //   return sum;
  // };

  const checkNumber = () => {
    for (const [key, value] of Object.entries(inputValues)) {
      if (selectedOptions.some((option) => option === key)) {
        const number = Number(value);
        if (number < 0.01 || number > 99.99) {
          return false;
        }
      }
    }
    return true;
  };

  const calculateSum = () => {
    let sum = 0;
    for (const [key, value] of Object.entries(inputValues)) {
      if (selectedOptions.some((option) => option === key)) {
        const number = Number(value);
        sum = sum + number;
      }
    }
    return sum;
  };

  const handleSelectOption = (id: string) => {
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

  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);

  const [selectAll, setSelectAll] = useState(false);

  interface NFT {
    id: string;
    name: string;
    price: number;
    url: string;
  }

  const [list, setList] = useState<NFT[]>([]);
  useEffect(() => {
    const fetchAvailableNFTs = async () => {
      if (user.id) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/lootbox/${user.id}/available-lootbox-items`,
            {
              headers: {
                Authorization: `Bearer ${auth.jwt}`,
              },
            }
          );
          const availableNfts = response?.data.availableNfts;
          setList(availableNfts);
        } catch (error) {
          console.log("Error while fetching your NFTs:", error);
          toast.error("Failed to fetch your NFTs");
        }
      }
    };

    fetchAvailableNFTs();
  }, [user.id]);

  const createLootbox = async () => {
    if (user.id) {
      try {
        const selectedNFTs = list.filter((item) => selectedOptions.includes(item.id));

        const returnData = () => {
          const returndropchance = [];
          for (const [key, value] of Object.entries(inputValues)) {
            if (selectedOptions.some((option) => option === key)) {
              const number = Number(value);
              returndropchance.push([key, number]);
            }
          }
          return returndropchance;
        };

        let dropchance = returnData();

        const nftData = selectedNFTs.map((nft) => {
          const matchingItem = dropchance.find((item: any) => item[0] === nft.id);
          if (matchingItem) {
            const matchedNFT = list.find((item) => item.id === nft.id);
            const imageUrl = matchedNFT ? matchedNFT.url : "";
            return {
              id: nft.id,
              imageUrl: imageUrl,
              dropChance: matchingItem[1].toString(),
            };
          }
          return {
            id: nft.id,
            imageUrl: "",
            dropChance: 0,
          };
        });

        const totalPrice = selectedNFTs.reduce((total, nft) => {
          if (nft.price) {
            return total + Number(nft.price);
          }
          return total;
        }, 0);

        const formattedPrice = totalPrice.toFixed(2);

        const returnValuesEmptyCoins = () => {
          const returnvalues = [];

          for (const [key, value] of Object.entries(inputValues)) {
            if (selectedOptions.some((option) => option === key)) {
              if (key === "coins") {
                returnvalues[0] = Number(value);
              }
              if (key === "empty") {
                returnvalues[1] = Number(value);
              }
            }
          }
          return returnvalues;
        };

        let data = returnValuesEmptyCoins();

        if (checkNumber() === false) {
          toast.error("Percentages for selected items should be between 0.01 and 99.99");
          return;
        }

        if (nftData.length > 1) {
          toast.error("Choose only one NFT");
          return;
        }

        if (calculateSum() === 100) {
          console.log(parseFloat(user.tokensBalance).toFixed(2).toString());
          await axios.post(
            `${process.env.REACT_APP_API_URL}/lootbox/${user.id}/create-lootbox`,
            {
              name: lootboxInput,
              price: formattedPrice,
              tokens: {
                id: "tokens",
                amount: parseFloat(user.tokensBalance).toFixed(2).toString(),
                dropChance: data[0].toString(),
              },
              nft: {
                id: nftData[0]?.id,
                imageUrl: nftData[0]?.imageUrl,
                dropChance: nftData[0]?.dropChance,
              },
              emptyBoxChance: data[1].toString(),
            },
            {
              headers: { Authorization: `Bearer ${auth.jwt}`, "Content-Type": "application/json" },
            }
          );
        } else {
          toast.error("Sum of all percentages must be 100%");
          return;
        }
        dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "CreatedLootbox" } });
        toast.success("Created Lootbox successfully");
      } catch (err) {
        console.log(err);
        toast.error("Lootbox error");
      }
    } else {
      toast.error("You are not logged in!");
    }
  };

  const handleReferralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setlootboxInput(value);
  };

  const copyToClipboard = () => {
    const affiliateCode = `https://looties.app.land/${lootboxInput || "LOOTIES"}`;
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
    const affiliateLink = `https://looties.app/affiliates/${lootboxInput}`;
    const tweetText = `Play Now on Looties! Use my promo code for increased game rewards!`;
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      affiliateLink
    )}&text=${encodeURIComponent(tweetText)}`;
    window.open(shareUrl);
  };

  const handleDiscordShare = () => {
    const affiliateLink = `https://looties.app/affiliates/${lootboxInput}`;
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
                            {lootboxInput.length > 0 ? lootboxInput.length : lootboxInput.toString().length}
                            /14
                          </h1>
                        </div>
                        <div className="flex h-[48px] w-full items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2 md:justify-center">
                          <input
                            type="text"
                            className="h-full w-full flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] px-[5px] py-[3px] font-sans text-sm font-semibold text-white outline-0 md:w-[142px] md:text-base"
                            placeholder={lootboxInput?.toString()}
                            value={lootboxInput}
                            onChange={handleReferralChange}
                            onKeyPress={(event) => {
                              if (event.key === " ") {
                                event.preventDefault();
                              }
                            }}
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
                            {lootboxInput.toString().length > 5
                              ? `${lootboxInput.toString().substring(0, 5)}...`
                              : lootboxInput}
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
                          .filter((nft) => nft?.name?.toLowerCase().includes(searchValue.toLowerCase()))
                          .map((nft, index: number) => (
                            <NftLootiesCard
                              key={index + 2}
                              index={index + 2}
                              id={nft.id}
                              name={nft.name}
                              image={nft.url}
                              minPrice={500}
                              price={nft.price}
                              maxPrice={1600}
                              percentage={100 / 1 - ((1 - 1) * 2) / 1}
                              containerWidth={300}
                              selected={selectAll || selectedOptions.includes(nft.id)}
                              handleStateChange={handleStateChange}
                              withSlider={true}
                              onSelect={handleSelectOption}
                              selectAll={selectAll}
                              inputValue={"" || inputValues[index + 2]} // Pass the inputValue prop
                            />
                          ))}
                        <NftLootiesCard
                          key={"coins"}
                          id={"coins"}
                          index={1000}
                          name={`${parseFloat(user.tokensBalance).toFixed(2)} Coins`}
                          image={RedCoins}
                          minPrice={500}
                          price={700}
                          maxPrice={1600}
                          percentage={100 / 1 - ((1 - 1) * 2) / 1}
                          handleStateChange={handleStateChange}
                          containerWidth={300}
                          selected={selectAll || selectedOptions.includes("coins")}
                          withSlider={false}
                          onSelect={handleSelectOption}
                          selectAll={selectAll}
                          inputValue={"" || inputValues[0]} // Pass the inputValue prop
                        />
                        <NftLootiesCard
                          key={"empty"}
                          id={"empty"}
                          index={1001}
                          name={"Empty Lootobx"}
                          image={EmptyBox}
                          minPrice={500}
                          price={600}
                          maxPrice={1600}
                          percentage={100 / 1 - ((1 - 1) * 2) / 1}
                          handleStateChange={handleStateChange}
                          containerWidth={300}
                          selected={selectAll || selectedOptions.includes("empty")}
                          withSlider={false}
                          onSelect={handleSelectOption}
                          selectAll={selectAll}
                          inputValue={"" || inputValues[1]} // Pass the inputValue prop
                        />
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
                      onClick={createLootbox}
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
        <div className="footer mt-auto flex flex-row items-center justify-center gap-5 border-t-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4 lg:hidden">
          <button className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-[#2C3034] px-[10px] font-sans font-semibold text-white">
            Cancel
          </button>
          <button
            className="flex h-[44.57px] basis-[50%] items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
            onClick={createLootbox}
          >
            Create the lootbox
          </button>
        </div>
      </div>
      <Chat />
    </div>
  );
};
