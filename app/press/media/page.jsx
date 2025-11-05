"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Newspaper, Calendar } from "lucide-react";

const translations = {
  tr: {
    title: "Medya",
    subtitle: "Basında biz",
    readMore: "Devamını Oku",
    news1Title: "Seri Makina Yeni Üretim Tesisini Açtı",
    news1Date: "15 Mart 2024",
    news1Excerpt:
      "Şirketimiz, modern teknoloji ile donatılmış yeni üretim tesisini hizmete açtı...",
    news2Title: "Uluslararası Başarı: Avrupa Pazarına Açılım",
    news2Date: "8 Şubat 2024",
    news2Excerpt:
      "Seri Makina, Avrupa pazarında önemli bir anlaşma imzaladı...",
    news3Title: "Yeni Nesil Otomatik Makinalar Tanıtıldı",
    news3Date: "22 Ocak 2024",
    news3Excerpt:
      "Ar-Ge çalışmalarımızın ürünü olan yeni nesil makinalarımızı tanıttık...",
  },
  en: {
    title: "Media",
    subtitle: "In the press",
    readMore: "Read More",
    news1Title: "Seri Makina Opens New Production Facility",
    news1Date: "March 15, 2024",
    news1Excerpt:
      "Our company opened its new production facility equipped with modern technology...",
    news2Title: "International Success: Expansion to European Market",
    news2Date: "February 8, 2024",
    news2Excerpt:
      "Seri Makina signed an important agreement in the European market...",
    news3Title: "New Generation Automatic Machines Introduced",
    news3Date: "January 22, 2024",
    news3Excerpt:
      "We introduced our new generation machines, the product of our R&D work...",
  },
};

export default function Media() {
  const [language, setLanguage] = useState("tr");
  const t = translations[language];

  const news = [
    {
      title: t.news1Title,
      date: t.news1Date,
      excerpt: t.news1Excerpt,
      image: "/modern-factory-opening-ceremony.jpg",
    },
    {
      title: t.news2Title,
      date: t.news2Date,
      excerpt: t.news2Excerpt,
      image: "/business-handshake-international.jpg",
    },
    {
      title: t.news3Title,
      date: t.news3Date,
      excerpt: t.news3Excerpt,
      image: "/modern-industrial-machinery-presentation.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((item, index) => (
              <article
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                  />
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold">
                      <Newspaper size={18} />
                      {t.readMore}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
