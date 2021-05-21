import Head from "next/head";
import styles from "../styles/Common.module.css";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout page={"Contact"}>
      <div className={styles.container}>
        <Head>
          <title>Rishabh Pathak's Portfolio - Contact</title>
          <meta name="description" content="Ways to contact Rishabh Pathak" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Contact Page</h1>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
