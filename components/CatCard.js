import Link from 'next/link'
import Image from 'next/image'

const CatCard = ({ cat }) => {

    return (
        <Link href={`/cats/${cat.id}`} image={cat.image.url} >
            <a>
                <li className="border-b border-gray-400">
                    <Image
                        src={ cat.image ? cat.image.url : "/images/blackcat.jpeg" }
                        height={200}
                        width={256}
                    />
                    <h3>{cat.name}</h3>
                </li>
            </a>
        </Link>
    );
}
 
export default CatCard;

// src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}