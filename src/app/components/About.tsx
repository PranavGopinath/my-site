import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { ChevronsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const lines = [
  "hey, welcome to my site!",
  "let's get acquainted.",
  "i'm currently working as a swe intern at huawei, followed by my 2b term of syde this fall.",
  "i'm a lifelong puzzle solver, arsenal fan, and one who loves building things that matter to people.",
  "wondering how i can contribute to your team?",
  "take a look at my past "
];

export const About = () => {
  const [didScroll, setDidScroll] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [isLastLineTyped, setIsLastLineTyped] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setDidScroll(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!didScroll) return;
    if (stepIndex < lines.length - 1) {
      const delay = lines[stepIndex].length * 30 + 300;
      const timer = setTimeout(() => {
        setStepIndex(stepIndex + 1);
        if (stepIndex === lines.length - 2) {
          setTimeout(() => setIsLastLineTyped(true), 1000);
        }
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [stepIndex, didScroll]);

  return (
    <div
      id="about"
      className="min-h-screen px-10 md:px-40 pt-10 md:pt-40 pb-10 md:pb-40 w-full relative flex flex-col"
    >
      <div className="items-start justify-start space-y-4">
        {lines.slice(0, stepIndex + 1).map((line, index) => (
          <div key={index} className={cn("text-white text-lg md:text-xl", index === 0 && "text-[#33AFFF] text-2xl md:text-4xl")}>
            {index === lines.length - 1 ? (
              <div className="inline-flex items-center">
                {!isLastLineTyped ? (
                  <Typewriter
                    words={[line]}
                    typeSpeed={25}
                    deleteSpeed={0}
                    cursor={false}
                  />
                ) : (
                  <>
                    <span>{line}</span>
                    <Link href="#experience" className="text-[#33AFFF] hover:underline ml-2">experience</Link>
                    <span className="text-white mx-2">and</span>
                    <Link href="#projects" className="text-[#33AFFF] hover:underline">projects</Link>
                    <span className="text-white">.</span>
                  </>
                )}
              </div>
            ) : (
              <Typewriter
                words={[line]}
                typeSpeed={25}
                deleteSpeed={0}
                cursor={false}
              />
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
