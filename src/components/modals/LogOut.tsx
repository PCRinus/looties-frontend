import React from 'react';
import { ReduxEvents } from '../../reducers/events';
import RedLogoutIcon from "../../assets/RedLogoutIcon.svg";
import { ReactComponent as Close } from '../../assets/Close.svg';
import { useDispatch } from "react-redux";

const LogOut = () => {

    const dispatch = useDispatch();

    return (
        <div className="flex--column modal--content wallet" onClick={e => e.stopPropagation()}>
            <div className="close" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                <Close />
            </div>
            <div className="flex flex-col justify-center items-center body h-[289px]">
                <div className="flex flex-col justify-center items-center gap-[20.5px]">
                    <img src={RedLogoutIcon} alt="logo" className="w-[36px]"/>
                    <p className="text-xl font-bold max-w-[269px] text-center">
                        Are you sure you want to log out?
                    </p>
                </div>
            </div>
            <div className="flex flex-row bg-[#1A1D20] border-t-[1px] border-[#2C3034] justify-center items-center gap-5 px-8 py-4 rounded-b-[12px]">
                <button className="basis-[50%] h-[44.57px] bg-[#2C3034] rounded-lg font-semibold text-white flex justify-center items-center font-sans" onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    Yes
                </button>
                <button className="basis-[50%] h-[44.57px] bg-gradient-to-t from-red-700 to-red-500 rounded-lg font-semibold text-white flex justify-center items-center font-sans"  onClick={() => { dispatch({ type: ReduxEvents.CloseModal })}}>
                    No
                </button>
            </div>
        </div>
    )
};

export { LogOut }