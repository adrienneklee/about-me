import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import childhoodPhoto from '../assets/childhood-photo.jpg';

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
        <section className="bg-[#f5f5f5] p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 items-center space-y-2">
                <h1 className="text-left">Hi, it's Adrienne 👋</h1>
                <h2 className="relative items-start text-left w-[240px] h-[32px]">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={jobTitles[index]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="absolute left-0 top-0 font-semibold"
                        >
                            {jobTitles[index]}
                        </motion.h2>
                    </AnimatePresence>         
                </h2>
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