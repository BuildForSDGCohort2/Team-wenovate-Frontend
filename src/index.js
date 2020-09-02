import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";

const breakpoints = ["320px", "620px", "960px", "1200px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];


const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#070941",
    accent: "#28EB68",
    grey: "#5A5866",
    greyTint: "#CBCBD9",
  },
  breakpoints,
};

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
