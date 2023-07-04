import React from "react";
import Icon from "../../assets/CardIcons/ApeIcon.svg";
import EditButton from "../../assets/EditButton.svg";
import TrashButton from "../../assets/TrashButton.svg";
const NftLootBox: React.FC = () => {
  return (
    <>
      <div className="custom-style-gray flex items-start justify-center rounded-xl xs:h-[236px] xs:w-[158px] 2xl:h-[297px] 2xl:w-[209px]">
        <div className=" content flex-column mx-0.5 h-full w-full items-start">
          <div className="mt-1 flex flex-row items-center justify-between rounded-t-xl bg-[#1E2124] xs:mb-[1px] xs:mt-0.5  xs:h-[32px] xs:w-[155px] 2xl:mb-0.5 2xl:ml-0 2xl:h-12 2xl:w-full">
            <span className="p-4 font-sans font-bold text-custom_white_1 xs:text-xs 2xl:text-base">name</span>
            <span className=" p-4 font-sans font-bold text-[#888888] xs:text-[8px] 2xl:text-base">info</span>
          </div>
          <div
            className={`custom-gradient-bg-color-cards
          flex rounded-b-xl xs:h-[202px] xs:w-full 2xl:h-[245px] 2xl:w-full `}
          >
            <div className="flex flex-col ">
              <div className=" flex flex-col xs:gap-3 xs:p-3 2xl:gap-3 2xl:p-4">
                <img className="h-auto xs:w-[134px] 2xl:w-[177px]" src={Icon} alt="svg"></img>
                <div className="flex flex-row xs:gap-2 2xl:gap-3">
                  <button className=" flex flex-shrink-0 flex-row items-center justify-center  rounded-lg bg-gradient-to-t from-[#F03033] to-[#E5383B] text-base font-semibold text-white xs:h-[32px] xs:w-[54px] xs:text-xs  2xl:h-8 2xl:w-[89px]">
                    View
                  </button>
                  <img className="w-auto xs:h-[32px]" src={EditButton} alt="svg"></img>
                  <img className="w-auto xs:h-[32px]" src={TrashButton} alt="svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftLootBox;
