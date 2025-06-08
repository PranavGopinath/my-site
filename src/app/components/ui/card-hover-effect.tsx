"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    skills: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 px-2 sm:px-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
        href={item?.link}
        passHref
        key={item?.link}
          target="_blank"
        rel="noopener noreferrer"
        className="relative group block p-1 sm:p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
          <div className="relative h-full w-full p-4 sm:p-6 rounded-xl">
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                  className="absolute inset-0 h-full w-full bg-[#33AFFF] block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
              <div className="mt-4">
            <CardDescription>{item?.skills}</CardDescription>
              </div>
          </Card>
        </div>
      </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-xl border border-transparent bg-black p-3 sm:p-5 group-hover:border-[#33AFFF]/50 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-1 sm:p-3">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white mb-2 sm:mb-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 sm:mt-4 text-sm sm:text-base text-zinc-400 tracking-wide leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
