"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

const CELL_W = 6; // css px per character column
const CELL_H = 9; // css px per character row
const RAMP = " .:-=+*#%@"; // darkest to brightest
const EMERALD = "16,185,129";

/** Draws the photo as green mono characters, re-rendering when the tile resizes. */
function AsciiCanvas({ src }: { src: StaticImageData }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let img: HTMLImageElement | null = null;
    let cancelled = false;

    const render = () => {
      if (!img || cancelled) return;
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.floor(width / CELL_W);
      const rows = Math.floor(height / CELL_H);
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const o = off.getContext("2d");
      if (!o) return;
      // Sample with object-fit: cover so the ascii lines up with the photo on the back.
      const scale = Math.max(cols / img.naturalWidth, (rows * (CELL_H / CELL_W)) / img.naturalHeight);
      const sw = cols / scale;
      const sh = (rows * (CELL_H / CELL_W)) / scale;
      o.drawImage(img, (img.naturalWidth - sw) / 2, (img.naturalHeight - sh) / 2, sw, sh, 0, 0, cols, rows);
      const px = o.getImageData(0, 0, cols, rows).data;

      // Stretch contrast per photo so dark shots still read.
      const lum = new Float32Array(cols * rows);
      let lo = 1;
      let hi = 0;
      for (let i = 0; i < lum.length; i++) {
        const v = (0.2126 * px[i * 4] + 0.7152 * px[i * 4 + 1] + 0.0722 * px[i * 4 + 2]) / 255;
        lum[i] = v;
        if (v < lo) lo = v;
        if (v > hi) hi = v;
      }
      const span = Math.max(0.05, hi - lo);

      ctx.clearRect(0, 0, width, height);
      ctx.font = `${CELL_H}px ${getComputedStyle(document.body).fontFamily}`;
      ctx.textBaseline = "top";
      const ox = (width - cols * CELL_W) / 2;
      const oy = (height - rows * CELL_H) / 2;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Clamp: float rounding can put the darkest pixel a hair below the minimum.
          const v = Math.min(1, Math.max(0, (lum[y * cols + x] - lo) / span));
          const ch = RAMP[Math.min(RAMP.length - 1, Math.floor(v * RAMP.length))];
          if (ch === " ") continue;
          ctx.fillStyle = `rgba(${EMERALD},${0.3 + 0.7 * v})`;
          ctx.fillText(ch, ox + x * CELL_W, oy + y * CELL_H);
        }
      }
    };

    const el = new window.Image();
    el.decoding = "async";
    el.src = src.src;
    el.onload = () => {
      img = el;
      // Wait for the mono font so characters are measured and drawn with it.
      document.fonts.ready.then(render);
    };
    const ro = new ResizeObserver(render);
    ro.observe(canvas);
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [src]);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}

function FlipTile({ src, alt }: { src: StaticImageData; alt: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${alt}. ${flipped ? "Showing photo, click for ascii" : "Showing ascii, click for photo"}`}
      title={flipped ? "click for ascii" : "click for photo"}
      className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden bg-black focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#10b981]"
    >
      {/* Both layers stay mounted; clicking just swaps which one is visible, with no animation. */}
      <div className={`absolute inset-0 opacity-85 group-hover:opacity-100 ${flipped ? "invisible" : ""}`}>
        <AsciiCanvas src={src} />
      </div>
      <div className={`absolute inset-0 ${flipped ? "" : "invisible"}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 640px) 160px, 45vw" className="object-cover" />
      </div>
    </button>
  );
}

/** Photos drawn as green ascii; click a tile to swap to the real photo and back. */
export function AsciiPhotoGrid({
  images,
  className,
}: {
  images: { src: StaticImageData; alt: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {images.map((img) => (
          <FlipTile key={img.alt} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}
