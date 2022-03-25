import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App.jsx";


ReactDOM.render( <BrowserRouter><App /></BrowserRouter>,document.getElementById("app"));
