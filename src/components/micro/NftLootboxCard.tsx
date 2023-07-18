import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  cardTitle: string;
  itemsCount: string | number;
  label: string;
  cost: string | number;
  icon: string;
  lootboxId: string;
}

//header size
const xsHeaderHeight = 'xs:h-8';
const xsHeaderWidth = 'xs:w-full';
const lgHeaderHeight = 'lg:h-12';
const lgHeaderWidth = 'lg:w-full';

// canva size
const xsCanvaHeight = 'xs:h-[260px]';
const xsCanvaWidth = 'xs:w-[182px]';
const lgCanvaHeight = 'lg:h-[368px]';
const lgCanvaWidth = 'lg:w-64';

// content size
const xsContentHeight = 'xs:h-[222px]';
const xsContentWidth = 'xs:w-full';
const lgContentHeight = 'lg:h-[309px]';
const lgContentWidth = 'lg:w-full';

const NftLootboxCard: React.FC<Props> = ({ cardTitle, itemsCount, label, cost, icon, lootboxId }) => {
  return (
    <>
      <div
        id="canva"
        className={`custom-style-gray flex items-start justify-center rounded-xl ${xsCanvaHeight} ${xsCanvaWidth} ${lgCanvaHeight} ${lgCanvaWidth}`}
      >
        <div className=" content flex-column h-full w-full items-start xs:p-[2px] lg:p-1">
          <div
            id="header"
            className={`flex flex-row items-center justify-between rounded-t-xl bg-[#1E2124] xs:mb-[2px] ${xsHeaderHeight} ${xsHeaderWidth} lg:mb-0.5 ${lgHeaderHeight} ${lgHeaderWidth}`}
          >
            <span className="p-4 font-sans font-bold text-custom_white_1 xs:text-xs lg:text-base">{cardTitle}</span>
            <span className="text-[#888888] xs:p-2 xs:text-xs lg:p-4 lg:text-base">{`${itemsCount} items`}</span>
          </div>
          <div
            id="content"
            className={`custom-gradient-bg-color-cards flex rounded-b-xl ${xsContentHeight} ${xsContentWidth} ${lgContentHeight} ${lgContentWidth}`}
          >
            <div className="flex w-full flex-col">
              <div className=" flex flex-col xs:gap-3 xs:p-3 lg:gap-4 lg:p-4">
                <img className="h-auto rounded-xl xs:w-[154px] lg:w-[220px]" src={icon} alt="nft-url"></img>

                <Link to={`/lootboxes/${lootboxId}`}>
                  <button className="rounded-lg bg-gradient-to-t from-[#F03033] to-[#E5383B] font-sans font-bold text-white xs:h-[29px] xs:w-[154px] xs:text-xs lg:h-[40px] lg:w-[220px] lg:text-base">
                    {cost} Loot
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftLootboxCard;
