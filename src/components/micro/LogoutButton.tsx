import React from "react";
import LogoutIcon from "../../assets/LogoutImg.svg";
import { ReduxEvents } from '../../reducers/events';
import {useDispatch} from "react-redux";
const LogoutButton: React.FC = () => {

    const dispatch = useDispatch();

    return (
    <div>
      <button className="top-56 flex h-12 w-12 items-center justify-center rounded-xl bg-custom_gray_1" onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'LogOut' } })}>
        <img src={LogoutIcon} alt="logout-svg-icon" />
      </button>
    </div>
  );
};

export default LogoutButton;
