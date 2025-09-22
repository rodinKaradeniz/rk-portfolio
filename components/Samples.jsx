"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { icons, projects } from "@/data";
import { useLenis } from "@/context/LenisContext";
import { useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimations = (pathname, highlightedProjects) => {
  const lenis = useLenis();
  const domRefs = useRef({});

  useGSAP(() => {
    if (pathname === "/" && lenis) {
      // Cache DOM elements
      if (!domRefs.current.pinnedSection) {
        domRefs.current.pinnedSection = document.querySelector(".pinned");
        domRefs.current.progressBar = document.querySelector(".progress");
        domRefs.current.images = gsap.utils.toArray(".img");
        domRefs.current.pinnedHeight = window.innerHeight * 10;
      }

      const { pinnedSection, progressBar, images, pinnedHeight } =
        domRefs.current;

      // Optimized animation functions
      const animateImageEntry = (img) => {
        if (!img) return;

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

        const imgElement = img.querySelector("img");
        if (imgElement) {
          gsap.fromTo(
            imgElement,
            {
              filter: "contrast(2) brightness(10)",
            },
            {
              filter: "contrast(1) brightness(1)",
              duration: 1,
              ease: "power2.inOut",
            }
          );
        }
      };

      const animateImageExit = (img, forward) => {
        if (!img) return;

        gsap.to(img, {
          scale: forward ? 0.5 : 1.05,
          opacity: forward ? 0 : undefined,
          clipPath: forward
            ? undefined
            : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power2.inOut",
        });

        const imgElement = img.querySelector("img");
        if (imgElement) {
          gsap.to(imgElement, {
            filter: forward ? undefined : "contrast(2) brightness(10)",
            duration: 1,
            ease: "power2.inOut",
          });
        }
      };

      // Optimized content update - use textContent instead of creating spans
      const updateInfoContent = (index) => {
        const infoItems = document.querySelectorAll(".info > div p");
        const linkContainer = document.querySelector(".info .link");

        if (!infoItems.length || !linkContainer) return;

        const item = highlightedProjects[index];
        if (!item) return;

        const typeParts = item.type.split("•");
        const contentArray = [
          item.title,
          typeParts[0] ? typeParts[0].trim() : item.type,
          item.year.toString(),
          typeParts[1] ? typeParts[1].trim() : "",
        ];

        // Use textContent for better performance
        infoItems.forEach((element, i) => {
          if (contentArray[i]) {
            element.textContent = contentArray[i];
          }
        });

        // Update link/button
        if (item.demo && item.demo !== "") {
          linkContainer.innerHTML = `
            <a
              href="${item.demo}"
              target="_blank"
              rel="noopener noreferrer"
              class="flex flex-row gap-2 items-center whitespace-nowrap"
            >
              <span class="text-lg tracking-tight">View Demo</span>
              <div class="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </a>
          `;
        } else {
          linkContainer.innerHTML = `
            <div class="flex gap-2 items-center">
              <span class="text-lg tracking-tight">Coming Soon</span>
            </div>
          `;
        }
      };

      // Initialize first content
      updateInfoContent(0);
      if (images[0]) {
        animateImageEntry(images[0]);
      }

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

          if (currentCycle < images.length && images[currentCycle]) {
            const currentImage = images[currentCycle];
            const scale = 1 - (0.1 * cycleProgress) / 100;
            gsap.to(currentImage, { scale, duration: 0.1, overwrite: "auto" });

            if (currentCycle !== lastCycle) {
              if (images[lastCycle]) {
                animateImageExit(images[lastCycle], self.direction > 0);
              }
              animateImageEntry(currentImage);
              gsap.delayedCall(0.5, () => updateInfoContent(currentCycle));
              lastCycle = currentCycle;
            }
          }

          if (progressBar) {
            gsap.to(progressBar, {
              height: `${cycleProgress}%`,
              duration: 0.1,
              overwrite: true,
            });
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Clear refs
      domRefs.current = {};
    };
  }, [lenis, highlightedProjects]);
};

const Samples = () => {
  const pathname = usePathname();

  // Memoize filtered projects to prevent unnecessary re-renders
  const highlightedProjects = useMemo(
    () => projects.filter((project) => project.highlight),
    []
  );

  useGSAPAnimations(pathname, highlightedProjects);

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

        {/* Images - Only load first image initially, others lazy load */}
        {highlightedProjects.map((project, i) => (
          <div
            key={i}
            className="img absolute top-[37.5%] left-[30%] md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 scale-110 w-[45%] md:w-[30%] h-[30%] md:h-[65%] z-[-1]"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            id={`img-${i + 1}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1) brightness(1)" }}
              priority={i === 0}
              sizes="(max-width: 768px) 45vw, 30vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Samples;
