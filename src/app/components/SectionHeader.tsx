interface SectionHeaderProps {
  num: string;
  label: string;
  title: string;
}

export function SectionHeader({ num, label, title }: SectionHeaderProps) {
  return (
    <div
      className="flex items-baseline gap-6 mb-12 pb-[18px] border-b border-[var(--line)]"
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: ".14em",
        }}
      >
        {num}
      </span>
      <span
        className="uppercase"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: ".14em",
        }}
      >
        {label}
      </span>
      <span className="flex-1" />
      <span
        className="italic"
        style={{
          fontFamily: "var(--font-main)",
          fontSize: 22,
          color: "var(--ink)",
          letterSpacing: ".005em",
        }}
      >
        {title}
      </span>
    </div>
  );
}
