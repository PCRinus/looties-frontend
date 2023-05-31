import React from "react";
import FreeOpenIcon from "../../assets/FreeOpenIcon.svg";
const FreeOpenCard: React.FC = () => {
  return (
    <>
      <img src={FreeOpenIcon} alt="icon-svg" className="block" />
      <span className=" absolute mt-20 font-sans text-[24px] font-bold text-[#F03033]">Free open</span>
    </>
  );
};

export default FreeOpenCard;
