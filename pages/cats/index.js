import Head from "next/head";
import Link from 'next/link'

export const getStaticProps = async () => {
    // Denne funktion kører ikke i browseren, kun buildt time. Skriv ikke noget, som forventes at køre i browseren.
    const res = await fetch('https://api.thecatapi.com/v1/breeds')
    const data = await res.json()

    return {
        props: { cats: data}
    }
}

const CatList = ({ cats }) => {
    return (
        <>
            <Head>
                <title>Next Project | Cat List</title>
            </Head>
            <h1 style={{textAlign: 'center'}}>Her kommer man til at kunne se alle katte</h1>
            <ul>
                {cats.map(cat => (
                    <Link href={`/cats/${cat.id}`} key={cat.id}>
                        <a>
                            <h3>{cat.name}</h3>
                        </a>
                    </Link>  
                ))}
            </ul>
        </>
    );
}
 
export default CatList;