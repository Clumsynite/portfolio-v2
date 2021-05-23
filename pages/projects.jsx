import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { Dropdown } from "semantic-ui-react";
import { intersection, forIn, get, uniq } from "lodash";
import { arrayOf, shape } from "prop-types";

import styles from "../styles/Projects.module.css";
import Layout from "../components/Layout";
import { ThemeContext } from "../context/Theme";
import ProjectGrid from "../components/ProjectGrid";
import projectList, { projectType } from "../config/projects";
import languageList, { languageType } from "../config/languages";
import LanguageIcon from "../components/LanguageIcons";

export async function getStaticProps() {
  return {
    props: {
      projectList,
      languageList,
    },
  };
}

// eslint-disable-next-line no-shadow
const Projects = ({ projectList, languageList }) => {
  const { theme } = useContext(ThemeContext);

  const [projects, setProjects] = useState(projectList);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let filterOptions = [];
    forIn(projectList, (value) => {
      filterOptions = [...filterOptions, ...get(value, "languages", [])];
    });
    filterOptions = uniq(filterOptions);

    for (let i = 0; i < filterOptions.length; i += 1) {
      const language = filterOptions[i];
      const object = {
        text: (
          <span>
            <span style={{ paddingRight: 8 }}>
              <LanguageIcon
                language={language}
                size={20}
                dark={theme === "dark"}
              />
            </span>
            {get(languageList, `${language}.name`, " ")}
          </span>
        ),
        key: language,
        value: language,
      };

      filterOptions[i] = object;
    }
    setLanguages([...filterOptions]);
  }, []);

  const filterProjects = (_, data) => {
    const { value } = data;
    if (value.length < 1) {
      setProjects(projectList);
    } else {
      const projectsArray = [];
      for (let i = 0; i < projectList.length; i += 1) {
        const project = projectList[i];
        if (intersection(project.languages, value).length > 0)
          projectsArray.push(project);
      }
      setProjects([...projectsArray]);
    }
  };

  return (
    <Layout page="Projects">
      <div className={styles.container}>
        <Head>
          <title>Rishabh Pathak&apos;s Portfolio - Projects</title>
          <meta
            name="description"
            content="View Rishabh Pathak's recent projects here. "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.filter}>
            <div
              className={styles.info}
              style={{ color: theme === "dark" ? "#fbfbfb" : "#0000008e" }}
            >
              Currently showing {` ${projects.length} `} projects
            </div>
            <div className={styles["filter-dropdown"]}>
              <Dropdown
                placeholder="Project built using ..."
                fluid
                multiple
                clearable
                selection
                options={languages}
                onChange={filterProjects}
              />
            </div>
          </div>
          <div className={styles.projectsGrid}>
            <ProjectGrid projects={projects} dark={theme === "dark"} />
          </div>
        </main>
      </div>
    </Layout>
  );
};
Projects.propTypes = {
  projectList: arrayOf(projectType).isRequired,
  languageList: shape({ languageType }).isRequired,
};

export default Projects;
