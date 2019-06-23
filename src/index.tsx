import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { TaskContextProvider } from "./Containers/App/contextProvider";

ReactDOM.render(<TaskContextProvider />, document.getElementById("root"));
