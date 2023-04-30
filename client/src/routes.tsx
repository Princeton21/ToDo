import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import Manage from "./pages/Manage/Manage";
import MainList from "./pages/MainList/MainList";
import { createBrowserRouter } from "react-router-dom";
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

export default router;
