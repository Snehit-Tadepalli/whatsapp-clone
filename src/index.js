import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Background from "./components/Background";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Background />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
