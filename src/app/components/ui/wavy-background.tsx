import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  fullWidth?: boolean;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors = ["#001F3F", "#0047AB", "#007BFF", "#33AFFF", "#7FDBFF"], // Default vibrant colors
  waveWidth,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  fullWidth = true,
  ...props
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null;

  const getSpeed = (): number => {
    return speed === "slow" ? 0.001 : 0.002;
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      if (ctx) ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener('resize', handleResize);
    render();

    // Return cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  const drawWave = (n: number): void => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = colors[i % colors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = (): void => {
    if (!ctx) return;
    ctx.fillStyle = backgroundFill;
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    const cleanup = init();
    return () => {
      if (cleanup) cleanup();
      cancelAnimationFrame(animationId);
    };
  }, [fullWidth]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative h-screen",
        fullWidth ? "w-screen" : "w-full",
        className
      )}
      {...props}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
          width: "100%",
          height: "100%",
        }}
      />
      <div className={cn("relative z-10 h-full", containerClassName)}>{children}</div>
    </div>
  );
};
