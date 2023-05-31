import React from "react";
import Coins from "../../assets/CoinsIcon.svg";

interface IPrizeProps {
  value: number | string;
}

const PrizeCardContent: React.FC<IPrizeProps> = ({ value }) => {
  return (
    <>
      <img src={Coins} alt="icon-svg" className="absolute mb-16" />
      <span className="absolute mt-16 font-sans text-[24px] font-bold text-[#F03033]">{value} Coins</span>
    </>
  );
};

export default PrizeCardContent;
