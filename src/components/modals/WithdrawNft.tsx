import { ReduxEvents } from '../../reducers/events';
import { ReactComponent as Close } from '../../assets/Close.svg';
import { NftModalCard } from '../micro/NftModalCard';
import { useDispatch } from "react-redux";
import {COLLECTION_OPTIONS, PRICE_OPTIONS, SORT_BY_OPTIONS} from "../../mocks/filtersMocks";
import { Filter } from "../micro/Filter";
import {useState} from "react";


const WithdrawNft = () => {

    const [collection, setCollection] = useState<string>(COLLECTION_OPTIONS[0]);
    const [price, setPrice] = useState<string>(PRICE_OPTIONS[0]);
    const [sortBy, setSortBy] = useState<string>(SORT_BY_OPTIONS[0]);
    const [searchValue, setSearchValue] = useState<string>("");

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
        <div className="flex--column w-[90vw] md:w-[60vw] lg:w-[986px] modal--content" onClick={e => e.stopPropagation()}>
            <div className="close" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                <Close />
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4 mt-[32px] ml-[32px]">
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
                <div className=" mr-20">
                    <div>
                        <button className="active_modal w-auto px-[24px] h-12 top-[56-px] bg-custom_gray_1 border border-custom_gray_1 rounded-xl flex justify-center items-center">
                            <span className="text-[#F03033] font-semibold text-base font-sans">
                         Withdraw NFT'S
                        </span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="justify-start items-center gap-4 mx-[32px] hidden lg:flex">
                <input type="text" placeholder="Search" onChange={handleSearchChange} className="p-[10px] outline-0 w-[363px] h-[44.57px] bg-custom_gray_1 border border-custom_gray_1 rounded-lg font-semibold text-custom_gray_2 flex justify-center items-center font-sans" />
                <Filter
                    filterName="Collection"
                    options={COLLECTION_OPTIONS}
                    handleFilterChange={handleCollectionChange}
                    value={collection}
                />
                <Filter
                    filterName="Price"
                    options={PRICE_OPTIONS}
                    handleFilterChange={handlePriceChange}
                    value={price}
                />
                <Filter
                    filterName="Sort by"
                    options={SORT_BY_OPTIONS}
                    handleFilterChange={handleSortByChange}
                    value={sortBy}
                />
            </div>
            <div className="flex flex-row justify-between items-center ml-[32px]">
                <div className="font-bold">
                    All NFT’s <span className="text-[#F03033]">({list.length})</span>
                </div>
                <div className="mr-4 flex flex-row justify-center items-center gap-3">
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
            <div className={`noscroll flex flex-col px-[32px] h-[355px] overflow-y-auto`} style={{ maxHeight: '500px' }}>

                <div className='flex flex-row content-cardbox' >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 row-cardbox w-full">

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

            <div className="flex flex-row footer bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 rounded-b-[12px]">
                <button className="basis-[50%] h-[44.57px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    Cancel
                </button>
                <button className="basis-[50%] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'Wallet' } })}>
                    Withdraw
                </button>
            </div>

        </div>
    )
};

export { WithdrawNft }