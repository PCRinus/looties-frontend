import React from "react";
import PrizeCard from "../micro/PrizeCard";
import NFTPriceCard from "../micro/NFTPriceCard";
import {useSelector} from "react-redux";
import EditBox from "../../assets/EditBox.svg";

const NFTLootBoxContent = () => {
    const user = useSelector((state: any) => state.user);

    return (<div className="flex flex-col justify-center">
      <span
          className="flex flex-row justify-between ml-1 font-sans font-bold text-custom_white_1 xs:mt-12 xs:text-[20px] 2xl:mt-[52px] 2xl:text-2xl">
          <span>NFT’S lootbox contents</span>
          {user.id && user.profile ? (<button
              className="flex lg:h-[44.57px] h-[38px] gap-2 items-center justify-center rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[14px] font-sans font-semibold leading-4 text-white"
          >
              <img src={EditBox} alt="Create lootbox"></img>
              <span className="whitespace-nowrap font-bold text-white xs:text-xs 2xl:text-base">Edit lootbox</span>
          </button>) : (<div>
          </div>)}
      </span>
        <div
            className="flex flex-row flex-wrap justify-center xs:mt-[26px] xs:gap-[1.3rem] 2xl:mt-[36px] 2xl:gap-6
      "
        >
            <NFTPriceCard/>
            <PrizeCard/>
        </div>
    </div>);
};

export default NFTLootBoxContent;
