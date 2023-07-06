import React, { FC, useEffect, useRef, useState } from "react";
import EmojiIcon from "../../assets/EmojiIcon.svg";
import ChatSendButtonIcon from "../../assets/ChatSendButton.svg";
import CancelReplyIcon from "../../assets/CancelReplyIcon.svg";
import { RepliedMessage } from "../macro/Chat";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { useScreenResolution } from "../../hooks/useScreenResolution";
import { Theme } from "emoji-picker-react";

interface Props {
  handleMessage: (message: string) => void;
  handleReply: (reply: string) => void;
  handleCancelReply: () => void;
  isReply: boolean;
  repliedMessageData: RepliedMessage | undefined;
}

export const ChatInput: FC<Props> = ({
  handleMessage,
  handleReply,
  isReply,
  handleCancelReply,
  repliedMessageData,
}) => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [inputText, setInputText] = useState<string>("");
  const inputFieldRef = useRef<HTMLTextAreaElement>(null);
  const [width] = useScreenResolution();

  const toggleEmojiPicker = () => {
    setOpenEmojiPicker(!openEmojiPicker);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleEmojiPick = (emoji: any) => {
    setInputText((prevInputText) => prevInputText + emoji.emoji);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setTimeout(() => {
        isReply ? handleReply(inputText) : handleMessage(inputText);
        setInputText("");
        setOpenEmojiPicker(false);
      }, 1);
    }
  };

  useEffect(() => {
    if (isReply) {
      inputFieldRef.current!.focus();
    }
  }, [isReply]);

  return (
    <div
      className={`${
        isReply ? "pb-4" : "py-4"
      } flex flex-col items-center justify-center gap-2 bg-[#1F2225] xs:w-screen 2xl:w-full`}
    >
      {openEmojiPicker && (
        <div
          className={`absolute flex flex-col items-end justify-center bg-[#222222] ${
            isReply ? "bottom-28" : "bottom-20"
          }`}
        >
          <EmojiPicker
            emojiStyle={EmojiStyle.GOOGLE}
            skinTonesDisabled
            theme={Theme.DARK}
            height="350px"
            width={width < 1536 ? "95vw" : "400px"}
            onEmojiClick={handleEmojiPick}
            previewConfig={{
              showPreview: false,
            }}
          />
        </div>
      )}
      {isReply && (
        <div className="flex  h-8 w-full items-center justify-center border-b border-solid border-b-[#2C3034]">
          <div className="flex w-3/4 flex-row items-center justify-between bg-[#1E2124] ">
            <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold text-[#888888]">
              Replying to{" "}
              <span className="text-xs font-semibold text-[#F03033] ">
                @{repliedMessageData!.repliedMessageUserName}
              </span>{" "}
            </h1>
            <button onClick={handleCancelReply}>
              <img src={CancelReplyIcon} alt="Cancel reply"></img>
            </button>
          </div>
        </div>
      )}

      <div className="flex w-3/4 flex-row items-center justify-center gap-3 rounded-xl bg-[#2C3034] px-4">
        <textarea
          className="h-12 w-5/6 resize-none rounded-xl bg-[#2C3034] px-4 py-3 text-base font-semibold text-[#888888] focus:outline-none"
          placeholder="Type here..."
          onChange={handleInputChange}
          ref={inputFieldRef}
          value={inputText}
          onKeyDown={handleKeyDown}
        ></textarea>

        <button onClick={toggleEmojiPicker}>
          <img className="h-4 w-4" src={EmojiIcon} alt="Emoji icon"></img>
        </button>

        <button
          className="mt-2 h-9 w-9"
          onClick={() => {
            isReply ? handleReply(inputText) : handleMessage(inputText);
            setInputText("");
            setOpenEmojiPicker(false);
          }}
        >
          <img src={ChatSendButtonIcon} alt="Send button"></img>
        </button>
      </div>
    </div>
  );
};
