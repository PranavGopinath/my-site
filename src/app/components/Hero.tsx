"use client";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[88vh] flex flex-col justify-center"
      style={{ padding: "120px 0 80px" }}
    >
      <div
        className="mb-9 flex items-center"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11.5,
          color: "var(--muted)",
          letterSpacing: ".14em",
          textTransform: "uppercase",
        }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full mr-2.5 align-middle"
          style={{ background: "var(--accent)" }}
        />
        Available for Summer 2026
      </div>
      <h1
        className="m-0 font-normal"
        style={{
          fontFamily: "var(--font-main)",
          fontSize: "clamp(64px, 9vw, 124px)",
          lineHeight: 0.95,
          letterSpacing: "-.02em",
          color: "var(--ink)",
        }}
      >
        Pranav
        <br />
        <span className="italic" style={{ color: "var(--accent)" }}>
          Gopinath.
        </span>
      </h1>
      <p
        className="mt-8 max-w-[540px]"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.7,
        }}
      >
        Systems Design Engineer at Waterloo. Lifelong puzzle-solver, Arsenal
        fan, and builder of things that matter to people.
      </p>
    </section>
  );
}
