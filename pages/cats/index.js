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
        <section className="max-w-screen-lg mx-auto">
            <Head>
                <title>Next Project | Cat List</title>
            </Head>
            <h1 className="text-center">Cat list</h1>
            <ul className="grid md:grid-cols-4 gap-3 grid-cols-2 text-center mx-3.5">
                {cats?.map(cat => (
                    <CatCard key={cat.id} cat={cat}/>
                ))}
            </ul>
        </section>
    );
}
 
export default CatList;