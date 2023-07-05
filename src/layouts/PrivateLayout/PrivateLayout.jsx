import Header from "components/Header";
import Sidebar from "components/Sidebar";
import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      boxShadow: "none",
      backgroundImage: "unset",
    },
    content: {
      height: "100vh",
      overflow: "auto",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      paddingTop: theme.spacing(6.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    fullContent: {
      marginLeft: "250px",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  };
};

function PrivateLayout() {
  const classes = useStyles();

  const [extended, setExtended] = useState(true);

  const handleExtended = () => {
    setExtended(!extended);
  };
  return (
    <Fragment>
      <Header sidebarHandle={handleExtended} />
      <Sidebar extended={extended} />
      <Box
        component="div"
        sx={[classes.content, extended && classes.fullContent]}
      >
        <Outlet />
      </Box>
    </Fragment>
  );
}

export default PrivateLayout;
