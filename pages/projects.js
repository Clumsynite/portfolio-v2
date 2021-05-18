import React, { useContext } from "react";
import Head from "next/head";
import { SpringGrid, layout, measureItems } from "react-stonecutter";

import styles from "../styles/Projects.module.css";
import Layout from "../components/Layout";
import LanguageIcon from "../components/LanguageIcons";
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

  const ProjectGrid = ({ projects, dark }) => {
    // const Grid = measureItems(SpringGrid, {
    //   maxWidth: 1326,
    //   minPadding: 100,
    // });
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
        {projects.map((project, index) => {
          return (
            <div key={index}>
            {project?.png &&  <ProjectCard project={project} dark={dark} />}
            </div>
          );
        })}
      </div>
    );
    // return (
    //   <Grid
    //     component="div"
    //     gutterWidth={5}
    //     gutterHeight={5}
    //     springConfig={{ stiffness: 170, damping: 26 }}
    //   >
    //     {projects.map((project, index) => {
    //       return (
    //         <div key={index}>
    //           <ProjectCard project={project} dark={dark} />
    //         </div>
    //       );
    //     })}
    // </Grid>
    // );
  };

  return (
    <Layout page={"Projects"}>
      <div>
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
