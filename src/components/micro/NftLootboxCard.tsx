import React, { useState, useEffect } from "react";
import WhiteCheckmark from "../../assets/WhiteCheckmark.svg";
import "../../styles/micro/NftLootboxCard.scss";
interface NftLootboxCardProps {
    id: number;
    name: string;
    image: string;
    availableToClaim: number;
    timeStaked: string;
    atStaking: boolean;
    minPrice: number;
    price: number;
    maxPrice: number;
    locked: boolean;
    percentage: number;
    rarity: string;
    containerWidth: number;
    titleSize: number;
    labelSize: number;
    selected: boolean;
    onSelect: (id: number, selected: boolean) => void;
    selectAll: boolean;
}

const NftLootboxCard = (props: NftLootboxCardProps) => {
    const [selected, setSelected] = useState(props.selected);

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);

    const handleSelect = () => {
        setSelected(!selected);
        props.onSelect(props.id, !selected);
    };

    useEffect(() => {
        if (props.selectAll) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [props.selectAll]);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between border-b-2 px-4 py-2.5 items-center border-l-4 border-r-4 rounded-t-xl border-t-4 border-[#2C3034]">
                <div>
                    <div
                        className="font-bold"
                        style={{ fontSize: `${props.titleSize}px` }}
                    >
                        {props.name}
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col nft-card h-full p-4 border-l-4 border-r-4 rounded-b-xl border-b-4 border-[#2C3034] border-t-0 w-full"
                style={{ gap: `${props.containerWidth / 100}px`, background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0.00) 100%)" }}
            >
                <div className="card-image mb-4">
                    <img className="w-full" src={props.image} alt="nft" />
                </div>
                <div className="range-slider-wrapper mb-2">
                    <div className="range-slider-values flex justify-between">
                        <div className="left-side">
      <span className="text-[#848B8D] text-xs">
        ${props.minPrice >= 1000 ? `${(props.minPrice / 1000).toFixed(2)}k` : props.minPrice}
      </span>
                        </div>
                        <div className="right-side">
      <span className="text-[#848B8D] text-xs">
        ${props.maxPrice >= 1000 ? `${(props.maxPrice / 1000).toFixed(2)}k` : props.maxPrice}
      </span>
                        </div>
                    </div>
                    <input
                        type="range"
                        className="range-slider w-full"
                        min={props.minPrice}
                        max={props.maxPrice}
                        step={1}
                        value={props.price}
                        onChange={() => {}}
                        onMouseDown={(e) => e.preventDefault()}
                        onTouchStart={(e) => e.preventDefault()}
                        style={{ pointerEvents: "none" }}
                    />
                    <h1
                        className="price-display text-[14px] text-white mt-0.5"
                        style={{
                            position: "relative",
                            left: `calc(${(props.price - props.minPrice) / (props.maxPrice - props.minPrice) * 100}% - 0.5rem)`,
                        }}
                    >
                        ${props.price >= 1000 ? `${(props.price / 1000).toFixed(2)}k` : props.price}
                    </h1>
                </div>
                {selected ? (
                    <div className="flex flex-col-reverse md:flex-row gap-2 justify-between md:h-8 h-auto">
                        <button className="flex flex-row basis-[57%] h-8 min-h-[32px] gap-1 bg-gradient-to-t from-red-700 to-red-500 justify-center items-center text-xs rounded-lg" onClick={handleSelect}>
                            <img
                                src={WhiteCheckmark}
                                className="w-4 h-4"
                                alt="checkmark"
                            />
                            <p className="text-white">Selected</p>
                        </button>
                        <div className="p-[7px] flex basis-[37%] gap-2 bg-[#1E2023] border border-[#2C3034] rounded-lg font-semibold text-custom_gray_2 justify-start md:justify-center items-center font-sans" >
                            <input
                                type="text"
                                placeholder="0%"
                                className="p-[3px] w-[50%] outline-0 h-full bg-[#1E2023] border border-[#1E2023] rounded font-semibold text-xs text-white flex-1 justify-center items-center font-sans"
                            />
                        </div>
                    </div>
                ) : (
                    <button
                        className="w-full text-xs h-8 mt-auto bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-bold text-white flex justify-center items-center font-sans"
                        onClick={handleSelect}
                    >
                        <div>
                            <p>Select</p>
                        </div>
                    </button>
                )}
            </div>
        </div>

    );
};

export { NftLootboxCard };
