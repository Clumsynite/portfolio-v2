import React, { useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Dimmer, Icon, Loader, Segment } from "semantic-ui-react";
import { arrayOf } from "prop-types";

import styles from "../styles/About.module.css";
import Layout from "../components/Layout";
import { ThemeContext } from "../context/Theme";
import { Popup, ExtLink } from "../components/CommonComponents";
import work, { workType } from "../config/work";
import WorkExperience from "../components/WorkExperience";

export async function getStaticProps() {
  return {
    props: {
      jobs: work,
    },
  };
}

const About = ({ jobs }) => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
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
          <section id="about-me">
            <div className={styles["about-me"]} id="me">
              I am <span className={styles.name}>Rishabh Jitendra Pathak</span>,
              a{" "}
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
                    <Icon name="github" inverted={theme === "dark"} /> my
                    profile
                  </span>
                }
                title="Link to my github Profile"
              />
              . I am a self-motivated developer with experience in{" "}
              <span className={styles["about-highlight"]}>
                responsive design
              </span>{" "}
              and creating{" "}
              <span className={styles["about-highlight"]}>
                mobile responsive websites
              </span>{" "}
              from scratch.
            </div>
          </section>
          <section className={styles["work-resume"]}>
            {jobs.length > 0 && <WorkExperience jobs={jobs} />}
            <div className={styles.resume}>
              <Dimmer.Dimmable
                as={Segment}
                blurring
                dimmed={loading}
                inverted={theme === "dark"}
              >
                <Dimmer active={loading} inverted={theme !== "dark"}>
                  <Loader>Loading Resume...</Loader>
                </Dimmer>

                <div className={styles.image}>
                  <ExtLink
                    to="/resume.jpg"
                    name={
                      <img
                        src="/resume.jpg"
                        alt="Rishabh Pathak's Resume"
                        style={{ height: "100%", width: "100%" }}
                        onLoad={() => setLoading(false)}
                      />
                    }
                    dark={theme === "dark"}
                    title="Open as Image in new tab"
                  />
                </div>
                <ExtLink
                  to="/resume.pdf"
                  name={
                    <Button loading={loading} primary fluid>
                      View as PDF
                    </Button>
                  }
                  dark={theme === "dark"}
                  title="Open as PDF in new tab"
                />
              </Dimmer.Dimmable>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};
About.propTypes = {
  jobs: arrayOf(workType).isRequired,
};

export default About;
