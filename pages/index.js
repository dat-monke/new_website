import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Job Search</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Silk Software!</h1>

        <div className={styles.grid}>
          <a
            href="https://www.silksoftware.com/about-us/"
            className={styles.card}
          >
            <h3>About Us &rarr;</h3>
            <p>Who are we? What do we do? What do you seek?</p>
          </a>

          <a
            href="https://silksoftware.bamboohr.com/jobs/?source=silksoftware"
            className={styles.card}
          >
            <h3>Apply &rarr;</h3>
            <p>Currently open positions! Apply today!</p>
          </a>

          <a href="https://www.silksoftware.com/work/" className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>See all the eCommerce solutions that we have implemented.</p>
          </a>

          <a href="https://github.com/dat-monke" className={styles.card}>
            <h3>Status &rarr;</h3>
            <p>Check the status of your application here.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
