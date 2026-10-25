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
        "grid grid-cols-1 sm:grid-cols-2 gap-1 py-6 -mx-[13px] w-[calc(100%+26px)]",
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
        className="relative group block w-full"
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
          <div className="relative w-full p-px rounded-xl">
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                  className="absolute inset-0 h-full w-full bg-[#10b981] block rounded-xl"
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
              <div className="mt-3">
            <CardDescription className="font-mono text-xs text-zinc-500">{item?.skills}</CardDescription>
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
        "relative z-20 w-full overflow-hidden rounded-xl border border-transparent bg-black p-3 group-hover:border-[#10b981]/50 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
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
    <h4 className={cn("text-base w-full font-medium text-white", className)}>
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
        "mt-1 w-full text-sm text-zinc-400 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
