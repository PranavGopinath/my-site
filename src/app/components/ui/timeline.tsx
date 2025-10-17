"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  company: string;
  date: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black text-white dark:bg-neutral-950 font-san"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 sm:pt-16 md:pt-24 md:gap-10"
          >
              <div className="sticky flex flex-col md:flex-row z-40 items-start md:items-center top-20 md:top-32 self-start w-full md:max-w-xs lg:max-w-sm">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
              </div>
              <div className="h-10 w-10 absolute left-3 md:left-3 bg-neutral-800 flex items-center justify-center rounded-md shadow-sm">
                <div className="h-5 w-5 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-sm" />
              </div>
               <div className="flex flex-col pl-16 md:pl-20">
                 <h3 className="text-xl md:text-2xl font-bold text-neutral-300">
                 {item.title}
               </h3>
                <h3 className="text-lg md:text-xl font-bold text-neutral-400">
                {item.company}
              </h3>
                <h3 className="text-base md:text-lg font-bold text-neutral-500">
                {item.date}
              </h3>
              </div>
            </div>

            <div className="relative pl-16 md:pl-8 md:pr-8 w-full max-w-2xl">
              <div className="flex flex-col gap-4">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};