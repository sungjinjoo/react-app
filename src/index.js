//'react' 라는 모듈을 React 라는 별칭으로 불러옴
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";




const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <App />
  </>
);
