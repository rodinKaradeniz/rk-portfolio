"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RK from "@/assets/images/rk.jpg";
import TransitionLink from "../TransitionLink";
import { projects } from "@/data";

const IntroParallax = () => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.05, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0.05, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0.05, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.05, 0.2], [0.2, 1]),
    springConfig
  );
  const opacityText = useSpring(
    useTransform(scrollYProgress, [0.05, 0.2], [0, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0.05, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0.05, 0.2], [-700, 250]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[250vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="py-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-14">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        <motion.div
          style={{ opacity: opacityText }}
          className="w-full flex items-center justify-center text-xl"
        >
          <p className="text-sm md:text-base tracking-tight">
            Click on any picture to see the sample.{" "}
            <TransitionLink href="/portfolio" className="underline">
              See my portfolio
            </TransitionLink>
          </p>
        </motion.div>

        <motion.div className="flex flex-row space-x-20 mt-14">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto px-4 w-full h-screen left-0 top-0 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center overflow-hidden z-10 text-center md:text-left gap-8">
      <div className="h-auto max-w-xs md:max-w-xl">
        <h2 className="h2 font-semibold mb-8">Welcome to My Portfolio</h2>

        <p className="tracking-tight mb-8">
          I’m Rodin Karadeniz, a software developer, machine learning engineer,
          and coding instructor passionate about turning ideas into impactful
          solutions. My journey has been driven by curiosity, creativity, and a
          commitment to empowering others through technology and education. Dive
          in to explore my work, my vision, and the services I offer.
        </p>

        <p className="tracking-tight">
          Scroll down to learn more about my services and projects.
        </p>
      </div>

      <div className="hidden md:block max-w-2xl md:h-full overflow-hidden">
        <Image src={RK} alt="rk" className="w-full h-full object-cover" />
      </div>

      <div className="md:hidden w-full h-[40%] flex items-center justify-center">
        <Image
          src={RK}
          alt="website-img"
          className="mb-16 -mr-2 w-[135px] h-[200px] object-cover object-center"
        />

        <Image
          src={RK}
          alt="website-img"
          className="mt-16 -ml-2 w-[135px] h-[200px] object-cover object-center"
        />
      </div>
    </div>
  );
};

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 w-[24rem] relative flex-shrink-0"
    >
      <Link
        href={product.demo}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.image}
          height="400"
          width="400"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-primary pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-secondary">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default IntroParallax;
