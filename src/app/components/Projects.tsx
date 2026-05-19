import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 pt-32 sm:pt-40 md:pt-52 w-full">
      <h1 id="projects" className='text-[#10b981] text-2xl sm:text-3xl md:text-4xl'>Projects</h1>
      <h3 className='text-white text-base sm:text-lg pt-2 sm:pt-4'>cool things i&apos;ve worked on in my spare time </h3>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Mini-Spec-IR",
    description:
      "Inference runtime built from scratch",
    skills: "Pytorch, Python",
      link: "https://github.com/PranavGopinath/mini-spec-ir",
  },
  {
    title: "Transfermation",
    description:
      "An ML prediction engine for football transfer impact ⚽",
    skills: "Python, Scikit-learn, XGBoost",
      link: "https://transfermation.vercel.app",
  },
  {
    title: "Spectra",
    description:
      "A hub for your creative side, with personalized recs 📺",
    skills: "Python, Typescript, Next.js, FastAPI",
    link: "https://spectra-ebon.vercel.app",
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
