"use client";
import { useEffect, useRef, useState } from "react";

const EMERALD = "16,185,129";
const SPACING = 22; // px of cursor travel between new points
const SCATTER = 30; // how far from the cursor a point can land
const LIFE_MS = 1600; // how long a point lives
const LINK_DIST = 75; // max distance for two points to connect
const MAX_POINTS = 90; // cap so the line pass stays cheap
const STORAGE_KEY = "cursor-effect"; // remembers the viewer's on/off choice

function readPref(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}
function writePref(on: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
  } catch {
    // storage can be blocked (private mode); the toggle still works for this visit
  }
}

type Point = { x: number; y: number; vx: number; vy: number; life: number };

/**
 * Site-wide cursor effect: points drop along the cursor's path, drift a little,
 * and link up with thin emerald lines before fading. Points are stored in page
 * coordinates so they stay attached to the content while scrolling.
 * Only runs for fine pointers and when reduced motion is off.
 */
export function ConstellationCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const userOnRef = useRef(true);
  const [userOn, setUserOn] = useState(true);
  const [capable, setCapable] = useState(false); // fine pointer and no reduced motion
  const [toast, setToast] = useState<string | null>(null);
  const [isMac, setIsMac] = useState(true);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const toggle = (announce: boolean) => {
    const next = !userOnRef.current;
    userOnRef.current = next;
    setUserOn(next);
    writePref(next);
    if (announce) {
      setToast(next ? "galileo mode on" : "galileo mode off");
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(null), 1400);
    }
  };

  // Load the saved choice, detect the platform, and listen for cmd/ctrl + "."
  useEffect(() => {
    const saved = readPref();
    userOnRef.current = saved;
    setUserOn(saved);
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && e.key === ".") {
        e.preventDefault();
        toggle(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(toastTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = fine.matches && !reduced.matches;
    setCapable(enabled);

    const pts: Point[] = [];
    let lastX: number | null = null;
    let lastY = 0;
    let acc = 0;
    let raf = 0;
    let prev = 0;
    let w = 0;
    let h = 0;

    const fit = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const frame = (now: number) => {
      const dt = prev ? Math.min(48, now - prev) : 16;
      prev = now;
      const sx = window.scrollX;
      const sy = window.scrollY;
      ctx.clearRect(0, 0, w, h);
      if (!userOnRef.current) pts.length = 0;

      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i];
        p.life -= dt / LIFE_MS;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.life <= 0) pts.splice(i, 1);
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK_DIST) continue;
          ctx.strokeStyle = `rgba(${EMERALD},${(1 - d / LINK_DIST) * Math.min(a.life, b.life) * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(a.x - sx, a.y - sy);
          ctx.lineTo(b.x - sx, b.y - sy);
          ctx.stroke();
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(255,255,255,${p.life * 0.9})`;
        ctx.fillRect(Math.round(p.x - sx) - 1, Math.round(p.y - sy) - 1, 2, 2);
      }

      if (pts.length) {
        raf = requestAnimationFrame(frame);
      } else {
        raf = 0;
        prev = 0;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      if (!enabled || !userOnRef.current || e.pointerType !== "mouse") {
        if (pts.length) { pts.length = 0; kick(); }
        return;
      }
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      if (lastX !== null) acc += Math.hypot(x - lastX, y - lastY);
      lastX = x;
      lastY = y;
      if (acc < SPACING && pts.length) return;
      acc = 0;
      pts.push({
        x: x + (Math.random() - 0.5) * SCATTER,
        y: y + (Math.random() - 0.5) * SCATTER,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        life: 1,
      });
      if (pts.length > MAX_POINTS) pts.shift();
      kick();
    };
    const onLeave = () => {
      lastX = null;
    };
    const onScroll = () => {
      if (pts.length) kick();
    };
    const onPrefChange = () => {
      enabled = fine.matches && !reduced.matches;
      setCapable(enabled);
      if (!enabled) pts.length = 0;
      kick();
    };

    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    fine.addEventListener("change", onPrefChange);
    reduced.addEventListener("change", onPrefChange);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      fine.removeEventListener("change", onPrefChange);
      reduced.removeEventListener("change", onPrefChange);
    };
  }, []);

  const shortcut = isMac ? "cmd + ." : "ctrl + .";

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] h-screen w-screen"
      />
      {capable && (
        <div className="fixed bottom-4 right-4 z-[70] flex items-center gap-2">
          <span
            role="status"
            aria-live="polite"
            className={`font-mono text-xs text-neutral-400 transition-opacity duration-300 ${toast ? "opacity-100" : "opacity-0"}`}
          >
            {toast}
          </span>
          <button
            type="button"
            onClick={() => toggle(false)}
            aria-pressed={userOn}
            aria-label={`Galileo mode ${userOn ? "on" : "off"}. Toggle with ${shortcut}`}
            title={`galileo mode (${shortcut})`}
            className="group flex h-8 items-center rounded-full border border-neutral-800 bg-black/70 px-2.5 font-mono text-[11px] text-neutral-500 backdrop-blur transition-colors hover:border-neutral-600 hover:text-neutral-300"
          >
            <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 transition-colors ${userOn ? "text-[#10b981]" : "text-neutral-600"}`} aria-hidden>
              <path d="M3 11.5 7 4l5.5 3.5L13 13 3 11.5Z" fill="none" stroke="currentColor" strokeOpacity={userOn ? 0.55 : 0.4} strokeWidth="1" />
              {[[3, 11.5], [7, 4], [12.5, 7.5], [13, 13]].map(([cx, cy]) => (
                <rect key={`${cx}-${cy}`} x={cx - 1.1} y={cy - 1.1} width="2.2" height="2.2" fill="currentColor" />
              ))}
            </svg>
            <span className="hidden max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-[12rem] group-focus-visible:ml-2 group-focus-visible:max-w-[12rem] sm:inline-block">
              galileo mode {userOn ? "on" : "off"}
              <kbd className="ml-2 rounded border border-neutral-700 px-1 py-px text-neutral-400">{shortcut}</kbd>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
