import React from "react";
import SpinnerNft from "./SpinnerNft";
import SpinnerBar from "../../assets/SpinnerBar.svg";

import { INftProps, nftData } from "../../mocks/spinnerNftMock";
import "../../styles/micro/SpinnerNft.scss";

const OfficialBoxSpinner = () => {
  return (
    <div className="relative h-[268px] w-11/12 rounded-xl border-4 border-solid border-[#2C3034] ">
      <div className="horizontal-fade flex h-full px-10">
        {nftData.slice(0, 5).map((data: INftProps, index: number) => (
          <SpinnerNft key={index} cardTitle={data.cardTitle} icon={data.icon} coins={data.coins} rarity={data.rarity} />
        ))}
      </div>
      <img src={SpinnerBar} alt="Spinner" className="absolute left-1/2 top-[-22px] h-fit -translate-x-1/2 transform" />
    </div>
    // <div className="  h-[260px] w-11/12  rounded-xl border-4 border-solid border-[#2C3034] bg-[#1E2124]">

    // </div>
  );
};

export default OfficialBoxSpinner;
