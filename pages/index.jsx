import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import ReactTyped from "react-typed";
import { arrayOf } from "prop-types";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { ExtLink, Popup } from "../components/CommonComponents";
import projectList, { projectType } from "../config/projects";
import { ThemeContext } from "../context/Theme";
import ProjectGrid from "../components/ProjectGrid";

export async function getStaticProps() {
  return {
    props: {
      projects: projectList.slice(0, 6),
    },
  };
}

const Home = ({ projects }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line no-console
    console.log("Hey there\nView the Source code here");
    // eslint-disable-next-line no-console
    console.log("https://github.com/Clumsynite/portfolio-v2");
  }, []);

  return (
    <Layout page="Home">
      <div className={styles.container}>
        <Head>
          <title>Rishabh Pathak&apos;s Portfolio - Home</title>
          <meta
            name="description"
            content="This is the homepage of Rishabh Pathak's portfolio 2021."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.title}>
            <div>
              Hi, I am{" "}
              <ExtLink
                name={
                  !mounted ? (
                    "Rishabh Pathak"
                  ) : (
                    <ReactTyped
                      strings={[" Rishabh Pathak"]}
                      typeSpeed={60}
                      showCursor={false}
                    />
                  )
                }
                title="Link to my Previous website"
                to="https://rishabhpathak.netlify.app/"
                dark={theme === "dark"}
              />
            </div>
          </div>
          <div className={styles["projects-grid"]}>
            <div className={styles["project-heading"]}>
              Some of my recent Projects
            </div>
            <ProjectGrid projects={projects} dark={theme === "dark"} />
            <div className={styles["project-link"]}>
              <Popup dark={theme === "dark"} content="Link to All Projects">
                <span>
                  <Link href="/projects" title="Link to All Projects">
                    Show More ⇾
                  </Link>
                </span>
              </Popup>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

Home.propTypes = {
  projects: arrayOf(projectType).isRequired,
};

export default Home;
