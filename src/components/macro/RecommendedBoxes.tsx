import React, { useState } from "react";
import GradientTitleBox from "../micro/GradientTitleBox";
import NftCardOpen from "../micro/NftCardOpen";
import TrophyIcon from "../../assets/Trophy.svg";

const RecommendedBoxes = () => {
  return (
    <>
      <GradientTitleBox className="my-9 flex justify-center xs:h-[68px] md:max-2xl:h-[80px] 2xl:h-[80px]">
        <img
          src={TrophyIcon}
          alt="Img-svg"
          className="xs:h-[22px] xs:w-[20px] md:max-2xl:h-[26.35px] md:max-2xl:w-6 2xl:h-[26.35px] 2xl:w-6"
        ></img>
        <span className="font-sans font-bold text-custom_white_1 xs:ml-3 xs:text-xl md:max-2xl:ml-5 md:max-2xl:text-2xl 2xl:ml-5 2xl:text-2xl">
          Recomended Boxes
        </span>
      </GradientTitleBox>
      <div className="flex flex-row flex-wrap justify-normal xs:gap-[1.3rem] 2xl:gap-4 3xl:gap-[2.2rem]">
        <NftCardOpen />
      </div>
    </>
  );
};

export default RecommendedBoxes;
