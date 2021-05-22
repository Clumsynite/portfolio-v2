import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { Dropdown } from "semantic-ui-react";
import { intersection } from "lodash";
import styles from "../styles/Projects.module.css";
import Layout from "../components/Layout";
import { ThemeContext } from "../context/Theme";
import ProjectGrid from "../components/ProjectGrid";
import projectList from "../config/projects";
import languageList from "../config/languages";
import LanguageIcon from "../components/LanguageIcons";

export async function getStaticProps() {
  return {
    props: {
      projectList,
      languageList,
    },
  };
}

const Projects = ({ projectList, languageList }) => {
  const { theme } = useContext(ThemeContext);

  const [projects, setProjects] = useState(projectList);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let languages = [];
    _.forIn(projectList, (value) => {
      languages = [...languages, ..._.get(value, "languages", [])];
    });
    languages = _.uniq(languages);
    for (let i = 0; i < languages.length; i++) {
      const language = languages[i];
      const object = {
        text: (
          <span>
            <LanguageIcon
              language={language}
              size={20}
              dark={theme === "dark"}
            />
            <span style={{ paddingLeft: 10 }}>
              {_.get(languageList, `${language}.name`, " ")}
            </span>
          </span>
        ),
        key: language,
        value: language,
      };

      languages[i] = object;
    }
    setLanguages([...languages]);
  }, []);

  const filterProjects = (_, data) => {
    const { value } = data;
    if (value.length < 1) {
      setProjects(projectList);
    } else {
      const projectsArray = [];
      for (let project of projectList) {
        if (intersection(project.languages, value).length > 0)
          projectsArray.push(project);
      }
      setProjects([...projectsArray]);
    }
  };

  return (
    <Layout page={"Projects"}>
      <div className={styles.container}>
        <Head>
          <title>Rishabh Pathak's Portfolio - Projects</title>
          <meta
            name="description"
            content="View Rishabh Pathak's recent projects here. "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.filter}>
            <Dropdown
              placeholder="Project built using ..."
              fluid
              multiple
              selection
              options={languages}
              onChange={filterProjects}
            />
          </div>
          <div className={styles.projectsGrid}>
            <ProjectGrid projects={projects} dark={theme === "dark"} />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
