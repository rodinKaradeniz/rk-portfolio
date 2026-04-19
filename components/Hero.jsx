"use client";
import Image from "next/image";
import RK from "@/assets/images/rk.jpg";
import { useLocale } from "@/context/LocaleContext";

const Hero = () => {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-screen flex justify-center items-center text-8xl text-neutral-100 overflow-hidden">
      <Image
        src={RK}
        alt="rk"
        className="absolute w-full h-full object-cover object-top z-[-1] brightness-[.4]"
        style={{ objectPosition: "center 40%" }}
      />
      <div className="absolute inset-0 backdrop-blur-md z-[-1]"></div>

      <div className="absolute max-w-[300px] md:max-w-[450px] top-[12.5%] md:top-[30%] left-[7.5%] text-base md:text-xl tracking-tight space-y-8">
        <p>{t.heroSection.body1}</p>
        <p>{t.heroSection.body2}</p>
      </div>

      <div className="w-full h-full p-12 flex flex-col items-end justify-end text-right tracking-tight">
        <h1 className="h0 mb-6">
          {t.nav.name.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <h3 className="h4 mb-6">
          {t.nav.role.map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h3>

        <p className="text-base tracking-tight brightness-[.6]">
          {t.heroSection.scrollHint}
        </p>
      </div>
    </div>
  );
};

export default Hero;
