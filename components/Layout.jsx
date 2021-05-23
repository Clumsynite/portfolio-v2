import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import { Container } from "semantic-ui-react";
import { element, string } from "prop-types";

import Navbar from "./Navbar";
import { ThemeContext } from "../context/Theme";

const name = "Rishabh Pathak";
export const siteTitle = `${name} Portfolio`;

export default function Layout({ children, page }) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    mounted && (
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
        <Navbar page={page} dark={theme === "dark"}>
          <Container className="main-container" fluid>
            <main>{children}</main>
          </Container>
        </Navbar>
      </div>
    )
  );
}
Layout.propTypes = {
  children: element.isRequired,
  page: string.isRequired,
};
