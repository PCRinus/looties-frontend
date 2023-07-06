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
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-row items-center justify-between rounded-t-xl border-b-2 border-l-4 border-r-4 border-t-4 border-[#2C3034] px-4 py-2.5">
        <div>
          <div className="font-bold" style={{ fontSize: `${props.titleSize}px` }}>
            {props.name}
          </div>
        </div>
      </div>
      <div
        className="nft-card flex h-full w-full flex-col rounded-b-xl border-b-4 border-l-4 border-r-4 border-t-0 border-[#2C3034] p-4"
        style={{
          gap: `${props.containerWidth / 100}px`,
          background: "linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0.00) 100%)",
        }}
      >
        <div className="card-image mb-4">
          <img className="w-full" src={props.image} alt="nft" />
        </div>
        <div className="range-slider-wrapper mb-2">
          <div className="range-slider-values flex justify-between">
            <div className="left-side">
              <span className="text-xs text-[#848B8D]">
                ${props.minPrice >= 1000 ? `${(props.minPrice / 1000).toFixed(2)}k` : props.minPrice}
              </span>
            </div>
            <div className="right-side">
              <span className="text-xs text-[#848B8D]">
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
            className="price-display mt-0.5 text-[14px] text-white"
            style={{
              position: "relative",
              left: `calc(${((props.price - props.minPrice) / (props.maxPrice - props.minPrice)) * 100}% - 0.5rem)`,
            }}
          >
            ${props.price >= 1000 ? `${(props.price / 1000).toFixed(2)}k` : props.price}
          </h1>
        </div>
        {selected ? (
          <div className="flex h-auto flex-col-reverse justify-between gap-2 md:h-8 md:flex-row">
            <button
              className="flex h-8 min-h-[32px] basis-[57%] flex-row items-center justify-center gap-1 rounded-lg bg-gradient-to-t from-red-700 to-red-500 text-xs"
              onClick={handleSelect}
            >
              <img src={WhiteCheckmark} className="h-4 w-4" alt="checkmark" />
              <p className="text-white">Selected</p>
            </button>
            <div className="flex basis-[37%] items-center justify-start gap-2 rounded-lg border border-[#2C3034] bg-[#1E2023] p-[7px] font-sans font-semibold text-custom_gray_2 md:justify-center">
              <input
                type="text"
                placeholder="0%"
                className="h-full w-[50%] flex-1 items-center justify-center rounded border border-[#1E2023] bg-[#1E2023] p-[3px] font-sans text-xs font-semibold text-white outline-0"
              />
            </div>
          </div>
        ) : (
          <button
            className="mt-auto flex h-8 w-full items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans text-xs font-bold text-white"
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
