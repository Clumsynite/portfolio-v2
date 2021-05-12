import Head from "next/head";
import styles from "../styles/Common.module.css";
import Layout from "../components/Layout";

const Home = () => {
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
          <h1 className={styles.title}>Projects Page</h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
