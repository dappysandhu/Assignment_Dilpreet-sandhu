import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import NavDrawer from "./drawer";

function Header() {
  const [value, setValue] = useState();

  const handleChnage = (e, value) => {
    setValue(value);
  };

  const theme = useTheme();

  const minSize = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(minSize);
  return (
    <Box>
      <AppBar
        style={{
          backgroundColor: "#72bdd4",
        }}
      >
        <Toolbar>
          {minSize ? (
            <NavDrawer />
          ) : (
            <>
              <Tabs value={value} onChange={handleChnage} textColor="white">
                <Tab
                  label="Home"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                />
                <Tab
                  icon={<KeyboardDoubleArrowDownIcon />}
                  iconPosition="end"
                  label="Products"
                  style={{
                    fontSize: "16px",
                    fontWeight: "550",
                  }}
                />
                <Tab
                  label="Services"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                />
                <Tab
                  label="Team"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                />
                <Tab
                  label="Portfolio"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                />
                <Tab
                  label="Blog"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                />
                <Tab
                  label="Contact"
                  style={{ fontSize: "16px", fontWeight: "550" }}
                />
              </Tabs>

              <Tab
                textColor="white"
                style={{
                  marginLeft: "auto",
                  fontSize: "16px",
                  fontWeight: "550",
                }}
                label="Go to  my Blog"
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
