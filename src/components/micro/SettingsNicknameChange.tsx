import React, { useState, useEffect } from "react";

const SettingsNicknameChange: React.FC = () => {
  const [newNickname, setNewNickname] = useState("");

  const handleChangeNickname = () => {
    localStorage.setItem("nickname", newNickname);
  };
  //needts to be saved to db not in localstorage
  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNewNickname(savedNickname);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <label className="font-sans text-xs font-semibold text-custom_gray_2 " htmlFor="nickname">
        Nickname
      </label>

      <div className="mt-2 flex h-12 w-full flex-shrink-0  items-center justify-between rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2023] font-sans text-base font-bold  outline-1 outline-custom_gray_1 ">
        <input
          className="ml-6 h-full bg-[#1E2023] font-sans text-base font-bold   text-white focus:outline-0"
          id="nickname"
          type="text"
          value={newNickname}
          onChange={(e) => setNewNickname(e.target.value)}
        ></input>
        <button className="mr-6 font-sans text-base font-bold text-custom_red_1" onClick={handleChangeNickname}>
          Change
        </button>
      </div>
    </div>
  );
};

export default SettingsNicknameChange;
