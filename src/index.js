import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles.scss";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("root")
);
