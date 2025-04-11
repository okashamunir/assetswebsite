import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/ImageView.module.css';

export default function ImageView() {
  const router = useRouter();
  const { name } = router.query;
  
  if (!name) {
    return <div>Loading...</div>;
  }
  
  // Construct the full image path
  const imagePath = `/images/${name}`;
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || 
                 (typeof window !== 'undefined' ? window.location.origin : '');
  const fullUrl = `${baseUrl}${imagePath}`;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Image: {name}</title>
        <meta name="description" content={`View image ${name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>{name}</h1>
        
        <div className={styles.imageContainer}>
          <Image 
            src={imagePath}
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        
        <div className={styles.urlContainer}>
          <p>Direct URL for your Flutter app:</p>
          <code className={styles.url}>{fullUrl}</code>
          <button 
            className={styles.copyButton}
            onClick={() => {
              navigator.clipboard.writeText(fullUrl);
              alert('URL copied to clipboard!');
            }}
          >
            Copy URL
          </button>
        </div>
        
        <div className={styles.flutterCode}>
          <p>Flutter code:</p>
          <pre>
            <code>{`Image.network(
  '${fullUrl}',
  fit: BoxFit.cover,
)`}</code>
          </pre>
          <button 
            className={styles.copyButton}
            onClick={() => {
              navigator.clipboard.writeText(`Image.network(
  '${fullUrl}',
  fit: BoxFit.cover,
)`);
              alert('Flutter code copied to clipboard!');
            }}
          >
            Copy Code
          </button>
        </div>
        
        <a className={styles.backLink} href="/">
          &larr; Back to all images
        </a>
      </main>
    </div>
  );
} 