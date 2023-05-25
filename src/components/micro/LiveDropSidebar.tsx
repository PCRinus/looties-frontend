import React from "react";
import LiveDropHeader from "./LiveDropHeader";
import UserList from "./UserList";
import Scrollbars from "react-custom-scrollbars-2";

const LiveDropSidebar: React.FC = () => {
  return (
    <div className="w-[315px] h-[calc(100vh-120px)] bg-custom_black_2 overflow-hidden">
      <LiveDropHeader />
      <Scrollbars
        // This will activate auto hide
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      >
        <div className=" flex justify-center">
          <div className="">
            <UserList />
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default LiveDropSidebar;
