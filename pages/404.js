import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const NotFound = () => {
    return (
        <section className="text-center">
            <Head>
                <title>Next Project | 404</title>
            </Head>
            <h1>Page not found</h1>
            <p>Sad cat is sad for you. Let me go back <Link href="/"><a className="text-blue-400">home</a></Link>
            </p>
            <Image 
                src="/images/confusedcat.jpeg"
                alt="Piture of confused cat"
                height={500}
                width={752}
                className="shadow-xl rounded"
            />
        </section>
    );
}
 
export default NotFound;