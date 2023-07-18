import LootboxesImg from '../../assets/LootboxexImg.svg';
import DropBoxRed from '../../assets/DropboxIconRed.svg';
import LootboxesIconWhite from '../../assets/LootboxesIconWhite.svg';
import { Link } from 'react-router-dom';

const LootboxGame: React.FC = () => {
  return (
    <>
      <div className="flex gap-4">
        <img src={DropBoxRed} alt="img-svg" className=" h-8 w-auto"></img>
        <span className="font-sans text-2xl font-bold text-custom_white_1">Lootboxes</span>
      </div>
      <div className="flex flex-col">
        <img src={LootboxesImg} alt="img-svg" className="xs:mt-[24px] lg:mt-[33px]" />
        <p className="font-sans text-base font-semibold text-custom_gray_2 xs:mt-[-16px] lg:mt-[-64px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center xs:mt-4 lg:mt-6">
        <Link to="lootboxes" className="w-full">
          <button className="flex w-full flex-row items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-[#F03033] to-[#E5383B] font-bold text-white xs:h-[45px] lg:px-4 lg:py-2">
            <img src={LootboxesIconWhite} alt="Lootboxes icon"></img>
            <span className="whitespace-nowrap">Go to Lootboxes</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default LootboxGame;
