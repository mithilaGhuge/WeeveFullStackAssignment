import React from "react";
import { Drawer, makeStyles, IconButton, Grid } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { BarChart, Create, Dashboard, Dns } from "@material-ui/icons";
import weeve from "../Images/weeve.png";
import { useHistory, useLocation } from "react-router-dom";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/Logout";
const useStyle = makeStyles({
  drawer: {
    width: 262,
    background: "#4A4A4A",
  },
  drawerPaper: {
    width: 262,
    background: "#4A4A4A",
  },
  root: {
    display: "flex",
  },
  logo: {
    height: 77,
    width: 77,
    paddingLeft: 93,
    paddingTop: 48,
  },
  menu: {
    paddingLeft: 50,
    paddingTop: 100,
  },
  text: {
    lineHeight: 0,
    letterSpacing: 1.9,
    fontSize: 10,
    color: "#FFFFFF",
  },
  icon: {
    color: "#FFFFFF",
    minWidth: 30,
  },
  active: {
    color: "#41C4B7",
  },
  logoutIconStyle: {
    color: "#FFFFFF",
    paddingLeft: 60,
    paddingTop: 100,
  },
});

export default function Layout({ children }) {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "OVERVIEW",
      icon: <Dashboard color="#FFFFFF" />,
      path: "/",
    },
    {
      text: "DATA SERVISES",
      icon: <ClearAllIcon color="#FFFFFF" />,
      path: "/DataService",
    },
    {
      text: "DESIGNER",
      icon: <Create color="#FFFFFF" />,
      path: "/",
    },
    {
      text: "MODULE LIBRARY",
      icon: <LibraryBooksIcon color="#FFFFFF" />,
      path: "/",
    },
    {
      text: "NODES",
      icon: <Dns color="#FFFFFF" />,
      path: "/",
    },
    {
      text: "DATA INSIGHTS",
      icon: <BarChart color="#FFFFFF" />,
      path: "/",
    },
  ];
  return (
    <div className={classes.root}>
      {/* side bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <img className={classes.logo} src={weeve} alt="logo" />
        </div>
        <div className={classes.menu}>
          {/* List of menu item*/}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  history.push(item.path);
                }}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <ListItemIcon className={classes.icon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.text }}
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <Grid container direction="row">
            <IconButton
              className={classes.logoutIconStyle}
              onClick={() => alert("You CLicked on Logout Icon")}
            >
              <LogoutIcon />
              <text className={classes.text}>Logout</text>
            </IconButton>
          </Grid>
        </div>
      </Drawer>
      <div>{children}</div>
    </div>
  );
}
