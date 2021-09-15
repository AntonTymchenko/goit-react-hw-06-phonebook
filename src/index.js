import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import "./index.css";
import store from "./components/redux/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.querySelector("#root")
);
