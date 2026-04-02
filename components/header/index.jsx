"use client";

import { useState, useRef, useEffect } from "react";
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
    sloterMachine: "Sloter & İnline Makinası",
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
    rus: "Каталог",
  },
  en: {
    home: "Home",
    about: "About Us",
    lightingText: "Lighting Text",
    products: "Products",
    fullyAutomatic: "Fully Automatic",
    sloterMachine: "Slotter & Inline Machine",
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
    secondHand: "Second Hand Machine",
    videos: "Videos",
    press: "Press",
    media: "Media",
    fairs: "Fairs",
    jobApplication: "HR",
    contact: "Contact",
    catalog: "Catalog",
    rus:"Каталог"
  },
};

export default function Header({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [automaticOpen, setAutomaticOpen] = useState(false);
  const [semiAutomaticOpen, setSemiAutomaticOpen] = useState(false);
  const [pressOpen, setPressOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const t = translations[language];

  const wrapperRef = useRef(null);

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

  // Tüm alt menüleri kapatma (dışa tıklayınca)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setAboutOpen(false);
        setProductsOpen(false);
        setAutomaticOpen(false);
        setSemiAutomaticOpen(false);
        setPressOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-border/10">
      <div className="container mx-auto px-4" ref={wrapperRef}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/logo4.png"
                alt="Seri Makina Logo"
                width={250}
                height={80}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-sm hover:text-accent transition-colors">
              {t.home}
            </button>

            {/* Hakkımızda */}
            <div className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="text-sm hover:text-accent transition-colors flex items-center gap-1"
              >
                {t.about}
                <ChevronDown size={16} className={`${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[220px]">
                  <Link href="/about" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                    {t.about}
                  </Link>
                  <Link href="/kvkk" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                    {t.lightingText}
                  </Link>
                </div>
              )}
            </div>

            {/* Ürünler */}
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-sm hover:text-accent transition-colors flex items-center gap-1"
              >
                {t.products}
                <ChevronDown size={16} className={`${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[250px]">
                  {/* Fully Automatic */}
                  <div className="relative">
                    <button
                      onClick={() => setAutomaticOpen(!automaticOpen)}
                      className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {t.fullyAutomatic}
                      <ChevronDown size={16} className={`${automaticOpen ? "rotate-180" : "-rotate-90"}`} />
                    </button>
                    {automaticOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[250px]">
                        <Link href="/products?category=automatic&product=sloter" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.sloterMachine}</Link>
                        <Link href="/products?category=automatic&product=jumbo-sloter" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.jumboSloter}</Link>
                        <Link href="/products?category=automatic&product=mini-inline" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.miniInline}</Link>
                        <Link href="/products?category=automatic&product=box-folding" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.boxFoldingGluing}</Link>
                      </div>
                    )}
                  </div>

                  {/* Semi-Automatic */}
                  <div className="relative">
                    <button
                      onClick={() => setSemiAutomaticOpen(!semiAutomaticOpen)}
                      className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {t.semiAutomatic}
                      <ChevronDown size={16} className={`${semiAutomaticOpen ? "rotate-180" : "-rotate-90"}`} />
                    </button>
                    {semiAutomaticOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[260px]">
                        <Link href="/products?category=semi-automatic&product=grooving" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.groovingMachine}</Link>
                        <Link href="/products?category=semi-automatic&product=manual-stitching" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.manualStitching}</Link>
                        <Link href="/products?category=semi-automatic&product=box-stitching" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.boxStitching}</Link>
                        <Link href="/products?category=semi-automatic&product=channel-opening" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.channelOpening}</Link>
                        <Link href="/products?category=semi-automatic&product=cutting" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.cuttingMachine}</Link>
                        <Link href="/products?category=semi-automatic&product=box-folding" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.boxFoldingGluingSemi}</Link>
                        <Link href="/products?category=semi-automatic&product=two-color-printing" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.twoColorPrinting}</Link>
                        <Link href="/products?category=semi-automatic&product=box-stitching-gluing" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.boxStitchingGluing}</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Diğer linkler */}
            <Link href="/second-hand" className="text-sm hover:text-accent transition-colors">{t.secondHand}</Link>
            <button onClick={() => scrollToSection("videos")} className="text-sm hover:text-accent transition-colors">{t.videos}</button>

            {/* Basın */}
            <div className="relative">
              <button onClick={() => setPressOpen(!pressOpen)} className="text-sm hover:text-accent transition-colors flex items-center gap-1">
                {t.press}
                <ChevronDown size={16} className={`${pressOpen ? "rotate-180" : ""}`} />
              </button>
              {pressOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[200px]">
                  <Link href="/press/media" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.media}</Link>
                  <Link href="/press/fairs" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">{t.fairs}</Link>
                </div>
              )}
            </div>

            <Link href="/job-application" className="text-sm hover:text-accent transition-colors">{t.jobApplication}</Link>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-accent transition-colors">{t.contact}</button>

            <a href="/katalog.pdf" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">{t.catalog}</a>
            <a href="/rus2_compressed.pdf" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">{t.rus}</a>
          </nav>

          {/* Dil ve Mobil Menü */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary/10 rounded-lg p-1">
              <button onClick={() => setLanguage("tr")} className={`px-3 py-1 rounded text-sm transition-colors ${language === "tr" ? "bg-accent text-accent-foreground" : "hover:bg-secondary/20"}`}>TR</button>
              <button onClick={() => setLanguage("en")} className={`px-3 py-1 rounded text-sm transition-colors ${language === "en" ? "bg-accent text-accent-foreground" : "hover:bg-secondary/20"}`}>EN</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}