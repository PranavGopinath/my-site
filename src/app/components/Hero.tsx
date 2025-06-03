"use client";
import React, { useState, useEffect } from "react";
// import { WavyBackground } from "./ui/wavy-background";
import { cn } from "@/lib/utils";
import { ChevronsDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const [didScroll, setDidScroll] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setDidScroll(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home" className="relative w-full">
        <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col items-center">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-sans text-center pt-60">
            Pranav Gopinath
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-sans text-center pb-4">
            Full Stack Developer, Systems Design Engineering at Waterloo
          </p>
          <div className="text-center gap-6 flex justify-center mb-20">
            <a
              href="https://www.linkedin.com/in/pranavgo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 transform hover:scale-125"
            >
              <FaLinkedin className="text-lg text-white" />
            </a>
            <a
              href="https://www.github.com/PranavGopinath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 transform hover:scale-125"
            >
              <FaGithub className="text-lg text-white" />
            </a>
          </div>
          <div
            className={cn(
              "flex justify-center flex-grow-0 flex-col items-center gap-2",
              didScroll && "opacity-0 transition duration-300"
            )}
          >
            <h3 className="text-white">Dive in</h3>
            <ChevronsDown className="text-2xl text-white animate-bounce" />
          </div>
        </div>
    </div>
  );
}

