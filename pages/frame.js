import { useEffect } from 'react';
import Head from 'next/head';
import { initializeMetaFrame } from '@plugins.chat/drift-meta-frame'

export default function Frame() {
  useEffect(() => {
    initializeMetaFrame({ embed_id: '65477u96atme' })
  })

  return (
    <>
      <Head>
        <title>Meta Frame demo | the frame</title>
      </Head>
      asdf
    </>
  );
}
