import React from "react";
import NftGradientCanva from "./NftGradientCanva";
import { INFTCard, NFC_CARDS_DATA } from "../../mocks/nftsMocks";
import NftCardOpenContent from "./NftCardOpenContent";

const NftCardOpen: React.FC = () => {
  return (
    <>
      {NFC_CARDS_DATA.slice(0, 4).map((data: INFTCard, index: number) => (
        <NftGradientCanva key={index} cardTitle={data.cardTitle} cardInfo={data.itemsCount}>
          <div className="mx-3 mt-3">
            <NftCardOpenContent label={data.label} cost={data.cost} icon={data.icon} />
          </div>
        </NftGradientCanva>
      ))}
    </>
  );
};

export default NftCardOpen;
