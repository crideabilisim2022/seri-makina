"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const translations = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    products: "Ürünler",
    fullyAutomatic: "Tam Otomatik",
    sloterMachine: "Sloter Makinası",
    // inlineMachine: "İnline Makinası",
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
    products: "Products",
    fullyAutomatic: "Fully Automatic",
    sloterMachine: "Slotter Machine",
    // inlineMachine: "Inline Machine",
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/seri_makina.png" // logo dosyanın yolu (public klasörüne koy)
                alt="Seri Makina Logo" // erişilebilirlik için açıklama
                width={250} // logonun genişliği
                height={80} // logonun yüksekliği
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
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-accent transition-colors"
            >
              {t.about}
            </button>

            <div className="relative group">
              <button
                onClick={() => scrollToSection("products")}
                className="text-sm hover:text-accent transition-colors flex items-center gap-1"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                {t.products}
                <ChevronDown size={16} />
              </button>
              {productsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[250px]"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  {/* Fully Automatic Submenu */}
                  <div
                    className="relative group/sub"
                    onMouseEnter={() => setAutomaticOpen(true)}
                    onMouseLeave={() => setAutomaticOpen(false)}
                  >
                    <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      {t.fullyAutomatic}
                      <ChevronDown size={16} className="-rotate-90" />
                    </button>
                    {automaticOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[280px]">
                        <Link
                          href="/products?category=automatic&product=sloter"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.sloterMachine}
                        </Link>
                        <Link
                          href="/products?category=automatic&product=inline"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.inlineMachine}
                        </Link>
                        <Link
                          href="/products?category=automatic&product=jumbo-sloter"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.jumboSloter}
                        </Link>
                        <Link
                          href="/products?category=automatic&product=mini-inline"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.miniInline}
                        </Link>
                        <Link
                          href="/products?category=automatic&product=box-folding"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.boxFoldingGluing}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Semi-Automatic Submenu */}
                  <div
                    className="relative group/sub"
                    onMouseEnter={() => setSemiAutomaticOpen(true)}
                    onMouseLeave={() => setSemiAutomaticOpen(false)}
                  >
                    <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                      {t.semiAutomatic}
                      <ChevronDown size={16} className="-rotate-90" />
                    </button>
                    {semiAutomaticOpen && (
                      <div className="absolute left-full top-0 ml-1 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[300px]">
                        <Link
                          href="/products?category=semi-automatic&product=grooving"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.groovingMachine}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=manual-stitching"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.manualStitching}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=channel-opening"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.channelOpening}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=cutting"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.cuttingMachine}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=box-folding"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.boxFoldingGluingSemi}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=box-stitching"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.boxStitching}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=two-color-printing"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.twoColorPrinting}
                        </Link>
                        <Link
                          href="/products?category=semi-automatic&product=box-stitching-gluing"
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {t.boxStitchingGluing}
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

            <div className="relative group">
              <button
                className="text-sm hover:text-accent transition-colors flex items-center gap-1"
                onMouseEnter={() => setPressOpen(true)}
                onMouseLeave={() => setPressOpen(false)}
              >
                {t.press}
                <ChevronDown size={16} />
              </button>
              {pressOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-card text-card-foreground rounded-lg shadow-lg py-2 min-w-[200px]"
                  onMouseEnter={() => setPressOpen(true)}
                  onMouseLeave={() => setPressOpen(false)}
                >
                  <Link
                    href="/press/media"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {t.media}
                  </Link>
                  <Link
                    href="/press/fairs"
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
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

          {/* Language Switcher & Mobile Menu */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/10">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                {t.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                {t.about}
              </button>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-left text-sm font-semibold hover:text-accent transition-colors"
                >
                  {t.products}
                </button>
                <div className="pl-4 flex flex-col gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.fullyAutomatic}
                  </span>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link
                      href="/products?category=automatic&product=sloter"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.sloterMachine}
                    </Link>
                    <Link
                      href="/products?category=automatic&product=inline"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.inlineMachine}
                    </Link>
                    <Link
                      href="/products?category=automatic&product=jumbo-sloter"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.jumboSloter}
                    </Link>
                    <Link
                      href="/products?category=automatic&product=mini-inline"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.miniInline}
                    </Link>
                    <Link
                      href="/products?category=automatic&product=box-folding"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.boxFoldingGluing}
                    </Link>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground mt-2">
                    {t.semiAutomatic}
                  </span>
                  <div className="pl-4 flex flex-col gap-2">
                    <Link
                      href="/products?category=semi-automatic&product=grooving"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.groovingMachine}
                    </Link>
                    <Link
                      href="/products?category=semi-automatic&product=manual-stitching"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.manualStitching}
                    </Link>
                    <Link
                      href="/products?category=semi-automatic&product=channel-opening"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.channelOpening}
                    </Link>
                    <Link
                      href="/products?category=semi-automatic&product=cutting"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.cuttingMachine}
                    </Link>
                    <Link
                      href="/products?category=semi-automatic&product=box-folding"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.boxFoldingGluingSemi}
                    </Link>
                    <Link
                      href="/products?category=semi-automatic&product=box-stitching"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.boxStitching}
                    </Link>
                    <Link
                      href="/products?category=semi-automatic&product=two-color-printing"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.twoColorPrinting}
                    </Link>
                    <Link
                      href="/products?category=semi-automatic&product=box-stitching-gluing"
                      className="text-sm hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.boxStitchingGluing}
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/second-hand"
                className="text-left py-2 hover:text-accent transition-colors"
              >
                {t.secondHand}
              </Link>
              <button
                onClick={() => scrollToSection("videos")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                {t.videos}
              </button>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">{t.press}</span>
                <Link
                  href="/press/media"
                  className="text-left py-2 pl-4 hover:text-accent transition-colors text-sm"
                >
                  {t.media}
                </Link>
                <Link
                  href="/press/fairs"
                  className="text-left py-2 pl-4 hover:text-accent transition-colors text-sm"
                >
                  {t.fairs}
                </Link>
              </div>
              <Link
                href="/job-application"
                className="text-left py-2 hover:text-accent transition-colors"
              >
                {t.jobApplication}
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 hover:text-accent transition-colors"
              >
                {t.contact}
              </button>
              <a
                href="http://serimakina.com/katalog/katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left py-2 hover:text-accent transition-colors"
              >
                {t.catalog}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
