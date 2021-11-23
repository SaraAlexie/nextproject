import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.header}>
      <Head>
        <title>Next Project | Home</title>
      </Head>
      <h1>
        Her kommer mit projekt til at være
      </h1>
      <p>Det kommer nok til at handle om katte :P</p>
      <Image
        src='/images/blackcat.jpeg'
        alt='Black Cat'
        height={555}
        width={555}
      />
    </div>
  )
}
