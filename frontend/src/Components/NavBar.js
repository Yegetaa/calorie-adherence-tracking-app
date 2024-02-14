import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// routes
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import { useContext } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [
  {
    text: "Home",
    to: "/",
  },
  // {
  //   text: "About",
  //   to: "/about"
  // }, to come in future versions
  {
    text: "SignIn",
    to: "/signInOrUpPage",
  },
  {
    text: "Learn More",
    to: "/NutritionInfo",
  },
];

const Navbar = () => {
  const userCtx = useContext(UserContext) || {};
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#cc712f",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography variant="h6" component="h2">
          CaloTrack
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;

            if (item.text === "SignIn" && userCtx.user) {
              return null;
            } else {
              return (
                <ListItem key={text}>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#1e2a5a",
                      },
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
