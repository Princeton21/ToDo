import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import Manage from "./pages/Manage/Manage";
import MainList from "./pages/MainList/MainList";
const routes = [
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
];

export default routes;
