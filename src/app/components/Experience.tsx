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
      title: "Software Engineering Intern",
      company: "Huawei",
      date: "May - Aug 2025",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm font-normal mb-8 leading-7">
              Security and Authentication
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <a
              href="https://www.huawei.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
            >
              <Image
                src={HuaweiLogo}
                alt="Huawei"
                width={300}
                height={300}
                className="z-[100] rounded-lg hover:border-4 hover:border-[#33AFFF]"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 w-1/2 items-center">
              <div className="flex justify-center">
                <SiCplusplus className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiHarmonyos className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaJava className="text-6xl text-[#33AFFF]"/>
              </div>
              <div className="flex justify-center">
                <FaAndroid className="text-6xl text-[#33AFFF]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Full Stack Developer",
      company: "Martinrea International",
      date: "Sep - Dec 2024",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm font-normal mb-8 leading-7">
              Developed and launched a business decision making tool, connecting
              50+ corporate and plant teams across Martinrea with their desired
              data.
            </p>
            <p className="text-neutral-200 text-sm font-normal mb-8 leading-7">
              Built a universal PLC communication app, enabling developers to
              connect their factory applications with any make/model of PLC.
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <a
              href="https://www.martinrea.com"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
            >
              <Image
                src={MartinreaLogo}
                alt="Martinrea"
                width={300}
                height={300}
                className="z-[100] rounded-lg hover:border-4 hover:border-[#33AFFF]"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 w-1/2 items-center">
              <div className="flex justify-center">
                <FaReact className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiDjango className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaPython className="text-6xl text-[#33AFFF]"/>
              </div>
              <div className="flex justify-center">
                <SiCplusplus className="text-6xl text-[#33AFFF]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Software Developer + VP Project Scoping",
      company: "UW Blueprint",
      date: "Sep 2024 - Present",
      content: (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm font-normal mb-8 leading-7">
              Partnering with non-profit organizations to build tech solutions,
              catalyzing efforts to drive social impact
            </p>
            <p className="text-neutral-200 text-sm font-normal mb-8 leading-7">
              Driving initiatives in collaboration with Blueprint alumni to
              ensure sustainable re-use of delivered projects.{" "}
            </p>
          </div>
          <div className="flex flex-row gap-10">

          <a
            href="https://www.uwblueprint.org"
            target="_blank"
            rel="noopener noreferrer"
            className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
          >
            <Image
              src={BlueprintLogo}
              alt="Blueprint"
              width={300}
              height={300}
              className="z-[100] rounded-lg hover:border-4 hover:border-[#33AFFF]"
              />
          </a>
          <div className="grid grid-cols-2 gap-4 w-1/2 items-center">
              <div className="flex justify-center">
                <FaNodeJs className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiTypescript className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <GrGraphQl className="text-6xl text-[#33AFFF]"/>
              </div>
              <div className="flex justify-center">
                <DiPostgresql className="text-6xl text-[#33AFFF]" />
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
        <div className="flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <p className="text-neutral-200 text-sm font-normal mb-4 leading-7">
              Developed a full stack application to digitize
              manufacturing processes, including quality inspection, progress
              oversight, and material stock management.
            </p>
            <p className="text-neutral-200 text-sm font-normal mb-4 leading-7">
              Configured an aluminum saw machine to automate raw material
              cutting, exceeding the objective of dealing with a 40%
              increase in production demand.
            </p>
          </div>
          <div className="flex flex-row gap-10">

          <a
            href="https://www.allequiprepair.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="z-50 inline-block transition-transform duration-300 origin-center hover:scale-y-105"
          >
            <Image
              src={AllEquipLogo}
              alt="AllEquip"
              width={300}
              height={300}
              className="z-[100] rounded-lg hover:border-4 hover:border-[#33AFFF]"
            />
          </a>
          <div className="grid grid-cols-2 gap-4 w-1/2 items-center">
              <div className="flex justify-center">
                <RiNextjsLine className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <SiMongodb className="text-6xl text-[#33AFFF]" />
              </div>
              <div className="flex justify-center">
                <FaNodeJs className="text-6xl text-[#33AFFF]"/>
              </div>
              <div className="flex justify-center">
                <FaFigma className="text-6xl text-[#33AFFF]" />
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
      className="px-40 pt-40 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-4xl relative z-20 text-[#33AFFF]">Experience</h1>
      <h3 className="text-lg text-white pt-4">
        places where i&apos;ve gained invaluable knowledge
      </h3>
      <Timeline data={data} />
    </div>
  );
};