import React from "react";
import Twiter from "../../assets/Twiter.svg";
interface IProps {}
const ProfilePage: React.FC<IProps> = () => {
  return (
    <div className="bottom-fade xs:full rounded-xl bg-custom_black_2 xs:mx-6 xs:h-full 2xl:mx-[3vw] 2xl:mt-[52px] 2xl:h-[89%] 2xl:w-full">
      <div
        id="ProfileOptionsHeader"
        className="flex w-full items-center justify-center border-b-2 border-custom_gray_1 bg-[#1E2124] xs:h-[68px] 2xl:h-20"
      >
        <span className="font-sans text-2xl font-bold text-custom_white_1">My Profile</span>
      </div>
      <div id="content" className=" h-full w-full 2xl:p-8">
        <div className="h-full w-full">
          <span className="font-sans text-xl font-bold text-custom_white_1">Statistics</span>
          <div className="mt-6 grid grid-cols-2 grid-rows-4 gap-4">
            <div
              id="TO DO Component"
              className=" h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <div
              id="TO DO Component"
              className="h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <div
              id="TO DO Component"
              className="h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <div
              id="TO DO Component"
              className="h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <div
              id="TO DO Component"
              className="h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <div
              id="TO DO Component"
              className="h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <div
              id="TO DO Component"
              className="h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <div
              id="TO DO Component"
              className="h-28 w-full rounded-xl border-[1px] border-solid border-[#2C3034]"
            ></div>
            <span className="mt-8 font-sans text-xl font-bold text-custom_white_1">Links</span>
          </div>
          <div className="mt-6 flex gap-6">
            <img src={Twiter} className=""></img>
            <img src={Twiter} className=""></img>
            <img src={Twiter} className=""></img>
            <img src={Twiter} className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
