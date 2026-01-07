"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/context/LanguageContext"; // ✅ eklendi
import CursorLogo from "@/components/cursor-logo";
export default function ClientLayout({ children }) {
  const { language, setLanguage } = useLanguage(); // ✅ context'ten çekiyoruz

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <CursorLogo />
      <main className="min-h-screen">{children}</main>
      <Footer language={language} />
    </>
  );
}
