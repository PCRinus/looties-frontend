import React, { useState, useEffect } from "react";
import ProgressBarXs from "../micro/ProgressBarXs";
import Icon from "../../assets/IconTransparent.svg";
import userIcon from "../../assets/UserIcon.svg";
import PhotoButton from "../../assets/PhotoButton.svg";
import {shallowEqual, useSelector} from "react-redux";
import toast from "react-hot-toast";
import { ReduxEvents } from "../../reducers/events";
import { useDispatch } from "react-redux";


const UserProfileCard: React.FC = () => {
  const profile = useSelector((state: any) => state.user.profile);
  const xpNeeded = profile.level * 4000;
  const progressPercentage = (profile.xp / xpNeeded) * 100;
  const dispatch = useDispatch();

    const [profilePic] = useSelector(
        (state: any) => [
            state.user.profile.avatarUrl,
        ],
        shallowEqual
    );

    const [isHovered, setIsHovered] = useState(true);


    return (
      <div className="flex h-full min-h-[205px] w-full flex-col items-center justify-center gap-4 rounded-xl border-[1px] border-solid border-[#2C3034] 2xl:h-[214px] 2xl:w-full ">
        <div className="relative flex gap-4 xs:w-full xs:px-6 2xl:mx-8 2xl:mt-8 2xl:h-1/2 2xl:w-[-webkit-fill-available] 2xl:justify-normal 2xl:p-0">
            {profilePic ? (
                    <div className="flex flex-col justify-center items-center h-[100px] w-[80px]">
                <img
                    src={profilePic}
                    alt="transparent-icon-svg"
                    className={`cursor-pointer hover:opacity-60 object-cover w-[80px] h-[80px] max-w-[80px] max-h-[80px] ${
                        isHovered ? "" : "opacity-60"
                    }`}
                    onError={(e) => {
                        e.currentTarget.src = `${userIcon}`;
                    }}
                    onClick={() => {
                        dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "ImageChange" } });
                    }}
                    onMouseEnter={() => setIsHovered(false)}
                    onMouseLeave={() => setIsHovered(true)}
                />
                    </div>
            ) : (
                <div className="flex flex-col justify-center items-center h-[100px] w-[80px]">
                    <img
                        src={userIcon}
                        alt="Default Image"
                        className={`cursor-pointer hover:opacity-60 object-cover w-[80px] h-[80px] max-w-[80px] max-h-[80px] ${
                            isHovered ? "" : "opacity-60"
                        }`}
                        onClick={() => {
                            dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "ImageChange" } });
                        }}
                        onMouseEnter={() => setIsHovered(false)}
                        onMouseLeave={() => setIsHovered(true)}
                    />

                </div>
            )}
            {!isHovered && (
                <img
                    src={PhotoButton}
                    alt="photo-icon-svg"
                    className="cursor-pointer absolute xs:left-14 xs:top-8 2xl:left-8 2xl:top-[2.5rem]"
                    onClick={() => {
                        dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "ImageChange" } });
                    }}
                    onMouseEnter={() => setIsHovered(false)}
                    onMouseLeave={() => setIsHovered(true)}
                />
            )}
            <div className="flex flex-col">
            <span className="font-sans text-xl font-bold text-custom_white_1">{profile.userName}</span>
            <span className="mt-1 font-sans text-xs font-semibold text-custom_gray_2">
            Member since {new Date(profile.createdAt).toLocaleDateString()}
          </span>
            <span className="font-sans text-base font-semibold text-custom_red_1 2xl:mt-3">Level {profile.level}</span>
          </div>
        </div>
        <div className="w-[-webkit-fill-available] xs:mx-6 2xl:mx-8 2xl:mb-8 2xl:mt-4 2xl:h-1/2">
          <ProgressBarXs
              currentLevel={profile.level}
              currentXP={profile.xp}
              nextLevel={profile.level + 1}
              xpNeeded={xpNeeded}
              progressPercentage={progressPercentage}
              fontClass="font-sans font-semibold"
              textClass="text-custom_gray_2 text-xs"
          />
        </div>
      </div>
  );
};

export default UserProfileCard;
