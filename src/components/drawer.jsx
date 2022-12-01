import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  "Home",
  "Products",
  "Services",
  "Team",
  "Portfolio",
  "Blog",
  "Contact",
];

function NavDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box>
      <Box
        style={{
          marginLeft: "40px",
          paddingLeft: "30px",
          marginTop: "20px",
        }}
      >
        <Typography
          style={{
            textAlign: "right",
            color: "white",
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "-50px",
          }}
        >
          Demo
        </Typography>
      </Box>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Typography
          style={{
            textAlign: "center",
            paddingTop: "25px",
            color: "#043D90",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Demo
        </Typography>
        <List style={{ marginTop: "10px" }}>
          {navItems.map((page, index) => (
            <ListItemButton
              style={{ paddingTop: "30px" }}
              onClick={() => setDrawerOpen(false)}
              key={index}
            >
              <ListItemText>{page}</ListItemText>
            </ListItemButton>
          ))}
        </List>
        <ListItemButton style={{ paddingTop: "40px", marginTop: "auto" }}>
          <ListItemText onClick={() => setDrawerOpen(false)}>
            Go To My Blog
          </ListItemText>
        </ListItemButton>
      </Drawer>

      <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
        <MenuIcon style={{ color: "white", fontSize: "40px" }} />
      </IconButton>
    </Box>
  );
}

export default NavDrawer;
