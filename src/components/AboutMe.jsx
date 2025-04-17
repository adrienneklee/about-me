import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import childhoodPhoto from '../assets/childhood-photo.png';
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
        <section className="bg-[#f5f5f5] flex flex-col md:flex-row md:justify-around">
            <div className="w-full md:w-1/2 text-left">
                <h1 className="">Hi, I'm Adrienne 👋</h1>
                <h2 className="relative items-start w-[240px] h-[32px]">
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
                    When I'm not at my computer, you can find me chasing my dog and toddler around the trails of Hamilton, Ontario.
                </p>
                <Contact/>
            </div>

            <div className="w-full md:w-1/4">
                <img
                    src={childhoodPhoto}
                    alt="Childhood Adrienne wearing goggles by a lake."
                    className="rounded-xl"
                />
            </div>
        </section>
        
        

    )
}

export default AboutMe;