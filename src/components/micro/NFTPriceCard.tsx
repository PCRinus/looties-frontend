import React from "react";
import NftGradientCanva from "./NftGradientCanva";
import NftCardContent from "./NftCardContent";
import { ICardData, cardData } from "../../mocks/nftPriceCardMocks";
import {useDispatch, useSelector} from "react-redux";
import RedPlus from "../../assets/RedPlus.svg";
import { ReduxEvents } from "../../reducers/events";

const NFTPriceCard = () => {

  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <>

      {user.id && user.profile ? (
              <div className="cursor-pointer custom-style-gray flex items-start justify-center rounded-xl xs:h-[270px] xs:w-[160px] 2xl:h-[400px] 2xl:w-64">
                <div className=" content cursor-pointer flex-column items-start h-full pb-3"         onClick={() => {
                  dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "NftPicker" } });
                }}>
                    <div className={`custom-gradient-bg-color-cards h-full flex flex-col justify-center items-center rounded-b-xl xs:w-[155px] 2xl:w-[248px] mt-[4px] rounded-xl`}>
                    <img src={RedPlus} className="2xl:h-[48px] 2xl:w-[48px] h-[24px] w-[24px] justify-center items-center" alt="Trash"></img>
                    <span className="flex flex-row justify-center items-center text-center text-[#F03033] font-bold 2xl:text-[20px] text-[14px]">Add a new NFT</span>
                  </div>
                </div>
              </div>
      ) : (<></>
      )}
      {cardData.slice(0, 10).map((data: ICardData, index: number) => (
        <NftGradientCanva key={index} cardTitle={data.cardTitle} cardInfo={data.cardInfo}>
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
    </>
  );
};

export default NFTPriceCard;
