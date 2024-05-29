import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddJob from "../pages/AddJob/AddJob";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },
    ],
  },
]);

export default Router;
