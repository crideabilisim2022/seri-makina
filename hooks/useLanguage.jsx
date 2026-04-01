"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  // LocalStorage'dan dili yükle
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved) setLanguage(saved);
  }, []);

  // Dil değişince kaydet
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
