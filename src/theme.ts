import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#045a53",
    },
    info: {
      main: "#3f3f56",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    body1: {
      fontSize: "20px",
    },
  },
});

export default theme;
