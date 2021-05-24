import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "semantic-ui-react";

import styles from "../styles/About.module.css";
import Layout from "../components/Layout";
import { ThemeContext } from "../context/Theme";
import { Popup, ExtLink } from "../components/CommonComponents";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout page="About">
      <div className={styles.container}>
        <Head>
          <title>Rishabh Pathak&apos;s Portfolio - About Page</title>
          <meta
            name="description"
            content="Know more about me on this page. I have mentioned the languages I know, tech stack I ahave experienced in and my work experience. I am Rishabh Jitendra Pathak, a Fullstack web developer. You can find some of my projects on this page or on my Profile. I am a self-motivated developer with experience in responsive design and creating mobile responsive websites from Scratch. Clumsyknight, is a pseudonym that I often use in those websites."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="heading">About ME</div>
          <div className={styles["about-me"]}>
            I am <span className={styles.name}>Rishabh Jitendra Pathak</span>, a{" "}
            <Popup content="Mainly Front-end" dark={theme === "dark"}>
              <span>Fullstack web developer</span>
            </Popup>
            . You can find some of my projects on{" "}
            <Popup content="Link to projects page" dark={theme === "dark"}>
              <Link href="/projects" title="Link to projects page">
                this
              </Link>
            </Popup>{" "}
            page or on{" "}
            <ExtLink
              dark={theme === "dark"}
              to="https://github.com/Clumsynite"
              name={
                <span>
                  <Icon name="github" inverted={theme === "dark"} /> my profile
                </span>
              }
              title="Link to my github Profile"
            />
            . I am a self-motivated developer with experience in{" "}
            <span className={styles["about-highlight"]}>responsive design</span>{" "}
            and creating{" "}
            <span className={styles["about-highlight"]}>mobile responsive websites</span>{" "}
            from scratch.{" "}
            <span className={styles.pseudonym} style={{ color: "#536782" }}>
              Clumsyknight
            </span>
            , is a pseudonym that I often use in those websites.
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default About;
