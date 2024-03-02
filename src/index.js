import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "store/config/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));

//0. query 패키지 설치
//1. QueryClient 선언(App.jsx에 선언해도 된다.)
const queryClient = new QueryClient();
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </>
);

reportWebVitals();
