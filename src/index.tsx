import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./Containers/App/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./Modules/redux/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(

    <App /> ,
  document.getElementById("root")
);
