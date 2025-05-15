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
                    <span className="sr-only">React</span>
                    <FaReact title="React" aria-hidden="true"/>

                    <span className="sr-only">HTML5</span>
                    <SiHtml5 title="HTML5" aria-hidden="true"/>

                    <span className="sr-only">CSS3</span>
                    <SiCss3 title="CSS3" aria-hidden="true"/>

                    <span className="sr-only">SASS</span>
                    <FaSass title="Sass" aria-hidden="true"/>

                    <span className="sr-only">Javascript</span>
                    <FaJs title="JavaScript" aria-hidden="true"/>

                    <span className="sr-only">Wordpress</span>
                    <FaWordpress title="Wordpress" aria-hidden="true"/>

                    <span className="sr-only">Ruby on Rails</span>
                    <SiRubyonrails title="Ruby on Rails" aria-hidden="true"/>

                    <span className="sr-only">Git Version Control</span>
                    <FaGit title="Git" aria-hidden="true"/>

                    <span className="sr-only">GitHub</span>
                    <FaGithub title="GitHub" aria-hidden="true"/>

                    {/* <FaNodeJs title="NodeJS" /> */}

                    <span className="sr-only">Firebase</span>
                    <IoLogoFirebase title="Firebase" aria-hidden="true"/>
                </div>
            </div>
        </section>

    )
}

export default Skills