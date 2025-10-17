import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { cn } from "@/lib/utils";
import Link from "next/link";

const lines = [
  "hey, welcome to my site!",
  "i'm currently working as a swe intern at huawei, followed by my 2b term of syde this fall.",
  "i'm a lifelong puzzle solver, arsenal fan, and one who loves building things that matter to people.",
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
      className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-40 pt-12 sm:pt-16 md:pt-32 pb-10 md:pb-40 w-full max-w-full relative flex flex-col overflow-x-hidden"
    >
      <div className="items-start justify-start space-y-2 sm:space-y-3 md:space-y-4 max-w-full">
        {lines.slice(0, stepIndex + 1).map((line, index) => (
          <div key={index} className={cn(
            "text-white text-sm sm:text-base md:text-lg lg:text-xl break-words", 
            index === 0 && "text-[#33AFFF] text-lg sm:text-xl md:text-2xl lg:text-4xl"
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
                    <Link href="#experience" className="text-[#33AFFF] hover:underline">experience</Link>
                    <span className="text-white">and</span>
                    <Link href="#projects" className="text-[#33AFFF] hover:underline">projects</Link>
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
            className="text-[#33AFFF] text-sm hover:underline opacity-50 hover:opacity-100 transition-opacity"
          >
            Skip typing
          </button>
        </div>
      )}
    </div>
  );
};
