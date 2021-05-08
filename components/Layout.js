import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";

import ThemeSwitcher from "./ThemeSwitcher";

const name = "Rishabh Pathak";
export const siteTitle = `${name} Portfolio`;

export default function Layout({ children, page }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return false;

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${name} Web development Portfolio. Built with Next.js`}
        />
        {/* <meta
          property="og:image"
          content={`link to the image here`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container fluid>
        <Container textAlign="right" style={{ padding: "10px 0" }}>
          <ThemeSwitcher />
        </Container>
        <main>{children}</main>
      </Container>
    </div>
  );
}
