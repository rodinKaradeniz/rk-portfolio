"use client";

import Hero from "@/components/Hero";
import IntroParallax from "@/components/ui/hero-parallax";
import ServicesSection from "@/components/ServicesSection";
import Samples from "@/components/Samples";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroParallax />
      <ServicesSection />
      <Samples />
    </>
  );
}
