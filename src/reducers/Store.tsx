import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { ModalReducer } from './ModalReducer';

class ReduxStore {
    private static instance: ReduxStore;


    public currentStore: EnhancedStore;

    private constructor() {
        this.currentStore = configureStore({
            reducer: {
                modals: ModalReducer,
            },
            middleware: [thunk]
        });
    };

    public static getInstance() {
        if (!this.instance) this.instance = new ReduxStore();
        return this.instance;
    }
};

export { ReduxStore };