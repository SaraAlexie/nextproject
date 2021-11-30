import Head from "next/head";
import Image from 'next/image'

const About = () => {
    return (
        <section className="max-w-screen-lg mx-auto">
            <Head>
                <title>Next Project | About</title>
            </Head>
            <h1 className="text-center">This is an about-page</h1>
            <h3 className="mb-4 p-2">
                Pretend this is all about cats 😅 😂 🤣
            </h3>
            <article className="md:flex">
                <p className="md:w-2/5 md:mr-4 p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores facilis nisi dolores vero? Labore ipsa veniam quisquam perspiciatis autem doloremque 
                    repellat maxime nam magnam eaque, id fugit? Dolore quod sequi fugit, 
                    impedit harum in earum ducimus vel, labore, accusantium magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores facilis nisi dolores vero? Labore ipsa veniam quisquam perspiciatis autem doloremque 
                    repellat maxime nam magnam eaque, id fugit? Dolore quod sequi fugit, 
                    impedit harum in earum ducimus vel, labore, accusantium magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores facilis nisi dolores vero? Labore ipsa veniam quisquam perspiciatis autem doloremque 
                    repellat maxime nam magnam eaque, id fugit? Dolore quod sequi fugit, 
                    impedit harum in earum ducimus vel, labore, accusantium magnam.
                </p>
                <div className="text-center">
                    <Image
                        src="/images/walkcat.jpeg"
                        alt="Black cat walking"
                        width={577}
                        height={433}
                        className="shadow-xl rounded p-4"
                    />
                </div>
                
            </article>
        </section>
    );
}
 
export default About;