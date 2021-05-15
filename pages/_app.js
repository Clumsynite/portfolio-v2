import Head from "next/head";

import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { ThemeProvider } from "../context/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
