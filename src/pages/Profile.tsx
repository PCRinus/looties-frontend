import React, { useState, useEffect } from "react";
import { Chat } from "../components/macro/Chat";
import ProfileSideBar from "../components/macro/ProfileSideBar";
import "../styles/micro/Profile.scss";
import ProfilePage from "../components/macro/ProfilePage";
import Scrollbars from "react-custom-scrollbars-2";
import UserProfileCard from "../components/macro/UserProfileCard";
import ProfileOptions from "../components/macro/ProfileOptions";

const Profile: React.FC = () => {
  const [isXsScreen, setIsXsScreen] = useState(window.matchMedia("(max-width: 576px)").matches);

  useEffect(() => {
    const screenSizeChange = () => {
      setIsXsScreen(window.matchMedia("(max-width: 1535px)").matches);
    };

    window.addEventListener("resize", screenSizeChange);

    return () => {
      window.removeEventListener("resize", screenSizeChange);
    };
  }, []);

  return (
    <div className="flex w-screen xs:h-[calc(100vh-80px-64px)] xs:flex-col 2xl:h-[calc(100vh-120px)] 2xl:flex-row ">
      {isXsScreen ? (
        <Scrollbars autoHide universal>
          <ProfileSideBar />
          <ProfilePage />
          <Chat />
        </Scrollbars>
      ) : (
        <>
          {/* <div className="flex h-[100vh] w-screen flex-row items-start justify-center">
            <ProfileSideBar />
            <ProfilePage />
          </div> */}
          <div className=" grid  h-screen w-full grid-cols-[450px_1fr] grid-rows-1  gap-[52px] ">
            <div className="ml-[15%] mt-[15%] flex h-[742px] flex-col gap-y-8 overflow-auto rounded-xl border-[32px] border-solid border-custom_black_2 bg-custom_black_2">
              <UserProfileCard
                currentLevel={99}
                currentXP={278295}
                nextLevel={100}
                xpNeeded={400000}
                username="Solanagamer11"
                data="19 May 23"
                level={10}
              />
              <ProfileOptions />
            </div>
            <div className="overflow-auto bg-violet-400"></div>
          </div>

          <Chat />
        </>
      )}
    </div>
  );
};

export default Profile;
