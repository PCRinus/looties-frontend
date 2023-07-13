import React from 'react';
import EmptyBox from '../../assets/EmptyBox.svg';

const EmptyBoxCardContent: React.FC = () => {
  return (
    <>
      <img
        src={EmptyBox}
        alt="icon-svg"
        className="absolute scale-[40%] xs:mb-6 xs:h-40 xs:w-40 2xl:mb-16 2xl:h-60 2xl:w-60"
      />
      <span className="absolute font-sans font-bold text-gray-500 xs:mt-20 xs:text-base 2xl:mt-20 2xl:text-2xl">
        Empty lootbox
      </span>
    </>
  );
};

export default EmptyBoxCardContent;
