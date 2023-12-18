import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import routes from "./routes";
import store from "./store/store";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

store.subscribe(() => {
  console.log(store.getState());


ReactDOM.createRoot(document.getElementById("root")!)?.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
);
