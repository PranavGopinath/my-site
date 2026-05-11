"use client";
import { SectionHeader } from "./SectionHeader";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const projects = [
  {
    title: "Transfermation",
    line: "ML-powered prediction of football transfer impact.",
    stack: "Python · Scikit-learn · Next.js · FastAPI",
    link: "https://transfermation.vercel.app",
  },
  {
    title: "Spectra",
    line: "A centralized hub for your creative side, with personalized recs.",
    stack: "Python · MiniLM · TypeScript · FastAPI",
    link: "https://spectra-ebon.vercel.app",
  },
  {
    title: "Kaizen Journal",
    line: "A digital adaptation of the kaizen journal.",
    stack: "Expo · React Native · Supabase",
    link: "https://github.com/PranavGopinath/kaizen_journal",
  },
  {
    title: "TD Product Roadmap",
    line: "2nd place at ProdCon 2024 — UW PM's case competition.",
    stack: "Figma · Canva",
    link: "https://www.canva.com/design/DAGWT_gwqDw/fFQFIl1Lgz5zPF3H-IVB-Q/view",
  },
  {
    title: "Estate Eagle",
    line: "Real-estate price forecasting to track market trends.",
    stack: "Next.js · TypeScript · Express",
    link: "https://github.com/PranavGopinath/Estate-Eagle",
  },
  {
    title: "EduMe",
    line: "An educational assistant for people with learning disabilities.",
    stack: "Python · OpenAI · Streamlit",
    link: "https://github.com/PranavGopinath/edume-ai",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <SectionHeader num="03" label="Projects" title="Spare hours, well spent" />
      <div>
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[1fr] md:grid-cols-[60px_1fr_1fr_32px] gap-3 md:gap-6 items-center no-underline text-inherit border-t border-[var(--line)] relative overflow-hidden transition-[padding,background] duration-200 ease-[cubic-bezier(.2,.8,.2,1)] hover:px-6 hover:bg-[var(--surface)] group py-[22px] px-1"
          >
            <span
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: ".08em",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              style={{
                fontFamily: "var(--font-main)",
                fontSize: 20,
                color: "var(--ink)",
                fontWeight: 500,
                letterSpacing: "-.015em",
              }}
            >
              <span className="transition-colors duration-200 group-hover:italic group-hover:text-[var(--accent)]">
                {p.title}
              </span>
              <div
                className="mt-1 font-normal"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--muted)",
                  letterSpacing: ".01em",
                }}
              >
                {p.line}
              </div>
            </div>
            <div
              className="hidden md:block text-right"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: ".04em",
              }}
            >
              {p.stack}
            </div>
            <div className="hidden md:block text-[var(--muted)]">
              <ArrowIcon />
            </div>
          </a>
        ))}
        <div className="border-t border-[var(--line)]" />
      </div>
    </section>
  );
}
