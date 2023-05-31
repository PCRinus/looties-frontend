import React from "react";
import FaceBookIcon from "../../assets/FacebookIcon.svg";
import TwiterIcon from "../../assets/TwiterIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import MailIcon from "../../assets/MailIcon.svg";

export const MobileSocialButtons: React.FC = () => {
  return (
    <div className="flex w-3/4 flex-row items-center justify-end gap-5">
      <a href="#">
        <img src={FaceBookIcon} alt="facebook-icon" />
      </a>
      <a href="#">
        <img src={TwiterIcon} alt="twiter-icon " />
      </a>
      <a href="#">
        <img src={InstagramIcon} alt="instagram-icon" />
      </a>
      <a href="#">
        <img src={MailIcon} alt="mail-icon" />
      </a>
    </div>
  );
};
