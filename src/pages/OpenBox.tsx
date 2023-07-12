import Scrollbars from "react-custom-scrollbars-2";
import OfficialBox from "../components/macro/OfficialBox";
import NFTLootBoxContent from "../components/macro/NFTLootBoxContent";
import RecommendedBoxes from "../components/macro/RecommendedBoxes";
import LastTopNFTs from "../components/macro/LastTopNFTs";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";
import { Chat } from "../components/macro/Chat";

const OpenBox: React.FC = () => {
  return (
    <div className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
      <LiveDropSidebar />

      <Scrollbars
        // This will activate auto hide
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      >
        <div className="xs:p-4 xs:pt-8  2xl:p-14">
          <OfficialBox />
        </div>
        <div className="xs:p-4  2xl:mx-9 ">
          <NFTLootBoxContent />
        </div>
        {/* commented for MVP */}
        {/* <div className="pb-4 xs:p-4  2xl:mx-9 ">
          <LastTopNFTs />
        </div>
        <div className="pb-4 xs:p-4  2xl:mx-9 ">
          <RecommendedBoxes />
        </div> */}
      </Scrollbars>
      <Chat />
    </div>
  );
};

export default OpenBox;
