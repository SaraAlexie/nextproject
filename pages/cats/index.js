import Head from "next/head";
import CatCard from "../../components/CatCard";

export const getStaticProps = async () => {
    // Denne funktion kører ikke i browseren, kun buildt time. Skriv ikke noget, som forventes at køre i browseren.
    const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=30')
    const data = await response.json()

    return {
        props: { cats: data }
    }
}

const CatList = ({ cats }) => {
    return (
        <>
            <Head>
                <title>Next Project | Cat List</title>
            </Head>
            <h1 style={{textAlign: 'center'}}>Her kommer man til at kunne se alle katte</h1>
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr'}}>
                {cats?.map(cat => (
                    <CatCard key={cat.id} cat={cat}/>
                ))}
            </ul>
        </>
    );
}
 
export default CatList;