"use client";
import React, {useState, useEffect} from "react";
import { WavyBackground } from "./ui/wavy-background";
import { cn } from "@/lib/utils"
import { ChevronsDown} from 'lucide-react';
import { LuLinkedin } from "react-icons/lu";
export function Hero() {
  const [didScroll, setDidScroll] = useState<boolean>(false);

  useEffect(()=>{

    function handleScroll() {
      setDidScroll(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <div>
    <WavyBackground className="max-w-4xl h-full mx-auto pb-20 flex flex-col">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-sans text-center pt-60">
        Pranav Gopinath
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-sans text-center flex-grow">
        Full-stack Developer, Systems Design Engineering at Waterloo</p>
        <a
                  href="https://www.linkedin.com/in/pranav-gopinath-3a4769256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-150"
                ><LuLinkedin className='text-white'/></a>
    <div className={cn('flex justify-center flex-grow-0 flex-col items-center gap-2 top-4', didScroll && 'opacity-0 transition duration-300')}>
    <h3 className='text-white'>Dive in</h3>
    <ChevronsDown className='text-2xl text-white animate-bounce'/>
    </div>
    </WavyBackground>

    </div>
  );
}
