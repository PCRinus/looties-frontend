import { FC } from "react";
import CloseButton from "../../assets/Close.svg";
import ChatMessageRectangle from "../../assets/ChatMessageRectangle.svg";

interface Props {
  closeRules: () => void;
}

export const ChatRules: FC<Props> = ({ closeRules }) => {
  return (
    <div className="absolute z-[1] xs:top-8 2xl:top-[154px]">
      <img className="relative top-[10px] xs:ml-[125px] 2xl:ml-16" src={ChatMessageRectangle} alt="Rectangle"></img>

      <div className=" flex flex-row items-start justify-center rounded-md border border-solid border-[#2C3034] bg-[#1E2023] p-2  xs:h-[243px] xs:w-[90vw]  2xl:h-[243px] 2xl:w-[251px]">
        <div className="flex flex-col items-start justify-between">
          <span className="text-center text-xs font-bold text-[#DFDFDF] ">Rules</span>
          <ul className="ml-4 mt-6 list-disc text-xs font-semibold text-[#848B8D]">
            <li>Respect other players and staff members</li>
            <li>No bigotry / toxicity / racism / sexism / life threatening</li>
            <li>No advertising / don't post your affiliate codes</li>
            <li>Don’t spam</li>
            <li>Doing giveaways in chat is forbidden</li>
            <li>Do not beg / ask for giveaways</li>
          </ul>
        </div>
        <div className="flex shrink-0 flex-col items-start justify-start">
          <button className="rounded-md bg-[#2C3034] p-2" onClick={closeRules}>
            <img src={CloseButton} alt="Close"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
