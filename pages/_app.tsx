/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global-style";
import { Provider } from "react-redux";
import { store } from "redux/store";

export const theme = {
  colors: {
    background: "#151515",
    primary: "#b27d3c",
    primary_hover: "#c9893a",
    secondary: "#252525",
    secondary_hover: "#292929",
    subtitle: "#999",
    text_1: "#333",
    text_2: "#aaa",
    text_3: "#ccc",
    text_4: "#fff",
    oddSection: "#050505",
  },
  gradients: {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
  },
  breakpoints: {
    md: 900,
    sm: 600,
  },
};

// eslint-disable-next-line require-jsdoc
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
