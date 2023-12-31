import React, { FC } from "react";
import NftGradientCanva from "./NftGradientCanva";
import NftCardContent from "./NftCardContent";
import { useDispatch, useSelector } from "react-redux";
import RedPlus from "../../assets/RedPlus.svg";
import { ReduxEvents } from "../../reducers/events";
import { ILootboxContent } from "../macro/NFTLootBoxContent";

interface Props {
  lootboxContent?: ILootboxContent;
}

const NFTPriceCard: FC<Props> = ({ lootboxContent }) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      {/* {user.id && user.profile ? (
        <div className="custom-style-gray flex cursor-pointer items-start justify-center rounded-xl xs:h-[270px] xs:w-[160px] 2xl:h-[400px] 2xl:w-64">
          <div
            className=" content flex-column h-full cursor-pointer items-start pb-3"
            onClick={() => {
              dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "NftPicker" } });
            }}
          >
            <div
              className={`custom-gradient-bg-color-cards mt-[4px] flex h-full flex-col items-center justify-center rounded-xl rounded-b-xl xs:w-[155px] 2xl:w-[248px]`}
            >
              <img
                src={RedPlus}
                className="h-[24px] w-[24px] items-center justify-center 2xl:h-[48px] 2xl:w-[48px]"
                alt="Trash"
              ></img>
              <span className="flex flex-row items-center justify-center text-center text-[14px] font-bold text-[#F03033] 2xl:text-[20px]">
                Add a new NFT
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}

      {lootboxContent && lootboxContent.nft && (
        <NftGradientCanva cardTitle="NFT" cardInfo={lootboxContent.nft.dropChance}>
          <div className="card_item mx-2 mt-2 2xl:mx-3 2xl:mt-3">
            <NftCardContent
              // priceLeft={data.priceLeft}
              // price={data.price}
              // priceRight={data.priceRight}
              cardName={lootboxContent.nft.name}
              icon={lootboxContent.nft.url}
            />
          </div>
        </NftGradientCanva>
      )}
    </>
  );
};

export default NFTPriceCard;
