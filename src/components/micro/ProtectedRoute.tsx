import { ReduxEvents } from "../../reducers/events";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

interface Props {
  user: any;
  redirectPath: string;
  children: JSX.Element;
}

export const ProtectedRoute: FC<Props> = ({ user, redirectPath = "/", children }) => {
  const dispatch = useDispatch();
  if (!(user.id && user.profile)) {
    dispatch({ type: ReduxEvents.OpenModal, payload: { modal: "Wallet" } });
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
