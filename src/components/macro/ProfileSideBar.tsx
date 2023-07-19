import React, { useEffect, useState } from 'react';
import ProfileOptions from './ProfileOptions';
import UserProfileCard from './UserProfileCard';
import ProfileOptionsDropDown from '../micro/ProfileOptionsDropDown';

const ProfileSideBar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const breakpoint2xl = 1536;

  return (
    <div className="flex flex-shrink-0 justify-center rounded-xl bg-custom_black_2 xs:mx-6 xs:my-8 xs:max-h-[320px] xs:min-h-[320px] 2xl:mb-0 2xl:ml-[52px] 2xl:mt-[52px] 2xl:h-auto 2xl:w-[392px]">
      <div
        className=" flex w-full flex-col
       justify-start xs:mt-[30px] xs:gap-6 xs:px-6 xs:pb-6 2xl:mt-[32px] 2xl:gap-8 2xl:px-8"
      >
        <UserProfileCard />
        {windowWidth >= breakpoint2xl ? (
          <ProfileOptions />
        ) : (
          <div className="  ">
            <ProfileOptionsDropDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSideBar;
