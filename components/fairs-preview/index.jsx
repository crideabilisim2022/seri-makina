"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const translations = {
  tr: {
    title: "Fuarlar",
    subtitle: "2009'dan bu yana katıldığımız ulusal ve uluslararası fuarlar",
    viewAll: "Tüm Fuarları Görüntüle",
    recentFairs: "Son Fuarlar",
  },
  en: {
    title: "Fairs",
    subtitle: "National and international fairs we have attended since 2009",
    viewAll: "View All Fairs",
    recentFairs: "Recent Fairs",
  },
};

const recentFairs = {
  tr: [
    {
      year: 2025,
      name: "2025 yılı fuarları",
      image: "img/fairs/2025/1.jpeg",
    },
    {
      year: 2024,
      name: "2024 yılı fuarları",
      image: "img/fairs/2024/19.jpeg",
    },
    {
      year: 2023,
      name: "2023 yılı fuarları",
      image: "img/fairs/2023/8.jpeg",
    },
  ],
  en: [
    {
      year: 2025,
      name: "Fairs of 2025",
      image: "img/fairs/2025/1.jpeg",
    },
    {
      year: 2024,
      name: "Fairs of 2024",
      image: "img/fairs/2024/19.jpeg",
    },
    {
      year: 2023,
      name: "Fairs of 2023",
      image: "img/fairs/2023/8.jpeg",
    },
  ],
};

export default function FairsPreview({ language }) {
  const t = translations[language];
  const fairs = recentFairs[language];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="text-accent" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {fairs.map((fair, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={fair.image}
                  alt={fair.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-accent font-bold mb-2">{fair.year}</div>
                <h3 className="text-xl font-bold">{fair.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/press/fairs">
              {t.viewAll}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
