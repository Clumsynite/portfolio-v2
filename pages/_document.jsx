import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="Rishabh Pathak's Portfolio" />
          <meta property="og:description" content="A Website build to showcase my Projects and Experience" />

          <meta property="og:image" content="/preview.png" />

          <meta name="twitter:image" content="preview.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
