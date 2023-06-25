import { ReduxEvents } from '../../reducers/events';
import { ReactComponent as Close } from '../../assets/Close.svg';
import { NftModalCard } from '../micro/NftModalCard';
import { useDispatch } from "react-redux";
import {CATEGORY_OPTIONS, COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS} from "../../mocks/filtersMocks";
import { CustomFilter } from "../micro/CustomFilter";
import React, {useState} from "react";
import RedArrowDown from "../../assets/RedArrowDown.svg";
import { MobileFiltersButton } from "../micro/MobileFiltersButton";



const WithdrawNft = () => {

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

    const [selectedOption, setSelectedOption] = useState('Withdraw NFT\'s');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    if (selectedOption === 'Withdraw NFT\'s') {
    } else if (selectedOption === 'Withdraw coins') {
        dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'WithdrawCoins' } })
    } else if (selectedOption === 'Add coins') {
        dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'AddCoins' } })
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
            selected: true
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
            selected: false

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
            selected: true
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
            selected: true

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
            selected: true

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
            selected: true

        },
    ];

    return (
        <div className="flex--column w-[100vw] autoheight md:w-[81vw] lg:w-[986px] modal--content"   style={{ height: `calc(100vh - 144px)`, justifyContent: 'start' }} onClick={e => e.stopPropagation()}>
            <div className="hidden md:flex flex-wrap  justify-start items-center gap-4 mt-[32px] mx-[32px]">
                <div className="">
                    <div>
                        <button className="w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'AddCoins' } })}>
                            <span className="text-custom_gray_2 font-semibold text-base font-sans">
                         Add coins
                        </span>
                        </button>
                    </div>
                </div>
                <div className="">
                    <div>
                        <button className="w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'WithdrawCoins' } })}>
                            <span className="text-custom_gray_2 font-semibold text-base font-sans">
                         Withdraw coins
                        </span>
                        </button>
                    </div>
                </div>
                <div className="">
                    <div>
                        <button className="w-auto active_modal px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center">
                            <span className="text-[#F03033] font-semibold text-base font-sans">
                         Withdraw NFT'S
                        </span>
                        </button>
                    </div>

                </div>
                <div className="close close--unset ml-auto" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    <Close />
                </div>
            </div>

            <div className="flex md:hidden flex-wrap justify-start items-center gap-4 mt-[32px] mx-[32px]">
                <div className="flex-1">
                    <div className="w-full">
                        <div className="relative">
                            <div className="relative inline-block cursor-pointer w-full">
                                <div className="flex items-center gap-2 active_modal justify-center rounded-xl px-4 py-2 h-12" onClick={toggleDropdown}>
                                    <span className="text-[#F03033] font-semibold">{selectedOption}</span>
                                    <img
                                        src={RedArrowDown}
                                        alt="provably-svg-icon"
                                        className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                    />
                                </div>
                                <ul
                                    className={`absolute z-[100] top-full left-0 w-full border border-[#2C3034] bg-[#2C3034] rounded-xl mt-1 overflow-hidden transition-opacity duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                                >
                                    <li className="px-4 py-2 h-12 text-custom_gray_2 bg-[#2C3034] text-base font-sans flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-500 hover:text-white" onClick={() => handleOptionChange('Add coins')}>
                                        Add coins
                                    </li>
                                    <li className="px-4 py-2 h-12 text-custom_gray_2 bg-[#2C3034] text-base border-t-2 border-[#373A3D] font-sans flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-500 hover:text-white" onClick={() => handleOptionChange('Withdraw coins')}>
                                        Withdraw coins
                                    </li>
                                    <li className="px-4 py-2 h-12 text-[#F03033] bg-[#2C3034] text-base border-t-2 border-[#373A3D] font-sans flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-500 hover:text-white" onClick={() => handleOptionChange('Withdraw NFT\'s')}>
                                        Withdraw NFT's
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="close close--unset ml-auto" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    <Close />
                </div>
            </div>
            <div className="flex flex-nowrap justify-start gap-4 xs:flex-col 2xl:flex-row mx-[32px]">
                <div className="flex flex-row gap-4 xs:grid xs:grid-cols-2 xs:items-center xs:justify-center 2xl:flex 2xl:flex-row 2xl:justify-start">
                    <input type="text" placeholder="Search" onChange={handleSearchChange} className="p-[15px] 2xl:w-[215px] flex-1 outline-0 h-10 md:h-[44.57px] border border-custom_gray_1 rounded-xl bg-transparent font-semibold text-custom_gray_2 justify-center items-center font-sans" />
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
            <div className="flex flex-row justify-between items-center mx-[32px]">
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
            <div className={`noscroll flex flex-col px-[32px] h-auto md:h-[355px] overflow-y-auto md:max-h-[500px]`}>

                <div className='flex flex-row content-cardbox' >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 row-cardbox w-full">

                            {list.filter((nft) => nft.name.toLowerCase().includes(searchValue.toLowerCase())).map(nft => (
                                <NftModalCard
                                    key={nft.id}
                                    id={nft.id}
                                    name={nft.name}
                                    image={nft.image}
                                    availableToClaim={nft.availableToClaim}
                                    timeStaked={nft.timeStaked}
                                    atStaking={nft.atStaking}
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

            <div className="pointer-events-none absolute bottom-[77px] w-full h-[136px] bg-gradient-to-b from-transparent to-[#151719]"></div>
            <div className="flex flex-row footer bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 rounded-b-[12px] mt-auto">
                <button className="basis-[50%] h-[44.57px] px-[10px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    Cancel
                </button>
                <button className="basis-[50%] leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                    Withdraw
                </button>
            </div>

        </div>
    )
};

export { WithdrawNft }