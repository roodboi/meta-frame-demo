import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { initializeHost, drift } from '@plugins.chat/drift-meta-frame';

import packageJson from '../package.json';

export default function Home() {
  useEffect(() => {
    drift('showWelcomeMessage');
    initializeHost({ log: true, frame_url: '/frame' });
  });

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
            <br />
            <a
              target="_blank"
              href="https://github.com/roodboi/meta-frame-demo"
            >
              GitHub
            </a>
          </p>

          <p className={styles.description}>
            <a
              target="_blank"
              href="https://www.npmjs.com/package/@plugins.chat/drift-meta-frame"
            >
              @plugins.chat/drift-meta-frame@
              {packageJson.dependencies['@plugins.chat/drift-meta-frame']}
            </a>
          </p>
          <button onClick={() => drift('showWelcomeMessage')}>
            drift api pass through
          </button>
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
