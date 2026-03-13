"use client";

import { Factory, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const certificates = [
  "/img/sertifika/1.jpg",
  "/img/sertifika/2.jpg",
  "/img/sertifika/3.jpg",
  "/img/sertifika/4.jpg",
  "/img/sertifika/5.jpg",
];

const translations = {
  tr: {
    title: "Hakkımızda",
    subtitle:
      "Seri Makina olarak, oluklu mukavva ambalaj makinaları imalatında uzmanlaşmış bir firmayız",
    description: `SERI MAKİNA 1983 yılında kurulmuş olup, 40 yılı aşkın süredir üretim süreçlerinin gelişiminde lider konumda yer almaktadır. Firmamız, Türkiye Avrupa ve Orta Doğu’nun en büyük ve en hızlı ilerleyen üreticilerinden biri haline geldi.

Tecrübeli personeli, satış sonrası hizmet ve servis alanındaki sorumluluğu ve uluslararası sınırsız servis destek ve kalitesi ile Dünya çapında büyük başarılar elde etmiştir. Temel önceliğimiz, küresel pazarda başarıdan başarıya koşmaktır.

SERI MAKİNA bilinçli ve sorumlu bir anlayış ilkesine bağlı kalarak, makinalarını çevre koruma prensiplerine ve uluslararası standartlara uygun, aynı zamanda müşteri memnuniyeti odaklı üretmektedir.

Bu ayrıcalığı sizlerle de paylaşmak dileğiyle…`,
    mission: `Ürünlerimiz, çözümlerimiz, satış sonrası hizmetlerimizle sağladığımız güvenilirlik ve yüksek iş ahlakımız ile müşterilerimizin ilk tercihi olarak, çalışanlarımız, ülkemiz ve müşterimiz için değer yaratan bir şirket olmak.`,
    vision: `Vizyonumuz, en iyilerin çalışmak istediği ilham veren bir marka ve şirket olarak, müşterilerimize büyük fayda sağlayan ürün, sistem, hizmet ve çözümlerin üretilmesini sağlamaktır.

Yenilikçilik temel ilkelerimizden birisi ve en önemlisidir. Pazar lideri olmanın getirdiği sorumluluk, bizlere daha iyiyi, daha güçlüyü ve daha yenilikçi olmayı yüklemektedir.`,
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
    certificate: "Sertifikalarımız",
  },
  en: {
    title: "About Us",
    subtitle:
      "As Seri Makina, we are a company specialized in manufacturing corrugated cardboard packaging machinery",
    description: `SERI MAKINA was established in 1983 and has been a leader in the development of production processes for more than 40 years. Our company has become one of the largest and fastest growing manufacturers in Turkey, Europe and the Middle East.

With its experienced staff, responsibility in after-sales service and worldwide unlimited service support and quality, it has achieved great success globally. Our main priority is to achieve continuous success in the global market.

SERI MAKINA manufactures its machines in accordance with environmental protection principles and international standards while maintaining a conscious and responsible approach, always focusing on customer satisfaction.

We would be pleased to share this privilege with you.`,
    mission: `To be the first choice of our customers with the reliability and high business ethics we provide through our products, solutions and after-sales services, and to create value for our employees, our country and our customers.`,
    vision: `Our vision is to be an inspiring brand and company where the best people want to work, producing products, systems, services and solutions that provide great benefits to our customers.

Innovation is one of our most important principles. The responsibility of being a market leader pushes us to be better, stronger and more innovative.`,
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
    certificate: "Certificates",
  },
};

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selected, setSelected] = useState(null);

  const features = [
    { icon: Factory, title: t.feature1Title, desc: t.feature1Desc },
    { icon: Award, title: t.feature2Title, desc: t.feature2Desc },
    { icon: Users, title: t.feature3Title, desc: t.feature3Desc },
    { icon: Globe, title: t.feature4Title, desc: t.feature4Desc },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-12 max-w-6xl">
        {/* --- Üstte Resim --- */}
        <div className="mb-12">
          <Image
            src="/img/about/tasli_sunu.jpg"
            alt="Corporate milestones"
            width={1200}
            height={450}
            className="w-full h-auto rounded-xl shadow-xl object-contain"
            priority
          />
        </div>

        {/* --- Hakkımızda Yazısı --- */}
        <div className="mb-12">
          <h2 className="text-4xl text-center md:text-5xl font-bold mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground mb-4 whitespace-pre-line leading-relaxed">
            {t.description}
          </p>
          <h3 className="text-2xl font-semibold mb-2">Misyonumuz</h3>
          <p className="text-muted-foreground mb-4 whitespace-pre-line leading-relaxed">
            {t.mission}
          </p>
          <h3 className="text-2xl font-semibold mb-2">Vizyonumuz</h3>
          <p className="text-muted-foreground mb-4 whitespace-pre-line leading-relaxed">
            {t.vision}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-accent hover:bg-accent/90"
          >
            <Link href="/kvkk">{t.privacyButton}</Link>
          </Button>
        </div>

        {/* --- Özellikler --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

        {/* --- Sertifikalar --- */}
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold mb-6">
            {t.certificate}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
            {certificates.map((src, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelected(src)}
              >
                <Image
                  src={src}
                  alt={`Sertifika ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

     {/* Modal */}
{selected && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={() => setSelected(null)} // dışına tıklayınca kapatma
  >
    {/* Arka plan */}
    <div className="absolute inset-0 bg-black opacity-70"></div>

    {/* Modal içeriği */}
    <div
      className="relative max-w-sm w-full rounded-lg p-2 pointer-events-auto z-10"
      onClick={(e) => e.stopPropagation()} // modal içi tıklamayı engelle
    >
      <button
        className="absolute top-3 right-5 text-black text-4xl font-bold z-20"
        onClick={() => setSelected(null)}
      >
        ×
      </button>
      <Image
        src={selected}
        alt="Sertifika Büyük"
        width={400}
        height={300}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
}
