import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ChevronsDown } from "lucide-react";
import { cn } from '@/lib/utils';

export const About = () => {
  const [didScroll, setDidScroll] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);
  const [showSixth, setShowSixth] = useState(false);
  const [showSeventh, setShowSeventh] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setDidScroll(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (showSeventh) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [showSeventh]);

  useEffect(() => {
    if (didScroll) {
      const delay = 600; // Delay in milliseconds

      const timer1 = setTimeout(() => setShowFirst(true), delay);
      const timer2 = setTimeout(() => setShowSecond(true), 2000);
      const timer3 = setTimeout(() => setShowThird(true), 3500);
      const timer4 = setTimeout(() => setShowFourth(true), 5500);
      const timer5 = setTimeout(() => setShowFifth(true), 7500);
      const timer6 = setTimeout(() => setShowSixth(true), 9500);
      const timer7 = setTimeout(() => setShowSeventh(true), 12500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
      };
    }
  }, [didScroll]);

  return (
    <div
      id="about"
      className="min-h-screen px-10 md:px-40 pt-10 md:pt-40 pb-10 md:pb-40 w-full relative flex flex-col"
    >
      <div className="items-start justify-start">
        {showFirst && (
          <TextGenerateEffect
            words={"Hey, welcome to my site!"}
            className="text-2xl md:text-4xl relative z-20 text-[#33AFFF]"
          />
        )}
        {showSecond && (
          <TextGenerateEffect
            words={"let's get acquainted."}
            className="text-lg md:text-xl text-white pt-4"
          />
        )}
        {showThird && (
          <TextGenerateEffect
            words={"i'm a lifelong problem solver, looking to innovate around constraints."}
            className="text-lg md:text-xl text-white pt-4"
          />
        )}
        {showFourth && (
          <TextGenerateEffect
            words={
              "i'm passionate about building meaningful products through my efforts."
            }
            className="text-lg md:text-xl text-white pt-4"
          />
        )}
        {showFifth && (
          <TextGenerateEffect
            words={"wondering how i can contribute to your team?"}
            className="text-lg md:text-xl text-white pt-4"
          />
        )}
        {showSixth && (
          <TextGenerateEffect
            words={"feel free to take a look at my work and experience."}
            className="text-lg md:text-xl text-white pt-4"
          />
        )}
      </div>
      {showSeventh && 
      <div
          className={cn(
            "flex justify-center items-center gap-2 pt-4 md:pt-16",
            didScroll && "opacity-0 transition duration-300"
          )}
        >
          <ChevronsDown className="text-xl md:text-2xl text-white animate-bounce" />
        </div>
      }
    </div>
  );
};
