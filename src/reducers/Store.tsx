import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { ModalReducer } from "./ModalReducer";
import { UiReducer } from "./UiReducer";

class ReduxStore {
  private static instance: ReduxStore;

  public currentStore: EnhancedStore;

  private constructor() {
    this.currentStore = configureStore({
      reducer: {
        modals: ModalReducer,
        ui: UiReducer,
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
