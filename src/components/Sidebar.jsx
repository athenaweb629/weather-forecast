import { useTheme } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import { Navigation } from "components/core";
import {
  Dashboard,
} from "@mui/icons-material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const drawerWidth = "250px";

const navData = [
  {
    name: "Overview",
    icon: Dashboard,
    url: `/overview`,
  },
  // {
  //   name: "Posts",
  //   icon: ImportContacts,
  //   url: `/posts`,
  //   navigationData: [
  //     {
  //       name: "All Posts",
  //       icon: false,
  //       url: `/posts/all`,
  //     },
  //     {
  //       name: "Editor",
  //       icon: false,
  //       url: `/posts/editor`,
  //     },
  //   ],
  // },
  {
    name: "30 days forecast",
    icon: WbSunnyIcon,
    url: `/forecast`,
  },
];

const useStyles = () => {
  const theme = useTheme();
  return {
    drawerPaper: {
      width: drawerWidth,
      display: "flex",
      top: "52px",
      position: "fixed",
      height: "100vh",
      whiteSpace: "nowrap",
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),

      color: theme.palette.type && theme.palette.grey[100],
      backgroundColor: "transparent",
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: "-250px",
    },
  };
};

export default function Sidebar(props) {
  const { extended } = props;
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: [classes.drawerPaper, !extended && classes.drawerPaperClose],
      }}
      open={extended}
    >
      <Navigation data={navData} collapsed={!extended} />
    </Drawer>
  );
}
