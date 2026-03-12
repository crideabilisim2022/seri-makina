"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Newspaper, Calendar } from "lucide-react";

const translations = {
  tr: {
    title: "Medya",
    subtitle: "Basında biz",
    readMore: "Devamını Oku",
    news1Title: "Seri Makina Ar-Ge Merkezi ile Geleceği Şekillendiriyor",
    news1Date: "15 Mart 2024",
    news1Excerpt:
      "Seri Makina, yeni Ar-Ge merkezi ve mühendislik ekibiyle oluklu mukavva makinalarında verimlilik ve otomasyon odaklı projelere hız verdi.",
    news2Title: "Seri Makina Basında: Sektörün Güvenilir Çözüm Ortağı",
    news2Date: "8 Şubat 2024",
    news2Excerpt:
      "Önde gelen sektör yayınlarında yer alan Seri Makina, geniş ürün gamı ve satış sonrası desteğiyle ulusal ve uluslararası müşterilerin tercihi olmaya devam ediyor.",
    news3Title: "Seri Makina Ekibi Dünya ile Buluşuyor",
    news3Date: "22 Ocak 2024",
    news3Excerpt:
      "Fuarlar, fabrika ziyaretleri ve müşteri organizasyonlarıyla Seri Makina ekibi, 30'dan fazla ülkede iş ortaklarıyla bir araya geliyor.",
    news4Title: "7 Kıta 36 Ülkeye İhracat",
    news4Date: "10 Kasım 2023",
    news4Excerpt:
      "Genel Müdür Ayhan Soral, 7 kıtada 36 ülkeye ulaşan ihracat ağı ve Seri Makina markasının küresel konumlanması hakkında röportaj verdi.",
    news5Title: "Tornacı Muharrem’den Dünya Markasına",
    news5Date: "7 Temmuz 2005",
    news5Excerpt:
      "Dünya Gazetesi haberi, kurucu Muharrem Soral'ın atölyeden başlayıp makinalarını 17 ülkeye ihraç eden bir sanayi markasına uzanan girişimcilik hikâyesini anlatıyor.",
  },
  en: {
    title: "Media",
    subtitle: "In the press",
    readMore: "Read More",
    news1Title: "Seri Makina Shapes the Future with Its R&D Center",
    news1Date: "March 15, 2024",
    news1Excerpt:
      "With its new R&D center and engineering team, Seri Makina accelerates projects focused on efficiency and automation in corrugated machinery.",
    news2Title: "Seri Makina in the Press: A Trusted Partner of the Industry",
    news2Date: "February 8, 2024",
    news2Excerpt:
      "Featured in leading industry publications, Seri Makina continues to be the choice of national and international customers with its wide product range and after-sales support.",
    news3Title: "Seri Makina Team Meets the World",
    news3Date: "January 22, 2024",
    news3Excerpt:
      "Through fairs, factory visits and customer events, the Seri Makina team meets its business partners in more than 30 countries.",
    news4Title: "Exports to 36 Countries on 7 Continents",
    news4Date: "November 10, 2023",
    news4Excerpt:
      "General Manager Ayhan Soral gave an interview about Seri Makina's export network reaching 36 countries across 7 continents and the brand's global positioning.",
    news5Title: "From Turner Muharrem to a Global Brand",
    news5Date: "July 7, 2005",
    news5Excerpt:
      "The article in Dünya Newspaper tells the entrepreneurial story of founder Muharrem Soral, who grew from a small workshop to exporting machines to 17 countries.",
  },
};

export default function Media() {
  const { language } = useLanguage();
  const t = translations[language] || translations.tr;

  const news = [
    {
      title: t.news1Title,
      date: t.news1Date,
      excerpt: t.news1Excerpt,
      image: "/img/news/seri_arge.jpg",
    },
    {
      title: t.news2Title,
      date: t.news2Date,
      excerpt: t.news2Excerpt,
      image: "/img/news/seri_basin.jpg",
    },
    {
      title: t.news3Title,
      date: t.news3Date,
      excerpt: t.news3Excerpt,
      image: "/img/news/toplu2.jpg",
    },
    {
      title: t.news4Title,
      date: t.news4Date,
      excerpt: t.news4Excerpt,
      image: "/img/news/ayhan_soral.jpg",
    },
    {
      title: t.news5Title,
      date: t.news5Date,
      excerpt: t.news5Excerpt,
      image: "/img/news/res3.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
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
