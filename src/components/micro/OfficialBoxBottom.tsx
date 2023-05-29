import React from "react";
import OpenButton from "./OpenButton";
import TryItButton from "./TryItButton";
import FastOpeningButton from "./FastOpeningButton";

const OfficialBoxBottom = () => {
  return (
    <div className="box-gradient flex h-[80px] w-full items-center justify-center">
      <OpenButton />
      <TryItButton />
      <FastOpeningButton />
    </div>
  );
};

export default OfficialBoxBottom;
