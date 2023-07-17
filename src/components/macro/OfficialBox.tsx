import React, { useRef } from "react";
import OfficialBoxHeader from "../micro/OfficialBoxHeader";
import GradientTitleBox from "../micro/GradientTitleBox";
import OpenButton  from "../micro/OpenButton";
import TryItButton  from "../micro/TryItButton";
import FastOpeningButton  from "../micro/FastOpeningButton";
import "../../styles/micro/OpenBox.scss";
import { useState, useEffect } from 'react';
import SpinnerBar from '../../assets/SpinnerBar.svg';
import '../../styles/micro/SpinnerNft.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EmptyBox from '../../assets/EmptyBox.svg';
import Coins from '../../assets/CoinsIcon.svg';
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import { ReduxEvents } from '../../reducers/events';
import OfficialBoxSpinner from "../micro/OfficialBoxSpinner";
const OfficialBox = () => {

    type LootboxContentsResponse = {
        emptyBoxChance: string;
        nft: {
            id: string;
            name: string;
            url: string;
            price: string;
        };
        tokens: {
            id: string;
            amount: string;
        };
    };

    type SpinnerItem = {
        name: string;
        imgSrc: string;
        rarity: 'red' | 'purple' | 'blue' | 'green';
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const useItemCount = () => {
        const [count, setCount] = useState(3);

        useEffect(() => {
            const updateCount = () => {
                if (window.innerWidth >= 1280) {
                    setCount(5);
                } else if (window.innerWidth >= 1024) {
                    setCount(4);
                } else {
                    setCount(3);
                }
            };

            window.addEventListener('resize', updateCount);
            updateCount();
            return () => window.removeEventListener('resize', updateCount);
        }, []);

        return count;
    };

    const itemCount = useItemCount();
    const { lootboxId } = useParams();

    const [lootboxContents, setLootboxContents] = useState<SpinnerItem[]>([]);

    useEffect(() => {
        const fetchLootboxContents = async () => {
            if (!lootboxId) return;
            try {
                const { data } = await axios.get<LootboxContentsResponse>(
                    `${process.env.REACT_APP_API_URL}/lootbox/${lootboxId}/contents`
                );

                const mappedLootboxContents: SpinnerItem[] = [];

                if (data.emptyBoxChance) {
                    mappedLootboxContents.push({
                        name: 'Empty box',
                        imgSrc: EmptyBox,
                        rarity: 'blue',
                    });
                }

                if (data.nft) {
                    mappedLootboxContents.push({
                        name: data.nft.name,
                        imgSrc: data.nft.url,
                        rarity: 'red',
                    });
                }

                if (data.tokens) {
                    mappedLootboxContents.push({
                        name: 'Tokens',
                        imgSrc: Coins,
                        rarity: 'green',
                    });
                }

                //TODO: this is so shit, we need to do it again
                const nestedMappedLootboxContents = [
                    mappedLootboxContents,
                    mappedLootboxContents,
                    mappedLootboxContents,
                    mappedLootboxContents,
                ];

                setLootboxContents(nestedMappedLootboxContents.flat(1));
            } catch (error) {}
        };

        fetchLootboxContents();
    }, [lootboxId]);

    const [items, setItems] = useState({
        simple: {
            skin: 'NFT',
            img: '',
            color: 'red',
        },
        middle: {
            skin: 'TOKEN',
            img: '',
            color: 'green',
        },
        super: {
            skin: 'EMPTY LOOTBOX',
            img: '',
            color: 'blue',
        },
    });

    useEffect(() => {
        if (lootboxContents.length > 0) {
            setItems((prevItems) => ({
                ...prevItems,
                simple: {
                    ...prevItems.simple,
                    img: lootboxContents[0]?.imgSrc || '',
                },
                middle: {
                    ...prevItems.middle,
                    img: lootboxContents[1]?.imgSrc || '',
                },
                super: {
                    ...prevItems.super,
                    img: lootboxContents[2]?.imgSrc || '',
                },
            }));
        }
    }, [lootboxContents]);


    const dispatch = useDispatch();

    type LootboxPrize = {
        prize: 'NFT' | 'TOKEN' | 'EMPTY_BOX';
        data: any;
    };

    const auth = useSelector((state: any) => state.auth);

    const handleTryLootbox = async (lootboxId?: string) => {
        if (!lootboxId) {
            toast.error('Could not fetch the lootbox ID, try again later');
        }
        try {
            const { data: prize } = await axios.get<LootboxPrize>(
                `${process.env.REACT_APP_API_URL}/lootbox/${lootboxId}/try-lootbox`,
                {
                    headers: { Authorization: `Bearer ${auth.jwt}` },
                }
            );
            actionIt(prize);
            // Wait for 4.35 or 8.05 seconds before dispatching actions
            if (isChecked) { setTimeout(() => {
                dispatch({ type: ReduxEvents.StoreModalData, payload: { data: prize } });
                dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'LootboxWin' } });
            }, 4350);}
            else { setTimeout(() => {
                dispatch({ type: ReduxEvents.StoreModalData, payload: { data: prize } });
                dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'LootboxWin' } });
            }, 8050);
            }

        } catch (error) {
            console.log('Try lootbox error: ', error);
            toast.error('Failed to try the lootbox, try again later!');
        }
    };

    const [buttonClicked, setButtonClicked] = useState(false);

    const img: { [key: string]: string } = {};

    lootboxContents.slice(0, itemCount).forEach((data: SpinnerItem) => {
        const { imgSrc, rarity } = data;

        img[rarity] = imgSrc;
    });

    useEffect(() => {
        if (items.simple.img && items.middle.img && items.super.img) {
            generate(0); // Call the generate function at mount with 0 parameter
        }
    }, [items]);

    const generate = (ng: number) => {
        const raffleContainer = document.querySelector('.raffle-roller-container') as HTMLElement;
        raffleContainer.style.transition = 'sdf';
        raffleContainer.style.marginLeft = '0px';
        raffleContainer.innerHTML = '';

        for (let i = 0; i < 101; i++) {
            let element = `<div id="CardNumber${i}" class="item class_red_item" style="background-image: url(${items.simple.img}); border-bottom: 4px solid ${items.simple.color};"></div>`;
            const randed = randomInt(1, 1000);
            if (randed < 50) {
                element = `<div id="CardNumber${i}" class="item class_red_item" style="background-image: url(${items.super.img});"></div>`;
            } else if (500 < randed) {
                element = `<div id="CardNumber${i}" class="item class_red_item" style="background-image: url(${items.middle.img});"></div>`;
            }
            raffleContainer.insertAdjacentHTML('beforeend', element);
        }

        if (ng === 0) return;


        setTimeout(() => {
            if (ng === 2) {
                goRoll(items.middle.skin, items.middle.img);
            } else if (ng === 1) {
                goRoll(items.super.skin, items.super.img);
            } else {
                goRoll(items.simple.skin, items.simple.img);
            }
        }, 500);
    };

    console.log(items);

    const goRoll = (skin: string, skinimg: string) => {
        const raffleContainer = document.querySelector('.raffle-roller-container') as HTMLElement;
        if (isChecked) {        raffleContainer.style.transition = 'all 4s cubic-bezier(.08,.6,0,1)';}
         else {        raffleContainer.style.transition = 'all 8s cubic-bezier(.08,.6,0,1)';}
        const cardNumber78 = document.querySelector('#CardNumber78') as HTMLElement;
        cardNumber78.style.backgroundImage = `url(${skinimg})`;
        cardNumber78.style.borderStyle = `blue`;
        raffleContainer.style.marginLeft = '-11645px';
    };

    const randomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const actionIt = (something: any) => {
        if (something.prize === "EMPTY_BOX")
        {
            generate(3);
        }
        if (something.prize === "NFT")
        {
            generate(2)
        }
        if (something.prize === "TOKEN")
        {
            generate(1);
        }
    };

    const handleClick = () => {
        if (!buttonClicked) {
            setButtonClicked(true);
            handleTryLootbox(lootboxId);

            if (isChecked) {
                setTimeout(() => {
                    setButtonClicked(false); // Set the state back to false after 4 seconds
                }, 4000); // Wait for 4 seconds (4000 milliseconds) before calling handleTryLootbox
            }
            else {             setTimeout(() => {
                setButtonClicked(false); // Set the state back to false after 7.1 seconds
            }, 7100); // Wait for 7.1 seconds (7000 milliseconds) before calling handleTryLootbox
            }
        }
    };

    return (
        <div className="flex-col items-center justify-center">
            <GradientTitleBox className="flex xs:!h-[40px] 2xl:!h-12">
                <OfficialBoxHeader />
            </GradientTitleBox>
                <div className="h-[165px]">
                    <div className="raffle-roller">
                        <div className="raffle-roller-holder h-[165px]">
                            <img
                                src={SpinnerBar}
                                alt="Spinner"
                                className="absolute left-[50%] -translate-x-1/2 transform xs:top-[-16px] xs:h-[209px]  2xl:top-[-22px] 2xl:h-[207px]"
                            />
                            <div className="raffle-roller-container" style={{ marginLeft: '0px' }}></div>
                        </div>
                    </div>
                </div>
            <GradientTitleBox className="flex items-center justify-center xs:h-[68px] mt-2">
                <div className="flex h-[80px] w-full items-center justify-center ">
                    <OpenButton className="mr-4 font-sans font-bold xs:ml-6 xs:mr-3 xs:h-[29.71px] xs:w-[164px]  xs:text-[12px] 2xl:h-[44.57px] 2xl:w-[188px]" />
                    <button
                        className={`md-max:2xl:w-[98px] mr-4 flex items-center justify-center rounded-xl border border-custom_gray_1 xs:mr-3 xs:h-[32px] xs:w-[62px] xs:rounded-lg md:max-2xl:h-12 2xl:h-12 2xl:w-[98px] text-white font-semibold ${
                            buttonClicked ? "bg-red-500 cursor-not-allowed" : "bg-custom_gray_1"
                        }`}
                        onClick={handleClick}
                        disabled={buttonClicked}
                    >
                        Try it
                    </button>
                    <div className="flex items-center justify-center rounded-xl border  border-custom_gray_1 bg-custom_gray_1 xs:mr-6 xs:h-[32px] xs:w-[130px] xs:rounded-lg md:max-2xl:h-12 md:max-2xl:w-[204px] 2xl:h-12 2xl:w-[204px]">
                        <input
                            type="checkbox"
                            className="hidden" // Hide the default checkbox
                            id="myCheckbox" // Add an ID for the label association
                            onChange={(e) => handleCheckboxChange(e.target.checked)} // Add an onChange event handler to track the checkbox state
                        />
                        <label
                            htmlFor="myCheckbox"
                            className="flex items-center justify-center w-5 h-5 bg-black rounded cursor-pointer"
                        >
                            {isChecked && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-3 h-3"
                                >
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            )}
                        </label>
                        <span className="ml-2 font-sans font-semibold text-custom_gray_2 xs:text-[11px] md:max-2xl:text-[20px] 2xl:text-[20px]">
                          Fast opening
                        </span>
                    </div>
                </div>
            </GradientTitleBox>
        </div>
    );
};

export default OfficialBox;