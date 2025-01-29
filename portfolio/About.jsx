import React from "react";
import PPng from "../assets/mypic.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import Skills from "./Skills/Skills";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { Tooltip } from "@material-tailwind/react";
// import insta from "../assets/instagram.png";

const Data = [
  {
    link: "https://www.linkedin.com/in/yazhini-r-7527032a8/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    tooltip: "Connect On Linkedin",
  },
  {
    link: "https://github.com/yazhr",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    tooltip: "Connect On Github",
  },
  {
    link: "mailto:mailto:yazhini.r2023aiml@sece.ac.in",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-mail-1299-1100772.png?f=webp&w=256",
    tooltip: "Mail Me",
  },
];
const About = () => {
  return (
    <>
      <div className="text-white">
      <div className="flex flex-col md:flex-row items-center justify-evenly h-screen w-full">
  <div className="mb-8 md:mb-0 mt-10">
    <img
      src={PPng} loading="lazy"
      alt="Kishan Vishwakarma"
      class="rounded-t-full rounded-b-full w-48 h-72 md:w-64 md:h-96 object-cover object-center shadow-lg"/>       
  </div>

          <div className="container flex text-white text-center justify-center items-center w-full md:w-1/2 h-full flex-col">
            <div className="text-center">
              <h1 className="text-white text-2xl md:text-5xl font-sans font-semibold">
                About Me
              </h1>
            </div>
            <div className="text-blue-900 text-3xl md:text-5xl font-bold my-4 md:my-8 text-center">
              <h2>Software Developer</h2>
            </div>
            <div className="text-base font-medium  relative text-black w-10/12 md:w-3/3">
              <p>
              Skilled in designing efficient, scalable solutions that integrate seamless user experiences with robust backend systems. Proficient in full-stack development, problem-solving, and leveraging the latest technologies to deliver impactful, high-quality software. Dedicated to continuous learning and innovation to stay ahead in the ever-evolving tech landscape.<br/><br/>
              Whether it's crafting intuitive user interfaces with modern frameworks or building scalable backend architectures, I approach every project with a comprehensive mindset. My passion for continuous learning drives me to stay updated with emerging technologies and deliver innovative solutions.
              </p>
            </div>
            <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5 text-white">
              <Button
                variant="gradient"
                color="light-blue"
                className="flex gap-2 items-center mb-2 md:mb-0"
              >
                <FaReact className="text-lg" />
                Projects
              </Button>

              <Link
                to="https://drive.google.com/file/d/1z9sIcKNcjaT8r4YkUNJwku4QkwkumGCR/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="gradient"
                  color="light-blue"
                  className="flex gap-2 items-center"
                >
                  <MdOutlineDocumentScanner className="text-white text-lg" />
                  Resume
                </Button>
              </Link>
            </div>
          </div>


        </div>
          <div className="flex items-center w-full justify-center gap-8 my-10">

          {Data.map((item, index) => {
        return (
          <Tooltip
            key={index}
            color="black"
            
            content={item.tooltip}
            className="bg-white text-black"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center"
            >
              <img src={item.icon} alt={item.tooltip} loading="lazy" className="p-2 text-white bg-white rounded-full" />
            </a>
          </Tooltip>
        );
      })}
          </div>
        <Skills></Skills>
      </div>
    </>
  );
};

export default About;
