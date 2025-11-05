"use client";

import { Factory, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const translations = {
  tr: {
    title: "Hakkımızda",
    subtitle:
      "Seri Makina olarak, oluklu mukavva ambalaj makinaları imalatında uzmanlaşmış bir firmayız",
    description:
      "Yılların deneyimi ve teknik bilgi birikimimizle, müşterilerimize en kaliteli ve güvenilir çözümleri sunuyoruz. Modern üretim tesisimizde, endüstriyel standartlara uygun makinalar üretiyoruz.",
    feature1Title: "Kaliteli Üretim",
    feature1Desc: "Yüksek standartlarda üretim",
    feature2Title: "Deneyimli Ekip",
    feature2Desc: "Uzman mühendis kadrosu",
    feature3Title: "Müşteri Odaklı",
    feature3Desc: "Özel çözümler sunuyoruz",
    feature4Title: "Global Hizmet",
    feature4Desc: "Dünya çapında destek",
    privacyButton: "Aydınlatma Metni",
    privacyTitle: "Kişisel Verilerin Korunması Aydınlatma Metni",
    privacyContent:
      "Seri Makina olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin güvenliğini sağlamak için gerekli tüm tedbirleri almaktayız. Kişisel verileriniz, yasal mevzuata uygun olarak işlenmekte ve korunmaktadır.",
    close: "Kapat",
  },
  en: {
    title: "About Us",
    subtitle:
      "As Seri Makina, we are a company specialized in manufacturing corrugated cardboard packaging machinery",
    description:
      "With years of experience and technical knowledge, we provide our customers with the highest quality and most reliable solutions. In our modern production facility, we manufacture machines that comply with industrial standards.",
    feature1Title: "Quality Production",
    feature1Desc: "High standard manufacturing",
    feature2Title: "Experienced Team",
    feature2Desc: "Expert engineering staff",
    feature3Title: "Customer Focused",
    feature3Desc: "Custom solutions provided",
    feature4Title: "Global Service",
    feature4Desc: "Worldwide support",
    privacyButton: "Privacy Policy",
    privacyTitle: "Personal Data Protection Notice",
    privacyContent:
      "As Seri Makina, we take all necessary measures to ensure the security of your personal data within the scope of the Personal Data Protection Law No. 6698. Your personal data is processed and protected in accordance with legal regulations.",
    close: "Close",
  },
};

export default function About({ language }) {
  const t = translations[language];

  const features = [
    { icon: Factory, title: t.feature1Title, desc: t.feature1Desc },
    { icon: Award, title: t.feature2Title, desc: t.feature2Desc },
    { icon: Users, title: t.feature3Title, desc: t.feature3Desc },
    { icon: Globe, title: t.feature4Title, desc: t.feature4Desc },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-4 text-balance leading-relaxed">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            {t.description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent hover:bg-accent/90"
          >
            <Link href="/kvkk">{t.privacyButton}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
