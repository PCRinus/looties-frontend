import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { ModalReducer } from "./ModalReducer";
import { UiReducer } from "./UiReducer";
import { AuthReducer } from "./AuthReducer";
import { UserReducer } from "./UserReducer";

class ReduxStore {
  private static instance: ReduxStore;

  public currentStore: EnhancedStore;

  private constructor() {
    this.currentStore = configureStore({
      reducer: {
        modals: ModalReducer,
        ui: UiReducer,
        auth: AuthReducer,
        user: UserReducer,
      },
      middleware: [thunk],
    });
  }

  public static getInstance() {
    if (!this.instance) this.instance = new ReduxStore();
    return this.instance;
  }
}

export { ReduxStore };
