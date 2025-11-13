"use client";

import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const translations = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    lightingText: "Aydınlatma Metni",
    products: "Ürünler",
    fullyAutomatic: "Tam Otomatik",
    sloterMachine: "Sloter Makinası",
    jumboSloter: "Jumbo Sloter Makinası",
    miniInline: "Mini İnline Makinası",
    boxFoldingGluing: "Kutu Katlama ve Yapıştırma Makinası",
    semiAutomatic: "Yarı Otomatik",
    groovingMachine: "Rilli Çizgi Makinası",
    manualStitching: "Manuel Dikiş Makinası",
    channelOpening: "Kanal Açma Makinası",
    cuttingMachine: "Kesim Makinası (Vargel)",
    boxFoldingGluingSemi: "Kutu Katlama ve Yapıştırma Makinası",
    boxStitching: "Koli Dikiş Makinası",
    twoColorPrinting: "Çift Renk Baskı Makinası",
    boxStitchingGluing: "Koli Dikiş ve Yapıştırma Makinası",
    secondHand: "2.El",
    videos: "Videolar",
    press: "Basın",
    media: "Medya",
    fairs: "Fuarlar",
    jobApplication: "İK",
    contact: "İletişim",
    catalog: "Katalog",
  },
  en: {
    home: "Home",
    about: "About Us",
    lightingText: "Lighting Text",
    products: "Products",
    fullyAutomatic: "Fully Automatic",
    sloterMachine: "Slotter Machine",
    jumboSloter: "Jumbo Slotter Machine",
    miniInline: "Mini Inline Machine",
    boxFoldingGluing: "Box Folding and Gluing Machine",
    semiAutomatic: "Semi-Automatic",
    groovingMachine: "Grooving Machine",
    manualStitching: "Manual Stitching Machine",
    channelOpening: "Channel Opening Machine",
    cuttingMachine: "Cutting Machine (Vargel)",
    boxFoldingGluingSemi: "Box Folding and Gluing Machine",
    boxStitching: "Box Stitching Machine",
    twoColorPrinting: "Two Color Printing Machine",
    boxStitchingGluing: "Box Stitching and Gluing Machine",
    secondHand: "Second Hand",
    videos: "Videos",
    press: "Press",
    media: "Media",
    fairs: "Fairs",
    jobApplication: "HR",
    contact: "Contact",
    catalog: "Catalog",
  },
};

export default function Header({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [automaticOpen, setAutomaticOpen] = useState(false);
  const [semiAutomaticOpen, setSemiAutomaticOpen] = useState(false);
  const [pressOpen, setPressOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const productsTimeout = useRef(null);
  const pressTimeout = useRef(null);
  const aboutTimeout = useRef(null);

  const router = useRouter();
  const pathname = usePathname();
  const t = translations[language];

  const scrollToSection = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  // Hover open/close helpers (with delay)
  const handleOpen = (setFn, ref) => {
    clearTimeout(ref.current);
    setFn(true);
  };
  const handleClose = (setFn, ref) => {
    ref.current = setTimeout(() => setFn(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/seri_makina.png"
                alt="Seri Makina Logo"
                width={250}
                height={80}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm hover:text-accent transition-colors"
            >
              {t.home}
            </button>

            {/* Hakkımızda with submenu */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen(setAboutOpen, aboutTimeout)}
              onMouseLeave={() => handleClose(setAboutOpen, aboutTimeout)}
            >
              <button className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                {t.about}
                <ChevronDown size={16} />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[220px]">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {t.about}
                  </button>
                  <Link
                    href="/kvkk"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {t.lightingText}
                  </Link>
                </div>
              )}
            </div>

            {/* Ürünler */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen(setProductsOpen, productsTimeout)}
              onMouseLeave={() => handleClose(setProductsOpen, productsTimeout)}
            >
              <button className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                {t.products}
                <ChevronDown size={16} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[250px]">
                  {/* Fully Automatic */}
                  <div
                    className="relative group/sub"
                    onMouseEnter={() => setAutomaticOpen(true)}
                    onMouseLeave={() => setAutomaticOpen(false)}
                  >
                    <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                      {t.fullyAutomatic}
                      <ChevronDown size={16} className="-rotate-90" />
                    </button>
                    {automaticOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[250px]">
                        <Link
                          href="/products?category=automatic&product=sloter"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.sloterMachine}
                        </Link>
                        <Link
                          href="/products?category=automatic&product=jumbo-sloter"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.jumboSloter}
                        </Link>
                        <Link
                          href="/products?category=automatic&product=mini-inline"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.miniInline}
                        </Link>
                        <Link
                          href="/products?category=automatic&product=box-folding"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.boxFoldingGluing}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Semi-Automatic */}
                  <div
                    className="relative group/sub"
                    onMouseEnter={() => setSemiAutomaticOpen(true)}
                    onMouseLeave={() => setSemiAutomaticOpen(false)}
                  >
                    <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                      {t.semiAutomatic}
                      <ChevronDown size={16} className="-rotate-90" />
                    </button>
                    {semiAutomaticOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[260px]">
                        <Link
                          href="/products?category=semi-automatic&product=grooving"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.groovingMachine}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=manual-stitching"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.manualStitching}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=box-stitching"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.boxStitching}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/second-hand"
              className="text-sm hover:text-accent transition-colors"
            >
              {t.secondHand}
            </Link>

            <button
              onClick={() => scrollToSection("videos")}
              className="text-sm hover:text-accent transition-colors"
            >
              {t.videos}
            </button>

            {/* Basın */}
            <div
              className="relative"
              onMouseEnter={() => handleOpen(setPressOpen, pressTimeout)}
              onMouseLeave={() => handleClose(setPressOpen, pressTimeout)}
            >
              <button className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                {t.press}
                <ChevronDown size={16} />
              </button>
              {pressOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[200px]">
                  <Link
                    href="/press/media"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {t.media}
                  </Link>
                  <Link
                    href="/press/fairs"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {t.fairs}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/job-application"
              className="text-sm hover:text-accent transition-colors"
            >
              {t.jobApplication}
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-accent transition-colors"
            >
              {t.contact}
            </button>
            <a
              href="http://serimakina.com/katalog/katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              {t.catalog}
            </a>
          </nav>

          {/* Dil Değiştirici ve Mobil Menü */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary/10 rounded-lg p-1">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === "tr"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-secondary/20"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === "en"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-secondary/20"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
