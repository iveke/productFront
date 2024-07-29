import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle.jsx";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>
);
