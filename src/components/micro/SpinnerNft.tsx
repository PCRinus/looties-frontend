import React from 'react';
import '../../styles/micro/SpinnerNft.scss';
import DolarFrame from '../../assets/Frame.svg';

interface INftProps {
  className?: string;
  cardTitle: string;
  icon: string;
  coins?: number | string;
  rarity?: 'red' | 'purple' | 'blue' | 'green'; // Add rarity prop
}

const SpinnerNft: React.FC<INftProps> = ({ cardTitle, icon, coins, className, rarity }) => {
  const style = `card-style-${rarity}`;
  return (
    <div className={`${style} flex h-full w-full items-center justify-center ${className}`}>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-sans font-bold text-custom_white_1 xs:ml-2 xs:text-[12px] 2xl:text-[16px]">
          {cardTitle}
        </span>
        <img src={icon} alt="icon-svg" className="mt-2 xs:w-[80px] 2xl:w-[148px] rounded-md"></img>
        {coins && (
          <div className="flex items-center justify-normal font-sans font-bold text-custom_red_1 xs:mt-[8px] xs:text-[12px] 2xl:mt-3 2xl:px-4 2xl:text-[16px]">
            <img src={DolarFrame} alt="frame-svg" className=" xs:mr-1 xs:h-4 xs:w-4 2xl:mr-2 2xl:h-5 2xl:w-5"></img>
            {coins} Coins
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinnerNft;
