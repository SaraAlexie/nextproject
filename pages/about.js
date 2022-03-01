import Head from "next/head";
import Image from "next/image";

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
                    Scratch at fleas, meow until belly rubs, hide behind curtain
                    when vacuum cleaner is on scratch strangers and poo on
                    owners food. Throwup on your pillow catty ipsum. Eat a rug
                    and furry furry hairs everywhere oh no human coming lie on
                    counter don`&apos;`t get off counter making bread on the
                    bathrobe bleghbleghvomit my furball really tie the room
                    together. Grab pompom in mouth and put in water dish.
                    Reaches under door into adjacent room more napping, more
                    napping all the napping is exhausting, for my water bowl is
                    clean and freshly replenished, so i`&apos;`ll drink from the
                    toilet pee in the shoe and in the middle of the night i
                    crawl onto your chest and purr gently to help you sleep or
                    love to play with owner`&apos;`s hair tie. Ooh, are those
                    your $250 dollar sandals? lemme use that as my litter box.
                    Hiding behind the couch until lured out by a feathery toy
                    pose purrfectly to show my beauty destroy house in 5
                    seconds. Sniff sniff.
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
};

export default About;
