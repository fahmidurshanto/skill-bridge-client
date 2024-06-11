import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddJob from "../pages/AddJob/AddJob";
import Blogs from "../pages/Blogs/Blogs";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyJobs from "../pages/MyJobs/MyJobs";

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
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/alljobs/:_id",
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/alljobs/${params._id}`);
        },
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>,
      },
    ],
  },
]);

export default Router;
