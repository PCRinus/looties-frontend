import React from 'react';
import GameNav from '../micro/GameNav';
import LootboxesImg from '../../assets/LootboxexImg.svg';
import ClassicImg from '../../assets/ClassicImg.svg';
import WalletIcon from '../../assets/Wallet.svg';
import Dropbox from '../../assets/DropBoxIcon.svg';
import redStar from '../../assets/StarRed.svg';
import DropBoxRed from '../../assets/DropboxIconRed.svg';
import LootboxesIconWhite from '../../assets/LootboxesIconWhite.svg';
import ClassicIconWhite from '../../assets/ClassicIconWhite.svg';
import { Link } from 'react-router-dom';
const Games: React.FC = () => {
  return (
    <div className="flex xs:flex-col xs:justify-center 2xl:flex-row 2xl:gap-[52px]">
      <div className="">
        <div className="flex gap-4">
          <img src={DropBoxRed} alt="img-svg"></img>
          <span className="font-sans text-2xl font-bold text-custom_white_1">Lootboxes</span>
        </div>
        <div className="flex flex-col">
          <img src={LootboxesImg} alt="img-svg" className="xs:mt-[24px] 2xl:mt-[33px]" />
          <p id="1" className="font-sans text-base font-semibold text-custom_gray_2 xs:my-4 2xl:mt-[-25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Link to="lootboxes" className="w-full">
            <button className="flex w-full flex-row items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-[#F03033] to-[#E5383B] font-bold text-white xs:h-[45px] 2xl:mt-[25px] 2xl:px-4 2xl:py-2">
              <img src={LootboxesIconWhite} alt="Lootboxes icon"></img>
              <span className="whitespace-nowrap">Go to Lootboxes</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="xs:mt-14 2xl:mt-0">
        <div className="flex gap-4">
          <img src={redStar} alt="img-svg"></img>
          <span className="font-sans text-2xl font-bold text-custom_white_1">Classic</span>
        </div>
        <div className="flex flex-col">
          <img src={ClassicImg} alt="img-svg" className="xs:mt-[24px] 2xl:mt-[33px]" />
          <p
            id="2"
            className="font-sans text-base font-semibold text-custom_gray_2 xs:my-4 2xl:mt-[12px] min-[2560px]:mt-[30px]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Link to="classic" className="w-full">
            <button className="flex w-full flex-row items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-[#F03033] to-[#E5383B] font-bold text-white  xs:h-[45px] 2xl:mt-[25px] 2xl:px-4 2xl:py-2">
              <img src={ClassicIconWhite} alt="Classic icon"></img>
              <span className="whitespace-nowrap">Go to Classic</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
