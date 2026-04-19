"use client";
import { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { services, icons } from "@/data";
import WorkImg from "@/assets/images/work.jpg";

import Button from "@/components/Button";
import BottomDrawer from "@/components/BottomDrawer";
import { useLocale } from "@/context/LocaleContext";

const Services = () => {
  const [activeService, setActiveService] = useState(-1);
  const [mobileActiveService, setMobileActiveService] = useState(0);
  const { t } = useLocale();

  const localizedServices = services.map((s, i) => ({ ...s, ...t.servicesData[i] }));

  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden w-full h-screen overflow-hidden">
        <div className="h-[25vh] relative text-secondary">
          <Image
            src={WorkImg}
            alt="rk"
            quality={100}
            className="absolute w-full h-full object-cover z-[-1] brightness-[.4]"
          />
          <div className="absolute inset-0 z-[-1] backdrop-blur-sm"></div>

          <div className="max-w-sm h-full p-8 flex flex-col justify-center">
            <h2 className="h2 mb-2">{t.servicesPage.heading}</h2>
            <p className="max-w-sm md:max-w-md">{t.servicesPage.description}</p>
          </div>
        </div>

        <div className="h-[75vh] p-10 flex flex-col items-start justify-between overflow-hidden">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-5">
              <h2 className="h2">{localizedServices[mobileActiveService].title}</h2>
              <div className="w-full flex items-center">
                <Image
                  src={localizedServices[mobileActiveService].image}
                  alt="website-img"
                  className="mb-5 -mr-2 w-[120px] h-[160px] object-cover object-center"
                />

                <Image
                  src={localizedServices[mobileActiveService].image}
                  alt="website-img"
                  className="mt-0 -ml-2 w-[160px] h-[120px] object-cover object-center"
                />
              </div>
            </div>

            <p className="text-sm tracking-tight max-w-sm mb-6">
              {localizedServices[mobileActiveService].desc}
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3">
              {localizedServices[mobileActiveService].tools.map((tool, index) => (
                <Button
                  key={index}
                  variant="outline"
                  title={tool}
                  className="text-xs !cursor-auto"
                />
              ))}
            </div>
          </div>

          <div className="w-fit">
            <BottomDrawer
              menu={localizedServices.map(({ title }) => title)}
              onClick={(i) => setMobileActiveService(i)}
              label={t.servicesPage.viewMore}
            />
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex w-full h-screen items-center justify-center">
        <div className="w-1/2 h-full">
          <div className="w-full h-full pr-5 flex flex-col items-end justify-center">
            {localizedServices.map((item, index) => (
              <motion.div
                key={index}
                className={`h4 font-thin px-5 py-2 cursor-pointer ${
                  activeService === index
                    ? "bg-gradient-primary"
                    : "bg-transparent"
                } ${
                  activeService === index ? "text-secondary" : "text-primary"
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onClick={() => setActiveService(index)}
              >
                {item.title}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-1/2 h-full relative flex items-center bg-black/80">
          <motion.div
            key={activeService}
            className="absolute inset-0"
            initial={{ opacity: 0, backgroundColor: "black" }}
            animate={{ opacity: 1, backgroundColor: "transparent" }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={activeService === -1 ? WorkImg : localizedServices[activeService].image}
              alt="service_img"
              className="w-full h-full object-cover brightness-[.4] blur-sm"
            />
          </motion.div>

          <div className="min-h-[560px] pl-8 flex flex-col items-start justify-center text-left text-stone-200 z-[2]">
            <motion.h2
              className="h2 mb-6"
              key={activeService === -1 ? "heading" : localizedServices[activeService].title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeService === -1
                ? t.servicesPage.heading
                : localizedServices[activeService].title}
            </motion.h2>

            <motion.div className="max-w-sm md:max-w-lg" key={activeService}>
              {activeService === -1 ? (
                <motion.p
                  key={activeService + "0"}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="tracking-tight text-lg mb-8"
                >
                  {t.servicesPage.description}
                </motion.p>
              ) : (
                <>
                  <motion.p
                    key={activeService + "p"}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="tracking-tight text-lg mb-8"
                  >
                    {localizedServices[activeService].desc}
                  </motion.p>

                  <div className="flex flex-wrap items-center justify-start gap-3">
                    {localizedServices[activeService].tools.map((tool, index) => (
                      <motion.div
                        key={activeService + "button" + index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Button
                          key={index}
                          variant="outline-secondary"
                          title={tool}
                          className="text-sm"
                        />
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>

            {activeService !== -1 && (
              <motion.div
                key="exit-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-[5%] right-[5%]"
              >
                <Button
                  variant="outline-secondary"
                  IconLeft={icons.arrow_left}
                  onClick={() => setActiveService(-1)}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
