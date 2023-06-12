import { FC } from "react";
import InfoIcon from "../../assets/InfoIcon.svg";
import ChatEllipse from "../../assets/ChatEllipse.svg";

interface Props {
  chatUsersCount: number;
}

export const ChatHeader: FC<Props> = ({ chatUsersCount }) => {
  return (
    <div className="h-15 border-b-solid box-border flex w-full flex-row items-center justify-around border-b border-[#2C3034] bg-[#1C1E22]">
      <div className="flex flex-row items-center justify-center gap-2">
        <h1 className="font-bold text-custom_white_1">Chat rules</h1>
        <img src={InfoIcon} alt="Info"></img>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <img src={ChatEllipse} alt="Ellipse"></img>
        <h1 className="font-bold text-custom_white_1">{chatUsersCount}</h1>
      </div>
    </div>
  );
};
