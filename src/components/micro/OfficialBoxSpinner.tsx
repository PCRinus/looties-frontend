import React from "react";
import SpinnerNft from "./SpinnerNft";
import SpinnerBar from "../../assets/SpinnerBar.svg";

import { INftProps, nftData } from "../../mocks/spinnerNftMock";
import "../../styles/micro/SpinnerNft.scss";

const OfficialBoxSpinner = () => {
  return (
    <div className="relative w-11/12 rounded-xl border-solid border-[#2C3034] xs:h-[180px] xs:border-2 2xl:h-[268px]  2xl:border-4 ">
      <div className="horizontal-fade flex h-full 2xl:px-10">
        {nftData.slice(0, 3).map((data: INftProps, index: number) => (
          <SpinnerNft key={index} cardTitle={data.cardTitle} icon={data.icon} coins={data.coins} rarity={data.rarity} />
        ))}
      </div>
      <img
        src={SpinnerBar}
        alt="Spinner"
        className="absolute left-1/2 -translate-x-1/2 transform xs:top-[-16px] xs:h-[209px]  2xl:top-[-22px] 2xl:h-fit"
      />
    </div>
    // <div className="  h-[260px] w-11/12  rounded-xl border-4 border-solid border-[#2C3034] bg-[#1E2124]">

    // </div>
  );
};

export default OfficialBoxSpinner;
