import React from "react";
import Coins from "../../assets/CoinsIcon.svg";

interface IPrizeProps {
  value: number | string;
}

const PrizeCardContent: React.FC<IPrizeProps> = ({ value }) => {
  return (
    <>
      <img
        src={Coins}
        alt="icon-svg"
        className="absolute xs:mb-6 xs:h-40 xs:w-40 md:max-2xl:mb-16 md:max-2xl:h-60 md:max-2xl:w-60 2xl:mb-16 2xl:h-60 2xl:w-60"
      />
      <span className="absolute font-sans font-bold text-[#F03033] xs:mt-20 xs:text-base md:max-2xl:mt-20 md:max-2xl:text-2xl 2xl:mt-20 2xl:text-2xl">
        {value} Coins
      </span>
    </>
  );
};

export default PrizeCardContent;
