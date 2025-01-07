import Image from "next/image";
import { Timeline } from "./ui/timeline";
import MartinreaLogo from "@/public/martinrealogo.png";
import BlueprintLogo from "@/public/blueprintlogo.png";
import AllEquipLogo from "@/public/allequip.avif";

export const Experience = () => {
  const data = [
    {
      title: "Full Stack Developer",
      company: "Martinrea International",
      date: "Sep - Dec 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed and deployed a business decision making tool, connecting
            25+ corporate and plant teams across Martinrea with their desired
            data.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built a universal PLC communication app, enabling developers to
            connect their factory applications with any make/model of PLC.
          </p>
          <a
            href="https://www.martinrea.com"
            target="_blank"
            rel="noopener noreferrer"
            className="z-50 inline-block transition-transform duration-300 transform hover:scale-110"
          >
            <Image
              src={MartinreaLogo}
              alt="Martinrea"
              width={500}
              height={500}
              className="z-[100] rounded-lg object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      ),
    },
    {
      title: "VP Project Scoping + Software Developer",
      company: "UW Blueprint",
      date: "Sep 2024 - Present",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Partnering with non-profit organizations to build tech solutions,
            catalyzing efforts to drive social impact
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Driving initiatives in collaboration with Blueprint alumni to ensure
            sustainable re-use of delivered projects.{" "}
          </p>
          <div className="">
            <Image
              src={BlueprintLogo}
              alt="UW Blueprint"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Engineering Intern",
      company: "All Equip",
      date: "Jan - Apr 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Developed a fullstack application to digitize several manufacturing
            processes including quality inspection, progress oversight, and
            material stock management.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Configured an aluminum saw machine to automate raw material cutting,
            exceeding the company’s objective of dealing with a 43% increase in
            production demand.
          </p>

          <div className="">
            <Image
              src={AllEquipLogo}
              alt="All Equip"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div
      id="experience"
      className="px-40 pt-20 w-full relative flex flex-col items-start justify-start"
    >
      <h1 className="text-4xl relative z-20 text-[#33AFFF]">Experience</h1>
      <h3 className="text-lg text-white pt-4">
        places where i&apos;ve gained invaluable knowledge
      </h3>
      <Timeline data={data} />
    </div>
  );
};
