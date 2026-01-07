"use client";

import { useEffect, useRef } from "react";

export default function CursorLogo() {
  const logoRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.12; // normal takip hızı

    const move = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (logoRef.current) {
        logoRef.current.style.transform = `
          translate3d(${currentX}px, ${currentY}px, 0)
          translate(-50%, -50%)
        `;
      }

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
    <div
      ref={logoRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]
             w-12 h-12 opacity-50 rounded-full overflow-hidden"
    >
      <img
        src="/img/logo/logo.png"
        alt="Cursor Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
