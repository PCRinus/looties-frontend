import React from "react";
import FreeOpenIcon from "../../assets/FreeOpenIcon.svg";
const FreeOpenCard: React.FC = () => {
  return (
    <>
      <img src={FreeOpenIcon} alt="icon-svg" className="block xs:mt-4 md:max-2xl:mt-0" />
      <span className="absolute font-sans font-bold text-[#F03033] xs:mt-20 md:max-2xl:mt-20 md:max-2xl:text-2xl 2xl:mt-20 2xl:text-2xl">
        Free open
      </span>
    </>
  );
};

export default FreeOpenCard;
