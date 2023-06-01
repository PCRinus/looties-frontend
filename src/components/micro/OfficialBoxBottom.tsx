import React from "react";
import OpenButton from "./OpenButton";
import TryItButton from "./TryItButton";
import FastOpeningButton from "./FastOpeningButton";

const OfficialBoxBottom = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-center ">
      <OpenButton className="mr-4 font-sans font-bold xs:ml-6 xs:mr-3 xs:h-[29.71px] xs:w-[164px]  xs:text-[12px] 2xl:h-[44.57px] 2xl:w-[188px] 2xl:text-[20px]" />
      <TryItButton />
      <FastOpeningButton />
    </div>
  );
};

export default OfficialBoxBottom;
