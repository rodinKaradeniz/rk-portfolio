"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Mixologist from "@/assets/images/mixologist.jpg";
import TorontoImg from "@/assets/images/toronto_discover.jpg";
import CrowdsourcingImg from "@/assets/images/crowdsourcing.jpg";
import Button from "./Button";
import { icons } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimations = (pathname) => {
  useGSAP(() => {
    if (pathname === "/") {
      const pinnedSection = document.querySelector(".pinned");
      const progressBar = document.querySelector(".progress");
      const images = gsap.utils.toArray(".img");
      const pinnedHeight = window.innerHeight * 10;

      const animateImageEntry = (img) => {
        gsap.fromTo(
          img,
          {
            scale: 1.1,
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            opacity: 0,
          },
          {
            scale: 1,
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          }
        );
        gsap.fromTo(
          img.querySelector("img"),
          {
            filter: "contrast(2) brightness(10)",
          },
          {
            filter: "contrast(1) brightness(1)",
            duration: 1,
            ease: "power2.inOut",
          }
        );
      };

      const animateImageExit = (img, forward) => {
        gsap.to(img, {
          scale: forward ? 0.5 : 1.05,
          opacity: forward ? 0 : undefined,
          clipPath: forward
            ? undefined
            : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power2.inOut",
        });
        gsap.to(img.querySelector("img"), {
          filter: forward ? undefined : "contrast(2) brightness(10)",
          duration: 1,
          ease: "power2.inOut",
        });
      };

      const updateInfoContent = (index) => {
        const infoItems = document.querySelectorAll(".info > div p");
        const link = document.querySelector(".info .link a");

        const data = [
          {
            title: "Marty the Bartender",
            tagline: "Cocktail Information and Recommendation System",
            year: "2024",
            tag: "Mobile Native App",
            link: "#",
          },
          {
            title: "ML & Quant Strategies for Trading",
            tagline: "Algorithmic Trading",
            year: "2024",
            tag: "Jupyter Notebook",
            link: "#",
          },
          {
            title: "Jane Doe",
            tagline: "Personal Portfolio",
            year: "2024",
            tag: "Website",
            link: "#",
          },
        ];

        const item = data[index];
        const contentArray = [item.title, item.tagline, item.year, item.tag];
        infoItems.forEach((element, i) => {
          element.innerHTML = "";
          contentArray[i].split("").forEach((letter, idx) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.opacity = 0;
            element.appendChild(span);
            gsap.to(span, {
              opacity: 1,
              duration: 0.01,
              delay: 0.03 * idx,
              ease: "power1.inOut",
            });
          });
        });
        link.setAttribute("href", item.link);
      };

      updateInfoContent(0);
      animateImageEntry(images[0]);

      let lastCycle = 0;

      ScrollTrigger.create({
        trigger: pinnedSection,
        start: "top top",
        end: `+=${pinnedHeight} * 2`,
        pin: true,
        pinSpacing: true,
        scrub: 0.1,
        onUpdate: (self) => {
          const totalProgress = self.progress * 3;
          const currentCycle = Math.floor(totalProgress);
          const cycleProgress = (totalProgress % 1) * 100;

          if (currentCycle < images.length) {
            const currentImage = images[currentCycle];
            const scale = 1 - (0.1 * cycleProgress) / 100;
            gsap.to(currentImage, { scale, duration: 0.1, overwrite: "auto" });

            if (currentCycle !== lastCycle) {
              animateImageExit(images[lastCycle], self.direction > 0);
              animateImageEntry(currentImage);
              gsap.delayedCall(0.5, () => updateInfoContent(currentCycle));
              lastCycle = currentCycle;
            }
          }

          gsap.to(progressBar, {
            height: `${cycleProgress}%`,
            duration: 0.1,
            overwrite: true,
          });
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });
};

const Samples = () => {
  const pathname = usePathname();
  useGSAPAnimations(pathname);

  return (
    <section className="container">
      <div className="mx-auto pinned w-[90%] h-screen relative">
        {/* Info Bar */}
        <div className="mx-auto info absolute top-[65%] md:top-[50%] translate-y-[-50%] w-[60vw] md:w-full flex flex-col md:flex-row items-end md:items-center justify-between p-4">
          <div className="text-right md:text-left md:max-w-[400px]">
            <div className="title mb-2">
              <p className="text-4xl tracking-tight">Title</p>
            </div>
            <div className="tagline">
              <p className="text-xl tracking-tight">Tagline</p>
            </div>
            <div className="year mb-2">
              <p className="text-sm tracking-tight">Year</p>
            </div>
            <div className="tag">
              <p className="text-sm tracking-tight">Tag</p>
            </div>
          </div>

          <div className="link flex justify-end border border-black rounded-lg px-5 py-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <span className="text-lg tracking-tight">View Demo</span>
              <div className="w-5 h-5">{icons.arrowupright}</div>
            </a>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar absolute top-1/2 right-[15%] md:left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-[2px] h-[240px] md:h-[120px] bg-gradient-primary">
          <div className="progress absolute top-0 left-0 w-full z-[2] bg-slate-50"></div>
        </div>

        {/* Images */}
        {[
          { src: TorontoImg, alt: "Toronto Discovery" },
          { src: Mixologist, alt: "Mixologist" },
          { src: CrowdsourcingImg, alt: "Crowdsourcing" },
        ].map((img, i) => (
          <div
            key={i}
            className="img absolute top-[37.5%] left-[30%] md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 scale-110 w-[45%] md:w-[30%] h-[30%] md:h-[65%] z-[-1]"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            id={`img-${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1) brightness(1)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Samples;
