import React from "react";
import { UserBoxBlue, UserBoxPurple, UserBoxRed } from "./UserBox";
import "../../styles/micro/LiveDropSidebar.scss";

// de implementat- generare carduri cat permite screen-ul
const UserList: React.FC = () => {
  const userList = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <div className="fade">
      {userList.map((user) => (
        <div key={user}>
          {user % 3 === 1 && <UserBoxRed />}
          {user % 3 === 2 && <UserBoxBlue />}
          {user % 3 === 0 && <UserBoxPurple />}
        </div>
      ))}
    </div>
  );
};

export default UserList;
