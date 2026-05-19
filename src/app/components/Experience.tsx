import Image from "next/image";
import type { StaticImageData } from "next/image";
import MartinreaLogo from "@/public/martinrea-icon.png";
import BlueprintLogo from "@/public/blueprint-icon.png";
import UntilLabsLogo from "@/public/untillabslogo.png";
import HuaweiLogo from "@/public/huawei-icon.png";

function CompanyLogo({
  src,
  alt,
  imageClassName = "object-cover object-center",
}: {
  src: StaticImageData;
  alt: string;
  imageClassName?: string;
}) {
  return (
    <span className="relative inline-flex h-6 w-6 shrink-0 overflow-hidden rounded-full bg-neutral-800">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="24px"
        className={imageClassName}
      />
    </span>
  );
}

const experiences: {
  company: string;
  title: string;
  date: string;
  logo: StaticImageData;
  logoImageClassName?: string;
  logoLink: string;
  description: string;
}[] = [
  {
    company: "Until Labs",
    title: "Software Engineer Intern",
    date: "Jan - May 2026",
    logo: UntilLabsLogo,
    logoLink: "https://www.untillabs.com/",
    description: "Data infrastructure behind pausing biological time. ",
  },
  {
    company: "Huawei",
    title: "Software Engineer Intern",
    date: "May - Aug 2025",
    logo: HuaweiLogo,
    logoImageClassName: "object-cover object-[center_30%]",
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
      "Built a business intelligence tool and universal PLC communication app for 50+ global plants.",
  },
  {
    company: "Blueprint",
    title: "Technical Software Lead",
    date: "Sep 2024 - Present",
    logo: BlueprintLogo,
    logoImageClassName: "object-contain object-center scale-75",
    logoLink: "https://www.uwblueprint.org",
    description:
      "Building tech for non-profits, including a management system for 10,000+ volunteers at a sustainability npo.",
  },
];

export const Experience = () => {
  return (
    <div
      id="experience"
      className="px-4 sm:px-8 md:px-16 lg:px-40 pt-32 sm:pt-40 md:pt-52 w-full relative flex flex-col items-start justify-start"
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
                  <CompanyLogo
                    src={exp.logo}
                    alt={exp.company}
                    imageClassName={exp.logoImageClassName}
                  />
                  <span className="text-neutral-100 text-base sm:text-lg font-semibold group-hover:text-[#10b981] transition-colors">
                    {exp.company}
                  </span>
                </a>
                <h3 className="text-sm text-neutral-400">{exp.title}</h3>
              </div>
              <span className="text-sm text-neutral-500 sm:pt-0.5 shrink-0">
                {exp.date}
              </span>
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
