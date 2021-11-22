import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Next Project | About</title>
            </Head>
            <h1 className="aboutHead">Dette er en about-side</h1>
            <p className="aboutHead">
                Det hele kommer til at handle om katte 😅 😂 🤣
            </p>
            <style>
                {`
                    .aboutHead {
                        text-align: center;
                    }
                `}
            </style>
        </>
    );
}
 
export default About;