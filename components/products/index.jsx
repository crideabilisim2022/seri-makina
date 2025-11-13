"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  tr: {
    title: "Ürünlerimiz",
    subtitle: "Oluklu mukavva ambalaj sektörü için geniş makina yelpazesi",
    viewCatalog: "Katalog İncele",
    fullyAutomatic: "Tam Otomatik",
    semiAutomatic: "Yarı Otomatik",
    sloterMachine: "Sloter & İnline Makinası",
    jumboSloter: "Jumbo Sloter Makinası",
    miniInline: "Mini İnline Makinası",
    boxFoldingGluing: "Kutu Katlama ve Yapıştırma Makinası",
    groovingMachine: "Rilli Çizgi Makinası",
    manualStitching: "Manuel Dikiş Makinası",
    channelOpening: "Kanal Açma Makinası",
    cuttingMachine: "Kesim Makinası (Vargel)",
    boxStitching: "Koli Dikiş Makinası",
    twoColorPrinting: "Çift Renk Baskı Makinası",
    boxStitchingGluing: "Koli Dikiş ve Yapıştırma Makinası",
    desc: "Yüksek kaliteli üretim çözümleri",
  },
  en: {
    title: "Our Products",
    subtitle:
      "Wide range of machinery for the corrugated cardboard packaging industry",
    viewCatalog: "View Catalog",
    fullyAutomatic: "Fully Automatic",
    semiAutomatic: "Semi-Automatic",
    sloterMachine: "Slotter & Inline Machine",
    jumboSloter: "Jumbo Slotter Machine",
    miniInline: "Mini Inline Machine",
    boxFoldingGluing: "Box Folding and Gluing Machine",
    groovingMachine: "Grooving Machine",
    manualStitching: "Manual Stitching Machine",
    channelOpening: "Channel Opening Machine",
    cuttingMachine: "Cutting Machine (Vargel)",
    boxStitching: "Box Stitching Machine",
    twoColorPrinting: "Two Color Printing Machine",
    boxStitchingGluing: "Box Stitching and Gluing Machine",
    desc: "High quality production solutions",
  },
};

export default function Products() {
  const { language } = useLanguage();

  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState("automatic");

  const automaticProducts = [
    {
      name: t.sloterMachine,
      image: "img/slotter/1.jpg",
      slug: "sloter",
    },

    {
      name: t.jumboSloter,
      image: "img/jumbo-sloter/1.jpg",
      slug: "jumbo-sloter",
    },
    {
      name: t.miniInline,
      image: "img/mini-inline/1.jpg",
      slug: "mini-inline",
    },
    {
      name: t.boxFoldingGluing,
      image: "img/kutu-katlama/2.jpg",
      slug: "box-folding",
    },
  ];

  const semiAutomaticProducts = [
    {
      name: t.groovingMachine,
      image: "img/rill-cizgi-mak/2.jpg",
      slug: "grooving",
    },
    {
      name: t.manualStitching,
      image: "img/manuel-dikis/2.png",
      slug: "manual-stitching",
    },
    {
      name: t.channelOpening,
      image: "img/kanal-acma/1.jpg",
      slug: "channel-opening",
    },
    {
      name: t.cuttingMachine,
      image: "img/cutting/1.jpg",
      slug: "cutting",
    },
    {
      name: t.boxFoldingGluing,
      image: "semi automatic box folding machine",
      slug: "box-folding",
    },
    {
      name: t.boxStitching,
      image: "box stitching machine",
      slug: "box-stitching",
    },
    {
      name: t.twoColorPrinting,
      image: "two color printing machine for boxes",
      slug: "two-color-printing",
    },
    {
      name: t.boxStitchingGluing,
      image: "box stitching and gluing machine",
      slug: "box-stitching-gluing",
    },
  ];

  const displayProducts =
    activeFilter === "automatic" ? automaticProducts : semiAutomaticProducts;

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => setActiveFilter("automatic")}
              className={`${
                activeFilter === "automatic"
                  ? "bg-accent hover:bg-accent/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {t.fullyAutomatic}
            </Button>
            <Button
              size="lg"
              onClick={() => setActiveFilter("semi-automatic")}
              className={`${
                activeFilter === "semi-automatic"
                  ? "bg-accent hover:bg-accent/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {t.semiAutomatic}
            </Button>
          </div>

          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <a
              href="http://serimakina.com/katalog/katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.viewCatalog}
              <ExternalLink className="ml-2" size={18} />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayProducts.map((product, index) => (
            <Link
              key={index}
              href={`/products?category=${activeFilter}&product=${product.slug}`}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={`/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
