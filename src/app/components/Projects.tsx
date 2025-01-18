import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="px-40 pt-48">
      <h1 id ="projects" className='text-[#33AFFF] text-4xl pt-48'>Projects</h1>
      <h3 className='text-white text-lg pt-4'>cool things i&apos;ve worked on in my spare time </h3>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Kaizen Journal",
    description:
      "A digital adaptation of a self-improvement journal, with personalized touches to improve journalling experience",
    skills:
    "Expo, React Native, Node.js, Supabase, TailwindCSS",
    link: "https://github.com/PranavGopinath/kaizen_journal",
  },
  {
    title: "TD Immersive Learning",
    description:
      "Placed 2nd overall at ProdCon 2024, UW PM's Product Management case competition. ",
    skills: "Figma, Canva",
    link: "https://www.canva.com/design/DAGWT_gwqDw/fFQFIl1Lgz5zPF3H-IVB-Q/view?utm_content=DAGWT_gwqDw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1714a84309",
  },
  {
    title: "GoosePeek",
    description:
      "A browser extension designed to boost user productivity",
    skills: "React, Cohere API, Javascript",
    link: "https://github.com/PranavGopinath/GoosePeek",
  },
  {
    title: "EduMe",
    description:
      "A platform tailored towards bridging disparities for individuals with learning disabilities.",
    skills: "Python, Streamlit, OpenAI API",
      link: "https://github.com/PranavGopinath/edume-ai",
  },
  {
    title: "Self Balancing Robot",
    description:
      "An arduino-powered robot, detecting changes in motion and counteracting them to wobble on.",
    skills: "C++, Arduino",
      link: "https://github.com/PranavGopinath/Franko/tree/master",
  },
  {
    title: "Estate Eagle",
    description:
      "A real-estate price forecasting application to help homebuyers stay on top of market trends.",
    skills: "Next.js, Typescript, Node.js, Express.js, TailwindCSS", 
      link: "https://github.com/PranavGopinath/Estate-Eagle",
  },
];
