import React, { useEffect } from 'react';
import Icon from '../../assets/CardIcons/GreenCube.svg';
import Elipse from '../../assets/Ellipse.svg';

interface NftProps {
  name: string;
  url: string;
  price: number;
}

//header size
const xsHeaderHeight = 'xs:h-8';
const xsHeaderWidth = 'xs:w-full';
const xlHeaderHeight = '2xl:h-12';
const xlHeaderWidth = '2xl:w-full';

// canva size
const xsCanvaHeight = 'xs:h-[279px]';
const xsCanvaWidth = 'xs:w-[158px]';
const xlCanvaHeight = '2xl:h-[340px]';
const xlCanvaWidth = '2xl:w-[209px]';

// content size
const xsContentHeight = 'xs:h-[241px]';
const xsContentWidth = 'xs:w-full';
const xlContentHeight = '2xl:h-[282px]';
const xlContentWidth = '2xl:w-full';

const InventoryItemCard: React.FC<NftProps> = ({ name, url, price }) => {
  return (
    <>
      <div
        id="canva"
        className={`custom-style-gray flex items-start justify-center rounded-xl ${xsCanvaHeight} ${xsCanvaWidth} ${xlCanvaHeight} ${xlCanvaWidth}`}
      >
        <div className="content flex-column h-full w-full items-start xs:p-0.5 2xl:p-1">
          <div
            id="header"
            className={`mb-0.5 flex flex-row items-center justify-between rounded-t-xl  bg-[#1E2124]  ${xsHeaderHeight} ${xsHeaderWidth} ${xlHeaderHeight} ${xlHeaderWidth}`}
          >
            <span className="p-4 font-sans font-bold text-custom_white_1 xs:text-xs 2xl:text-base">{name}</span>
          </div>
          <div
            id="content"
            className={`custom-gradient-bg-color-cards flex rounded-b-xl ${xsContentHeight} ${xsContentWidth} ${xlContentHeight} ${xlContentWidth}`}
          >
            <div className="flex flex-col">
              <div className="flex flex-col xs:gap-3 xs:p-3 2xl:gap-3 2xl:p-4">
                <img className="h-auto rounded-xl xs:w-[134px] 2xl:w-[177px]" src={Icon} alt="nft-url"></img>
                <div className="relative h-1 rounded bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 xs:mt-[6px] xs:w-[130px] 2xl:mt-[2px] 2xl:w-[173px]">
                  <img
                    src={Elipse}
                    alt="ellipse.svg"
                    className="absolute xs:ml-[2rem] xs:mt-[-1.75rem] 2xl:ml-[3.5rem] 2xl:mt-[-1.75rem] "
                  ></img>
                </div>
                <div className="flex justify-between">
                  <label className="font-sans font-semibold text-[#848B8D] xs:text-[8px] 2xl:text-[10px]"></label>
                  <label className="font-sans font-bold text-custom_white_1 xs:text-xs 2xl:text-xs">
                    price not available
                  </label>
                  <label className="font-sans font-semibold text-[#848B8D] xs:text-[8px] 2xl:text-[10px]"></label>
                </div>
                <div className="flex w-full flex-row xs:mt-[-4px] xs:gap-2 2xl:gap-2">
                  <button className="flex flex-shrink-0 flex-row items-center justify-center rounded-lg bg-custom_gray_1 text-base font-semibold text-custom_gray_2 xs:h-[32px] xs:w-[49px] xs:text-xs 2xl:h-8 2xl:w-[82px]">
                    Sell
                  </button>
                  <button className="flex flex-shrink-0 flex-row items-center justify-center rounded-lg bg-gradient-to-t from-[#F03033] to-[#E5383B] text-base font-semibold text-white xs:h-[32px] xs:w-[74px] xs:text-xs 2xl:h-8 2xl:w-[82px]">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryItemCard;
