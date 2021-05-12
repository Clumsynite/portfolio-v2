import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Common.module.css";
import Layout from "../components/Layout";
import ReactTyped from "react-typed";

const Home = () => {
  useEffect(() => {
    console.log("Hey there\nView the Source code here");
    console.log("https://github.com/Clumsynite/portfolio-v2");
  }, []);
  return (
    <Layout page={"Home"}>
      <div className={styles.container}>
        <Head>
          <title>Rishabh's Portflio - Home</title>
          <meta name="description" content="Rishabh Pathak's portfolio 2021." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello, this is{" "}
            <a href="https://rishabhpathak.netlify.app/" target="_blank">
              <ReactTyped
                strings={["Rishabh Pathak"]}
                typeSpeed={60}
                showCursor={false}
              />
            </a>
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
