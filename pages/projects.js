import React, {useContext} from 'react'
import Head from "next/head";
import styles from "../styles/Common.module.css";
import Layout from "../components/Layout";
import LanguageIcon from "../components/LanguageIcons";
import {ThemeContext} from '../context/Theme'

const Projects = () => {

  const {theme} = useContext(ThemeContext)

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
        <main className={styles.main}>
          <h1 className={styles.title}>
            Projects Page
            <LanguageIcon key="1" language={'a'} dark={theme === "dark"} />
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
