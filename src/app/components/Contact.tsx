"use client";
import { SectionHeader } from "./SectionHeader";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const contactLinks = [
  {
    label: "Email",
    value: "p3gopina@uwaterloo.ca",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent("pranavgopinath1209@gmail.com")}&su=${encodeURIComponent("Project Inquiry")}`,
  },
  {
    label: "LinkedIn",
    value: "@pranavgo",
    href: "https://www.linkedin.com/in/pranavgo/",
  },
  {
    label: "GitHub",
    value: "@PranavGopinath",
    href: "https://www.github.com/PranavGopinath",
  },
  {
    label: "Resume",
    value: "PDF, 1 page",
    href: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" style={{ padding: "120px 0 80px" }}>
      <SectionHeader num="04" label="Contact" title="Say hello" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-start">
        <div>
          <h2
            className="m-0 font-normal"
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: 1.0,
              color: "var(--ink)",
              letterSpacing: "-.015em",
            }}
          >
            Looking to{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              collaborate?
            </span>
          </h2>
          <p
            className="mt-6 max-w-[380px] font-normal"
            style={{
              fontFamily: "var(--font-main)",
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            Whether it&apos;s a recruiter ping, a project idea, or just a hello
            — my inbox is open and I reply within a day.
          </p>
        </div>
        <div className="flex flex-col border-t border-[var(--line)]">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 border-b border-[var(--line)] no-underline text-inherit transition-[padding] duration-200 hover:px-3"
              style={{ padding: "22px 4px" }}
            >
              <span
                className="uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: ".12em",
                }}
              >
                {c.label}
              </span>
              <span className="flex items-center gap-3">
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: 22,
                    color: "var(--ink)",
                  }}
                >
                  {c.value}
                </span>
                <span className="text-[var(--muted)]">
                  <ArrowIcon />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div
        className="mt-[120px] pt-6 border-t border-[var(--line)] flex justify-between"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          color: "var(--muted)",
          letterSpacing: ".06em",
        }}
      >
        <span>&copy; 2026 Pranav Gopinath</span>
        <span>Built with care &middot; Waterloo, ON</span>
      </div>
    </section>
  );
};
