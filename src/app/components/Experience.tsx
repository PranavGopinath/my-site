import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { StaticImageData } from "next/image";
import MartinreaLogo from "@/public/martinrea-icon.png";
import BlueprintLogo from "@/public/blueprint-icon.png";
import UntilLabsLogo from "@/public/untillabslogo.png";
import HuaweiLogo from "@/public/huawei-icon.png";
import UWaterlooLogo from "@/public/uwaterloo-icon.webp";

function CompanyLogo({
  src,
  alt,
  imageClassName = "object-cover object-center",
}: {
  src?: StaticImageData;
  alt: string;
  imageClassName?: string;
}) {
  if (!src) {
    return (
      <span
        aria-label={alt}
        className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffd54f] text-[9px] font-semibold text-black"
      >
        {alt
          .split(" ")
          .filter((w) => /^[A-Z]/.test(w))
          .map((w) => w[0])
          .join("")
          .slice(0, 2)}
      </span>
    );
  }
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
  logo?: StaticImageData;
  logoImageClassName?: string;
  logoLink: string;
  description: string;
}[] = [
  {
    company: "Until Labs",
    title: "Software Engineer Intern",
    date: "Sep 2026 - Present",
    logo: UntilLabsLogo,
    logoLink: "https://www.untillabs.com/",
    description: "Data infrastructure behind pausing biological time.",
  },
  {
    company: "University of Waterloo",
    title: "ML Research Assistant",
    date: "Jun 2026 - Present",
    logo: UWaterlooLogo,
    logoImageClassName: "object-contain object-center bg-white",
    logoLink: "https://uwaterloo.ca/",
    description: "Critical ML Lab; adaptive tokenization.",
  },
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
    title: "Technical Lead",
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
      className="pt-24 sm:pt-32 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-xl sm:text-2xl font-medium tracking-tight relative z-20 text-[#10b981]">
        Experience
      </h1>

      <div className="flex flex-col gap-1 pt-4 -mx-3 w-[calc(100%+1.5rem)]">
        {experiences.map((exp) => (
          <a
            key={`${exp.company}-${exp.date}`}
            href={exp.logoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-lg px-3 py-5 outline-none transition-colors duration-150 hover:bg-white/[0.04] focus-visible:bg-white/[0.04] active:bg-white/[0.06]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <CompanyLogo
                    src={exp.logo}
                    alt={exp.company}
                    imageClassName={exp.logoImageClassName}
                  />
                  <span className="text-neutral-100 text-base font-medium transition-colors duration-150 group-hover:text-[#10b981]">
                    {exp.company}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#10b981] opacity-0 -translate-x-1 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                <h3 className="text-sm text-neutral-400">{exp.title}</h3>
              </div>
              <span className="font-mono text-xs text-neutral-500 sm:pt-1 shrink-0 transition-colors duration-150 group-hover:text-neutral-300">
                {exp.date}
              </span>
            </div>
            <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed transition-colors duration-150 group-hover:text-neutral-200">
              {exp.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
