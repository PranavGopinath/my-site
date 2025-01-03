import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8">
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
    skills: "Figma",
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
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    skills: "Python, Streamlit, OpenAI API",
      link: "https://github.com/PranavGopinath/edume-ai",
  },
  {
    title: "Self Balancing Robot",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
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
