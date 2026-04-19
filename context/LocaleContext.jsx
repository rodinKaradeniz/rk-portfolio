"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import en from "@/locales/en";
import tr from "@/locales/tr";

const locales = { en, tr };

const LocaleContext = createContext();

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "en" || saved === "tr") setLocale(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      toggleLocale: () => setLocale((prev) => (prev === "en" ? "tr" : "en")),
      t: locales[locale],
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};
