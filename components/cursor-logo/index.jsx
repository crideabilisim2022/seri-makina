"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorLogo() {
  const logoRef = useRef(null);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.12;

    const move = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (logoRef.current) {
        logoRef.current.style.transform = `
          translate3d(${currentX}px, ${currentY}px, 0)
          translate(-50%, -50%)
        `;
      }

      // 🦋 trail ekleme
      setTrail((prev) => {
        const newTrail = [...prev, { x: currentX, y: currentY }];
        return newTrail.slice(-10); // kaç tane kelebek olacak
      });

      requestAnimationFrame(move);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 🦋 KELEBEK TRAIL */}
      {trail.map((item, i) => (
        <img
          key={i}
          src="/img/logo/logo.png" // 👉 buraya kelebek görseli koy
          className="pointer-events-none fixed z-[9998] w-5 h-5 opacity-70"
          style={{
            left: item.x,
            top: item.y,
            transform: `translate(-50%, -50%) scale(${i / trail.length})`,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* 🎯 ANA LOGO (AYNI KALDI) */}
      <div
        ref={logoRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]
                   w-8 h-8 opacity-70 rounded-full overflow-hidden"
      >
        <img src="/img/logo/logo.png" alt="Cursor Logo" />
      </div>
    </>
  );
}