import { Link } from "react-router-dom";
import CreateLootboxIcon from "../../assets/CreateLootboxIcon.svg";

export const CreateLootboxButton = () => {
  return (
    <Link to="/create-lootbox">
      <div className="flex h-[44.57px] cursor-pointer items-center justify-center rounded-xl bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white xs:h-10 xs:w-full md:max-2xl:h-12 md:max-2xl:w-[176px] 2xl:h-12 2xl:w-[186px]">
        <img src={CreateLootboxIcon} alt="shield-icon-svg" />
        <button className="flex h-[44.57px] items-center justify-center rounded-lg px-[4px] font-sans font-semibold text-white">
          Create a lootbox
        </button>
      </div>
    </Link>
  );
};
