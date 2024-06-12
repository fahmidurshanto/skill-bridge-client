import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddJob from "../pages/AddJob/AddJob";
import Blogs from "../pages/Blogs/Blogs";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyJobs from "../pages/MyJobs/MyJobs";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/AllJobs/AllJobs";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import Error from "../pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) => {
          // Fetch the job details using the ID from the URL parameters
          return fetch(`http://localhost:3000/myJobs/${params.id}`);
        },
        element: <UpdateJob></UpdateJob>,
      },
    ],
  },
]);

export default Router;
