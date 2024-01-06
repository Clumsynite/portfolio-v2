import React from "react";
import Head from "next/head";
import Script from "next/script";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";

import "../styles/globals.css";
import { ThemeProvider } from "../context/Theme";

function MyApp({ Component, pageProps }) {
  const title = "Rishabh Pathak's Portfolio";
  const description = "A Website build to showcase my Projects and Experience";
  const src = "https://rishabhpathak.vercel.app/preview.png";

  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta property="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={src} />

        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:image" content={src} />
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
