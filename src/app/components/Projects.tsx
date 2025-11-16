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
      "A machine learning powered prediction mechanism for determining the impact of football transfers ⚽",
    skills: "Python, Scikit-learn, Next.js, FastAPI",
      link: "https://github.com/PranavGopinath/transfermation",
  },
  {
    title: "Spectra",
    description:
      "A centralized hub for your creative side, with personalized recs",
    skills: "Python, MiniLM-L6-v2, Llama 3.2, Next.js, FastAPI",
    link: "https://github.com/PranavGopinath/spectra",
  },
  {
    title: "Kaizen Journal",
    description:
      "A digital adaptation of the kaizen journal, designed to improve journalling experience 📘",
    skills:
    "Expo, React Native, Node.js, Supabase, Tailwind",
    link: "https://github.com/PranavGopinath/kaizen_journal",
  },
  {
    title: "TD Product Roadmap",
    description:
      "Placed 2nd overall at ProdCon 2024, UW PM's Product Management case competition 💡",
    skills: "Figma, Canva",
    link: "https://www.canva.com/design/DAGWT_gwqDw/fFQFIl1Lgz5zPF3H-IVB-Q/view?utm_content=DAGWT_gwqDw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1714a84309",
  },
  {
    title: "Estate Eagle",
    description:
      "A real-estate price forecasting app to stay on top of market trends 🏠",
    skills: "Next.js, Typescript, Node.js, Express, Tailwind", 
      link: "https://github.com/PranavGopinath/Estate-Eagle",
  },
  {
    title: "EduMe",
    description:
      "An educational assistant tailored for people with learning disabilities 📖",
    skills: "Python, OpenAI API, Streamlit",
      link: "https://github.com/PranavGopinath/edume-ai",
  },
  
];
