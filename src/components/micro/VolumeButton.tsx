import React from "react";
import VolumeIcon from "../../assets/VolumeIcon.svg";
const VolumeButton = () => {
  return (
    <button className="mr-4 flex items-center justify-center rounded-xl bg-custom_gray_1 xs:h-10 xs:w-10 md:max-2xl:h-12 md:max-2xl:w-12 2xl:h-12 2xl:w-12">
      <img src={VolumeIcon} alt="volume-icon-svg" />
    </button>
  );
};

export default VolumeButton;
