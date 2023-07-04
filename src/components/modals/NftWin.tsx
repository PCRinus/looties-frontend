import {useDispatch} from "react-redux";
import React, { useEffect }  from "react";
import {cardData, ICardData} from "../../mocks/nftPriceCardMocks";
import { ReactComponent as Close } from '../../assets/Close.svg';
import NftGradientCanva from "../micro/NftGradientCanva";
import NftCardContent from "../micro/NftCardContent";
import { ReduxEvents } from "../../reducers/events";
const NftWin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch({ type: ReduxEvents.CloseModal });
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [dispatch]);


    return (
        <div
            className="flex flex-col items-center justify-center h-auto w-auto rounded-xl"
            onClick={e => e.stopPropagation()}
            style={{
                boxShadow: '#cc282a 0px 0px 5.4em'
            }}
        >
            {cardData.slice(0, 1).map((data: ICardData, index: number) => (
                <NftGradientCanva key={index} cardTitle={data.cardTitle} cardInfo={data.cardInfo} className="" >
                    <div className="card_item mx-2 mt-2 2xl:mx-3 2xl:mt-3">
                        <NftCardContent
                            priceLeft={data.priceLeft}
                            price={data.price}
                            priceRight={data.priceRight}
                            cardName={data.cardName}
                            icon={data.icon}
                        />
                    </div>
                </NftGradientCanva>
            ))}
        </div>
    )
};

export {NftWin};