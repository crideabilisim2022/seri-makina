"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ClientLayout({ children }) {
  const [language, setLanguage] = useState("tr");

  // Sayfa yüklendiğinde önceki dili localStorage'dan al
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
  }, []);

  // Dil değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main className="min-h-screen">{children}</main>
      <Footer language={language} />
    </>
  );
}
