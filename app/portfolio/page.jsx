"use client";
import { useState } from "react";

import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

import { icons, projects } from "@/data";
import Image from "next/image";
import DevImg from "@/assets/images/coding.jpg";

const Archive = () => {
  const [activeProject, setActiveProject] = useState(-1);

  return (
    <div className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row">
      {/* Page Header */}
      <div className="w-full md:w-1/2 h-[25vh] md:h-full relative text-secondary bg-black/80">
        {/* <div className="absolute inset-0 bg-gradient-primary opacity-50 z-[1]"></div> */}

        <motion.div
          key={activeProject + "image"}
          className="absolute inset-0"
          initial={{ opacity: 0, backgroundColor: "black" }}
          animate={{ opacity: 1, backgroundColor: "transparent" }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={activeProject === -1 ? DevImg : projects[activeProject].image}
            alt="project_image"
            className="w-full h-full object-cover brightness-[.4] blur-md"
            placeholder="blur"
          />
        </motion.div>

        <div className="z-[2] absolute inset-0 w-full h-full text-secondary">
          {activeProject === -1 ? (
            <div className="max-w-sm md:max-w-full md:w-full h-full p-8 md:p-0 md:pr-6 flex flex-col justify-center md:items-end md:text-right">
              <h1 className="h2 mb-2 md:mb-6">Portfolio</h1>
              <p className="max-w-sm md:max-w-lg">
                Explore my projects and see the details behind each innovation.
                Click on any project listed on the right to dive deeper into the
                story behind the work.
              </p>
            </div>
          ) : (
            <div className="w-full h-full pr-6 flex justify-end items-center text-right">
              <div className="max-w-xl">
                <motion.h2
                  key={activeProject + "h2"}
                  className="h2 mb-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {projects[activeProject].title}
                </motion.h2>

                <motion.p
                  key={activeProject + "tagline"}
                  className="tracking-tight font-light"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {projects[activeProject].tagline}
                </motion.p>

                <motion.p
                  key={activeProject + "year"}
                  className="tracking-tight font-light mb-10"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {projects[activeProject].year}
                </motion.p>

                <motion.p
                  key={activeProject + "desc"}
                  className="text-lg mb-10"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {projects[activeProject].description}
                </motion.p>

                <a
                  href={projects[activeProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    key={activeProject + "a"}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <Button
                      title={"View Demo"}
                      variant="outline-secondary"
                      className="mb-2"
                      IconRight={icons.arrowupright}
                    />
                  </motion.div>
                </a>

                <a
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    key={activeProject + "a"}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Button
                      title={"View Codebase"}
                      variant="outline-secondary"
                      IconRight={icons.arrowupright}
                    />
                  </motion.div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Accordion */}
      <div className="md:hidden w-full h-[75vh] px-12 py-4">
        <ScrollArea className="w-full h-[70vh] my-auto p-4">
          {projects.map((item, index) => (
            <Accordion
              key={index}
              title={
                <div className="flex flex-col items-start">
                  <div className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </div>
                  <div className="font-light tracking-tight">
                    {item.type} • {item.year}
                  </div>
                </div>
              }
              content={
                <div className="w-full min-h-[350px] py-8 flex flex-col justify-center items-center gap-8">
                  {/* Images */}
                  <div className="w-full h-1/2 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt="website-img"
                      className="mb-4 -mr-2 w-[180px] h-[120px] object-cover object-center"
                    />

                    <Image
                      src={item.image}
                      alt="website-img"
                      className="mt-4 -ml-2 w-[180px] h-[120px] object-cover object-center"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full h-1/2 px-2 flex items-center justify-between gap-8">
                    <div className="font-light">{item.description}</div>

                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        IconLeft={icons.arrowupright}
                        className="!rounded-full !p-4"
                      />
                    </a>
                  </div>
                </div>
              }
            />
          ))}
        </ScrollArea>
      </div>

      {/* Desktop: List */}
      <div className="hidden md:block w-1/2 h-full px-12 pt-24 pb-8">
        <ScrollArea className="w-full h-[80vh] p-4">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-start cursor-pointer mb-6"
              onClick={() => setActiveProject(index)}
            >
              <div className="text-3xl font-light">{item.title}</div>
              <div className="text-lg font-light">
                {item.type} • {item.year}
              </div>
            </motion.div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Archive;
