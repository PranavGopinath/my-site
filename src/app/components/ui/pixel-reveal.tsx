"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

const CELL = 14; // css px per "pixel"
const RADIUS = 26; // reveal brush radius in css px
const FADE_MS = 140; // how long one cell takes to clear or cover
const STAGGER_MS = 110; // random delay per cell so the brush feels pixelated
const COVER = "#000"; // matches the page background so hidden tiles are invisible

type Grid = {
  cols: number;
  rows: number;
  value: Float32Array; // 1 = covered, 0 = revealed
  target: Uint8Array;
  startAt: Float64Array;
};

function PixelTile({ src, alt }: { src: StaticImageData; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let grid: Grid | null = null;
    let raf = 0;
    let last = 0;

    const draw = (now: number) => {
      if (!grid) return;
      const dt = last ? now - last : 16;
      last = now;
      const { cols, rows, value, target, startAt } = grid;
      const step = dt / FADE_MS;
      let busy = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = COVER;
      for (let i = 0; i < cols * rows; i++) {
        const t = target[i];
        if (value[i] !== t) {
          if (now >= startAt[i]) {
            value[i] = t ? Math.min(1, value[i] + step) : Math.max(0, value[i] - step);
          }
          busy = true;
        }
        if (value[i] > 0) {
          ctx.globalAlpha = value[i];
          ctx.fillRect((i % cols) * CELL, Math.floor(i / cols) * CELL, CELL, CELL);
        }
      }
      ctx.globalAlpha = 1;
      raf = busy ? requestAnimationFrame(draw) : 0;
      if (!busy) last = 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    const build = () => {
      const { width, height } = wrap.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);
      const n = cols * rows;
      grid = {
        cols,
        rows,
        value: new Float32Array(n).fill(1),
        target: new Uint8Array(n).fill(1),
        startAt: new Float64Array(n),
      };
      // Paint the full cover synchronously so the photo is never visible before it.
      ctx.fillStyle = COVER;
      ctx.fillRect(0, 0, width, height);
      setCovered(true);
      kick();
    };

    const reveal = (e: PointerEvent) => {
      if (!grid) return;
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const { cols, rows, target, startAt } = grid;
      const now = performance.now();
      const r = Math.ceil(RADIUS / CELL);
      const cx = Math.floor(x / CELL);
      const cy = Math.floor(y / CELL);
      for (let row = Math.max(0, cy - r); row <= Math.min(rows - 1, cy + r); row++) {
        for (let col = Math.max(0, cx - r); col <= Math.min(cols - 1, cx + r); col++) {
          const dx = (col + 0.5) * CELL - x;
          const dy = (row + 0.5) * CELL - y;
          const i = row * cols + col;
          if (dx * dx + dy * dy <= RADIUS * RADIUS && target[i] === 1) {
            target[i] = 0;
            startAt[i] = now + Math.random() * STAGGER_MS;
          }
        }
      }
      kick();
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(wrap);
    wrap.addEventListener("pointermove", reveal);
    wrap.addEventListener("pointerdown", reveal);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", reveal);
      wrap.removeEventListener("pointerdown", reveal);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[3/4] overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 400px) 190px, 45vw"
        className={`object-cover ${covered ? "" : "invisible"}`}
      />
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
    </div>
  );
}

export function PixelRevealGrid({
  images,
  className,
}: {
  images: { src: StaticImageData; alt: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-2 sm:gap-3">
        {images.map((img) => (
          <PixelTile key={img.alt} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}
