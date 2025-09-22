"use client";
import { useEffect, useState } from "react";

import { icons, navItems, socialMediaIcons } from "@/data";

import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { useAudio } from "@/context/AudioContext";

const Nav = () => {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const { isAudioPlaying, toggleAudio } = useAudio();

  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => {
        setVisible(false);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.01) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const MusicButton = ({ isTop }) => {
    const check = pathname === "/" || pathname === "/services" || !isTop;

    return (
      <button
        className={`w-10 h-10 rounded-full flex items-center justify-center space-x-0.5 space-y-0.5 border ${
          check ? "border-neutral-100" : "border-neutral-900"
        } ${isAudioPlaying ? "pt-2" : ""}`}
        onClick={toggleAudio}
      >
        {isAudioPlaying ? (
          // Show animated bars when music is playing
          [1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`indicator-line active ${
                check ? "bg-neutral-100" : "bg-neutral-900"
              }`}
              style={{ animationDelay: `${bar * 0.1}s` }}
            />
          ))
        ) : (
          // Show music note icon when music is not playing
          <div
            className={`w-5 h-5 ${
              check ? "text-neutral-100" : "text-neutral-900"
            }`}
          >
            {icons.music}
          </div>
        )}
      </button>
    );
  };
  return (
    <>
      {/* Floating Navbar for when users scroll up */}
      <AnimatePresence mode="wait">
        <div className="w-full fixed top-10 z-40 px-12 md:px-0 flex items-center justify-between md:justify-center gap-8">
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="border border-transparent rounded-full bg-gradient-primary text-secondary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-4 items-center justify-center space-x-4"
          >
            <TransitionLink href="/">
              <span className="text-3xl font-light">RK</span>
            </TransitionLink>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex border border-transparent rounded-full bg-gradient-primary text-secondary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] md:pl-8 pr-2 py-2 items-center justify-center space-x-4 md:space-x-6"
          >
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((navItem, idx) => (
                <TransitionLink
                  key={`link=${idx}`}
                  href={navItem.href}
                  className={cn("relative items-center flex space-x-1 mr-1")}
                >
                  <span className="text-sm">{navItem.name}</span>
                </TransitionLink>
              ))}
            </div>

            {/* Mobile Nav */}
            <Sheet className="md:hidden">
              <SheetTrigger asChild>
                <div className="w-10 h-10 md:hidden flex items-center justify-center rounded-md text-secondary cursor-pointer">
                  {icons.hamburger}
                </div>
              </SheetTrigger>

              <SheetContent className="p-0 border-none text-secondary bg-gradient-primary">
                <div className="h-full py-10 pl-8 flex flex-col justify-between">
                  <div className="min-h-[50vh] flex flex-col justify-center gap-6">
                    {navItems.map(({ name, href }) => (
                      <TransitionLink key={name} href={href}>
                        <SheetClose asChild>
                          <h3 className="h3 opacity-70 hover:opacity-100 transition-opacity duration-700">
                            {name}
                          </h3>
                        </SheetClose>
                      </TransitionLink>
                    ))}
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <h2 className="text-4xl font-light">
                      Rodin <br />
                      Karadeniz
                    </h2>

                    <h3 className="text-nowrap font-thin mb-4">
                      Software Developer <br /> Machine Learning Engineer <br />
                      Instructor
                    </h3>

                    <div className="flex items-center gap-4">
                      {socialMediaIcons.map(({ href, icon }, index) => (
                        <a
                          key={index}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fill-[#f9eddd] w-10 h-10"
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <MusicButton isTop={false} />
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Navbar at the top */}
      <div className="absolute z-50 top-0 w-full flex justify-end">
        {/* Desktop Nav */}
        <nav className="hidden md:flex w-full px-12 pt-6 pb-8 items-center justify-between tracking-tight">
          <TransitionLink
            href="/"
            className={`text-2xl font-semibold ${
              pathname === "/" ||
              pathname === "/contact" ||
              pathname === "/portfolio"
                ? "text-neutral-100"
                : "text-neutral-900"
            }`}
          >
            RK
          </TransitionLink>

          <div className="flex items-center justify-end gap-8 text-lg font-light">
            {navItems.map(({ name, href }) => (
              <TransitionLink
                key={name}
                href={href}
                className={
                  pathname === "/" || pathname === "/services"
                    ? "text-secondary"
                    : "text-neutral-900"
                }
              >
                {name}
              </TransitionLink>
            ))}

            <MusicButton isTop={true} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
