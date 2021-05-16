import React, { useContext } from "react";
import Head from "next/head";
import { Card, Grid, Image, Segment, Icon } from "semantic-ui-react";

import styles from "../styles/Projects.module.css";
import Layout from "../components/Layout";
import LanguageIcon from "../components/LanguageIcons";
import { ThemeContext } from "../context/Theme";
import projects from "../config/projects";
import { ProjectCard } from "../components/CommonComponents";

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
    const Column = ({ children, dark, ...rest }) => (
      <Grid.Column mobile={16} tablet={8} computer={4} {...rest}>
        {children}
      </Grid.Column>
    );

    return (
      <Grid inverted={dark}>
        {projects.map((project, index) => {
          return (
            <Column dark={dark} key={index}>
              <ProjectCard project={project} dark={dark} />
            </Column>
          );
        })}
      </Grid>
    );
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
          <ProjectGrid dark={theme === "dark"} />
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
