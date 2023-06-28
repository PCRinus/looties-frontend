import { Link } from "react-router-dom";
import CreateLootboxIcon from "../../assets/CreateLootboxIcon.svg";

export const CreateLootboxButton = () => {
  return (
    <Link to="create-lootbox">
      <button className="flex flex-row items-center justify-center gap-4 rounded-lg bg-gradient-to-t from-[#F03033] to-[#E5383B] px-4 py-2">
        <img src={CreateLootboxIcon} alt="Create lootbox"></img>
        <span className="whitespace-nowrap font-bold text-white xs:text-xs 2xl:text-base">Create a lootbox</span>
      </button>
    </Link>
  );
};
