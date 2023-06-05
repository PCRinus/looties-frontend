import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import OfficialBox from "../macro/OfficialBox";
import NFTLootBoxContent from "../macro/NFTLootBoxContent";
import RecommendedBoxes from "../macro/RecommendedBoxes";
import LastTopNFTs from "../macro/LastTopNFTs";

const OpenBox: React.FC = () => {
  return (
    <div className="xs:w-screen md:max-2xl:w-[calc(100vw-744px)] 2xl:w-[calc(100vw-744px)]">
      <div className=" w-full flex-col justify-center overflow-hidden xs:h-[calc(100vh-80px-64px)] md:max-2xl:h-[calc(100vh-120px)] 2xl:h-[calc(100vh-120px)]">
        <Scrollbars
          // This will activate auto hide
          autoHide
          // Hide delay in ms
          autoHideTimeout={1000}
          // Duration for hide animation in ms.
          autoHideDuration={200}
        >
          <div className="xs:p-4 xs:pt-8 md:max-2xl:p-14 2xl:p-14 ">
            <OfficialBox />
          </div>
          <div className="xs:p-4 md:max-2xl:mx-9 2xl:mx-9 ">
            <NFTLootBoxContent />
          </div>
          <div className="pb-4 xs:p-4 md:max-2xl:mx-9 2xl:mx-9 ">
            <LastTopNFTs />
          </div>
          <div className="pb-4 xs:p-4 md:max-2xl:mx-9 2xl:mx-9 ">
            <RecommendedBoxes />
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default OpenBox;
