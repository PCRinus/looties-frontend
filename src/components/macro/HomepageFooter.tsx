import React from "react";
import Logo from "../../assets/Looties_wordmark 1.svg";
import FaceBookIcon from "../../assets/FacebookIcon.svg";
import TwiterIcon from "../../assets/TwiterIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import MailIcon from "../../assets/MailIcon.svg";
import AdultImg from "../../assets/18+.svg";

const HomepageFooter = () => {
  return (
    <div className=" w-full border  border-custom_gray_1 bg-custom_black_2 xs:h-[697px] 2xl:h-[418px] ">
      <div className="2xl:pt-[52px flex xs:flex-col xs:justify-center xs:px-6 xs:pb-[50px] xs:pt-12 2xl:relative 2xl:flex-row 2xl:justify-between 2xl:pl-[52px]">
        <div id="looties" className=" flex flex-col 2xl:w-2/5 2xl:pr-[2vw]">
          <img className="xs:h-[38px] xs:w-[170px]" src={Logo} alt="logo-svg"></img>
          <p className="font-sans text-sm font-semibold text-custom_gray_2 xs:mt-4 2xl:mt-8">
            Bull Gaming N.V. payments can be processed by WINGAMING SUPPORT LIMITED (Registration Number HE406701).
            Company Address: Avlonos, 1, MARIA HOUSE, 1075, Nicosia, Cyprus
          </p>
          <p className="mt-4 font-sans text-sm font-semibold text-custom_gray_2">
            Crypto trading is not gambling, and therefore not covered by our gaming license.
          </p>
        </div>
        <div id="links" className="flex flex-row xs:mt-12 xs:justify-between 2xl:mt-0 2xl:justify-normal">
          <div id="right-links-col" className="flex flex-col 2xl:pr-[10vw]">
            <span className="pb-2 font-sans text-base font-semibold text-custom_white_1">Info</span>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              About us
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              FAQ
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Partnership
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Support
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Terms of Service
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Privacy Policy
            </a>
          </div>
          <div id="left-links-col" className="flex flex-col">
            <span className="pb-2 font-sans text-base font-semibold text-custom_white_1">Platform</span>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Lootboxes
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Classic
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Affiliates
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Game responsibly
            </a>
            <a href="#" className="py-2 font-sans text-sm font-semibold text-custom_gray_2">
              Fairness
            </a>
          </div>
        </div>
        <div
          id="social"
          className="flex xs:relative xs:mt-12 xs:flex-row 2xl:mt-0 2xl:flex-col 2xl:justify-between 2xl:pl-[2vw] 2xl:pr-[52px]"
        >
          <div className="flex flex-col">
            <span className="pb-2 font-sans text-base font-semibold text-custom_white_1">Social</span>
            <div className="social-icons mt-4 flex items-center justify-center">
              <a href="#" className="social-icon">
                <img src={FaceBookIcon} alt="facebook-icon" />
              </a>
              <a href="#" className="social-icon ml-[23.5px]">
                <img src={TwiterIcon} alt="twiter-icon " />
              </a>
              <a href="#" className="social-icon ml-[19.33px]">
                <img src={InstagramIcon} alt="instagram-icon" />
              </a>
              <a href="#" className="social-icon ml-[18.92px]">
                <img src={MailIcon} alt="mail-icon" />
              </a>
            </div>
          </div>
          <img
            src={AdultImg}
            alt="img-svg"
            className="xs:absolute xs:bottom-[-1.75rem] xs:right-5 xs:inline 2xl:hidden"
          />
        </div>
        <img src={AdultImg} alt="img-svg" className="xs:hidden 2xl:absolute 2xl:right-28 2xl:top-24 2xl:inline" />
      </div>
      <div className="flex flex-col xs:hidden 2xl:inline">
        <hr className=" border-1 rounded bg-custom_gray_1 2xl:mx-[52px]"></hr>
        <p className="text-center font-sans text-base font-semibold text-custom_gray_2 2xl:my-6">
          @ 2023 Looties. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HomepageFooter;
