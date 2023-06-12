import { useSelector } from "react-redux";
import { ChatHeader } from "../micro/ChatHeader";
import { ChatMessage } from "../micro/ChatMessage";
import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { ChatInput } from "../micro/ChatInput";

export interface Message {
  id: string;
  message: string;
  likedBy: string[];
  repliedTo: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RepliedMessage {
  repliedMessageUserId: string;
  messageId: string;
}

export const Chat: React.FC = () => {
  const openChat = useSelector((state: any) => state.ui.openChat);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatUsersCount, setChatUsersCount] = useState<number>(0);
  const [chatSocket, setChatSocket] = useState<Socket>();
  const [isReply, setIsReply] = useState<boolean>(false);
  const [repliedMessageData, setRepliedMessageData] = useState<RepliedMessage>();
  const [scrollApplied, setScrollApplied] = useState(false);
  const chatBodyDiv = useRef<HTMLDivElement>(null);

  const handleMessage = (message: string) => {
    try {
      chatSocket?.emit("message", { userId: "eb96fd6e-9d0e-467d-a7a3-2772376328f3", message });
    } catch (error) {
      console.log("Could not emit message " + error);
    }
  };

  const handleReply = (message: string) => {
    setIsReply(false);
    const reply = {
      originalMessageId: repliedMessageData?.messageId,
      reply: message,
      userId: "eb96fd6e-9d0e-467d-a7a3-2772376328f3",
    };
    try {
      chatSocket?.emit("reply", reply);
    } catch (error) {
      console.log("Could not emit reply " + error);
    }
  };

  const handleLike = (userId: string, messageId: string) => {
    try {
      chatSocket?.emit("like", { userId, messageId });
    } catch (error) {
      console.log("Could not emit like " + error);
    }
  };

  const handleUnlike = (userId: string, messageId: string) => {
    try {
      chatSocket?.emit("unlike", { userId, messageId });
    } catch (error) {
      console.log("Could not emit unlike " + error);
    }
  };

  const handleSetIsReply = () => {
    setIsReply(true);
    setScrollApplied(false);
  };

  const handleCancelReply = () => {
    setIsReply(false);
  };

  const handleRepliedMessageData = (userId: string, messageId: string) => {
    setRepliedMessageData({ repliedMessageUserId: userId, messageId });
  };

  const sortFn = (a: Message, b: Message) => {
    const timeA = new Date(a.createdAt);
    const timeB = new Date(b.createdAt);
    if (timeA > timeB) {
      return 1;
    } else if (timeA < timeB) {
      return -1;
    } else return 0;
  };

  const getMessageById = (messageId: string) => {
    return messages.find((message) => message.id === messageId);
  };

  // needs to run only once, so that it doesn't mess the user count by trying to connect multiple times
  useEffect(() => {
    const socket = io(process.env.REACT_APP_CHAT_WEBSOCKET_URL as string);
    socket.on("connected", (data) => {
      setMessages(data.messages);
    });
    socket.on("get-users-count", (data) => {
      setChatUsersCount(data.connectedUsersCount);
    });
    socket.on("message", (newMessage) => {
      console.log(newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage as Message]);
      setScrollApplied(false);
    });
    socket.on("like", (likedMessageId) => {
      console.log(likedMessageId);
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === likedMessageId ? { ...message, likedBy: [...message.likedBy, message.userId] } : message
        )
      );
    });
    socket.on("unlike", (unlikedMessageId) => {
      console.log(unlikedMessageId);
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === unlikedMessageId
            ? { ...message, likedBy: message.likedBy.filter((userId) => userId !== message.userId) }
            : message
        )
      );
    });
    socket.on("reply", (replyData) => {
      const { newMessage } = replyData;
      setMessages((prevMessages) => [...prevMessages, newMessage as Message]);
      setScrollApplied(false);
    });
    setChatSocket(socket);
  }, []);

  //only run once to scroll chat-body to bottom
  useEffect(() => {
    if (!scrollApplied && messages.length > 0) {
      chatBodyDiv.current!.scrollTop = chatBodyDiv.current!.scrollHeight;
      setScrollApplied(true);
    }
  }, [messages, isReply, scrollApplied]);

  return (
    <div
      className={`${
        openChat ? "xs:left-0" : "xs:left-[-100vw]"
      } flex flex-col  items-center  justify-start bg-[#1C1E22] transition-all duration-200 xs:absolute xs:top-20 xs:h-[calc(100%-64px-80px)] xs:w-screen 2xl:static 2xl:h-full 2xl:w-[429px] 2xl:flex-shrink-0`}
    >
      <ChatHeader chatUsersCount={chatUsersCount} />
      <div ref={chatBodyDiv} className="flex w-full grow flex-col items-center gap-6 overflow-auto py-8 ">
        {messages.sort(sortFn).map((message, index) => (
          <ChatMessage
            key={index}
            messageId={message.id}
            message={message.message}
            likedBy={message.likedBy}
            userId={message.userId}
            createdAt={message.createdAt}
            updatedAt={message.updatedAt}
            handleSetIsReply={handleSetIsReply}
            handleRepliedMessageData={handleRepliedMessageData}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
            repliedMessage={message.repliedTo ? getMessageById(message.repliedTo) : undefined}
          />
        ))}
      </div>

      <ChatInput
        handleMessage={handleMessage}
        handleReply={handleReply}
        isReply={isReply}
        handleCancelReply={handleCancelReply}
        repliedMessageData={repliedMessageData}
      />
    </div>
  );
};
