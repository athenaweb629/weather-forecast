import React, { Fragment } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

function AuthLayout() {
  const accessToken = window.localStorage.getItem("access_token");

  if (accessToken) {
    console.log("login");
    return <Navigate to="/home" replace />;
  }
  return (
    <Fragment>
      <Box>
        <Outlet />
      </Box>
    </Fragment>
  );
}

export default AuthLayout;
