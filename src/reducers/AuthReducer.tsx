import { ReduxEvents } from "./events";

const initialState = {
  jwt: "",
};

export const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ReduxEvents.SetJwt:
      return { ...state, jwt: action.payload };
    default:
      return state;
  }
};
