import React from "react";
import familySmartHero from '../assets/family-smart-hero.png';
import oflHero from '../assets/ofl-hero.png';
import safeSpacesHero from '../assets/safespaces-hero.png';
import { FaReact, FaSass, FaJs } from "react-icons/fa";
import { SiHtml5, SiCss3 } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5"; 
import Footer from './Footer';

const projectData = [
    {
        id: 1,
        title: 'Family Smart',
        description: `An application built with Javascript, Family Smart, sought a solution to demonstrate both peer-to-peer and clinical support environments to benefit children's mental health. A custom video player was developed in Vanilla JavaScript, featuring buffered video/audio loading, synchronized dual-stream playback, and a timeline slider to navigate between perspectives in real time.`,
        image: familySmartHero,
        tech: [<SiHtml5/>, <FaSass/>, <FaJs/>],
        links: [
            {label: 'Live Link', href: 'https://family-smart.netlify.app/'},
            {label: 'GitHub Repo', href: 'https://github.com/adrienneklee/family-smart'},
        ]
    },
    {
        id: 2,
        title: 'Safe Spaces Toronto',
        description: 'An application built with React, Safe Spaces seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals. Safe Spaces utilizes data from the Refuge Washroom API, Geolocation, and Firebase.',
        image: safeSpacesHero,
        tech: [<SiHtml5/>, <SiCss3/>, <FaReact/>, <IoLogoFirebase/>],
        links: [
            {label: 'Live Link', href: 'https://safe-spaces-toronto.netlify.app/'},
            {label: 'GitHub Repo', href: 'https://github.com/adrienneklee/AdrienneLeeProjectThree'},
        ]
    },
    {
        id: 3,
        title: 'Enough is Enough',
        description: 'A fully responsive PSD conversion incorporating interactive UI components such as animated transitions, a floating video player, accordion sections, and multilingual support. The project was a rapid-turnaround microsite designed to support a high-profile client campaign. Following the static build, the styling and layout were modularized and implemented as a custom WordPress theme to support content management and scalability.',
        image: oflHero,
        tech: [<SiHtml5/>, <FaSass/>, <FaJs/>],
        links: [
            {label: 'Live Link', href: 'https://ofl-enough.netlify.app/'},
            {label: 'GitHub Repo', href: 'https://github.com/adrienneklee/enough'}
        ]
    },
]

const Projects = () => {
    return (
      <section className="projects mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        {projectData.map((project, id) => (
          <div
            key={id}
            className={`project flex flex-col lg:flex-row ${
              project.flip ? 'lg:flex-row-reverse' : ''
            } items-center mb-20 gap-10`}
          >
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
            <article className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-w">{project.title}</h3>
              <p className="text-left">{project.description}</p>
              <ul className="flex items-center gap-4 text-2xl">
              {project.tech.map((Icon, i) => (
                <li key={i} className="text-black">
                  {Icon}
                </li>
              ))}
              </ul>
              <ul className="flex flex-wrap gap-4">
                {project.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
        <Footer/>
      </section>
    )
}

export default Projects