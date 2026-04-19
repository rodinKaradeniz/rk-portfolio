"use client";

import { emailAddress, icons, navItems, socialMediaIcons } from "@/data";
import Button from "./Button";
import TransitionLink from "./TransitionLink";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLocale();

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
  };

  return (
    <div className="w-screen px-[7.5%] bg-gradient-primary text-secondary">
      <div className="w-full h-[50%] px-12 pb-4 pt-16 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
        <div className="md:w-[40%] flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h4 className="text-2xl font-semibold">{t.footer.cta}</h4>

          <TransitionLink href="/contact">
            <Button
              title={t.footer.collaborate}
              variant="outline-secondary"
              hoverDirection="up"
              className="text-sm"
              IconRight={icons.arrowupright}
            />
          </TransitionLink>
        </div>

        <div className="w-full md:w-[50%] flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start gap-3">
              {navItems.map((item) => (
                <TransitionLink key={item.key} href={item.href}>
                  {t.nav[item.key]}
                </TransitionLink>
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start justify-end">
              <p className="mb-2">{t.footer.mail}</p>
              <Button
                title={emailAddress}
                variant="outline-secondary"
                hoverDirection="up"
                className="text-sm"
                IconRight={copied ? icons.check : icons.copy}
                onClick={handleCopy}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40%] w-full px-12 pb-4 pt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-5xl md:text-6xl font-light">
            {t.nav.name.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && " "}
              </span>
            ))}
          </h2>

          <h3 className="text-xs md:text-xl text-nowrap mt-4">
            {t.nav.role.join(" • ")}
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
          {t.footer.credit}
        </p>
      </div>
    </div>
  );
};

export default Footer;
