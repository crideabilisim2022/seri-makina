"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Settings, ChevronLeft, ChevronRight } from "lucide-react";

const translations = {
  tr: {
    title: "2.El Makinalar",
    subtitle: "Kaliteli ve uygun fiyatlı ikinci el makinalarımız",
    technicalSpecs: "Teknik Özellikler",
    contact: "İletişime Geç",
    working: "ÇALIŞIR DURUMDA",
  },
  en: {
    title: "Second Hand Machines",
    subtitle: "Quality and affordable second hand machinery",
    technicalSpecs: "Technical Specifications",
    contact: "Contact Us",
    working: "WORKING CONDITION",
  },
};

export default function SecondHand() {
  const [language, setLanguage] = useState("tr");
  const t = translations[language];

  const machines = [
    {
      name: "GRS 1630",
      model: {
        tr: "1630×3200 JUMBO MAKİNASI",
        en: "1630×3200 JUMBO MACHINE",
      },
      specs: {
        tr: "3 RENK BASKI • ROTARY SLOTTER • STACKER • ÇALIŞIR DURUMDA",
        en: "3 COLOR PRINTING • ROTARY SLOTTER • STACKER • WORKING CONDITION",
      },
      images: [
        "/img/second-hand/grs1630/1.jpeg",
        "/img/second-hand/grs1630/2.jpeg",
        "/img/second-hand/grs1630/3.jpeg",
        "/img/second-hand/grs1630/4.jpeg",
        "/img/second-hand/grs1630/5.jpeg",
        "/img/second-hand/grs1630/6.jpeg",
        "/img/second-hand/grs1630/7.jpeg",
        "/img/second-hand/grs1630/8.jpeg",
        "/img/second-hand/grs1630/9.jpeg",
        "/img/second-hand/grs1630/10.jpeg",
        "/img/second-hand/grs1630/11.jpeg",
        "/img/second-hand/grs1630/12.jpeg",
      ],
    },
    {
      name: "E 185",
      model: {
        tr: "ONDÜLE MAKİNASI 185 CM",
        en: "CORRUGATOR MACHINE 185 CM",
      },
      specs: {
        tr: "2 ADET SPLICER 250CM • 2 ADET KURUTMA • 2 ADET BOBİN AYAĞI • VAKUM 250CM • ÇİFT MAKAS • SERVO BIÇAK DİJİTAL • ÇALIŞIR DURUMDA",
        en: "2 PCS SPLICER 250CM • 2 PCS DRYER • 2 PCS REEL STAND • VACUUM 250CM • DOUBLE KNIFE • SERVO CUT DIGITAL • WORKING CONDITION",
      },
      images: [
        "/img/second-hand/e185/1.jpeg",
        "/img/second-hand/e185/2.jpeg",
        "/img/second-hand/e185/3.jpeg",
        "/img/second-hand/e185/4.jpeg",
        "/img/second-hand/e185/5.jpeg",
        "/img/second-hand/e185/6.jpeg",
        "/img/second-hand/e185/7.jpeg",
        "/img/second-hand/e185/8.jpeg",
        "/img/second-hand/e185/9.jpeg",
        "/img/second-hand/e185/10.jpeg",
        "/img/second-hand/e185/11.jpeg",
      ],
    },
    {
      name: "PNR 1328",
      model: {
        tr: "1290×2800 ÜÇ RENK + SLOTTER",
        en: "1290×2800 THREE COLOR + SLOTTER",
      },
      specs: {
        tr: "VAKUM TRANSFERLİ • BIÇAK AYARLARI OTOMATİK • ÇALIŞIR DURUMDA",
        en: "VACUUM TRANSFER • AUTOMATIC KNIFE ADJUSTMENT • WORKING CONDITION",
      },
      images: [
        "/img/second-hand/pnr1328/1.jpeg",
        "/img/second-hand/pnr1328/2.jpeg",
        "/img/second-hand/pnr1328/3.jpeg",
        "/img/second-hand/pnr1328/4.jpeg",
        "/img/second-hand/pnr1328/5.jpeg",
        "/img/second-hand/pnr1328/6.jpeg",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {machines.map((machine, index) => (
              <MachineCard
                key={index}
                machine={machine}
                t={t}
                language={language}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// ===================
// Alt Bileşen: MachineCard
// ===================
function MachineCard({ machine, t, language }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === machine.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? machine.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow relative flex flex-col h-full">
      {/* Görsel */}
      <div className="relative w-full h-64">
        <img
          src={machine.images[currentImage]}
          alt={machine.name}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {/* Ok tuşları */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bilgi */}
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-accent mb-1">
              {machine.name}
            </h3>
            <p className="text-lg font-semibold text-foreground">
              {machine.model[language]}
            </p>
          </div>

          <div className="flex items-start gap-2 mb-6">
            <Settings size={20} className="text-accent mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-1">
                {t.technicalSpecs}:
              </p>
              <p className="text-sm leading-relaxed">
                {machine.specs[language]}
              </p>
            </div>
          </div>
        </div>

        {/* Sabitlenmiş buton */}
        <a
          href="tel:+902126232156"
          className="block w-full bg-accent text-accent-foreground py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold text-center mt-auto"
        >
          {t.contact}
        </a>
      </div>
    </div>
  );
}
