import React, { useState, useEffect } from "react";
import { Chat } from "../components/macro/Chat";
import ProfileSideBar from "../components/macro/ProfileSideBar";
import "../styles/micro/Profile.scss";
import ProfilePage from "../components/macro/ProfilePage";
import Scrollbars from "react-custom-scrollbars-2";
import UserProfileCard from "../components/macro/UserProfileCard";
import ProfileOptions from "../components/macro/ProfileOptions";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "../components/macro/SettingsPage";
import { AffiliatesPage } from "../components/macro/AffiliatesPage";
import GameHistoryPage from "../components/macro/GameHistoryPage";
import TransactionsPage from "../components/macro/TransactionsPage";
import ProfileOptionsHeader from "../components/micro/ProfileOptionsHeader";
import MyLootboxesPage from "../components/macro/MyLootboxesPage";
import InventoryPage from "../components/macro/InventoryPage";
import { useSelector } from "react-redux";

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

          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/games" element={<GameHistoryPage />} />
            <Route path="/inventory" element={<MyLootboxesPage />} />
            <Route path="/mylootboxes" element={<MyLootboxesPage />} />
            <Route path="/affiliates" element={<AffiliatesPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            {/* Add more Routes as needed */}
          </Routes>

          <Chat />
        </Scrollbars>
      ) : (
        <>
          <div className="flex h-screen  w-full flex-col">
            <div className=" grid  grid-cols-[450px_1fr] grid-rows-1 ">
              <div className="ml-[52px] mt-[52px] flex h-[806px] flex-col gap-y-8 overflow-auto rounded-xl border-[32px] border-solid border-custom_black_2 bg-custom_black_2">
                <UserProfileCard />
                <ProfileOptions />
              </div>
              <div id="options-pages-grid" className="h-full max-h-full w-full   bg-[#151719] p-[52px] ">
                <Routes>
                  <Route path="/" element={<ProfilePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/games" element={<GameHistoryPage />} />
                  <Route path="/inventory" element={<InventoryPage />} />
                  <Route path="/mylootboxes" element={<MyLootboxesPage />} />
                  <Route path="/affiliates" element={<AffiliatesPage />} />
                  <Route path="/transactions" element={<TransactionsPage />} />
                </Routes>
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
