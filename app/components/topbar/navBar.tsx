"use client";

import { useEffect, useState } from "react";
import {
  useColorScheme,
} from "@mui/material/styles";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  const [selected, setSelected] = useState(false);
  const { mode, setMode } = useColorScheme();

  // for set dark and light mode
  useEffect(() => {
    if (selected) {
      setMode("light");
    } else {
      if (mode === "dark") {
      } else {
        setMode("dark");
      }
    }
  }, [selected]);

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" color="default">
        <Toolbar sx={{ height: 35 }}>
          <Typography variant="h1" sx={{ flexGrow: 1, fontSize: "2rem" }}>
            Todo application
          </Typography>
          <IconButton
            sx={{ fontSize: "1rem" }}
            onClick={() => {
              setSelected(!selected);
            }}
            color="inherit"
            disableTouchRipple
            disableRipple
          >
            {!selected ? (
              <span role="img" aria-label="sun">
                Go Light ☀️
              </span>
            ) : (
              <span role="img" aria-label="moon">
                Go Dark 🌚
              </span>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
