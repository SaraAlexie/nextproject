import Head from "next/head";
import Image from 'next/image'

const About = () => {
    return (
        <section className="aboutSection">
            <Head>
                <title>Next Project | About</title>
            </Head>
            <h1>This is an about-page</h1>
            <p>
                Pretend this is all about cats 😅 😂 🤣
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maiores facilis nisi dolores vero? Labore ipsa veniam quisquam perspiciatis autem doloremque 
                repellat maxime nam magnam eaque, id fugit? Dolore quod sequi fugit, 
                impedit harum in earum ducimus vel, labore, accusantium magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maiores facilis nisi dolores vero? Labore ipsa veniam quisquam perspiciatis autem doloremque 
                repellat maxime nam magnam eaque, id fugit? Dolore quod sequi fugit, 
                impedit harum in earum ducimus vel, labore, accusantium magnam.
            </p>
            <Image
                src="/images/walkcat.jpeg"
                width={577}
                height={433}
            />
            <style jsx>
                {`
                    .aboutSection {
                        width: 64em;
                        margin-left: auto;
                        margin-right: auto;
                        text-align: center;
                    }
                `}
            </style>
        </section>
    );
}
 
export default About;