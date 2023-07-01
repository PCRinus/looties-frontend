import React, { useState } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import PlusIcon from "../../assets/plusIcon.svg";
const MyLootboxesPage: React.FC = () => {
  const [cards, setCards] = useState("");
  return (
    <div className="2xl:autoheight bottom-fade flex-auto rounded-xl bg-custom_black_2  xs:mx-6 xs:h-auto xs:min-h-full 2xl:min-h-0 2xl:w-full">
      <ProfileOptionsHeader title={"My lootboxes"} />
      <div id="content" className="  h-full w-full xs:p-6  2xl:p-8">
        {cards.length === 0 ? (
          <></>
        ) : (
          <div className="flex w-full items-center justify-center  xs:px-6 xs:py-[58px]  2xl:min-h-[664px] 2xl:p-0">
            <div className="flex flex-col items-center justify-center gap-4 font-sans ">
              <h2 className="text-center font-bold text-custom_red_1 xs:text-xl  2xl:text-2xl">
                Create your first lootbox.
              </h2>
              <p className="text-center text-base font-semibold text-custom_gray_2 ">
                Press the button below and you can start making your first <br />
                lootbox.
              </p>
              <button className=" flex w-full flex-row items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-[#F03033] to-[#E5383B] text-base font-semibold text-white xs:h-[44.5px] 2xl:h-12 2xl:w-[233px]">
                <img src={PlusIcon} alt="svg" className="inline" /> Create your lootbox
              </button>
            </div>
          </div>
        )}
      </div>

      <div className=" h-10 w-full bg-custom_black_2"></div>
    </div>
  );
};

export default MyLootboxesPage;
