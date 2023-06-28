import React from "react";
import FaceBookIcon from "../../assets/FacebookIcon.svg";
import TwiterIcon from "../../assets/TwiterIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import MailIcon from "../../assets/MailIcon.svg";
import { Link } from "react-router-dom";

const HeaderInfoBar: React.FC = () => {
  return (
    <div className="flex h-[40px] items-center justify-between">
      <div className="left-section ml-8 font-sans font-medium text-grey_font_color">
        <Link to="/affiliates" className="ml-4">
          Affiliates
        </Link>
        <Link to="/" className="ml-4">
          Fairness
        </Link>
        <Link to="/" className="ml-4">
          FAQ
        </Link>
        <Link to="/game-responsibly" className="ml-4">
          Game responsibly
        </Link>
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
