import React, { useState } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";

const InventoryPage = () => {
  const [cards, setCards] = useState("");
  return (
    <div className="2xl:autoheight bottom-fade flex-auto rounded-xl bg-custom_black_2  xs:mx-6 xs:h-auto xs:min-h-full 2xl:min-h-0 2xl:w-full">
      <ProfileOptionsHeader title={"Inventory"} />
      <div id="content" className="  h-full w-full xs:p-6  2xl:p-8">
        {cards.length > 0 ? (
          <></>
        ) : (
          <div className="flex w-full items-center justify-center  xs:px-6 xs:py-[58px]  2xl:min-h-[664px] 2xl:p-0">
            <div className="flex flex-col items-center justify-center gap-4 font-sans ">
              <h2 className="text-center font-bold text-custom_red_1 xs:text-xl  2xl:text-2xl">
                Your inventory is empty
              </h2>
              <p className="text-center text-base font-semibold text-custom_gray_2 ">
                Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className=" h-10 w-full bg-custom_black_2"></div>
    </div>
  );
};

export default InventoryPage;
