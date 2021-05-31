import React, { useContext } from "react";
import Head from "next/head";

import styles from "../styles/Contact.module.css";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../context/Theme";
import { ExtLink, Icon } from "../components/CommonComponents";
import LanguageIcon from "../components/LanguageIcon";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const copyUsername = (e) => {
    const el = document.createElement("textarea");
    el.value = e.target.textContent;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <Layout page="Contact">
      <div className={styles.container}>
        <Head>
          <title>Rishabh Pathak&apos;s Portfolio - Contact Page</title>
          <meta
            name="description"
            content="Ways to contact Rishabh Pathak. Contact form on this page and other links."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="heading">Contact me</div>
          <ContactForm dark={theme === "dark"} />
          <div style={{ margin: "20px" }}>
            <div className={styles["other-ways-heading"]}>
              Other Ways to Contact Me:
            </div>
            <div className={styles["other-ways-list"]}>
              <div title="email">
                <ExtLink
                  dark={theme === "dark"}
                  title="Link to my email address"
                  to="mailto:rishabhjpathak@gmail.com?subject=Hi Rishabh"
                  name={
                    <div className={styles["flex-row"]}>
                      <div>
                        <Icon name="logos:google-gmail" inline size={40} />
                      </div>
                      <div style={{ paddingLeft: 12 }}>
                        rishabhjpathak@gmail.com
                      </div>
                    </div>
                  }
                />
              </div>
              <div title="linkedin">
                <ExtLink
                  dark={theme === "dark"}
                  title="Link to my linkedin profile"
                  to="https://www.linkedin.com/in/rishabhjpathak"
                  name={
                    <div className={styles["flex-row"]}>
                      <div>
                        <Icon name="logos:linkedin-icon" inline size={40} />
                      </div>
                      <div style={{ paddingLeft: 12 }}>
                        rishabhjpathak
                      </div>
                    </div>
                  }
                />
              </div>
              <div title="discord">
                <ExtLink
                  dark={theme === "dark"}
                  title="Copy Username and Open Discord"
                  to="https://discord.com/channels/@me/"
                  name={
                    <div
                      className={styles["flex-row"]}
                      onClick={copyUsername}
                      aria-hidden="true"
                    >
                      <div>
                        <LanguageIcon
                          language="discord"
                          inline
                          size={40}
                          dark={theme === "dark"}
                        />
                      </div>
                      <div style={{ paddingLeft: 12 }}>Clumsyknight#5550</div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
