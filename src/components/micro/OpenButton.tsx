import React, { ReactNode } from "react";
import {ReduxEvents} from "../../reducers/events";
import { useDispatch } from "react-redux";

interface IProps {
  className?: string;
  children?: ReactNode;
}

const OpenButton: React.FC<IProps> = ({ className, children }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={` rounded-lg bg-gradient-to-t from-red-700 to-red-500 font-sans font-semibold text-white xs:text-xs md:max-2xl:text-base 2xl:text-base ${className}`}
      onClick={() => dispatch({ type: ReduxEvents.OpenModal, payload: { modal: 'NftWin' } })}
    >
      Open
    </button>
  );
};

export default OpenButton;
