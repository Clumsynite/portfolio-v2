import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const title = "Rishabh Pathak's Portfolio";
const description = "A Website build to showcase my Projects and Experience";
const src = "/preview.png";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={src} />

          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta name="twitter:image" content={src} />
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
