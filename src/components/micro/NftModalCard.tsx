import React, { useState, useEffect } from "react";
import RedDollar from "../../assets/RedDollar.svg";
import WhiteCheckmark from "../../assets/WhiteCheckmark.svg";

interface NftModalCardProps {
    id: number;
    name: string;
    image: string;
    availableToClaim?: number;
    timeStaked?: string;
    atStaking?: boolean;
    locked?: boolean;
    percentage?: number;
    rarity?: string;
    containerWidth: number;
    titleSize: number;
    labelSize: number;
    selected: boolean;
    onSelect: (id: number, selected: boolean) => void;
    selectAll: boolean;
}

const NftModalCard = (props: NftModalCardProps) => {
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
        <div
            className="flex flex-col nft-card p-4 border-4 gradientborder w-full lg:w-[220px]"
            style={{ gap: `${props.containerWidth / 100}px` }}
        >
            <div className="card-image">
                <img className="w-full" src={props.image} alt="nft" />
            </div>
            <div className="mt-2">
                <div
                    className="font-bold"
                    style={{ fontSize: `${props.titleSize}px` }}
                >
                    {props.name}
                </div>
            </div>
            <div className="flex mb-2">
                <div className="flex flex-row gap-2">
                    <img className="w-4 h-4" src={RedDollar} alt="red-dollar" />
                    <span
                        className="font-bold text-[#F03033]"
                        style={{ fontSize: `${props.labelSize}px` }}
                    >
            24,144 Coins
          </span>
                </div>
            </div>
            <button
                className="w-full text-xs h-8 bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-bold text-white flex justify-center items-center font-sans"
                onClick={handleSelect}
            >
                {selected ? (
                    <div className="flex flex-row gap-1">
                        <img
                            src={WhiteCheckmark}
                            className="w-4 h-4"
                            alt="checkmark"
                        />
                        <p>Selected</p>
                    </div>
                ) : (
                    <div>
                        <p>Select</p>
                    </div>
                )}
            </button>
        </div>
    );
};

export { NftModalCard };
