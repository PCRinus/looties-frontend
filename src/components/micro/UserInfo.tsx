import React from "react";
import TestUserPicture from "../../assets/TestUserPicture.svg";

interface UserDetailsProps {
  name: string;
  level: number;
}

const UserInfo: React.FC<UserDetailsProps> = ({ name, level }) => {
  return (
    <>
      <div className="container1 flex justify-center items-center">
        <img
          className="user-picture h-12"
          src={TestUserPicture}
          alt="user-icon-svg"
        ></img>
        <div className="ml-2 flex-col justify-normal items-center">
          <label className=" block font-sans font-semibold text-custom_white_1">
            {name}
          </label>
          <label className="block font-sans text-[12px] font-light text-red-500">
            Level {level}
          </label>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
