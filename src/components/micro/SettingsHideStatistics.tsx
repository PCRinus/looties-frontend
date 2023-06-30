import React from "react";
import Toggle from "./Toggle";

const SettingsHideStatistics: React.FC = () => {
  return (
    <div className="mt-2 flex h-12 w-full flex-shrink-0 items-center justify-between rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2023] ">
      <span className=" mx-5  whitespace-nowrap  font-sans text-white xs:text-base xs:font-semibold 2xl:text-base  2xl:font-bold">
        Hide statistics
      </span>
      <Toggle />
    </div>
  );
};

export default SettingsHideStatistics;
