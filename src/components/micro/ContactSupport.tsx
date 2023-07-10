import React from "react";
import ChatIcon from "../../assets/chat-bubble-left-right.svg";
import { Link } from "react-router-dom";
const ContactSupport: React.FC = () => {
  return (
    <>
      <div className="flex items-center rounded-xl bg-[#1A1D20] xs:mx-6 xs:h-[137px] xs:w-auto xs:flex-col  xs:justify-center xs:gap-4 2xl:h-20 2xl:w-full  2xl:flex-row 2xl:justify-between 2xl:gap-0 ">
        <span className="font-sans text-xl font-bold text-custom_white_1 2xl:ml-8">If you have an issue ?</span>
        <Link
          to="/support"
          className="flex h-[44.57px] items-center justify-center gap-2 rounded-xl bg-gradient-to-t from-red-700  to-red-500 font-sans text-base font-semibold text-white xs:w-[90%] 2xl:mr-8 2xl:w-[206px]"
        >
          <img src={ChatIcon} alt="svg" /> Contact support
        </Link>
      </div>
    </>
  );
};

export default ContactSupport;
