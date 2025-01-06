import Image from "next/image";
import { Timeline } from "./ui/timeline";
import MartinreaLogo from '@/public/martinrealogo.png'
import BlueprintLogo from '@/public/blueprintlogo.png'
import AllEquipLogo from '@/public/allequip.avif'

export const Experience = () => {
  const data = [
    {
      title: "Full Stack Developer",
      company: "Martinrea International",
      date: "Sep - Dec 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed and launched a business decision making tool, connecting plants across 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={MartinreaLogo}
              alt="startup template"
              width={800}
              height={800}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
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
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={BlueprintLogo}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Engineering Intern",
      company:"All Equip",
      date: "Jan - Apr 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={AllEquipLogo}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="experience" className="px-40 pt-20 w-full relative flex flex-col items-start justify-start">
      <h1 className="text-4xl relative z-20 text-white">Experience</h1>
      <h3 className="text-lg text-white pt-4">places i've applied my technical skillset to yield meaningful results</h3>
      <Timeline data={data} />

    </div>
    
  );
};
