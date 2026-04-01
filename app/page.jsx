"use client";

import { useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Videos from "@/components/videos";
import FairsPreview from "@/components/fairs-preview";
import Contact from "@/components/contact";

export default function Home() {
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
      <Hero />
      <Products />
      <Videos />
      <FairsPreview />
      <Contact />
    </div>
  );
}
