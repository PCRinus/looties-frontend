import React from "react";
import AnonymousInfoRectangle from "../../assets/AnonymousInfoRectangle.svg";
const RedeemCodeInfoBubble = () => {
  return (
    <div>
      <div className="absolute top-[39px] z-[1]  rounded-lg bg-[#2C3034] xs:left-[1px] xs:h-[147px] xs:w-[230px] 2xl:left-[72px] 2xl:h-[92px] 2xl:w-[360px]">
        <img
          className="absolute top-[-8px] xs:ml-[158px] 2xl:ml-[87px]"
          src={AnonymousInfoRectangle}
          alt="Rectangle"
        ></img>
        <p className="p-4 font-sans text-xs font-medium text-custom_gray_2">
          Successfully redeeming a with instantly grant you access
          <br />
          to a 5% deposit bonus on all of your You will also eligible
          <br /> for all of our rake back rewards. Use code{" "}
          <span className=" font-bold text-custom_red_1">LOOTIES</span> if you
          <br /> do not have one.
        </p>
      </div>
    </div>
  );
};

export default RedeemCodeInfoBubble;
