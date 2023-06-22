import { ReduxEvents } from "./events";

const initialState = {
  jwt: "",
  needsAuth: false,
};

export const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ReduxEvents.SetNeedsAuth:
      return { ...state, needsAuth: action.payload };
    case ReduxEvents.SetJwt:
      return { ...state, jwt: action.payload };
    default:
      return state;
  }
};
