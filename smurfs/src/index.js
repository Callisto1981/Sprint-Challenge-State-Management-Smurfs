import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { smurfContext } from "./context/context";

import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <smurfContext.Provider value={}>
    <App />
  </smurfContext.Provider>,
  document.getElementById("root")
);
