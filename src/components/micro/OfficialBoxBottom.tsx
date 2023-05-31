import React from "react";
import OpenButton from "./OpenButton";
import TryItButton from "./TryItButton";
import FastOpeningButton from "./FastOpeningButton";

const OfficialBoxBottom = () => {
  return (
    <div className="box-gradient flex h-[80px] w-full items-center justify-center">
      <OpenButton className="mr-4 h-[44.57px] w-[188px] font-sans text-[20px] font-bold" />
      <TryItButton />
      <FastOpeningButton />
    </div>
  );
};

export default OfficialBoxBottom;
