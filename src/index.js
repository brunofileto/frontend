import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<Routes /> , root)
};

