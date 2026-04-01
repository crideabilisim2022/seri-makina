"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderImages = [
  "/img/hero/8.JPG",
  "/img/hero/2.jpg",
  "/img/hero/3.jpg",
  "/img/jumbo-sloter/5.jpeg",
  "/img/hero/jumbo-hero1.png",
  "/img/hero/jumbo-hero2.png",
];

function isNoCropHero(src) {
  return src.toLowerCase().includes("8.jpg");
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 60) nextSlide();
    if (diff < -60) prevSlide();

    setTouchStart(null);
  };

  return (
    <section
      id="home"
      className="relative h-[90svh] min-h-[90svh] w-full overflow-hidden scroll-mt-20 mt-20"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {sliderImages.map((src, index) => {
        const noCrop = isNoCropHero(src);
        return (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === currentSlide ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            {noCrop && (
              <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                priority={index === 0}
                aria-hidden
                className="z-0 pointer-events-none object-cover object-center blur-[10px] scale-100 opacity-90"
              />
            )}
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className={
                noCrop
                  ? "z-[1] object-contain object-center"
                  : "object-cover object-center"
              }
            />
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-red-600 w-6" : "bg-black/40 w-2"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Left / Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </section>
  );
}