import React, { useEffect, useState } from "react";
import PrizeCard from "../micro/PrizeCard";
import NFTPriceCard from "../micro/NFTPriceCard";
import { useSelector } from "react-redux";
import EditBox from "../../assets/EditBox.svg";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export interface ILootboxContent {
  tokens: any;
  nft: any;
  emptyBoxChance: string;
}

const NFTLootBoxContent = () => {
  const user = useSelector((state: any) => state.user);
  const { lootboxId } = useParams<string>();
  const auth = useSelector((state: any) => state.auth);
  const [lootboxContent, setLootboxContent] = useState<ILootboxContent>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLootboxContent = async () => {
      try {
        const { data: lootboxContent } = await axios.get(
          `${process.env.REACT_APP_API_URL}/lootbox/${lootboxId}/contents`,
          { headers: { Authorization: `Bearer ${auth.jwt}` } }
        );
        setLootboxContent(lootboxContent);
      } catch (err) {
        console.log("Error fetching lootobox content: ", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getLootboxContent();
  }, [auth.jwt, lootboxId]);

  return (
    <div className="flex flex-col justify-center">
      <span className="ml-1 flex flex-row justify-between font-sans font-bold text-custom_white_1 xs:mt-12 xs:text-[20px] 2xl:mt-[52px] 2xl:text-2xl">
        <span>NFT’S lootbox contents</span>
        {/* {user.id && user.profile ? (
          <button className="flex h-[38px] items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[14px] font-sans font-semibold leading-4 text-white lg:h-[44.57px]">
            <img src={EditBox} alt="Create lootbox"></img>
            <span className="whitespace-nowrap font-bold text-white xs:text-xs 2xl:text-base">Edit lootbox</span>
          </button>
        ) : (
          <div></div>
        )} */}
      </span>
      <div className="flex flex-row flex-wrap justify-center xs:mt-[26px] xs:gap-[1.3rem] 2xl:mt-[36px] 2xl:gap-6">
        <NFTPriceCard lootboxContent={lootboxContent} />
        <PrizeCard lootboxContent={lootboxContent} />
      </div>
    </div>
  );
};

export default NFTLootBoxContent;
