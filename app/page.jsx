"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Videos from "@/components/videos";
import FairsPreview from "@/components/fairs-preview";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [language, setLanguage] = useState("tr");
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero language={language} />
      <About language={language} />
      <Products language={language} />
      <Videos language={language} />
      <FairsPreview language={language} />
      <Contact language={language} />
    </div>
  );
}
