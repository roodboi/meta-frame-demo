import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { initializeHost } from '@plugins.chat/drift-meta-frame'
export default function Home() {

  useEffect(() => {
    initializeHost({ log: true, meta_frame_origin: '/frame'  })
  })

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Meta Frame demo</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Meta Frame Demo</h1>

          <p className={styles.description}>
            Drift widget install in self contained iframe.
          </p>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://hack.dance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Hack Dance
          </a>
        </footer>
      </div>
    </>
  );
}
