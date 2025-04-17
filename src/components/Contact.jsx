import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {

  return(
    <section className="">
      <div className="flex flex-wrap flex-row md:flex-row text-3xl">
        <a href="https://github.com/adrienneklee" target="blank" rel="noopener noreferrer"><FaGithub/></a> 
        <a href="https://www.linkedin.com/in/adrienneklee/" target="blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="mailto: adrienneklee@gmail.com?subject=Hello Adrienne! I saw your portfolio." target="blank" rel="noopener noreferrer"><MdMail/></a>
      </div>

      <div className="flex flex-col md:flex-row">
        <a href="">Resume</a>
      </div>
    </section>

  );
}

export default Contact