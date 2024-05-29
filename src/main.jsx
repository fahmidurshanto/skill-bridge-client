import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Routes.jsx";
import AuthProvider from "./Authentication/AuthProvider/AuthProvider.jsx";
import ApiProvider from "./ApiProvider/ApiProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ApiProvider>
        <RouterProvider router={Router}></RouterProvider>
      </ApiProvider>
    </AuthProvider>
  </React.StrictMode>
);
