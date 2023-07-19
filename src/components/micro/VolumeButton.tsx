import React, { useState } from 'react';
import VolumeIcon from '../../assets/VolumeIcon.svg';
import VolumeIconRed from '../../assets/MuteButtonIcon.svg';

const VolumeButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleClick = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button
      className="mr-4 flex items-center justify-center rounded-xl bg-custom_gray_1 xs:h-10 xs:w-10 2xl:h-12 2xl:w-12"
      onClick={handleClick}
    >
      <img src={isMuted ? VolumeIconRed : VolumeIcon} alt="volume-icon-svg" />
    </button>
  );
};

export default VolumeButton;
