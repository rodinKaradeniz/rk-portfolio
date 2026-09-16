"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { useLenis } from "@/context/LenisContext";
import { useLocale } from "@/context/LocaleContext";

// Keep in sync with the inline script in app/layout.jsx
export const INTRO_STORAGE_KEY = "rk-intro-seen";

const MIN_DURATION = 1200; // ms the intro stays up, even on a warm cache
const MAX_WAIT = 15000; // safety cap so a stalled request can't lock the site
const EXIT_DURATION = 900; // must match .intro-loader transition in globals.css

const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const waitForImage = (img) =>
  new Promise((resolve) => {
    if (img.complete) return resolve();
    img.addEventListener("load", resolve, { once: true });
    img.addEventListener("error", resolve, { once: true });
  });

const waitForPageLoad = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((resolve) =>
        window.addEventListener("load", resolve, { once: true })
      );

const IntroLoader = () => {
  const lenis = useLenis();
  const { t } = useLocale();
  const [phase, setPhase] = useState("loading"); // loading -> exiting -> done
  const [progress, setProgress] = useState(0);

  // Wait for every image on the page, fonts, and the window load event
  useEffect(() => {
    if (hasSeenIntro()) {
      setPhase("done");
      return;
    }

    let cancelled = false;

    const images = Array.from(document.images).filter(
      (img) => !img.closest("#intro-loader")
    );
    // Lazy images below the fold would never load on their own
    images.forEach((img) => {
      if (img.loading === "lazy") img.loading = "eager";
    });

    const total = images.length + 1;
    let settled = 0;
    const tick = () => {
      settled += 1;
      if (!cancelled) setProgress(settled / total);
    };

    const mediaReady = Promise.all([
      ...images.map((img) => waitForImage(img).then(tick)),
      Promise.all([waitForPageLoad(), document.fonts?.ready]).then(tick),
    ]);
    const minDelay = new Promise((r) => setTimeout(r, MIN_DURATION));
    const cap = new Promise((r) => setTimeout(r, MAX_WAIT));

    Promise.race([Promise.all([mediaReady, minDelay]), cap]).then(() => {
      if (cancelled) return;
      setProgress(1);
      setPhase("exiting");
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Lock scrolling while loading; release as the curtain lifts
  useEffect(() => {
    const locked = phase === "loading";
    document.documentElement.style.overflow = locked ? "hidden" : "";
    if (lenis) locked ? lenis.stop() : lenis.start();
  }, [phase, lenis]);

  useEffect(() => {
    if (phase !== "exiting") return;

    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {}
    // Pinned sections measured layout while scrolling was locked
    ScrollTrigger.refresh();

    const timer = setTimeout(() => setPhase("done"), EXIT_DURATION);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  const percent = Math.round(progress * 100);

  return (
    <div
      id="intro-loader"
      aria-hidden="true"
      className={`intro-loader bg-gradient-primary text-secondary ${
        phase === "exiting" ? "is-exiting" : ""
      }`}
    >
      <div className="intro-content w-full h-full px-8 md:px-12 py-10 flex flex-col justify-between">
        <div className="flex justify-between text-xs uppercase tracking-[0.3em] font-light opacity-60">
          <span>RK</span>
          <span>Portfolio</span>
        </div>

        <h1 className="h0 font-thin leading-[0.95]">
          {t.nav.name.split("\n").map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className="intro-line"
                style={{ animationDelay: `${150 + i * 120}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="flex items-end gap-6">
          <div className="flex-1 h-px bg-[#f9eddd]/20 mb-2">
            <div
              className="intro-progress h-full bg-[#f9eddd]"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
          <span className="font-mono text-sm font-light tabular-nums w-10 text-right">
            {String(percent).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;
