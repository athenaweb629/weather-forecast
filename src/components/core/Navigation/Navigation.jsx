import React from "react";
import { List } from "@mui/material";
import NavigationItem from "./NavigationItem";
const useStyles = () => ({
  list: {
    listStyle: "none",
    paddingTop: '15px',
  },
});

const Navigation = ({ data, collapsed }) => {
  const classes = useStyles();

  if (!Array.isArray(data)) return null;

  let renderData = data?.map((item, index) => {
    return <NavigationItem key={index} item={item} collapsed={collapsed} />;
  });

  return (
    <List sx={classes.list} component='nav'>
      {renderData}
    </List>
  );
};

export default Navigation;