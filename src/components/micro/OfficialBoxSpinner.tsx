import React from "react";
import SpinnerNft from "./SpinnerNft";
import SpinnerBar from "../../assets/SpinnerBar.svg";

import { INftProps, nftData } from "../../mocks/spinnerNftMock";
import "../../styles/micro/SpinnerNft.scss";

const OfficialBoxSpinner = () => {
  return (
    <div className="relative w-full rounded-xl border-solid border-[#2C3034] xs:h-[180px] xs:border-2 md:max-2xl:h-[268px] md:max-2xl:border-4 2xl:h-[268px] 2xl:border-4">
      <div className="horizontal-fade flex h-full md:max-2xl:px-10 2xl:px-10">
        {nftData.slice(0, 5).map((data: INftProps, index: number) => (
          <SpinnerNft key={index} cardTitle={data.cardTitle} icon={data.icon} coins={data.coins} rarity={data.rarity} />
        ))}
      </div>
      <img
        src={SpinnerBar}
        alt="Spinner"
        className="absolute left-1/2 -translate-x-1/2 transform xs:top-[-16px] xs:h-[209px]  md:max-2xl:top-[-22px] md:max-2xl:h-fit 2xl:top-[-22px] 2xl:h-fit"
      />
    </div>
  );
};

export default OfficialBoxSpinner;
