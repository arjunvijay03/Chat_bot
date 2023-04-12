import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import QuestionContext from "./Context/QuestionContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuestionContext>
      <App />
    </QuestionContext>
  </React.StrictMode>
);
