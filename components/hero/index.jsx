"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sliderImages = [
  "/img/hero/7.jpeg",
  "/img/hero/2.jpg",
  "/img/hero/3.jpg",
  "/img/hero/4.jpg",
  "/img/hero/5.jpg",
  "/img/hero/6.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
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
      className="relative h-[140svh] w-full overflow-hidden mt-15"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {sliderImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 h-full w-full ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Main Image */}
          {index === 0 && (
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-top h-full w-full"
            />
          )}

          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover object-center h-full w-full"
          />
        </div>
      ))}

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
    </section>
  );
}
