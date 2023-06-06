import React from "react";
import LiveDropHeader from "./LiveDropHeader";
import UserList from "./UserList";
import Scrollbars from "react-custom-scrollbars-2";

const LiveDropSidebar: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="h-[calc(100vh-120px)] w-[315px] overflow-hidden bg-custom_black_2">
=======
    <div
      id="live-drop-sidebar"
      className="h-full w-80 flex-shrink-0 overflow-y-hidden bg-custom_black_2 xs:hidden 2xl:block"
    >
>>>>>>> main
      <LiveDropHeader />
      <Scrollbars
        // This will activate auto hide
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
      >
        <div className=" flex flex-col items-center justify-center">
          <UserList />
        </div>
      </Scrollbars>
    </div>
  );
};

export default LiveDropSidebar;
