import { Tooltip } from "@material-tailwind/react";
import insta from "../assets/instagram.png";

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

const Social = () => {
  return (
<section className="fixed top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 text-white hidden lg:flex flex-col gap-4 z-20">

      {Data.map((item, index) => {
        return (
          <Tooltip
            key={index}
            color="black"
            placement="right"
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
    </section>
  );
};

export default Social;
