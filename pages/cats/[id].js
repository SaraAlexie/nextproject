import Image from 'next/image'

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
            <h1>{cat.name}</h1>
            <Image 
                src={cat.image.url}
                height={200}
                width={200}
            />
        </>
    );
}
 
export default CatDetails;