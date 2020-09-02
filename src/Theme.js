import { theme } from "@chakra-ui/core";
import React from "react";


const breakpoints = ["320px", "620px", "960px", "1200px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customIcons = {
    menuIcon: {
        path: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    }
}
export const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  colors: {
    ...theme.colors,
    primary: "#070941",
    accent: "#28EB68",
    grey: "#5A5866",
    greyTint: "#CBCBD9",
  },
  breakpoints,
};