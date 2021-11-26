import Image from 'next/image'
import Head from 'next/head'

export const getStaticPaths = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=30')
    const data = await response.json()

    const paths = data.map(cat => {
        return {
          params: { id: cat.id.toString() } // Id er en integer, det skal være en string
        }
      })

    return {
        paths,
        fallback: false
    }
} // Dette gør os i stand til at vide, hvor meget data der bliver hentet, 
  // selvom det er eksternt, så next ved, hvor mange html-sider der skal laves.

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://api.thecatapi.com/v1/breeds/${id}` );
    const data = await res.json();

    return {
        props: { cat: data }
    }
} // Next kører denne funktion for hver details-page, baseret på paths



const CatDetails = ({ cat }) => {

    return (
        <>
            <Head>
                <title>Next Project | {cat.name}</title>
            </Head>
            <section className="max-w-screen-lg mx-auto md:flex md:justify-between my-8 px-4">
                <article className="md:w-2/5">
                    <h1 className="my-4">{cat.name}</h1>
                    <p className="my-2">Other name(s): {cat.alt_names ? cat.alt_names : "none"}</p>
                    <p className="my-2">Origin: {cat.origin}</p>
                    <p className="my-2">{cat.description}</p>
                    <p className="my-2">Temperament: {cat.temperament}.</p>
                    <p className="my-2">Weight: {cat.weight.metric} kilograms.</p>
                    <p className="my-2">Lifespan: {cat.weight.metric} years.</p>
                </article>
                <Image
                    src={ cat.image ? cat.image.url : "/images/silhouette.png" }
                    height={480}
                    width={443}
                    alt="Picture of cat"
                    className="md:w-2/5"
                />
            </section>
        </>
    );
}
 
export default CatDetails;