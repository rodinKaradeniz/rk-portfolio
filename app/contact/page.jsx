"use client";
import { useState } from "react";

import Image from "next/image";
import TorontoImg from "@/assets/images/toronto.jpg";

import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { emailAddress, icons } from "@/data";
import { useLocale } from "@/context/LocaleContext";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLocale();

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
  };

  return (
    <div className="w-screen md:h-screen flex flex-col md:flex-row items-center justify-center gap-5">
      <div className="w-full md:w-1/2 h-1/3 md:h-full relative text-neutral-100">
        <Image
          src={TorontoImg}
          alt="rk"
          className="absolute w-full h-full object-cover z-[-2] brightness-[.4]"
        />
        <div className="absolute inset-0 z-[-1] backdrop-blur-sm"></div>

        <div className="w-full h-full p-8 md:p-0 md:pr-6 flex flex-col justify-center items-start md:items-end">
          <h1 className="h1 text-right mb-0 md:mb-12">
            {t.contactPage.heading1} <br className="hidden md:flex" />{" "}
            {t.contactPage.heading2}
          </h1>

          <div className="flex flex-col items-start md:items-end">
            <a href={`mailto:${emailAddress}`}>
              <Button
                title={t.contactPage.sendEmail}
                variant="outline-secondary"
                hoverDirection="left"
                className="mb-4"
              />
            </a>

            <Button
              title={copied ? t.contactPage.copied : t.contactPage.copyEmail}
              variant="outline-secondary"
              hoverDirection="left"
              IconRight={copied ? icons.check : icons.copy}
              onClick={handleCopy}
            />
          </div>
        </div>
      </div>

      <div className="w-screen md:w-[50vw] min-h-[80vh] px-12 md:pl-4 md:pr-24 pt-8 md:pt-0 flex flex-col justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
