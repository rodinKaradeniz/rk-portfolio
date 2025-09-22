"use client";
import { useRef } from "react";

import Image from "next/image";
import Dev from "@/assets/images/services/app_dev.jpg";
import TorontoImg from "@/assets/images/toronto.jpg";

import { icons } from "@/data";
import { motion, useTransform, useScroll } from "framer-motion";
import Button from "./Button";

const ServicesSection = () => {
  const ref = useRef(null);

  const { scrollYProgress: scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);

  return (
    <>
      <section className="hidden md:block relative w-screen min-h-screen md:h-[200vh] my-24">
        <div
          ref={ref}
          className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center md:items-start justify-center"
        >
          {/* Images */}
          <div className="w-full md:w-[35%] h-[5%] md:h-full overflow-hidden">
            <div className="z-[-1] w-full h-screen overflow-hidden">
              <motion.div className="w-full h-full" style={{ scale: scale1 }}>
                <Image
                  src={Dev}
                  alt="about_me_img_1"
                  className="w-full h-screen object-cover"
                  style={{ objectPosition: "0% center" }}
                />
              </motion.div>
            </div>

            <motion.div className="w-full h-screen overflow-hidden">
              <motion.div className="w-full h-full" style={{ scale: scale2 }}>
                <Image
                  src={TorontoImg}
                  alt="about_me_img_1"
                  className="w-full h-screen object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Text */}
          <div className="hidden md:flex md:sticky md:top-0 w-full md:w-[65%] h-[70%] md:h-screen p-5 md:pl-12 items-center justify-center">
            <div className="max-w-xl">
              <h2 className="h2 font-semibold mb-8">What I Do</h2>

              <p className="text-lg tracking-tight font-light mb-8">
                I specialize in crafting digital experiences, developing
                intelligent systems, and teaching programming concepts. My
                services include software development, machine learning
                engineering, web development, UI/UX design, and prompt
                engineering. Whether you need an intuitive app, a data-driven
                model, or educational guidance, I bring a blend of technical
                expertise and creative problem-solving to the table.
              </p>

              <Button
                title="My Services"
                IconRight={icons.arrowupright}
                className="mb-8"
              />

              <p className="text-sm tracking-tight font-light">
                Scroll down to see some of my samples.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:hidden max-w-7xl relative mx-auto px-4 w-full h-screen left-0 top-0 flex flex-col-reverse justify-center items-center overflow-hidden z-10 text-center gap-8">
        <div className="h-auto max-w-xs">
          <h2 className="h2 font-semibold mb-8">What I Do</h2>

          <p className="tracking-tight font-light mb-8">
            I specialize in crafting digital experiences, developing intelligent
            systems, and teaching programming concepts. My services include
            software development, machine learning engineering, web development,
            UI/UX design, and prompt engineering. Whether you need an intuitive
            app, a data-driven model, or educational guidance, I bring a blend
            of technical expertise and creative problem-solving to the table.
          </p>

          <Button
            title="My Services"
            IconRight={icons.arrowupright}
            className="mb-8"
          />

          <p className="text-sm tracking-tight font-light">
            Scroll down to see some of my samples.
          </p>
        </div>

        <div className="w-full h-[40%] flex items-center justify-center">
          <Image
            src={TorontoImg}
            alt="website-img"
            className="mb-16 -mr-2 w-[135px] h-[200px] object-cover object-center"
          />

          <Image
            src={Dev}
            alt="website-img"
            className="mt-16 -ml-2 w-[135px] h-[200px] object-cover object-center"
          />
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
