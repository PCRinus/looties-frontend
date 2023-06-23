import React from "react";
import TestUserPicture from "../../assets/TestUserPicture.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReduxEvents } from "../../reducers/events";

interface UserDetailsProps {
  name: string;
  level: number;
}

const UserInfo: React.FC<UserDetailsProps> = ({ name, level }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container1 flex items-center justify-center xs:text-xs 2xl:text-base">
        <button onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "UserProfile" } })}>
          <img className="user-picture h-12" src={TestUserPicture} alt="user-icon-svg"></img>
        </button>
        <div className="ml-2 flex-col items-center justify-normal">
          <Link to="profile">
            <label className=" block font-sans font-semibold text-custom_white_1">{name}</label>
          </Link>
          <label className="block font-sans text-[12px] font-light text-red-500">Level {level}</label>
        </div>
      </div>
    </>
  );
};

export default UserInfo;