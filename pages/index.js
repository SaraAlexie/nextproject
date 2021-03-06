import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto text-center">
      <Head>
        <title>Next Project | Home</title>
      </Head>
      <h1>
        This is my next.js project!
      </h1>
      <p>It is about cats :P</p>
      <Image
        src="/images/kittens.jpeg"
        alt="Kittens"
        height={564}
        width={1016}
        className="shadow-xl rounded p-4"
        priority
      />
    </div>
  )
}
