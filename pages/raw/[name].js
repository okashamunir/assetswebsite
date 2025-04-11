import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

export default function RawImage() {
  const router = useRouter();
  const { name } = router.query;
  
  useEffect(() => {
    if (name) {
      // Redirect to the actual image file
      window.location.href = `/images/${name}`;
    }
  }, [name]);
  
  return (
    <>
      <Head>
        <title>Loading image...</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{ display: 'none' }}>Redirecting to image...</div>
    </>
  );
} 