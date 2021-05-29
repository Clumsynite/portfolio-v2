import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";

import "../styles/globals.css";
import { ThemeProvider } from "../context/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Rishabh Pathak&apos;s Portfolio</title>
        <script
          defer
          src="https://code.iconify.design/1/1.0.7/iconify.min.js"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
