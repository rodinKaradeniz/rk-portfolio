"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext(null);

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context;
};

export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure we're on the client and component is mounted
    if (typeof window === "undefined") return;

    setIsMounted(true);

    // Add a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      const lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        // Prevent Lenis from adding styles to body during hydration
        wrapper: typeof window !== "undefined" ? window : undefined,
        content:
          typeof window !== "undefined" ? document.documentElement : undefined,
      });

      // Connect Lenis to ScrollTrigger
      lenisInstance.on("scroll", ScrollTrigger.update);

      setLenis(lenisInstance);

      // Animation loop
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenisInstance.destroy();
        setLenis(null);
      };
    }, 100); // Small delay to ensure hydration is complete

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Don't render children until mounted to prevent hydration issues
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};
