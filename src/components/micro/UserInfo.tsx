import React from "react";
import TestUserPicture from "../../assets/TestUserPicture.svg";
import { Link } from "react-router-dom";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import userIcon from "../../assets/UserIcon.svg";

interface UserDetailsProps {
  name: string;
  level: number;
}

const UserInfo: React.FC<UserDetailsProps> = ({ name, level }) => {
  const [profilePic] = useSelector(
      (state: any) => [
        state.user.profile.avatarUrl,
      ],
      shallowEqual
  );
  return (
    <>
      <div className="container1 flex items-center justify-center xs:text-xs 2xl:text-base">
        <Link to="profile">
          <button>
            {profilePic ? (
                  <img className="user-picture h-12 max-w-[48px] object-cover" src={profilePic} alt="user-icon-svg"
                       onError={(e) => {
                              e.currentTarget.src = `${userIcon}`;
                           }}
                  />
            ) : (

                <img className="user-picture h-12 max-w-[48px] object-cover" src={userIcon} alt="user-icon-svg"
                     onError={(e) => {
                       e.currentTarget.src = `${userIcon}`;
                     }}
                />
            )}
          </button>
        </Link>
        <div className="ml-2 flex-col items-center justify-normal">
          <Link to="profile">
            <button className=" block font-sans font-semibold text-custom_white_1 ">{name}</button>
          </Link>
          <label className="block font-sans text-[12px] font-light text-red-500">Level {level}</label>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
