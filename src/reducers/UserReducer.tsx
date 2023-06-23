import { ReduxEvents } from "./events";

// TODO: update initialState later depending on what is needed
const initialState = {
  id: "",
  affiliatedId: "",
  createdAt: "",
  updateAt: "",
  excludedUntil: "",
  redeemedCode: "",
  profile: undefined,
};

export const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ReduxEvents.SetUserData:
      return { ...action.payload };
    case ReduxEvents.SetProfileData:
      return { ...state, profile: { ...action.payload } };
    case ReduxEvents.UserLogout:
      return { ...initialState };
    default:
      return state;
  }
};
