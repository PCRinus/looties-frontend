import React from "react";
import OfficialBoxHeader from "../micro/OfficialBoxHeader";
import OfficialBoxSpinner from "../micro/OfficialBoxSpinner";
import OfficialBoxBottom from "../micro/OfficialBoxBottom";
import GradientTitleBox from "../micro/GradientTitleBox";

const OfficialBox = () => {
  return (
    <div className="flex-col items-center justify-center">
      <GradientTitleBox className="flex xs:!h-[40px] 2xl:!h-12">
        <OfficialBoxHeader />
      </GradientTitleBox>
      <div className="flex justify-center py-8">
        <OfficialBoxSpinner></OfficialBoxSpinner>
      </div>

      <GradientTitleBox className="flex items-center justify-center xs:h-[68px]">
        <OfficialBoxBottom></OfficialBoxBottom>
      </GradientTitleBox>
    </div>
  );
};

export default OfficialBox;
