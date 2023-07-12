import React, { useState } from "react";
import Toggle from "./Toggle";
import InfoIcon from "../../assets/InfoIcon.svg";
import InfoIconRed from "../../assets/InfoIconRed.svg";
import { useDispatch, useSelector } from "react-redux";
import { ReduxEvents } from "../../reducers/events";
import { isVisible } from "@testing-library/user-event/dist/utils";
import AnonymousInfoBubble from "./AnonymousInfoBubble";

const SettingsAnonymousMode: React.FC = () => {
  const dispatch = useDispatch();
  const isAnonymous = useSelector((state: any) => state.user.settings.isAnonymous);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const handleToggle = () => {
    dispatch({
      type: ReduxEvents.UpdateUserSettings,
      payload: { isAnonymous: !isAnonymous },
    });
  };

  const handleInfoClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  return (
    <div className="mt-2 flex h-12 w-full flex-shrink-0 items-center justify-between rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2023] ">
      <span className="relative mx-5 flex gap-[8px]  whitespace-nowrap  font-sans text-white xs:text-base xs:font-semibold 2xl:text-base  2xl:font-bold">
        Anonymous Mode
        <button onClick={handleInfoClick}>
          <img src={isInfoVisible ? InfoIconRed : InfoIcon} alt="svg"></img>
        </button>
        {isInfoVisible && <AnonymousInfoBubble />}
      </span>
      <Toggle onToggle={handleToggle} isEnabled={isAnonymous} />
    </div>
  );
};

export default SettingsAnonymousMode;
