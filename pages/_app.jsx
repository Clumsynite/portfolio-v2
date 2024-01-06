import React from "react";
import Head from "next/head";
import Script from "next/script";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";

import "../styles/globals.css";
import { ThemeProvider } from "../context/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Rishabh Pathak&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Script defer src="https://code.iconify.design/1/1.0.7/iconify.min.js" />
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
