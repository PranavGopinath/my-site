import Image from "next/image";
import MartinreaLogo from "@/public/martinrealogo.png";
import BlueprintLogo from "@/public/blueprintlogo.png";
import PlatinumLogo from "@/public/platinumlogo.png";
import HuaweiLogo from "@/public/huawei.png";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { SiHarmonyos } from "react-icons/si";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Huawei",
    date: "May - Aug 2025",
    logo: HuaweiLogo,
    logoLink: "https://www.huawei.com/en/",
    logoAlt: "Huawei",
    descriptions: [
      "Dynamic identity authentication for all mobile devices.",
    ],
    icons: [
      <SiCplusplus key="cpp" />,
      <SiHarmonyos key="harmony" />,
      <FaPython key="python" />,
      <FaJava key="java" />,
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Martinrea",
    date: "Sep - Dec 2024",
    logo: MartinreaLogo,
    logoLink: "https://www.martinrea.com",
    logoAlt: "Martinrea",
    descriptions: [
      "Developed and launched a business decision making tool, connecting 50+ corporate and plant teams across Martinrea with their desired data.",
      "Built a universal PLC communication app, enabling developers to connect their factory applications with any make/model of PLC.",
    ],
    icons: [
      <FaReact key="react" />,
      <SiDjango key="django" />,
      <FaPython key="python" />,
      <SiCplusplus key="cpp" />,
    ],
  },
  {
    title: "Software Developer + VP Project Scoping",
    company: "UW Blueprint",
    date: "Sep 2024 - Present",
    logo: BlueprintLogo,
    logoLink: "https://www.uwblueprint.org",
    logoAlt: "Blueprint",
    descriptions: [
      "Developed a gamified task management system for Marillac Place, a women's shelter supporting new mothers.",
      "Engineering a route generation app for Food4Kids, a food prep & delivery non-profit supporting 4000+ children.",
    ],
    icons: [
      <FaNodeJs key="node" />,
      <SiTypescript key="ts" />,
      <GrGraphQl key="graphql" />,
      <DiPostgresql key="pg" />,
    ],
  },
  {
    title: "Engineering Intern",
    company: "All Equip",
    date: "Jan - Apr 2024",
    logo: PlatinumLogo,
    logoLink: "https://www.allequiprepair.ca/",
    logoAlt: "PlatinumTrailers",
    descriptions: [
      "Developed full stack applications to digitize manufacturing processes, including quality inspection, progress oversight, and material stock management.",
    ],
    icons: [
      <RiNextjsLine key="next" />,
      <SiMongodb key="mongo" />,
      <FaNodeJs key="node" />,
      <FaFigma key="figma" />,
    ],
  },
];

export const Experience = () => {
  return (
    <div
      id="experience"
      className="px-4 sm:px-8 md:px-16 lg:px-40 pt-16 sm:pt-24 md:pt-32 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl relative z-20 text-[#10b981]">
        Experience
      </h1>
      <h3 className="text-base sm:text-lg text-white pt-2 sm:pt-4 pb-8">
        places where i&apos;ve gained invaluable knowledge
      </h3>

      <div className="w-full flex flex-col divide-y divide-neutral-800">
        {experiences.map((exp, index) => (
          <div key={index} className="py-8 sm:py-10 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-100">
                  {exp.title}
                </h3>
                <h4 className="text-base text-neutral-400">{exp.company}</h4>
              </div>
              <span className="text-sm text-neutral-500">{exp.date}</span>
            </div>

            <div className="flex flex-col gap-2">
              {exp.descriptions.map((desc, i) => (
                <p key={i} className="text-neutral-300 text-sm sm:text-base leading-7">
                  {desc}
                </p>
              ))}
            </div>

            <div className="flex flex-row items-center gap-6">
              <a
                href={exp.logoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105 shrink-0"
              >
                <Image
                  src={exp.logo}
                  alt={exp.logoAlt}
                  width={100}
                  height={100}
                  className="rounded-md w-[80px] h-auto object-contain"
                />
              </a>
              <div className="flex flex-row gap-4 flex-wrap">
                {exp.icons.map((icon, i) => (
                  <span key={i} className="text-3xl sm:text-4xl text-[#10b981]">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
