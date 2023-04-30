import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import router from "./routes";
import store from "./store/store";
import { RouterProvider } from "react-router-dom";

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.createRoot(document.getElementById("root")!)?.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="page">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
