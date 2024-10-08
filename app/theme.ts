"use client";
import { createTheme } from "@mui/material/styles";

// Create material theme
const theme = createTheme({
  // set costom color 
  palette: {
    violet: {
      main: '#E3D026',
      light: '#f9d3ff',
      dark: '#2c1230',
      contrastText: '#242105',
    },
  },
  // set dark mode
  colorSchemes: {
    dark: true,
  },
  // set font
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
