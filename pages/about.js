import Head from "next/head";
import styles from "../styles/Common.module.css";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout page={"About"}>
      <div className={styles.container}>
        <Head>
          <title>Rishabh's Portflio - About</title>
          <meta
            name="description"
            content="Know more about Rishabh Pathak here"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>About Page</h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
