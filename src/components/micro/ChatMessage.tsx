import React from "react";
import ChatPoint from "../../assets/ChatPoint.svg";
import ChatLikeIcon from "../../assets/ChatLikeIcon.svg";
import ChatLikeIconRed from "../../assets/ChatLikeIconRed.svg";
import ChatReplyIcon from "../../assets/ChatReplyIcon.svg";
import ChatMessageRectangle from "../../assets/ChatMessageRectangle.svg";
import UserIcon from "../../assets/UserIcon.svg";
import ChatReplyArrow from "../../assets/ChatReplyArrow.svg";
import ChatVerticalBar from "../../assets/ChatVerticalBar.svg";
import { Message } from "../macro/Chat";
import { useDispatch } from "react-redux";
import { ReduxEvents } from "../../reducers/events";

export interface Props {
  currentUser: any;
  messageId: string;
  message: string;
  likedBy: string[];
  userId: string;
  userName: string;
  level: string;
  createdAt: Date;
  updatedAt: Date;
  repliedMessage: Message | undefined;
  handleSetIsReply: () => void;
  handleRepliedMessageData: (userId: string, messageId: string) => void;
  handleLike: (userId: string, messageId: string) => void;
  handleUnlike: (userId: string, messageId: string) => void;
}

export const ChatMessage: React.FC<Props> = ({
  currentUser,
  messageId,
  message,
  likedBy,
  userId,
  userName,
  level,
  createdAt,
  updatedAt,
  repliedMessage,
  handleSetIsReply,
  handleRepliedMessageData,
  handleLike,
  handleUnlike,
}) => {
  const dispatch = useDispatch();
  const openProfileModal = (profileModalUserId: string) => {
    dispatch({ type: ReduxEvents.StoreModalData, payload: { data: profileModalUserId } });
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "UserProfile" } });
  };

  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);
  let displayedTime = createdAtDate;

  if (createdAtDate.getTime() < updatedAtDate.getTime()) {
    displayedTime = updatedAtDate;
  }

  return (
    <div className="flex w-[95%] flex-col items-start justify-center gap-2">
      {repliedMessage && (
        <div className="ml-[5%] flex w-[85%] flex-row items-end justify-start">
          <div className="h-5 w-7 flex-shrink-0">
            <img src={ChatReplyArrow} alt="Arrow to replied message"></img>
          </div>
          <div className="flex  max-w-full flex-row items-center justify-center gap-2 rounded-lg bg-[#1E2124] px-4 py-2">
            <div className="h-6 w-6 flex-shrink-0">
              <img src={UserIcon} alt="User icon"></img>
            </div>
            <span
              className="max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium text-[#DFDFDF] hover:underline"
              onClick={() => openProfileModal(repliedMessage.userId)}
            >
              @{repliedMessage.name}
            </span>
            <div className="h-4 w-1">
              <img src={ChatVerticalBar} alt="Replied message vertical bar"></img>
            </div>
            <span className="max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium text-[#DFDFDF]">
              {repliedMessage.message}
            </span>
          </div>
        </div>
      )}
      <div className="flex w-full flex-row items-start justify-center gap-4">
        {/* user profile picture; currently same for everyone */}
        <div className="h-10 w-10 shrink-0 grow-0">
          <img src={UserIcon} alt="User icon"></img>
        </div>
        <div className=" flex w-full flex-col items-start justify-center">
          {/* user info and like/reply */}
          <div className=" flex w-full flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-start gap-1 ">
              <h3
                className="max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#DFDFDF] hover:underline"
                onClick={() => openProfileModal(userId)}
              >
                {userName}
              </h3>
              <div className={`rounded-md bg-red-500 px-2 py-1 text-[10px] font-medium text-[#1A1C20] `}>{level}</div>
              <div className="h-1 w-1">
                <img src={ChatPoint} alt="Chat message user details separator"></img>
              </div>
              <h3 className="text-xs text-[#767676]">{`${displayedTime.getHours()}:${
                displayedTime.getMinutes() < 10 ? "0" + displayedTime.getMinutes() : displayedTime.getMinutes()
              }`}</h3>
            </div>
            <div className="flex flex-row items-center justify-end gap-1">
              {likedBy.length > 0 && <span className="text-xs font-medium text-[#F03033]">{likedBy.length}</span>}
              <button
                className="h-4 w-4 shrink-0"
                onClick={() => {
                  likedBy.includes(currentUser.id)
                    ? handleUnlike(currentUser.id, messageId)
                    : handleLike(currentUser.id, messageId);
                }}
              >
                <img
                  src={likedBy.includes(currentUser.id) ? ChatLikeIconRed : ChatLikeIcon}
                  alt="Message like icon"
                ></img>
              </button>
              <button
                className="h-4 w-4 shrink-0"
                onClick={() => {
                  handleRepliedMessageData(userName, messageId);
                  handleSetIsReply();
                }}
              >
                <img src={ChatReplyIcon} alt="Message reply icon" />
              </button>
            </div>
          </div>
          {/* user message */}
          <div className="flex max-w-full flex-row items-start justify-start">
            <div className="relative left-2 ">
              <img className="grow-0" src={ChatMessageRectangle} alt="Message rectangle"></img>
            </div>
            <div className=" w-full bg-[#1E2124] px-4 py-2 text-xs font-medium text-[#DFDFDF]">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
