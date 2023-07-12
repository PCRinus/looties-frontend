import { ReduxEvents } from './events';

const initialState = {
  currentModal: undefined,
  modalData: undefined,
};

const ModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ReduxEvents.CloseModal:
      return { ...state, currentModal: undefined };
    case ReduxEvents.OpenModal:
      return { ...state, currentModal: action.payload.modal };
    case ReduxEvents.StoreModalData:
      return { ...state, modalData: action.payload.data };
    default:
      return state;
  }
};

export { ModalReducer };
