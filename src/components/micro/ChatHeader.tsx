import { FC, useState } from "react";
import InfoIcon from "../../assets/InfoIcon.svg";
import ChatEllipse from "../../assets/ChatEllipse.svg";
import { ChatRules } from "./ChatRules";
import { useDispatch } from "react-redux";
import { ReduxEvents } from "../../reducers/events";

interface Props {
  chatUsersCount: number;
}

export const ChatHeader: FC<Props> = ({ chatUsersCount }) => {
  const [showRules, setShowRules] = useState(false);
  const dispatch = useDispatch();

  const handleInfoButtonClick = () => {
    setShowRules(true);
  };

  const handleRulesClose = () => {
    setShowRules(false);
  };

  const handleMobileChatClose = () => {
    dispatch({ type: ReduxEvents.ToggleChat });
  };

  return (
    <div className="border-b-solid box-border flex h-[60px] w-full shrink-0 flex-row items-center justify-around border-b border-[#2C3034] bg-[#1C1E22]">
      <div className="flex flex-row items-center justify-center gap-2">
        <h1 className="font-bold text-custom_white_1">Chat rules</h1>
        <button id="info-button" onClick={handleInfoButtonClick}>
          <img src={InfoIcon} alt="Info"></img>
        </button>
      </div>
      <div className="flex-row items-center justify-center gap-2 xs:hidden 2xl:flex">
        <img src={ChatEllipse} alt="Ellipse"></img>
        <h1 className="font-bold text-custom_white_1">{chatUsersCount}</h1>
      </div>
      <button onClick={handleMobileChatClose} className="flex-row items-center justify-center gap-2 xs:flex 2xl:hidden">
        <h1 className="text-xs font-semibold text-custom_red_1">Close chat</h1>
      </button>
      {showRules && <ChatRules closeRules={handleRulesClose} />}
    </div>
  );
};
