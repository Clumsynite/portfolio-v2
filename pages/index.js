import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import ReactTyped from "react-typed";

import styles from "../styles/Common.module.css";
import Layout from "../components/Layout";
import { ExtLink } from "../components/CommonComponents";

import { ThemeContext } from "../context/Theme";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Hey there\nView the Source code here");
    console.log("https://github.com/Clumsynite/portfolio-v2");
  }, []);

  return (
    <Layout page={"Home"}>
      <div className={styles.container}>
        <Head>
          <title>Rishabh Pathak's Portfolio - Home</title>
          <meta name="description" content="This is the homepage of Rishabh Pathak's portfolio 2021." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello, this is{" "}
            <ExtLink
              name={
                !mounted ? (
                  "Rishabh Pathak"
                ) : (
                  <ReactTyped
                    strings={["Rishabh Pathak"]}
                    typeSpeed={60}
                    showCursor={false}
                  />
                )
              }
              title={"Link to my Previous website"}
              to={"https://rishabhpathak.netlify.app/"}
              dark={theme === "dark"}
            />
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
