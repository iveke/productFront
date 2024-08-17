import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import GlobalStyle from "./GlobalStyle.jsx";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import "./lib/lang/core.js";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalStyle />
          <App />
        </Suspense>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
