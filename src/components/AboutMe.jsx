import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import childhoodPhoto from '../assets/childhood-photo.png';
import Skills from "./Skills";
import Contact from "./Contact";

const jobTitles = ['Senior Web Specialist', 'Frontend Developer', 'Mom 👩‍👧'];

const AboutMe = () => {
    const [index, setIndex] = useState(0);

    useEffect(()=> {
        const timer = setInterval(() => {
            setIndex((prev) => (prev+1) % jobTitles.length);
        }, 2000);
        return() => clearInterval(timer);
    }, []);
    return (
        <div className="flex flex-row flex-wrap">
            <div className="w-full md:w-1/2 text-left">
                <h1 className="font-bold">Hi, I'm Adrienne 👋</h1>
                <h2 className="relative items-start w-full h-[40px]">
                <AnimatePresence mode="wait">
                    <motion.h2
                        key={jobTitles[index]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="absolute left-0 top-0 font-bold"
                    >
                    {jobTitles[index]}
                    </motion.h2>
                </AnimatePresence>         
                </h2>

                <p>
                I'm currently helping <a href="https://pointblankcreative.ca/" target="blank" rel="noopener noreferrer">Point Blank Creative</a> create winning campaigns across Canada.
                </p>
                <p>
                We use a breadth of tools to help our clients grow their tech stacks; however, I specialize in <span className="font-bold">React</span> and frontend libraries.
                </p>
                <p>
                When I'm not at my computer, you can find me chasing my dog and daughter around the trails of Hamilton, Ontario.
                </p>

                <Contact/>
                <Skills/>
            </div>



            <div className="flex justify-center items-center w-full overflow-hidden px-4 sm:px-6 md:w-1/2">
                <img
                    src={childhoodPhoto}
                    alt="Childhood Adrienne wearing goggles by a lake."
                    className="rounded-xl h-auto max-w-full md:w-1/2 block"
                />
            </div>
        </div>
    )
}

export default AboutMe;