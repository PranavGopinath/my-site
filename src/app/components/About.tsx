"use client";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <SectionHeader num="01" label="About" title="A note" />
      <div
        className="max-w-[680px] font-light"
        style={{
          fontFamily: "var(--font-main)",
          fontSize: 20,
          lineHeight: 1.55,
          color: "var(--ink)",
          letterSpacing: "-.005em",
        }}
      >
        <p className="mb-5 mt-0">
          Hey — welcome. I just wrapped a software engineering internship at{" "}
          <em>Huawei</em>, building dynamic identity authentication for mobile
          devices.
        </p>
        <p className="mb-5 mt-0">
          I&apos;m now in my 2B term of <em>Systems Design</em> at Waterloo —
          linear systems, signals, statistics, modelling — and looking for what
          comes next.
        </p>
        <p className="m-0" style={{ color: "var(--muted)" }}>
          Wondering how I might contribute? Take a look at what I&apos;ve
          shipped.
        </p>
      </div>
    </section>
  );
};
