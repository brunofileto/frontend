import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<Routes /> , root)
};

