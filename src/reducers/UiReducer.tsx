import { ReduxEvents } from "./events";

const initialState = {
  openChat: false,
  openSidebar: false,
};

export const UiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ReduxEvents.ToggleChat:
      return { ...state, openChat: !state.openChat };
    case ReduxEvents.ToggleSidebar:
      return { ...state, openSidebar: !state.openSidebar };
    default:
      return state;
  }
};
