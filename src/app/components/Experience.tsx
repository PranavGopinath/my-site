import Image from "next/image";
import MartinreaLogo from "@/public/martinrealogo.png";
import BlueprintLogo from "@/public/blueprintlogo.png";
import PlatinumLogo from "@/public/platinumlogo.png";
import HuaweiLogo from "@/public/huawei.png";
import { StaticImageData } from "next/image";

const experiences: {
  company: string;
  title: string;
  date: string;
  logo: StaticImageData;
  logoLink: string;
  description: string;
}[] = [
  {
    company: "Huawei",
    title: "Software Engineer Intern",
    date: "May - Aug 2025",
    logo: HuaweiLogo,
    logoLink: "https://www.huawei.com/en/",
    description: "Dynamic identity authentication for all mobile devices.",
  },
  {
    company: "Martinrea",
    title: "Full Stack Developer",
    date: "Sep - Dec 2024",
    logo: MartinreaLogo,
    logoLink: "https://www.martinrea.com",
    description:
      "Built a business intelligence tool and universal PLC communication app for 50+ teams across global manufacturing plants.",
  },
  {
    company: "UW Blueprint",
    title: "Software Developer + VP Project Scoping",
    date: "Sep 2024 - Present",
    logo: BlueprintLogo,
    logoLink: "https://www.uwblueprint.org",
    description:
      "Developed software for non-profits including a gamified task manager and a route generation app.",
  },
  {
    company: "All Equip",
    title: "Engineering Intern",
    date: "Jan - Apr 2024",
    logo: PlatinumLogo,
    logoLink: "https://www.allequiprepair.ca/",
    description:
      "Built full stack apps to digitize quality inspection, progress oversight, and material stock management.",
  },
];

export const Experience = () => {
  return (
    <div
      id="experience"
      className="px-4 sm:px-8 md:px-16 lg:px-40 pt-16 sm:pt-20 md:pt-24 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl relative z-20 text-[#10b981]">
        Experience
      </h1>

      <div className="w-full flex flex-col divide-y divide-neutral-800">
        {experiences.map((exp, index) => (
          <div key={index} className="py-6 sm:py-8 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div className="flex flex-col gap-1">
                <a
                  href={exp.logoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group w-fit"
                >
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={24}
                    height={24}
                    className="rounded-full w-6 h-6 object-contain bg-neutral-800 p-0.5"
                  />
                  <span className="text-neutral-300 text-sm group-hover:text-[#10b981] transition-colors">
                    {exp.company}
                  </span>
                </a>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-100">
                  {exp.title}
                </h3>
              </div>
              <span className="text-sm text-neutral-500 sm:pt-0.5 shrink-0">{exp.date}</span>
            </div>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
