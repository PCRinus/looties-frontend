import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxEvents } from '../../reducers/events';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const SettingsNicknameChange: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const [newNickname, setNewNickname] = useState(user.profile.userName || '');

  useEffect(() => {
    setNewNickname(user.profile.userName);
  }, [user.profile.userName]);

  const handleChangeNickname = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/profile/${user.id}/username`,
        {
          newUsername: newNickname,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        }
      );
      const { data: profile } = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${user.id}`, {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      });
      dispatch({ type: ReduxEvents.SetProfileData, payload: profile });
      toast.success('Nickname updated');
    } catch (err) {
      console.log('Error updating nickname: ', err);
      toast.error('Nickname change failed');
    }
  };

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
