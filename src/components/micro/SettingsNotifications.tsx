import React from "react";
import Toggle from "./Toggle";
import { useDispatch, useSelector } from "react-redux";
import { ReduxEvents } from "../../reducers/events";

const SettingsNotifications: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: any) => state.user.settings.notifications);
  const handleToggle = () => {
    dispatch({
      type: ReduxEvents.UpdateUserSettings,
      payload: { notifications: !notifications },
    });
  };
  return (
    <div className="mt-2 flex h-12 w-full flex-shrink-0 items-center justify-between rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2023] ">
      <span className=" mx-5  whitespace-nowrap  font-sans text-white xs:text-base xs:font-semibold 2xl:text-base  2xl:font-bold">
        Notifications
      </span>
      <Toggle onToggle={handleToggle} isEnabled={notifications} />
    </div>
  );
};

export default SettingsNotifications;
