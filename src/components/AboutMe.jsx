import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import childhoodPhoto from '../assets/childhood-photo.png';
import Skills from "./Skills";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const jobTitles = ['Technical Product Manager', 'Frontend Developer', 'React Specialist', 'Mom 👩‍👧'];

const AboutMe = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % jobTitles.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="flex flex-row flex-wrap-reverse p-4 md:p-8" role="main">
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
                    With over 10 years managing projects and building user-focused tools for nonprofits, startups, and agencies, I love creating digital experiences that feel intuitive and inclusive. I’ve taken projects from 0 → 1 — from global platforms to campaign tools — always with a focus on accessibility and meaningful impact.
                    </p>
                    <p>
                        A few of my Projects can be found{" "}
                        <Link to="/projects" className="text-blue-400 hover:text-blue-200">
                            here.
                        </Link>
                    </p>
                    <p>
                        When I'm not at my computer, you can find me chasing my dog and daughter
                        around the trails of Hamilton, Ontario.
                    </p>
                    <p className="italic">
                        I'm currently open and actively seeking new projects and opportunities. 
                    </p>
                </div>

                <Contact />
                <Skills />
            </section>

            {/* Image Section */}
            <section
                className="flex justify-center items-center w-full overflow-hidden md:w-1/2 sm:px-6 mb-8 md:mb-0"
                aria-label="Photo of Adrienne"
            >
                <img
                    src={childhoodPhoto}
                    alt="Childhood Adrienne wearing goggles by a lake."
                    className="rounded-xl h-auto md:w-3/4 block"
                />
            </section>
        </main>
    );
};

export default AboutMe;
