import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 pt-24 sm:pt-32 md:pt-48 w-full">
      <h1 id="projects" className='text-[#33AFFF] text-2xl sm:text-3xl md:text-4xl'>Projects</h1>
      <h3 className='text-white text-base sm:text-lg pt-2 sm:pt-4'>cool things i&apos;ve worked on in my spare time </h3>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Transfermation",
    description:
      "A machine learning powered prediction mechanism for determining the impact of hypothetical football transfers ⚽",
    skills: "Python, Scikit-learn, Next.js, FastAPI",
      link: "https://github.com/PranavGopinath/transfermation",
  },
  {
    title: "Kaizen Journal",
    description:
      "A digital adaptation of a self-improvement journal, with personalized touches to improve journalling experience 📘",
    skills:
    "Expo, React Native, Node.js, Supabase, TailwindCSS",
    link: "https://github.com/PranavGopinath/kaizen_journal",
  },
  {
    title: "TD Immersive Learning",
    description:
      "Placed 2nd overall at ProdCon 2024, UW PM's Product Management case competition 💡",
    skills: "Figma, Canva",
    link: "https://www.canva.com/design/DAGWT_gwqDw/fFQFIl1Lgz5zPF3H-IVB-Q/view?utm_content=DAGWT_gwqDw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1714a84309",
  },
  {
    title: "GoosePeek",
    description:
      "A browser extension designed to boost user productivity 🪿",
    skills: "React, Cohere API, Javascript",
    link: "https://github.com/PranavGopinath/GoosePeek",
  },
  {
    title: "Self Balancing Robot",
    description:
      "An arduino-powered robot, detecting changes in motion and counteracting them to wobble on 🤖",
    skills: "C++, Arduino",
      link: "https://github.com/PranavGopinath/Franko/tree/master",
  },
  {
    title: "Estate Eagle",
    description:
      "A real-estate price forecasting application to help homebuyers stay on top of market trends 🏠",
    skills: "Next.js, Typescript, Node.js, Express.js, TailwindCSS", 
      link: "https://github.com/PranavGopinath/Estate-Eagle",
  },
];
