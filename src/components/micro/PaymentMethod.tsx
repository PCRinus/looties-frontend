import React from "react";
import LogoImg1 from "../../assets/Solana_logo 2.svg";
import LogoImg2 from "../../assets/Solana_logo 3.svg";
import LogoImg3 from "../../assets/Solana_logo 4.svg";

const PaymentMethod: React.FC = () => {
  return (
    <div className="flex flex-col border-y border-custom_gray_1 xs:py-6 2xl:p-8">
      <div className=" text-center font-sans font-bold text-custom_white_1 xs:text-sm 2xl:text-base">
        Deposit with <span className=" text-custom_red_1">your preferred payment method</span>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <img src={LogoImg1} alt="img-svg"></img>
        <img src={LogoImg3} alt="img-svg"></img>
      </div>
    </div>
  );
};

export default PaymentMethod;
