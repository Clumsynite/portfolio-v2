import Head from "next/head";
import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "./Navbar";

const name = "Rishabh Pathak";
export const siteTitle = `${name} Portfolio`;

export default function Layout({ children, page }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${name}'s Web development Portfolio. Built with Next.js`}
        />
        {/* <meta
          property="og:image"
          content={`link to the image here`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar page={page}>
        <Container fluid>
          <main>{children}</main>
        </Container>
      </Navbar>
    </div>
  );
}
