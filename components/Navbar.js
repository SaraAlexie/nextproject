import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link href="/">
                    <a>
                        <Image src='/images/logo.png' height={80} width={80} />
                    </a>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/cats"><a>Cat List</a></Link>
        </nav>
    );
}
 
export default Navbar;