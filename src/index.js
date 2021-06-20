import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/Store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
