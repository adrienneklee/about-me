import { FaReact, FaSass, FaJs, FaPhp, FaGit, FaGithub } from "react-icons/fa";
import { SiHtml5, SiCss3, SiRubyonrails } from "react-icons/si";

const Skills = () => {
    return (
        <div className="flex flex-row">
            <h3 className="font-bold">Skills</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
                <FaReact title="React" />
                <SiHtml5 title="HTML5" />
                <SiCss3 title="CSS3" />
                <FaSass title="Sass" />
                <FaJs title="JavaScript" />
                <FaPhp title="PHP" />
                <SiRubyonrails title="Rails" />
                <FaGit title="Git" />
                <FaGithub title="GitHub" />
            </div>
        </div>
    )
}

export default Skills