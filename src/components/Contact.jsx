import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {

  return(
    <section className="contact">
      <div className="flex items-baseline space-x-4 mt-4 text-3xl">
       
        <a href="https://github.com/adrienneklee" 
          title="Github" 
          target="blank" 
          rel="noopener noreferrer" 
          className="align-middle contact-icon"
          >
            <FaGithub/>
        </a> 
        
        <a href="https://www.linkedin.com/in/adrienneklee/" 
        title="LinkedIn" 
        target="blank" 
        rel="noopener noreferrer" 
        className="align-middle contact-icon"
        >
          <FaLinkedin/>
        </a>
       
        <a href="mailto: adrienneklee@gmail.com?subject=Hello Adrienne! I saw your portfolio." 
        title="Email" 
        target="blank" 
        rel="noopener noreferrer" 
        className="align-middle contact-icon"
        >
          <MdMail/>
        </a>

      </div>

      <div className="flex flex-col md:flex-row">
        <a href="/Adrienne-Lee-resume.pdf" 
        target="blank" 
        rel="noopener noreferrer"  
        className="font-bold resume"
        >
          Resume
        </a>
      </div>
    </section>

  );
}

export default Contact