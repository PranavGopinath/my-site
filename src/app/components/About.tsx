"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ChevronsDown } from "lucide-react";
import {cn} from '@/lib/utils'
export const About = () => {
  const [didScroll, setDidScroll] = useState<boolean>(false);

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
    if (showSeventh) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showSeventh]);
  useEffect(() => {
    const delay = 600; // Delay in milliseconds

    const timer1 = setTimeout(() => setShowFirst(true), delay);
    const timer2 = setTimeout(() => setShowSecond(true), 2000);
    const timer3 = setTimeout(() => setShowThird(true), 4000);
    const timer4 = setTimeout(() => setShowFourth(true), 6000);
    const timer5 = setTimeout(() => setShowFifth(true), 8000);
    const timer6 = setTimeout(() => setShowSixth(true), 10000);
    const timer7 = setTimeout(() => setShowSeventh(true), 13000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  return (
    <div
      id="about"
      className="min-h-dvh px-40 pt-40 pb-40 w-full relative flex flex-col"
    >
      <div className="items-start justify-start">
      {showFirst && (
        <TextGenerateEffect
          words={"Hey, welcome to my site!"}
          className="text-4xl relative z-20 text-[#33AFFF]"
        />
      )}
      {showSecond && (
        <TextGenerateEffect
          words={"let's get acquainted."}
          className="text-lg text-white pt-4"
        />
      )}
      {showThird && (
        <TextGenerateEffect
          words={"i'm a problem solver, always looking to innovate through constraints."}
          className="text-lg text-white pt-4"
        />
      )}
      {showFourth && (
        <TextGenerateEffect
          words={
            "i'm passionate about building meaningful products through my efforts."
          }
          className="text-lg text-white pt-4"
        />
      )}
      {showFifth && (
        <TextGenerateEffect
          words={"wondering how i can contribute to your team?"}
          className="text-lg text-white pt-4"
        />
      )}
      {showSixth && (
        <TextGenerateEffect
          words={"feel free to take a look at my work and experience."}
          className="text-lg text-white pt-4"
        />
      )}
      </div>
      {showSeventh && 
      <div
          className={cn(
            "flex justify-center flex-grow-0 flex-col items-center gap-2 pt-16",
            didScroll && "opacity-0 transition duration-300"
          )}
        >
          <ChevronsDown className="text-2xl text-white animate-bounce" />
        </div>
}
    </div>
  );
};
