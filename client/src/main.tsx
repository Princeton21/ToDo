import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Manage from "./pages/Manage/Manage";
import MainList from "./pages/MainList/MainList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list/:listId",
    element: <MainList />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/manage",
    element: <Manage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!)?.render(
  <React.StrictMode>
    <div className="page">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
