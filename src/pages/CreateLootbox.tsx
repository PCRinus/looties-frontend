import {Chat} from "../components/macro/Chat";
import React, {useState} from "react";
import InfoIcon from "../assets/InfoIcon.svg";
import Discord from "../assets/Discord.svg";
import RedTwitter from "../assets/RedTwitter.svg";
import SupportChat from "../assets/SupportChat.svg";
import Copy from "../assets/Copy.svg";
import toast from 'react-hot-toast';
import { ReduxEvents } from '../reducers/events';
import { NftLootboxCard } from "../components/micro/NftLootboxCard";
import { useDispatch } from "react-redux";
import {COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS} from "../mocks/filtersMocks";
import { CustomFilter } from "../components/micro/CustomFilter";
import { MobileFiltersButton } from "../components/micro/MobileFiltersButton";


export const CreateLootbox = () => {
    const [referralInput, setReferralInput] = useState<string>('');
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
            selected: true
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
            selected: false

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
            selected: true
        },
        {
            id: 4,
            name: "NFT Card 2",
            image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
            availableToClaim: 2,
            minPrice: 605,
            price:  1200,
            maxPrice: 2332313,
            timeStaked: "1 week",
            atStaking: false,
            locked: true,
            percentage: 50,
            rarity: "Common",
            containerWidth: 250,
            titleSize: 16,
            labelSize: 12,
            selected: true

        },
        {
            id: 5,
            name: "NFT Card 2",
            image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
            availableToClaim: 2,
            minPrice: 343,
            price:  1500,
            maxPrice: 433223,
            timeStaked: "1 week",
            atStaking: false,
            locked: true,
            percentage: 50,
            rarity: "Common",
            containerWidth: 250,
            titleSize: 16,
            labelSize: 12,
            selected: true

        },
        {
            id: 6,
            name: "NFT Card 2",
            image: "/static/media/UserIcon.28f07815f49212bcbab085b61e251b74.svg",
            availableToClaim: 2,
            minPrice: 540,
            price:  1200,
            maxPrice: 5290.321,
            timeStaked: "1 week",
            atStaking: false,
            locked: true,
            percentage: 50,
            rarity: "Common",
            containerWidth: 250,
            titleSize: 16,
            labelSize: 12,
            selected: true

        },
    ];

    const handleReferralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setReferralInput(value);
    };

    const copyToClipboard = () => {
        const affiliateCode = `https://looties.app.land/${randomGeneratedNumber || 'LOOTIES'}`;
        navigator.clipboard.writeText(affiliateCode)
            .then(() => {
                return toast.success('Code copied to clipboard!');
            })
            .catch((error) => {
                return toast.error('Failed to copy the code!');
            });
    };
    const notificationsChange = () => {
        setNotifications(!notifications);
    };
    const handleTwitterShare = () => {
        const affiliateLink = `https://looties.app/affiliates/${randomGeneratedNumber}`;
        const tweetText = `Play Now on Looties! Use my promo code for increased game rewards!`;
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(affiliateLink)}&text=${encodeURIComponent(tweetText)}`;
        window.open(shareUrl);
    };

    const handleDiscordShare = () => {
        const affiliateLink = `https://looties.app/affiliates/${randomGeneratedNumber}`;
        const message = `Play Now on Looties! Use my promo code for increased game rewards! ${affiliateLink}`;
        const shareUrl = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0&response_type=code&redirect_uri=${encodeURIComponent(affiliateLink)}&state=${encodeURIComponent(message)}`;
        // TO-DO: Add Discord Bot and replace your_client_id with the bot's client id
        window.open(shareUrl);
    };

    return (
        <div
            className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
            <div className="flex flex-col w-full h-full">
                <div className="flex lg:flex-row flex-col w-full lg:h-full overflow-y-scroll lg:overflow-y-hidden">
                    <div
                        className="flex flex-col lg:max-w-[392px] gap-10 h-full max-h-full w-full lg:overflow-y-scroll bg-[#151719] xs:px-6 xs:pt-8 2xl:py-[52px] 2xl:pl-[52px] 2xl:pr-0 ">
                        <div className="h-full max-h-full w-full gap-10 bg-[#151719] flex flex-col">
                            <div
                                className="rounded-xl w-full text-white">
                                <div
                                    className="autoheight w-full"
                                >
                                    <div
                                        className={`flex rounded-[12px] relative bg-[#1A1D20] flex-col p-[24px] md:p-[32px] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px]`}
                                    >
                                        <div className="flex flex-col items-start gap-4 justify-start mt-2">
                                            <div className="flex flex-col items-start justify-center gap-2 lg:w-[275px] w-full">
                                                <div className="flex flex-row items-center justify-between w-full">
                                                    <h1 className="text-[#848B8D] font-semibold text-xs">Name lootbox</h1>
                                                    <h1 className="text-[#848B8D] font-semibold text-xs">{referralInput.length > 0 ? referralInput.length : randomGeneratedNumber.toString().length}/14</h1>
                                                </div>
                                                <div
                                                    className="w-full p-[7px] gap-2 h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans">
                                                    <input
                                                        type="text"
                                                        className="py-[3px] px-[5px] outline-0 h-full w-full md:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-white flex-1 justify-center items-center font-sans"
                                                        placeholder={randomGeneratedNumber.toString()} value={referralInput}
                                                        onChange={handleReferralChange}
                                                        maxLength={14}
                                                    />
                                                    <button
                                                        className="w-[77px] ml-auto h-full px-[8px] top-[56-px] bg-transparent text-[#F03033] rounded-xl flex justify-center items-center"
                                                        >
                                        <span className="text-[#F03033] font-bold text-base font-sans">
                                         Change
                                         </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-col items-start justify-center gap-2 lg:w-[275px] mt-2 w-full">
                                                <div
                                                    className="py-[7px] px-[10px] gap-2 w-full lg:max-w-[278px] h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-between items-center font-sans">
                                                    <div className="flex flex-row items-center justify-center gap-2">
                                                        <h1 className="p-[3px] outline-0 h-full bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-white flex-1 justify-center items-center font-sans">
                                                            Notifications
                                                        </h1>
                                                        <img src={InfoIcon} className="w-4 h-4" alt="info-icon-svg"></img>
                                                    </div>

                                                    <button
                                                        className={`w-[48px] ml-auto h-[63%] mr-[6px] px-[2px] top-[56-px] ${notifications ? 'bg-gray-500' : 'bg-[#F03033]'} border transition-all duration-200 border-[#2C3034] rounded-2xl flex items-center justify-start `}
                                                        onClick={notificationsChange}>
                                                        <div className={`flex bg-white rounded-full transition-all duration-200 h-3 w-3 ${notifications ? '' : 'translate-x-7'}`}>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-2 w-full">
                                                <h1 className="text-[#848B8D] font-semibold text-xs">Copy and share your
                                                    lootbox</h1>
                                                <div
                                                    className="p-[7px] gap-2 w-full lg:max-w-[278px] h-[48px] bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 flex justify-start md:justify-center items-center font-sans">
                                                    <h1 className="p-[3px] outline-0 h-full w-full lg:w-[142px] bg-[#1E2023] border border-[#1E2023] rounded font-semibold md:text-base text-sm text-white flex-1 justify-center items-center font-sans">
                                                        https://looties.app/{randomGeneratedNumber.toString().length > 5 ? `${randomGeneratedNumber.toString().substring(0, 5)}...` : randomGeneratedNumber}
                                                    </h1>
                                                    <button className="flex justify-center items-center mr-[8px]"
                                                            onClick={copyToClipboard}>
                                                        <img src={Copy} alt="copy-icon-svg" className="w-4 h-4"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start min-w-[155px] justify-center gap-4">
                                                <h1 className="text-[#848B8D] font-semibold text-xs">Share your lootbox in
                                                    social</h1>
                                                <div className="flex flex-row justify-center items-center gap-2">
                                                    <div>
                                                        <button
                                                            className="w-[48px] h-[48px] active_modal bg-custom_gray_1 border rounded-xl flex justify-center items-center"
                                                            onClick={handleTwitterShare}>
                                                            <img src={RedTwitter} alt="twitter-icon-svg" className="w-5 h-5"/>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button
                                                            className="w-[48px] h-[48px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center"
                                                            onClick={handleDiscordShare}>
                                                            <img src={Discord} alt="discord-icon-svg" className="w-5 h-5"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="rounded-xl hidden lg:flex w-full text-white">
                                <div
                                    className="autoheight w-full"
                                >
                                    <div
                                        className="footer flex flex-col items-center justify-between gap-5 rounded-[12px] mb-10 bg-[#1A1D20] px-8 py-4">
                                        <div className="flex items-center gap-2">
                                <span
                                    className="text-xl text-[#DFDFDF] text-center font-bold">If you have an issue ?</span>
                                        </div>
                                        <div className="flex items-center gap-2 w-full">
                                            <button
                                                className="min-w-[204px] w-full gap-2 leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans">
                                                <img src={SupportChat} alt="Support Chat"/>
                                                <span>
                                    Contact support
                                    </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:h-full mb-2 lg:max-h-full w-full lg:overflow-y-scroll bg-[#151719] xs:px-6 xs:pt-8 2xl:p-[52px]">
                        <div
                            className="autoheight w-full"
                        >
                            <div
                                className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                                <div className="mx-auto flex items-center gap-2 md:pl-[30px]">
                                    <span className="text-2xl text-[#DFDFDF] font-bold">Create a lootbox</span>
                                </div>
                            </div>
                            <div
                                className={`flex relative flex-col text-[14px] bg-[#1a1d20] font-semibold leading-5 text-[#848B8D] sm:text-[16px]`}
                            >
                                <div className="flex flex-col lg:autoheight w-full lg:modal--content lg:h-[calc(100vh - 144px)] lg:justify-start" onClick={e => e.stopPropagation()}>
                                    <div className="flex flex-nowrap justify-start gap-4 xs:flex-col 2xl:flex-row mx-[32px] mt-6">
                                        <div className="flex flex-wrap gap-4 xs:grid xs:grid-cols-2 xs:items-center xs:justify-center 2xl:flex 2xl:flex-row 2xl:justify-start">
                                            <input type="text" placeholder="Search..." onChange={handleSearchChange} className="p-[15px] 2xl:w-[215px] flex-1 outline-0 h-10 md:h-[44.57px] border border-custom_gray_1 rounded-xl bg-transparent font-semibold text-custom_gray_2 justify-center items-center font-sans" />
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
                                                        <CustomFilter filterName="Price" options={PRICE_OPTIONS} handleFilterChange={handlePriceChange} value={price} />
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
                                                value={price} />
                                            <CustomFilter
                                                filterName="Sort by"
                                                options={SORT_BY_OPTIONS}
                                                handleFilterChange={handleSortByChange}
                                                value={sortBy}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center m-[32px]">
                                        <div className="font-bold">
                                            All NFT’s <span className="text-[#F03033]">({list.length})</span>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-3">
                                            <div className="font-bold hidden lg:block">
                                                <span className="text-[#F03033]">({selectedOptions.length})</span> NFT’s selected
                                            </div>
                                            <button className="w-[100px] outline-0 text-xs h-8 text-custom_gray_2 bg-custom_gray_1 border border-custom_gray_1 rounded-lg font-semibold flex justify-center items-center font-sans" onClick={handleUnselectAll}>
                                                Unselect all
                                            </button>
                                            <button className="w-[87px] outline-0 text-xs h-8 bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-bold text-white flex justify-center items-center font-sans" onClick={handleSelectAll}>
                                                Select all
                                            </button>

                                        </div>
                                    </div>
                                    <div className={`noscroll flex flex-col px-[32px] h-auto lg:h-[355px] mb-6 lg:overflow-y-auto lg:max-h-[500px]`}>

                                        <div className='flex flex-row content-cardbox mb-8 lg:mb-0' >
                                            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 row-cardbox w-full">

                                                {list.filter((nft) => nft.name.toLowerCase().includes(searchValue.toLowerCase())).map(nft => (
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
                                                        percentage={100 / 1 - ((1 - 1) * 2 / 1)}
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

                                    <div className="pointer-events-none absolute bottom-0 lg:bottom-[77px] w-full h-[85px] bg-gradient-to-b from-transparent to-[#151719]"></div>
                                    <div className="flex flex-row hidden lg:flex footer bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 rounded-b-[12px] mt-auto">
                                        <button className="basis-[50%] h-[44.57px] px-[10px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans">
                                            Cancel
                                        </button>
                                        <button className="basis-[50%] leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({type: ReduxEvents.OpenModal, payload: {modal: 'CreatedLootbox'}})}>
                                            Create the lootbox
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col lg:max-w-[392px] lg:hidden gap-10 max-h-full w-full lg:overflow-y-scroll bg-[#151719] px-6 pt-2 pb-10 2xl:py-[52px] 2xl:pl-[52px] 2xl:pr-0 ">
                        <div className="rounded-xl flex lg:hidden w-full text-white">
                            <div
                                className="autoheight w-full"
                            >
                                <div
                                    className="footer flex flex-col items-center justify-between gap-5 rounded-[12px] mb-4 bg-[#1A1D20] px-8 py-6">
                                    <div className="flex items-center gap-2">
                                <span
                                    className="text-xl text-[#DFDFDF] text-center font-bold">If you have an issue ?</span>
                                    </div>
                                    <div className="flex items-center gap-2 w-full">
                                        <button
                                            className="lg:basis-[50%] w-full min-w-[204px] gap-2 leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans">
                                            <img src={SupportChat} alt="Support Chat"/>
                                            <span>
                                    Contact support
                                    </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex lg:hidden footer bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 mt-auto">
                    <button className="basis-[50%] h-[44.57px] px-[10px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans">
                        Cancel
                    </button>
                    <button className="basis-[50%] leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans"
                            onClick={() => {
                        dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "CreatedLootbox" } });
                    }}>
                        Create the lootbox
                    </button>
                </div>
            </div>
            <Chat/>
        </div>
    );
};
