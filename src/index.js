import React from "react";
import ReactDOM from "react-dom";

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/style.css"
import {App} from "./components/app";


ReactDOM.render(<App />, document.querySelector("#root"));