import React from "react";

interface IProps {
  title: string;
}
const ProfileOptionsHeader: React.FC<IProps> = ({ title }) => {
  return (
    <>
      <div className="flex w-full items-center justify-center border-b-2 border-custom_gray_1 bg-[#1E2124] xs:h-[68px] 2xl:h-20">
        <span className="font-sans text-2xl font-bold text-custom_white_1">{title}</span>
      </div>
    </>
  );
};

export default ProfileOptionsHeader;
