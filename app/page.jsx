"use client";

import Hero from "@/components/Hero";
import IntroParallax from "@/components/ui/hero-parallax";
import ServicesSection from "@/components/ServicesSection";
import Samples from "@/components/Samples";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Home() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smooth: true,
    });

    // Save to ref
    lenisRef.current = lenis;

    // Animation loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <Hero />
      <IntroParallax />
      <ServicesSection />
      <Samples />
    </>
  );
}
