import { div } from "framer-motion/client";
import React from "react";
import { FaReact, FaSass, FaJs, FaNodeJs, FaGit, FaGithub, FaWordpress } from "react-icons/fa";
import { SiHtml5, SiCss3, SiRubyonrails } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
    return (
        <section className="skills flex md:flex-row md:flex-start">
            <div className="flex flex-row w-full">
                <h3 className="font-bold">Skills:</h3>
                <div className="flex flex-wrap gap-4 text-3xl">
                    <FaReact title="React" />
                    <SiHtml5 title="HTML5" />
                    <SiCss3 title="CSS3" />
                    <FaSass title="Sass" />
                    <FaJs title="JavaScript" />
                    <FaWordpress title="Wordpress" />
                    <SiRubyonrails title="Ruby on Rails" />
                    <FaGit title="Git" />
                    <FaGithub title="GitHub" />
                    {/* <FaNodeJs title="NodeJS" /> */}
                    <IoLogoFirebase title="Firebase" />
                </div>
            </div>
        </section>

    )
}

export default Skills