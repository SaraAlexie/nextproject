import Head from "next/head";

const About = () => {
    return (
        <section className="max-w-screen-lg mx-auto">
            <Head>
                <title>Next Project | About</title>
            </Head>
            <h1 className="aboutHead">This is an about-page</h1>
            <p className="aboutHead">
                Pretend this is all about cats 😅 😂 🤣
            </p>
            <p className="aboutHead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maiores facilis nisi dolores vero? Labore ipsa veniam quisquam perspiciatis autem doloremque 
                repellat maxime nam magnam eaque, id fugit? Dolore quod sequi fugit, 
                impedit harum in earum ducimus vel, labore, accusantium magnam.
            </p>
            <p className="aboutHead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maiores facilis nisi dolores vero? Labore ipsa veniam quisquam perspiciatis autem doloremque 
                repellat maxime nam magnam eaque, id fugit? Dolore quod sequi fugit, 
                impedit harum in earum ducimus vel, labore, accusantium magnam.
            </p>
            <style jsx>
                {`
                    .aboutHead {
                        text-align: center;
                    }
                `}
            </style>
        </section>
    );
}
 
export default About;