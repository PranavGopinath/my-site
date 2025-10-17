import Image from "next/image";
import { Timeline } from "./ui/timeline";
import MartinreaLogo from "@/public/martinrealogo.png";
import BlueprintLogo from "@/public/blueprintlogo.png";
import AllEquipLogo from "@/public/allequip.avif";
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
import { FaAndroid } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiHarmonyos } from "react-icons/si";

export const Experience = () => {
  const data = [
    {
      title: "Software Engineer Intern",
      company: "Huawei",
      date: "May - Aug 2025",
      content: (
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm sm:text-base font-normal mb-4 sm:mb-8 leading-7">
              Dynamic identity authentication for all mobile devices.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a
              href="https://www.huawei.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
            >
              <Image
                src={HuaweiLogo}
                alt="Huawei"
                width={400}
                height={300}
                className="z-[100] rounded-lg hover:border-4 hover:border-[#33AFFF] w-full max-w-[200px] mx-auto"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 w-full sm:w-1/2 items-center">
              <div className="flex justify-center">
                <SiCplusplus className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiHarmonyos className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaPython className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaJava className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Full Stack Developer",
      company: "Martinrea",
      date: "Sep - Dec 2024",
      content: (
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm sm:text-base font-normal mb-4 sm:mb-8 leading-7">
              Developed and launched a business decision making tool, connecting
              50+ corporate and plant teams across Martinrea with their desired
              data.
            </p>
            <p className="text-neutral-200 text-sm sm:text-base font-normal mb-4 sm:mb-8 leading-7">
              Built a universal PLC communication app, enabling developers to
              connect their factory applications with any make/model of PLC.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a
              href="https://www.martinrea.com"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
            >
              <Image
                src={MartinreaLogo}
                alt="Martinrea"
                width={200}
                height={200}
                className="z-[49] rounded-lg hover:border-4 hover:border-[#33AFFF] w-full max-w-[200px] mx-auto"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 w-full sm:w-1/2 items-center">
              <div className="flex justify-center">
                <FaReact className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiDjango className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaPython className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiCplusplus className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Project Developer + VP Project Scoping",
      company: "UW Blueprint",
      date: "Sep 2024 - Present",
      content: (
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm sm:text-base font-normal mb-4 sm:mb-8 leading-7">
              Developed a gamified task management system for Marillac Place, a women&apos;s shelter supporting new mothers.
            </p>
            <p className="text-neutral-200 text-sm sm:text-base font-normal mb-4 sm:mb-8 leading-7">
              DEngineering a route generation app for Food4Kids, a food prep & delivery non-profit supporting 4000+ children
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a
              href="https://www.uwblueprint.org"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
            >
              <Image
                src={BlueprintLogo}
                alt="Blueprint"
                width={200}
                height={200}
                className="z-[49] rounded-lg hover:border-4 hover:border-[#33AFFF] w-full max-w-[200px] mx-auto"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 w-full sm:w-1/2 items-center">
              <div className="flex justify-center">
                <FaNodeJs className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiTypescript className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <GrGraphQl className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <DiPostgresql className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Engineering Intern",
      company: "All Equip",
      date: "Jan - Apr 2024",
      content: (
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm sm:text-base font-normal mb-4 sm:mb-8 leading-7">
              Developed full stack applications to digitize manufacturing
              processes, including quality inspection, progress oversight, and
              material stock management.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <a
              href="https://www.allequiprepair.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
            >
              <Image
                src={AllEquipLogo}
                alt="AllEquip"
                width={200}
                height={200}
                className="z-[49] rounded-lg hover:border-4 hover:border-[#33AFFF] w-full max-w-[200px] mx-auto"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 w-full sm:w-1/2 items-center">
              <div className="flex justify-center">
                <RiNextjsLine className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiMongodb className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaNodeJs className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaFigma className="text-4xl sm:text-6xl text-[#33AFFF]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div
      id="experience"
      className="px-4 sm:px-8 md:px-16 lg:px-40 pt-16 sm:pt-24 md:pt-32 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl relative z-20 text-[#33AFFF]">
        Experience
      </h1>
      <h3 className="text-base sm:text-lg text-white pt-2 sm:pt-4 pb-8">
        places where i&apos;ve gained invaluable knowledge
      </h3>
      <Timeline data={data} />
    </div>
  );
};
