import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import childhoodPhoto from '../assets/childhood-photo.png';
import Skills from "./Skills";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const jobTitles = ['Frontend Developer', 'React Specialist', 'Mom 👩‍👧', '10+ Years Project Management'];

const AboutMe = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % jobTitles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="flex flex-row flex-wrap p-4 md:p-8" role="main">
            {/* Text Section */}
            <section className="w-full md:w-1/2 text-left" aria-labelledby="about-heading">
                <h1 id="about-heading" className="text-2xl font-bold mb-2">
                    Hi, I'm Adrienne 👋
                </h1>

                {/* Animated Job Titles */}
                <div className="h-[40px] relative">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={jobTitles[index]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="absolute left-0 top-0 text-xl font-semibold"
                        >
                            {jobTitles[index]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Bio */}
                <div className="mt-4 space-y-4 text-base">
                    <p>
                        I'm currently helping{" "}
                        <a
                            href="https://pointblankcreative.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-400 hover:text-blue-200"
                        >
                            Point Blank Creative
                        </a>{" "}
                        create winning campaigns across Canada.
                    </p>
                    <p>
                        We use a breadth of tools to help our clients grow their tech stacks;
                        however, I specialize in <strong>React</strong> and frontend libraries.
                        A few of my Projects can be found{" "}
                        <Link to="/projects" className="underline text-blue-400 hover:text-blue-200">
                            here.
                        </Link>
                    </p>
                    <p>
                        When I'm not at my computer, you can find me chasing my dog and daughter
                        around the trails of Hamilton, Ontario.
                    </p>
                </div>

                <Contact />
                <Skills />
            </section>

            {/* Image Section */}
            <section
                className="flex justify-center items-center w-full overflow-hidden px-4 sm:px-6 md:w-1/2"
                aria-label="Photo of Adrienne"
            >
                <img
                    src={childhoodPhoto}
                    alt="Childhood Adrienne wearing goggles by a lake."
                    className="rounded-xl h-auto max-w-full md:w-1/2 block"
                />
            </section>
        </main>
    );
};

export default AboutMe;
