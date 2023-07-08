import React from "react";
import Logo from "../../assets/Looties_wordmark 1.svg";
import FaceBookIcon from "../../assets/FacebookIcon.svg";
import TwiterIcon from "../../assets/TwiterIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import MailIcon from "../../assets/MailIcon.svg";
import AdultImg from "../../assets/18+.svg";
import { Link } from "react-router-dom";

const HomepageFooter = () => {
  return (
    <div className="w-full flex-shrink-0 flex-col border border-custom_gray_1  bg-custom_black_2 xs:h-[508px]  2xl:mb-0 2xl:h-[418px]">
      <div className="h-full w-full xs:px-[24px] xs:py-[48px] 2xl:p-[52px] 2xl:pb-[100px]">
        <div className="grid h-full w-full xs:grid-cols-2 xs:grid-rows-2 xs:gap-0 2xl:grid-cols-5 2xl:grid-rows-1 2xl:gap-16">
          <div className="col-span-2">
            <img className="xs:h-[38px] xs:w-[170px]" src={Logo} alt="logo-svg"></img>
            <p className="font-sans text-sm font-semibold text-custom_gray_2 xs:mt-4 2xl:mt-8">
              Bull Gaming N.V. payments can be processed by WINGAMING SUPPORT LIMITED (Registration Number HE406701).
              Company Address: Avlonos, 1, MARIA HOUSE, 1075, Nicosia, Cyprus
            </p>
            <p className="mt-4 font-sans text-sm font-semibold text-custom_gray_2">
              Crypto trading is not gambling, and therefore not covered by our gaming license.
            </p>
          </div>
          <div>
            <div id="links" className="flex flex-col justify-center">
              <span className=" font-sans text-xl font-semibold text-custom_white_1">Info</span>
              <a href="#" className="py-2 font-sans   text-base font-semibold text-custom_gray_2 2xl:mt-6">
                FAQ
              </a>
              <a href="#" className="py-2 font-sans   text-base font-semibold text-custom_gray_2">
                Support
              </a>
              <Link
                to="/terms-of-service"
                className=" whitespace-nowrap py-3 font-sans  text-base font-semibold text-custom_gray_2"
              >
                Terms of Service
              </Link>
              <a href="#" className=" whitespace-nowrap py-3 font-sans  text-base font-semibold text-custom_gray_2">
                Privacy Policy
              </a>
            </div>
          </div>
          <div>
            <div id="social" className="flex flex-col">
              <span className="pb-2 font-sans  text-xl font-semibold text-custom_white_1">Social</span>
              <div className="social-icons mt-4 flex items-center justify-start gap-5 2xl:mt-6">
                <a href="#" className="social-icon ">
                  <img src={TwiterIcon} alt="twiter-icon " />
                </a>
                <a href="#" className="social-icon ">
                  <img src={InstagramIcon} alt="instagram-icon" />
                </a>
                <a href="#" className="social-icon ">
                  <img src={MailIcon} alt="mail-icon" />
                </a>
              </div>
              <img src={AdultImg} alt="img-svg" className="ml-[-50px] h-40  w-40 xs:inline 2xl:hidden" />
            </div>
          </div>
          <div className="xs:hidden 2xl:inline">
            <img src={AdultImg} alt="img-svg" className="mt-[-40px]" />
          </div>
        </div>
        <div className="flex h-[100px] flex-shrink-0 items-center justify-center border-t-[1px] border-t-custom_gray_1  xs:hidden 2xl:flex">
          <p className="text-center font-sans text-base font-semibold text-custom_gray_2">
            @ 2023 Looties. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageFooter;
