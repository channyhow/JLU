import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import { useState } from "react";
import Logo from "../Logo";
import Socials from "../Socials";
import Header from "../Header";
import Navigation from "../Navigation";
import MiniLogo from "../Mini Logo";

type Anchor = "menu";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    menu: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <SwipeableDrawer
      anchor="left"
      open={state.menu}
      onClose={toggleDrawer("menu", false)}
      onOpen={toggleDrawer("menu", true)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
          width: "100%",
          backgroundColor: "#e5d9d5",
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div style={{ scale: "0.8" }}>
          <Logo />
          <Socials />
          <Navigation />
        </div>
      </Box>
    </SwipeableDrawer>
  );

  return (
    <div style={{ padding: "1em 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={toggleDrawer("menu", true)}>
          <AlignVerticalCenterIcon
            sx={{
              color: "#e5d9d5",
            }}
          />
        </Button>
        <MiniLogo />
      </div>
      {list("menu")}
    </div>
  );
}
