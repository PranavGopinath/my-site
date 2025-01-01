"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export function Hero() {
  return (
    <div>
    <WavyBackground className="max-w-4xl h-full mx-auto pb-40 flex flex-col">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center pt-60">
        Pranav Gopinath
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center flex-grow">
        Software Developer</p>
    <div className='flex justify-center flex-grow-0'>
    <MdKeyboardDoubleArrowDown className='text-xl text-white animate-bounce'/>
    </div>
    </WavyBackground>

    </div>
  );
}
