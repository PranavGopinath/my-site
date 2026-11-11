import Link from "next/link";
import { cn } from "@/lib/utils";

const lines = [
  "hey, i'm pranav!",
  "i'm currently working at until labs, on the data platform for cryopreserving organs.",
  "i just wrapped up my 3a term of syde, where i learned about systems modeling, thermo & more.",
  "i'm a puzzle solver, arsenal fan, and builder of things that matter to people.",
];

export const About = () => {
  return (
    <div
      id="about"
      className="pt-12 sm:pt-16 pb-8 w-full max-w-full relative flex flex-col overflow-x-hidden"
    >
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-full">
        {lines.map((line, index) => (
          <p
            key={index}
            className={cn(
              "text-neutral-300 text-base leading-relaxed break-words",
              index === 0 && "text-[#10b981] text-xl sm:text-2xl"
            )}
          >
            {line}
          </p>
        ))}
        <p className="text-neutral-300 text-base leading-relaxed break-words">
          take a look at my past{" "}
          <Link href="#experience" className="text-[#10b981] hover:underline">
            experience
          </Link>{" "}
          and{" "}
          <Link href="#projects" className="text-[#10b981] hover:underline">
            projects
          </Link>
        </p>
      </div>
    </div>
  );
};
