"use client";
import { useState } from "react";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V11z" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="6" width="18" height="14" rx="1.5" />
        <path d="M8 6V4h8v2" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 5h6l2 3h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    ),
  },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.55v14.5H.22V8zm7.5 0h4.36v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99v8.39h-4.55v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92v7.56H7.72V8z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.17a10.96 10.96 0 0 1 5.76 0c2.2-1.48 3.16-1.17 3.16-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14v3.18c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 7l9 7 9-7" />
  </svg>
);

interface SidebarProps {
  active: string;
  onNav: (id: string) => void;
}

export function Sidebar({ active, onNav }: SidebarProps) {
  const [hovered, setHovered] = useState(false);
  const expanded = hovered;

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-0 left-0 bottom-0 z-30 flex flex-col border-r border-[var(--line)] bg-[var(--surface)] transition-[width] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] hidden md:flex"
      style={{
        width: expanded ? 232 : 64,
        padding: "20px 12px",
      }}
    >
      {/* Identity */}
      <div className="flex items-center gap-2.5 px-1.5 pb-5 min-h-[40px]">
        <div
          className="w-7 h-7 flex-shrink-0 rounded-[7px] bg-[var(--ink)] text-[var(--bg)] grid place-items-center italic font-normal"
          style={{ fontFamily: "var(--font-main)", fontSize: 18 }}
        >
          p
        </div>
        <div
          className="whitespace-nowrap overflow-hidden transition-all duration-200"
          style={{
            opacity: expanded ? 1 : 0,
            transform: expanded ? "translateX(0)" : "translateX(-4px)",
          }}
        >
          <div className="italic text-[var(--ink)] leading-tight" style={{ fontFamily: "var(--font-main)", fontSize: 17 }}>
            Pranav Gopinath
          </div>
          <div className="text-[var(--muted)] mt-0.5 tracking-wide" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5 }}>
            SYDE &middot; Waterloo
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5">
        {navItems.map((n) => {
          const isActive = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className="flex items-center gap-3 px-2.5 py-2 rounded-lg border-none cursor-pointer text-left relative group transition-colors duration-150"
              style={{
                background: isActive ? "var(--bg)" : "transparent",
                color: isActive ? "var(--ink)" : "var(--muted)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".02em",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = "var(--muted)";
              }}
            >
              <span className="flex-shrink-0 grid place-items-center w-4 h-4">{n.icon}</span>
              <span
                className="whitespace-nowrap transition-opacity duration-200"
                style={{ opacity: expanded ? 1 : 0 }}
              >
                {n.label}
              </span>
              {isActive && (
                <span
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-[18px] bg-[var(--accent)] rounded-sm"
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Socials */}
      <div className="border-t border-[var(--line)] pt-3.5 flex flex-col gap-2">
        <a
          href="https://www.linkedin.com/in/pranavgo/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-2.5 py-1.5 text-[var(--muted)] no-underline hover:text-[var(--ink)] transition-colors duration-150"
          style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}
        >
          <span className="flex-shrink-0 w-4 grid place-items-center"><LinkedInIcon /></span>
          <span className="transition-opacity duration-200" style={{ opacity: expanded ? 1 : 0 }}>LinkedIn</span>
        </a>
        <a
          href="https://www.github.com/PranavGopinath"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-2.5 py-1.5 text-[var(--muted)] no-underline hover:text-[var(--ink)] transition-colors duration-150"
          style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}
        >
          <span className="flex-shrink-0 w-4 grid place-items-center"><GitHubIcon /></span>
          <span className="transition-opacity duration-200" style={{ opacity: expanded ? 1 : 0 }}>GitHub</span>
        </a>
        <a
          href="mailto:p3gopina@uwaterloo.ca"
          className="flex items-center gap-3 px-2.5 py-1.5 text-[var(--muted)] no-underline hover:text-[var(--ink)] transition-colors duration-150"
          style={{ fontFamily: "var(--font-mono)", fontSize: 11.5 }}
        >
          <span className="flex-shrink-0 w-4 grid place-items-center"><MailIcon /></span>
          <span className="transition-opacity duration-200" style={{ opacity: expanded ? 1 : 0 }}>Email</span>
        </a>
      </div>
    </aside>
  );
}
