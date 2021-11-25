import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto text-center">
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
