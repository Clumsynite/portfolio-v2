import React, { useContext } from "react";
import Head from "next/head";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import styles from "../styles/Projects.module.css";
import Layout from "../components/Layout";
import { ThemeContext } from "../context/Theme";
import projects from "../config/projects";
import ProjectCard from "../components/ProjectCard";

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

const Projects = ({ projects }) => {
  const { theme } = useContext(ThemeContext);

  const ProjectGrid = ({ dark }) => {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter={"10px"}>
          {projects.map(
            (project, index) =>
              project?.png && (
                <ProjectCard key={index} project={project} dark={dark} />
              )
          )}
        </Masonry>
      </ResponsiveMasonry>
    );
  };

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
