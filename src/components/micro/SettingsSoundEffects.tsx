import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxEvents } from '../../reducers/events';

import Toggle from './Toggle';

const SettingsSoundEffects: React.FC = () => {
  const dispatch = useDispatch();
  const soundEffects = useSelector((state: any) => state.user.settings.soundEffects);

  const handleToggle = () => {
    dispatch({
      type: ReduxEvents.UpdateUserSettings,
      payload: { soundEffects: !soundEffects },
    });
  };

  return (
    <div className="mt-2 flex h-12 w-full flex-shrink-0 items-center justify-between rounded-lg border-[1px] border-custom_gray_1 bg-[#1E2023] ">
      <span className=" mx-5  whitespace-nowrap  font-sans text-white xs:text-base xs:font-semibold 2xl:text-base  2xl:font-bold">
        Sound Effects
      </span>
      <Toggle onToggle={handleToggle} isEnabled={soundEffects} />
    </div>
  );
};

export default SettingsSoundEffects;
