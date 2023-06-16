import React from "react";
import { Chat } from "../components/macro/Chat";
import ProfileSideBar from "../components/macro/ProfileSideBar";
import "../styles/micro/Profile.scss";
import ProfilePage from "../components/macro/ProfilePage";

const Profile: React.FC = () => {
  return (
    <div className="flex w-screen  xs:h-[calc(100vh-80px-64px)] xs:flex-col 2xl:h-[calc(100vh-120px)] 2xl:flex-row 2xl:justify-center">
      <ProfileSideBar />
      <ProfilePage />
      <Chat />
    </div>
  );
};

export default Profile;
