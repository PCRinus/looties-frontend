import WelcomeBox from "../components/macro/WelcomeBox";
import { Chat } from "../components/macro/Chat";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";

import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import OfficialBox from "../components/macro/OfficialBox";
import NFTLootBoxContent from "../components/macro/NFTLootBoxContent";
import LastTopNFTs from "../components/macro/LastTopNFTs";
import RecommendedBoxes from "../components/macro/RecommendedBoxes";
import OfficialBoxSpinner from "../components/micro/OfficialBoxSpinner";
import Games from "../components/macro/Games";
import PaymentMethod from "../components/micro/PaymentMethod";
import HomepageFooter from "../components/macro/HomepageFooter";

const Homepage = () => {
  return (
    <div className="flex w-screen flex-row items-center  justify-center xs:h-[calc(100vh-80px-64px-32px)] 2xl:h-[calc(100vh-120px)]">
      <LiveDropSidebar />
      <Scrollbars
        // This will activate auto hide
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      >
        <div className="flex flex-col xs:p-4 xs:pt-8 2xl:mt-[70px] 2xl:p-14">
          <WelcomeBox />
          <div className="xs:mt-8 2xl:mt-14">
            <Games />
          </div>
          <div className="xs:mt-8">
            <PaymentMethod />
          </div>
        </div>
        <div className="xs:mt-8 2xl:mt-[52px]">
          <HomepageFooter />
        </div>
      </Scrollbars>

      <Chat />
    </div>
  );
};

export default Homepage;
