"use client";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Huawei",
    date: "May — Aug 2025",
    line: "Dynamic identity authentication for mobile devices.",
    logo: "/huawei-logo.png",
    url: "https://www.huawei.com/en/",
    stack: ["C++", "HarmonyOS", "Python", "Java"],
  },
  {
    role: "Full Stack Developer",
    company: "Martinrea",
    date: "Sep — Dec 2024",
    line: "Business decision tool connecting 50+ corporate and plant teams. Built a universal PLC communication app.",
    logo: "/martinrea-logo.png",
    url: "https://www.martinrea.com",
    stack: ["React", "Django", "Python", "C++"],
  },
  {
    role: "Software Dev · VP Project Scoping",
    company: "UW Blueprint",
    date: "Sep 2024 — Present",
    line: "Gamified task system for Marillac Place; route generation app for Food4Kids (4000+ children).",
    logo: "/blueprint-logo.png",
    url: "https://www.uwblueprint.org",
    stack: ["Node.js", "TypeScript", "GraphQL", "Postgres"],
  },
  {
    role: "Engineering Intern",
    company: "All Equip",
    date: "Jan — Apr 2024",
    line: "Full-stack apps to digitize manufacturing — quality, oversight, stock.",
    logo: "/allequip-logo.png",
    url: "https://www.allequiprepair.ca/",
    stack: ["Next.js", "MongoDB", "Node.js", "Figma"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" style={{ padding: "100px 0" }}>
      <SectionHeader num="02" label="Experience" title="Where I've been" />
      <div className="flex flex-col">
        {experience.map((e, i) => (
          <a
            key={i}
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:grid md:grid-cols-[160px_1fr_auto] gap-2 md:gap-8 items-start no-underline text-inherit border-t border-[var(--line)] transition-colors duration-150 hover:bg-[var(--surface)] py-7 px-1"
          >
            <div
              className="pt-0 md:pt-[5px]"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: ".06em",
              }}
            >
              {e.date}
            </div>
            <div>
              <div className="flex items-center gap-3.5 mb-1.5">
                <Image
                  src={e.logo}
                  alt={e.company}
                  width={80}
                  height={18}
                  className="h-[18px] w-auto max-w-[80px] object-contain opacity-[0.85]"
                  style={{ filter: "saturate(0) brightness(1.2) invert(0.85)" }}
                />
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: 20,
                    color: "var(--ink)",
                  }}
                >
                  {e.company}
                </span>
              </div>
              <div
                className="mb-2"
                style={{
                  fontFamily: "var(--font-main)",
                  fontSize: 20,
                  color: "var(--ink)",
                  fontWeight: 500,
                  letterSpacing: "-.015em",
                }}
              >
                {e.role}
              </div>
              <div
                className="max-w-[560px]"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12.5,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                {e.line}
              </div>
              <div className="flex gap-1.5 flex-wrap mt-3.5">
                {e.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-[var(--line)] rounded-full"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      color: "var(--muted)",
                      padding: "3px 9px",
                      letterSpacing: ".02em",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-[var(--muted)] pt-1.5 hidden md:block">
              <ArrowIcon />
            </div>
          </a>
        ))}
        <div className="border-t border-[var(--line)]" />
      </div>
    </section>
  );
};
