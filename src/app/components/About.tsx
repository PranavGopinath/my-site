"use client";
import React from "react";

export const About = () => {
  return (
    <div className="h-[50rem] w-full relative flex flex-col items-start justify-start">
      {/* Radial gradient for the container to give a faded look */}
      <h1 className="text-4xl font-bold relative z-20 text-white">hey, it's nice to meet you!</h1>
      <h3 className="text-lg text-white pt-4">welcome to my site.</h3>
      <h3 className="text-lg text-white pt-4">
        i'm a second year at waterloo studying systems design engineering.
      </h3>
      <h3 className="text-lg text-white pt-4">
        i'm passionate about building creative solutions to complex technical
        problems.
      </h3>
      <h3 className="text-lg text-white pt-4">
        feel free to take a look at my past work and experience
      </h3>
    </div>
    
  );
};
