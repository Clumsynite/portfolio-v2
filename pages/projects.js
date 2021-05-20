import React, { useContext } from "react";
import Head from "next/head";

import styles from "../styles/Projects.module.css";
import Layout from "../components/Layout";
import { ThemeContext } from "../context/Theme";
import projects from "../config/projects";
import ProjectGrid from "../components/ProjectGrid";

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

const Projects = ({ projects }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout page={"Projects"}>
      <div className={styles.container}>
        <Head>
          <title>Rishabh's Portflio - Projects</title>
          <meta
            name="description"
            content="View Rishabh Pathak's recent projects here"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className={styles.heading}>My Projects</h1>
          <ProjectGrid projects={projects} dark={theme === "dark"} />
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
