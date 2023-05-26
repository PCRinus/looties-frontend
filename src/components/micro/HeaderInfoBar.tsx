import React from "react";
import FaceBookIcon from "../../assets/FacebookIcon.svg";
import TwiterIcon from "../../assets/TwiterIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import MailIcon from "../../assets/MailIcon.svg";

const HeaderInfoBar: React.FC = () => {
  return (
    <div className="flex h-[40px] items-center justify-between">
      <div className="left-section ml-8 font-sans font-medium text-grey_font_color">
        <a href="#" className="">
          Affiliates
        </a>
        <a href="#" className="ml-4">
          Fairness
        </a>
        <a href="#" className="ml-4">
          FAQ
        </a>
        <a href="#" className="ml-4">
          Game responsibly
        </a>
      </div>
      <div className="right-section mr-[33.25px]">
        <div className="social-icons flex items-center justify-center">
          <a href="#" className="social-icon]">
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
    </div>
  );
};

export default HeaderInfoBar;
