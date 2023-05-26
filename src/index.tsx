import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from 'react-redux';
import { ReduxStore } from './reducers/Store';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = ReduxStore.getInstance().currentStore;
root.render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>
);
