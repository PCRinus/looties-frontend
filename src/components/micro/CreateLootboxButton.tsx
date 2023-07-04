import { Link } from "react-router-dom";
import CreateLootboxIcon from "../../assets/CreateLootboxIcon.svg";

export const CreateLootboxButton = () => {
  return (
    <Link to="/create-lootbox">
             <div
                    className="flex cursor-pointer leading-4 px-[10px] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 font-semibold text-white justify-center items-center font-sans rounded-xl xs:h-10 xs:w-10 md:max-2xl:h-12 md:max-2xl:w-[176px] 2xl:h-12 2xl:w-[186px]"
                >
                    <img src={CreateLootboxIcon} alt="shield-icon-svg" />
                    <button className="px-[4px] h-[44.57px] rounded-lg font-semibold text-white flex justify-center items-center font-sans">
                        Create a lootbox
                    </button>
                </div>
   </Link>
  );
};




