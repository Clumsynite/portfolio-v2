import React, { useContext } from "react";
import Head from "next/head";

import styles from "../styles/Contact.module.css";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { ThemeContext } from "../context/Theme";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
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
          <h1 className={styles.heading}>Contact me</h1>
          <ContactForm dark={theme === "dark"} />
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
