import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { PrivateLayout } from "layouts";

import {Overview, Forecast } from "pages";
import ExtraLayout from "layouts/ExtraLayout/ExtraLayout";

export const router = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/overview" />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "forecast",
        element: <Forecast />,
      },

    ],
  },
  // {
  //   path: "/auth",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Navigate to="/auth/login" />,
  //     },
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <ExtraLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: <Navigate to="/" />
    //   }
    // ]
  }
]

export default function Router() {
  const routes = useRoutes(router);
  return routes;
}
