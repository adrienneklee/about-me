import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {

  return(
    <section className="contact">
      <div className="flex items-baseline space-x-4 mt-4 text-3xl">
       
        <a href="https://github.com/adrienneklee" 
          title="Github" 
          aria-label="Github profile"
          target="_blank" 
          rel="noopener noreferrer" 
          className="align-middle contact-icon"
          >
            <FaGithub/>
        </a> 
        
        <a href="https://www.linkedin.com/in/adrienneklee/" 
        title="LinkedIn" 
        aria-label="LinkedIn profile"
        target="_blank" 
        rel="noopener noreferrer" 
        className="align-middle contact-icon"
        >
          <FaLinkedin/>
        </a>
       
        <a href="mailto: adrienneklee@gmail.com?subject=Hello Adrienne! I saw your portfolio." 
        title="Email" 
        aria-label="Email address"
        target="_blank" 
        rel="noopener noreferrer" 
        className="align-middle contact-icon"
        >
          <MdMail/>
        </a>

      </div>

      <div className="flex flex-col md:flex-row">
        <a href="/Adrienne-Lee-resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"  
        className="font-bold resume"
        aria-label="View Adrienne Lee's resume PDF"
        >
          Resume
        </a>
      </div>
    </section>

  );
}

export default Contact