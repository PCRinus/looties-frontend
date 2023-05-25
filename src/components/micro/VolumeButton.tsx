import React from "react";
import VolumeIcon from "../../assets/VolumeIcon.svg";
const VolumeButton = () => {
  return (
    <button className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-custom_gray_1">
      <img src={VolumeIcon} alt="volume-icon-svg" />
    </button>
  );
};

export default VolumeButton;
