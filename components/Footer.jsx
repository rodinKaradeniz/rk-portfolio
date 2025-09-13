"use client";

import { emailAddress, icons, navItems, socialMediaIcons } from "@/data";
import Button from "./Button";
import TransitionLink from "./TransitionLink";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
  };

  return (
    <div className="w-screen px-[7.5%] bg-gradient-primary text-secondary">
      <div className="w-full h-[50%] px-12 pb-4 pt-16 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        <div className="md:w-[40%] flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h4 className="text-2xl font-semibold">
            Any Questions? <br /> Have a project in mind? <br /> Let's get to
            work.
          </h4>

          <TransitionLink href="/contact">
            <Button
              title="Let's Collaborate"
              variant="outline-secondary"
              hoverDirection="up"
              className="text-sm"
              IconRight={icons.arrowupright}
            />
          </TransitionLink>
        </div>

        <div className="w-full md:w-[50%] flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start gap-3">
              {navItems.map((item, index) => (
                <TransitionLink key={index} href={item.href}>
                  {item.name}
                </TransitionLink>
              ))}
            </div>
          </div>

          <div className="w-1/2 space-y-8">
            <div className="flex flex-col items-center md:items-start justify-center">
              <p className="mb-2">Mail:</p>
              <Button
                title="mrodin.karadeniz@gmail.com"
                variant="outline-secondary"
                hoverDirection="up"
                className="text-sm"
                IconRight={copied ? icons.check : icons.copy}
                onClick={handleCopy}
              />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center">
              <p className="mb-2">See also:</p>
              <div className="flex flex-col items-center md:items-start gap-1">
                {navItems.slice(0, 2).map((item, index) => (
                  <TransitionLink key={index} href={item.href}>
                    {item.name}
                  </TransitionLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40%] w-full px-12 pb-4 pt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-5xl md:text-6xl font-light">Rodin Karadeniz</h2>

          <h3 className="text-xs md:text-xl text-nowrap mt-4">
            Software Developer • Machine Learning Engineer • Coding Instructor
          </h3>
        </div>

        <div className="flex items-center gap-4">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="fill-[#f9eddd] w-10 h-10 hover:-translate-y-1 transition-transform duration-300"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="h-[10%] w-full py-4 flex items-center justify-center">
        <p className="w-full border-t border-[#f9eddd]/70 font-light text-sm text-center pt-4">
          Designed and developed by{" "}
          <TransitionLink href="/" className="font-bold">
            RK
          </TransitionLink>
          .{" "}
          <TransitionLink href="/credits" className="underline">
            See inspirations.
          </TransitionLink>
        </p>
      </div>
    </div>
  );
};

export default Footer;
