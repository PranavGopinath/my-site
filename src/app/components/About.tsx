import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { cn } from "@/lib/utils";
import Link from "next/link";

const lines = [
  "hey, i'm pranav!",
  "i recently interned at until labs where I worked on the data platform for freezing organs.",
  "i'm now in my 3a term of syde, learning about systems modeling, thermodynamics & more.",
  "i'm a lifelong puzzle solver, arsenal fan, and builder of things that matter to people.",
  "wondering how i can contribute to your team?",
  "take a look at my past "
];

export const About = () => {
  const [didScroll, setDidScroll] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [isLastLineTyped, setIsLastLineTyped] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setDidScroll(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!didScroll || isSkipping) return;
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
  }, [stepIndex, didScroll, isSkipping]);

  const handleSkip = () => {
    setIsSkipping(true);
    setStepIndex(lines.length - 1);
    setIsLastLineTyped(true);
  };

  return (
    <div
      id="about"
      className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-40 pt-12 sm:pt-16 md:pt-32 pb-8 w-full max-w-full relative flex flex-col overflow-x-hidden"
    >
      <div className="items-start justify-start space-y-2 sm:space-y-3 md:space-y-4 max-w-full">
        {lines.slice(0, stepIndex + 1).map((line, index) => (
          <div key={index} className={cn(
            "text-white text-sm sm:text-base md:text-lg lg:text-xl break-words", 
            index === 0 && "text-[#10b981] text-lg sm:text-xl md:text-2xl lg:text-4xl"
          )}>
            {index === lines.length - 1 ? (
              <div className="inline-flex items-center flex-wrap gap-2">
                {!isLastLineTyped ? (
                  <Typewriter
                    words={[line]}
                    typeSpeed={isSkipping ? 0 : 25}
                    deleteSpeed={0}
                    cursor={false}
                  />
                ) : (
                  <>
                    <span>{line}</span>
                    <Link href="#experience" className="text-[#10b981] hover:underline">experience</Link>
                    <span className="text-white">and</span>
                    <Link href="#projects" className="text-[#10b981] hover:underline">projects</Link>
                  </>
                )}
              </div>
            ) : (
              isSkipping ? (
                <span>{line}</span>
              ) : (
                <Typewriter
                  words={[line]}
                  typeSpeed={25}
                  deleteSpeed={0}
                  cursor={false}
                />
              )
            )}
          </div>
        ))}
      </div>
      {stepIndex > 0 && stepIndex < lines.length - 1 && !isLastLineTyped && !isSkipping && (
        <div className="absolute bottom-20 justify-start transform">
          <button
            onClick={handleSkip}
            className="text-[#10b981] text-sm hover:underline opacity-50 hover:opacity-100 transition-opacity"
          >
            Skip typing
          </button>
        </div>
      )}
    </div>
  );
};
