import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    async function fetchImages() {
      const res = await fetch('/api/images');
      const data = await res.json();
      setImages(data.images);
    }
    
    fetchImages();
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Asset Hosting</title>
        <meta name="description" content="Image hosting for assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Image Asset Hosting
        </h1>

        <p className={styles.description}>
          Use these images in your Flutter app
        </p>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.card}>
              <h2>{image.name}</h2>
              <div className={styles.imageContainer}>
                <Image 
                  src={image.path}
                  alt={image.name}
                  width={300}
                  height={200}
                  objectFit="contain"
                />
              </div>
              <div className={styles.urlContainer}>
                <code className={styles.url}>
                  {`${process.env.NEXT_PUBLIC_VERCEL_URL || window.location.origin}${image.path}`}
                </code>
                <button 
                  className={styles.copyButton}
                  onClick={() => {
                    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_VERCEL_URL || window.location.origin}${image.path}`);
                    alert('URL copied to clipboard!');
                  }}
                >
                  Copy URL
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted on Vercel
        </a>
      </footer>
    </div>
  );
} 