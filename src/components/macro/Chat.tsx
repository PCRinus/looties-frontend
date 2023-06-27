import { useSelector } from "react-redux";
import { ChatHeader } from "../micro/ChatHeader";
import { ChatMessage } from "../micro/ChatMessage";
import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import { ChatInput } from "../micro/ChatInput";
import { ChatMessageUserNotAuthenticated } from "../micro/ChatMessageUserNotAuthenticated";

export interface Message {
  id: string;
  name: string;
  level: string;
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
  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatUsersCount, setChatUsersCount] = useState<number>(0);
  const [chatSocket, setChatSocket] = useState<Socket>();
  const [isReply, setIsReply] = useState<boolean>(false);
  const [showUnauthenticatedUserMessage, setShowUnauthenticatedUserMessage] = useState<boolean>(false);
  const [repliedMessageData, setRepliedMessageData] = useState<RepliedMessage>();
  const [scrollApplied, setScrollApplied] = useState(false);
  const chatBodyDiv = useRef<HTMLDivElement>(null);

  const handleMessage = (message: string) => {
    try {
      chatSocket?.emit("message", { userId: user.id, message });
    } catch (error) {
      console.log("Could not emit message " + error);
    }
  };

  const handleReply = (message: string) => {
    setIsReply(false);
    const reply = {
      originalMessageId: repliedMessageData?.messageId,
      reply: message,
      userId: user.id,
    };
    try {
      chatSocket?.emit("reply", reply);
    } catch (error) {
      console.log("Could not emit reply " + error);
    }
  };

  const handleLike = (userId: string, messageId: string) => {
    console.log("like", userId, messageId);
    try {
      chatSocket?.emit("like", { userId, messageId });
    } catch (error) {
      console.log("Could not emit like " + error);
    }
  };

  const handleUnlike = (userId: string, messageId: string) => {
    console.log("unlike", userId, messageId);
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

  const handleUnauthenticatedUserAction = () => {
    setShowUnauthenticatedUserMessage(true);
  };

  const handleCloseUnauthenticatedMessage = () => {
    setShowUnauthenticatedUserMessage(false);
  };

  // needs to run only once, so that it doesn't mess the user count by trying to connect multiple times
  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_API_URL}/chat`, {
      extraHeaders: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });
    socket.on("connected", (data) => {
      setMessages(data.messages);
    });
    socket.on("get-users-count", (data) => {
      setChatUsersCount(data.connectedUsersCount);
    });
    socket.on("message", (newMessageData) => {
      const { name, level, newMessage } = newMessageData;
      setMessages((prevMessages) => [...prevMessages, { name, level, ...newMessage } as Message]);
      setScrollApplied(false);
    });
    socket.on("like", (data) => {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === data.likedMessageId
            ? { ...message, likedBy: [...message.likedBy, data.likedByUserId] }
            : message
        )
      );
    });
    socket.on("unlike", (data) => {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === data.unlikedMessageId
            ? { ...message, likedBy: message.likedBy.filter((userId) => userId !== data.unlikedByUserId) }
            : message
        )
      );
    });
    socket.on("reply", (replyData) => {
      const { name, level, newMessage } = replyData;
      setMessages((prevMessages) => [...prevMessages, { name, level, ...newMessage } as Message]);
      setScrollApplied(false);
    });
    setChatSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, [user.id, auth.jwt]);

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
      <div
        ref={chatBodyDiv}
        className="flex w-full grow flex-col items-center gap-6 overflow-auto py-8 xs:max-w-[429px]"
      >
        <div className="absolute h-16 bg-gradient-to-b from-[#151719] to-transparent xs:top-[59px] xs:w-full 2xl:top-[180px] 2xl:w-[429px]"></div>
        {showUnauthenticatedUserMessage && !user.id && (
          <ChatMessageUserNotAuthenticated closeAction={handleCloseUnauthenticatedMessage} />
        )}
        {messages.sort(sortFn).map((message, index) => (
          <ChatMessage
            currentUser={user}
            key={index}
            messageId={message.id}
            message={message.message}
            likedBy={message.likedBy}
            userId={message.userId}
            userName={message.name}
            level={message.level}
            createdAt={message.createdAt}
            updatedAt={message.updatedAt}
            handleSetIsReply={user.id ? handleSetIsReply : handleUnauthenticatedUserAction}
            handleRepliedMessageData={user.id ? handleRepliedMessageData : handleUnauthenticatedUserAction}
            handleLike={user.id ? handleLike : handleUnauthenticatedUserAction}
            handleUnlike={user.id ? handleUnlike : handleUnauthenticatedUserAction}
            repliedMessage={message.repliedTo ? getMessageById(message.repliedTo) : undefined}
          />
        ))}
        <div
          className={`absolute h-16 bg-gradient-to-t from-[#151719] to-transparent xs:w-full 2xl:w-[429px] ${
            isReply ? "bottom-[104px]" : "bottom-[79px]"
          }`}
        ></div>
      </div>

      <ChatInput
        handleMessage={user.id ? handleMessage : handleUnauthenticatedUserAction}
        handleReply={user.id ? handleReply : handleUnauthenticatedUserAction}
        isReply={isReply}
        handleCancelReply={user.id ? handleCancelReply : handleUnauthenticatedUserAction}
        repliedMessageData={repliedMessageData}
      />
    </div>
  );
};
