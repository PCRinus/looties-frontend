import { useEffect, useState } from "react";
import { Chat } from "../macro/Chat";
import LiveDropsSidebar from "../micro/LiveDropSidebar";
import OfficialBox from "../macro/OfficialBox";

const OpenBox: React.FC = () => {
  return (
    <div className="flex   ">
      <LiveDropsSidebar />
      {/* <OfficialBox /> */}
    </div>
  );
};

export default OpenBox;
