import Link from 'next/link'

const CatCard = ({ cat }) => {
    return (
        <Link href={`/cats/${cat.id}`}>
            <a>
                <li>
                    <h3>{cat.name}</h3>
                </li>
            </a>
        </Link>
    );
}
 
export default CatCard;