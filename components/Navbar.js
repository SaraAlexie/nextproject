import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="md:max-w-screen-lg md:justify-end md:items-end md:flex-row mx-auto flex border-b border-gray-400">
            <div className='mr-auto'>
                <Link href="/">
                    <a>
                        <Image src='/images/logo.png' height={80} width={80} />
                    </a>
                </Link>
            </div>
            <Link href="/"><a className="mr-4 self-end">Home</a></Link>
            <Link href="/about"><a className="mr-4 self-end">About</a></Link>
            <Link href="/cats"><a className="mr-4 self-end">Cat List</a></Link>
            {/*<div className="md:hidden self-end block absolute top-5 right-5">
                <div className="w-6 h-1 mb-1 bg-black"></div>
                <div className="w-6 h-1 mb-1 bg-black"></div>
                <div className="w-6 h-1 mb-1 bg-black"></div>
                </div>*/}
        </nav>
    );
}
 
export default Navbar;