import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    purple: "#8661de",
    blue: "#00bac7",
    gray: "#f6f6f6",
    green: "#07b495",
    lightGreen: "#99ecdd",
    darkGray: "#54595d",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};

const customMediaQuery = (minWidth: number): string => {
  // return (`@media screen and (max-width: ${maxWidth}px)`)
  return (`@media screen and (min-width: ${minWidth}px)`);
};

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1440),
  tabletRotate: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(375),
};
