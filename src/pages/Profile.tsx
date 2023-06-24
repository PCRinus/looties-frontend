import React, { useState, useEffect } from "react";
import { Chat } from "../components/macro/Chat";
import ProfileSideBar from "../components/macro/ProfileSideBar";
import "../styles/micro/Profile.scss";
import ProfilePage from "../components/macro/ProfilePage";
import Scrollbars from "react-custom-scrollbars-2";
import UserProfileCard from "../components/macro/UserProfileCard";
import ProfileOptions from "../components/macro/ProfileOptions";
import ProfileOptionsHeader from "../components/micro/ProfileOptionsHeader";

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
          <div className="bottom-fade mx-6 h-auto min-h-full flex-auto rounded-xl bg-custom_black_2">
            <ProfileOptionsHeader title="My Profile" />
            {/*TO DO: Routes profile options pages mobile version */}
            <ProfilePage
              totalGameData={4843.3}
              gamesWonData={1000000}
              gamesLostData={100000}
              winRatioData={100000}
              lootboxesOpenData={100000}
              referralsData={100000}
              totalWageredData={100000}
              netProfitData={4843.3}
            />
            <div className=" h-10 w-full bg-custom_black_2"></div>
          </div>

          <Chat />
        </Scrollbars>
      ) : (
        <>
          <div className="flex h-screen  w-full flex-col">
            <div className=" grid  grid-cols-[450px_1fr] grid-rows-1 ">
              <div className="ml-[10%] mt-[10%] flex h-[742px] flex-col gap-y-8 overflow-auto rounded-xl border-[32px] border-solid border-custom_black_2 bg-custom_black_2">
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
              <div
                id="options-pages-grid"
                className="h-full max-h-full w-full  overflow-y-scroll   bg-[#151719] p-[52px] "
              >
                <div className="autoheight bottom-fade w-full flex-auto rounded-xl bg-custom_black_2">
                  <ProfileOptionsHeader title="My Profile" />
                  {/*TO DO: Routes profile options pages desktop version - pages on a GRID*/}
                  <ProfilePage
                    totalGameData={4843.3}
                    gamesWonData={1000000}
                    gamesLostData={100000}
                    winRatioData={100000}
                    lootboxesOpenData={100000}
                    referralsData={100000}
                    totalWageredData={100000}
                    netProfitData={4843.3}
                  />
                  <div className=" h-10 w-full bg-custom_black_2"></div>
                </div>
              </div>
            </div>
            <div className=" flex-auto bg-[#151719]"></div>
          </div>

          <Chat />
        </>
      )}
    </div>
  );
};

export default Profile;
