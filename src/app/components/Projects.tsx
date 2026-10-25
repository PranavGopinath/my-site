import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div id="projects" className="pt-24 sm:pt-32 w-full">
      <h1 className='text-[#10b981] text-xl sm:text-2xl font-medium tracking-tight'>Projects</h1>
      <h3 className='text-neutral-400 text-sm sm:text-base pt-2'>cool things i&apos;ve worked on in my spare time </h3>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Spectra",
    description:
      "A hub for your creative side, with personalized recs 📺",
    skills: "Python, Typescript, Next.js, FastAPI",
    link: "https://spectra-ebon.vercel.app",
  },
  {
    title: "Gladiator",
    description:
      "An arena where AI models fight it out ⚔️",
    skills: "Python, Docker, JavaScript, Supabase",
    link: "https://github.com/PranavGopinath/gladiator",
  },
  {
    title: "Transfermation",
    description:
      "An ML prediction engine for football transfer impact ⚽",
    skills: "Python, Scikit-learn, XGBoost",
      link: "https://transfermation.vercel.app",
  },
  {
    title: "Kaizen Journal",
    description:
      "A digital version of the kaizen journal 📘",
    skills:
    "React Native, Node.js, Supabase",
    link: "https://github.com/PranavGopinath/kaizen_journal",
  },
  {
    title: "TD Product Roadmap",
    description:
      "2nd place at ProdCon, UW PM's case competition 💡",
    skills: "Figma, Canva",
    link: "https://www.canva.com/design/DAGWT_gwqDw/fFQFIl1Lgz5zPF3H-IVB-Q/view?utm_content=DAGWT_gwqDw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1714a84309",
  },
  {
    title: "Estate Eagle",
    description:
      "A real-estate price forecasting app 🏠",
    skills: "Next.js, Typescript, Node.js, Express", 
      link: "https://github.com/PranavGopinath/Estate-Eagle",
  },
  
];
