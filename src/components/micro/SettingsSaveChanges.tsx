import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SettingsSaveChanges: React.FC = () => {
  const settings = useSelector((state: any) => state.user.settings);
  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [initialSettings, setInitialSettings] = useState(settings);
  useEffect(() => {
    // When the component mounts, set the initial settings
    setInitialSettings(settings);
  }, []);

  const handleSaveChanges = async () => {
    const { hideStats, isAnonymous, soundEffects, notifications } = settings;
    const settingsToPost = {
      hideStats,
      isAnonymous,
      soundEffects,
      notifications,
    };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/user-settings/${user.id}/update-settings`, settingsToPost, {
        headers: {
          Authorization: `Bearer ${auth.jwt}`,
        },
      })
      .then((res) => {
        const newSettings = res.data;
        dispatch({
          type: "UPDATE_USER_SETTINGS",
          payload: newSettings,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCancelChanges = () => {
    // Revert the settings to the initial settings when "Cancel" is clicked
    dispatch({
      type: "UPDATE_USER_SETTINGS",
      payload: initialSettings,
    });
  };
  return (
    <>
      <div className="flex h-20 items-center justify-center gap-4  rounded-b-xl border-t-2 border-custom_gray_1 bg-[#1A1D20] xs:mx-6 xs:w-auto  2xl:w-full">
        <button
          className=" h-12 flex-shrink-0 basis-[45%] rounded-xl bg-[#2C3034] font-sans text-base font-semibold text-custom_gray_2"
          onClick={handleCancelChanges}
        >
          Cancel
        </button>
        <button
          className=" h-12 flex-shrink-0 basis-[45%] rounded-xl bg-gradient-to-t from-red-700 to-red-500 font-sans text-base font-semibold text-white"
          onClick={handleSaveChanges}
        >
          Save changes
        </button>
      </div>
    </>
  );
};

export default SettingsSaveChanges;
