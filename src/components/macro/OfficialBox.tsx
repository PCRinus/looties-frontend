import React from "react";
import OfficialBoxHeader from "../micro/OfficialBoxHeader";
import OfficialBoxSpinner from "../micro/OfficialBoxSpinner";
import OfficialBoxBottom from "../micro/OfficialBoxBottom";

const OfficialBox = () => {
  return (
    <div className="overflow h-[calc(100vh-120px)] max-h-[calc(100vh-120px)]">
      <OfficialBoxHeader></OfficialBoxHeader>
      <OfficialBoxSpinner></OfficialBoxSpinner>
      <OfficialBoxBottom></OfficialBoxBottom>
    </div>
  );
};

export default OfficialBox;
