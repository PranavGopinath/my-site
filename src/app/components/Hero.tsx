"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AsciiPhotoGrid } from "./ui/ascii-photo-grid";
import Coast from "@/public/gallery/coast.webp";
import Stadium from "@/public/gallery/stadium.webp";
import Jerseys from "@/public/gallery/jerseys.webp";
import Trail from "@/public/gallery/trail.webp";
import Tree from "@/public/gallery/tree.webp";
import Library from "@/public/gallery/library.webp";
import Ski from "@/public/gallery/ski.webp";
import Valley from "@/public/gallery/valley.webp";

const gallery = [
  { src: Valley, alt: "Hiking selfie above a valley" },
  { src: Coast, alt: "Standing on a sea rock at sunset" },
  { src: Library, alt: "Reading in the library stacks with friends" },
  { src: Stadium, alt: "Pitchside at a World Cup match" },
  { src: Tree, alt: "Sitting on a tree branch" },
  { src: Jerseys, alt: "Three friends in basketball and football jerseys" },
  { src: Ski, alt: "Ski selfie at the top of a run" },
  { src: Trail, alt: "Looking out over a valley on a hike" },
];

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
    <div
      id="home"
      className="relative w-full min-h-[calc(100svh-4rem)] pt-32 sm:pt-40 md:pt-48 pb-12 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-3 max-w-xl">
        <h1 className="text-2xl sm:text-3xl text-white tracking-tight">
          Pranav Gopinath
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
          <a
            href="https://www.sydewebring.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#10b981] hover:underline underline-offset-4"
          >
            Systems Design Engineer
          </a>
          &nbsp;at Waterloo
        </p>
        <div className="flex items-center gap-4 pt-1">
          <a
            href="https://www.linkedin.com/in/pranavgo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-[#10b981] transition-colors"
          >
            <FaLinkedin className="text-base" />
          </a>
          <a
            href="https://www.github.com/PranavGopinath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 hover:text-[#10b981] transition-colors"
          >
            <FaGithub className="text-base" />
          </a>
        </div>
      </div>

      <AsciiPhotoGrid images={gallery} className="mt-10 sm:mt-12 mb-10" />

      <div
        className={cn(
          "flex items-center gap-2 text-xs text-neutral-500 transition-opacity duration-300",
          didScroll && "opacity-0"
        )}
      >
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        <span>scroll</span>
      </div>
    </div>
  );
}
