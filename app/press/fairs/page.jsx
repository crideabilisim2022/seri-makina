"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

const translations = {
  tr: {
    title: "Fuarlar",
    subtitle: "2009'dan bu yana katıldığımız ulusal ve uluslararası fuarlar",
    selectYear: "Yıl Seçin",
  },
  en: {
    title: "Fairs",
    subtitle: "National and international fairs we have attended since 2009",
    selectYear: "Select Year",
  },
};

export default function Fairs() {
  const [language, setLanguage] = useState("tr");
  const [selectedYear, setSelectedYear] = useState(2024);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const t = translations[language];

  const currentYear = new Date().getFullYear();
  const years = [
    "Drupa",
    ...Array.from(
      { length: currentYear - 2009 + 1 },
      (_, i) => currentYear - i,
    ),
  ];

  const fairPhotosByYear = {
    Drupa: [
      { image: "img/fairs/drupa/1.jpeg" },
      { image: "img/fairs/drupa/2.jpeg" },
      { image: "img/fairs/drupa/3.jpeg" },
      { image: "img/fairs/drupa/4.jpeg" },
      { image: "img/fairs/drupa/5.jpeg" },
      { image: "img/fairs/drupa/6.jpeg" },
      { image: "img/fairs/drupa/7.jpeg" },
      { image: "img/fairs/drupa/8.jpeg" },
      { image: "img/fairs/drupa/9.jpeg" },
      { image: "img/fairs/drupa/10.jpeg" },
      { image: "img/fairs/drupa/11.jpeg" },
      { image: "img/fairs/drupa/12.jpeg" },
      { image: "img/fairs/drupa/13.jpeg" },
      { image: "img/fairs/drupa/14.jpeg" },
      { image: "img/fairs/drupa/15.jpeg" },
      { image: "img/fairs/drupa/16.jpeg" },
      { image: "img/fairs/drupa/17.jpeg" },
      { image: "img/fairs/drupa/18.jpeg" },
      { image: "img/fairs/drupa/19.jpeg" },
      { image: "img/fairs/drupa/20.jpeg" },
      { image: "img/fairs/drupa/21.jpeg" },
      { image: "img/fairs/drupa/22.jpeg" },
      { image: "img/fairs/drupa/23.jpeg" },
    ],
    2025: [
      { image: "img/fairs/2025/1.jpeg" },
      { image: "img/fairs/2025/2.jpeg" },
      { image: "img/fairs/2025/3.jpeg" },
      { image: "img/fairs/2025/4.jpeg" },
      { image: "img/fairs/2025/5.jpeg" },
      { image: "img/fairs/2025/6.jpeg" },
      { image: "img/fairs/2025/7.jpeg" },
      { image: "img/fairs/2025/8.jpeg" },
      { image: "img/fairs/2025/9.jpeg" },
      { image: "img/fairs/2025/10.jpeg" },
      { image: "img/fairs/2025/11.jpeg" },
      { image: "img/fairs/2025/12.jpeg" },
      { image: "img/fairs/2025/13.jpeg" },
      { image: "img/fairs/2025/14.jpeg" },
      { image: "img/fairs/2025/15.jpeg" },
      { image: "img/fairs/2025/16.jpeg" },
      { image: "img/fairs/2025/17.jpeg" },
      { image: "img/fairs/2025/18.jpeg" },
      { image: "img/fairs/2025/19.jpeg" },
      { image: "img/fairs/2025/20.jpeg" },
      { image: "img/fairs/2025/21.jpeg" },
      { image: "img/fairs/2025/22.jpeg" },
      { image: "img/fairs/2025/23.jpeg" },
      { image: "img/fairs/2025/24.jpeg" },
      { image: "img/fairs/2025/25.jpeg" },
      { image: "img/fairs/2025/26.jpeg" },
      { image: "img/fairs/2025/27.jpeg" },
      { image: "img/fairs/2025/28.jpeg" },
      { image: "img/fairs/2025/29.jpeg" },
      { image: "img/fairs/2025/30.jpeg" },
      { image: "img/fairs/2025/31.jpeg" },
      { image: "img/fairs/2025/32.jpeg" },
      { image: "img/fairs/2025/33.jpeg" },
      { image: "img/fairs/2025/34.jpeg" },
      { image: "img/fairs/2025/35.jpeg" },
      { image: "img/fairs/2025/36.jpeg" },
      { image: "img/fairs/2025/37.jpeg" },
      { image: "img/fairs/2025/38.jpeg" },
    ],
    2024: [
      { image: "img/fairs/2024/1.jpeg" },
      { image: "img/fairs/2024/2.jpeg" },
      { image: "img/fairs/2024/3.jpeg" },
      { image: "img/fairs/2024/4.jpeg" },
      { image: "img/fairs/2024/5.jpeg" },
      { image: "img/fairs/2024/6.jpeg" },
      { image: "img/fairs/2024/7.jpeg" },
      { image: "img/fairs/2024/8.jpeg" },
      { image: "img/fairs/2024/9.jpeg" },
      { image: "img/fairs/2024/10.jpeg" },
      { image: "img/fairs/2024/11.jpeg" },
      { image: "img/fairs/2024/12.jpeg" },
      { image: "img/fairs/2024/13.jpeg" },
      { image: "img/fairs/2024/14.jpeg" },
      { image: "img/fairs/2024/15.jpeg" },
      { image: "img/fairs/2024/16.jpeg" },
      { image: "img/fairs/2024/17.jpeg" },
      { image: "img/fairs/2024/18.jpeg" },
      { image: "img/fairs/2024/19.jpeg" },
      { image: "img/fairs/2024/20.jpeg" },
      { image: "img/fairs/2024/21.jpeg" },
      { image: "img/fairs/2024/22.jpeg" },
      { image: "img/fairs/2024/23.jpeg" },
      { image: "img/fairs/2024/24.jpeg" },
      { image: "img/fairs/2024/25.jpeg" },
      { image: "img/fairs/2024/26.jpeg" },
      { image: "img/fairs/2024/27.jpeg" },
      { image: "img/fairs/2024/28.jpeg" },
      { image: "img/fairs/2024/29.jpeg" },
      { image: "img/fairs/2024/30.jpeg" },
      { image: "img/fairs/2024/31.jpeg" },
      { image: "img/fairs/2024/32.jpeg" },
      { image: "img/fairs/2024/33.jpeg" },
      { image: "img/fairs/2024/34.jpeg" },
      { image: "img/fairs/2024/35.jpeg" },
      { image: "img/fairs/2024/36.jpeg" },
    ],
    2023: [
      { image: "img/fairs/2023/1.jpeg" },
      { image: "img/fairs/2023/2.jpeg" },
      { image: "img/fairs/2023/3.jpeg" },
      { image: "img/fairs/2023/4.jpeg" },
      { image: "img/fairs/2023/5.jpeg" },
      { image: "img/fairs/2023/6.jpeg" },
      { image: "img/fairs/2023/7.jpeg" },
      { image: "img/fairs/2023/8.jpeg" },
      { image: "img/fairs/2023/9.jpeg" },
      { image: "img/fairs/2023/10.jpeg" },
      { image: "img/fairs/2023/11.jpeg" },
      { image: "img/fairs/2023/12.jpeg" },
      { image: "img/fairs/2023/13.jpeg" },
      { image: "img/fairs/2023/14.jpeg" },
      { image: "img/fairs/2023/15.jpeg" },
      { image: "img/fairs/2023/16.jpeg" },
      { image: "img/fairs/2023/17.jpeg" },
      { image: "img/fairs/2023/18.jpeg" },
      { image: "img/fairs/2023/19.jpeg" },
      { image: "img/fairs/2023/20.jpeg" },
    ],
    2022: [
      { image: "img/fairs/2022/1.jpeg" },
      { image: "img/fairs/2022/2.jpeg" },
      { image: "img/fairs/2022/3.jpeg" },
      { image: "img/fairs/2022/4.jpeg" },
      { image: "img/fairs/2022/5.jpeg" },
      { image: "img/fairs/2022/6.jpeg" },
      { image: "img/fairs/2022/7.jpeg" },
      { image: "img/fairs/2022/8.jpeg" },
      { image: "img/fairs/2022/9.jpeg" },
      { image: "img/fairs/2022/10.jpeg" },
      { image: "img/fairs/2022/11.jpeg" },
    ],
    2021: [
      { image: "img/fairs/2021/1.jpg" },
      { image: "img/fairs/2021/2.jpg" },
      { image: "img/fairs/2021/3.jpg" },
      { image: "img/fairs/2021/4.jpg" },
      { image: "img/fairs/2021/5.jpg" },
      { image: "img/fairs/2021/6.jpg" },
      { image: "img/fairs/2021/7.jpg" },
      { image: "img/fairs/2021/8.jpg" },
      { image: "img/fairs/2021/9.jpg" },
      { image: "img/fairs/2021/10.jpg" },
      { image: "img/fairs/2021/11.jpg" },
      { image: "img/fairs/2021/12.jpg" },
      { image: "img/fairs/2021/13.jpg" },
    ],
    // 2020: [
    //   { image: "industrial expo 2020", alt: "Endüstriyel Expo 2020" },
    //   { image: "machinery fair 2020", alt: "Makina Fuarı 2020" },
    //   { image: "business conference 2020", alt: "İş Konferansı 2020" },
    // ],

    2019: [
      { image: "img/fairs/2019/1.jpg" },
      { image: "img/fairs/2019/2.jpg" },
      { image: "img/fairs/2019/3.jpg" },
      { image: "img/fairs/2019/4.jpg" },
      { image: "img/fairs/2019/5.jpg" },
      { image: "img/fairs/2019/6.jpg" },
      { image: "img/fairs/2019/7.jpg" },
      { image: "img/fairs/2019/8.jpg" },
      { image: "img/fairs/2019/9.jpg" },
      { image: "img/fairs/2019/10.jpg" },
      { image: "img/fairs/2019/11.jpg" },
    ],
    2018: [
      { image: "img/fairs/2018/1.jpg" },
      { image: "img/fairs/2018/2.jpg" },
      { image: "img/fairs/2018/3.jpg" },
      { image: "img/fairs/2018/4.jpg" },
      { image: "img/fairs/2018/5.jpg" },
      { image: "img/fairs/2018/6.jpg" },
      { image: "img/fairs/2018/7.jpg" },
    ],
    2017: [
      { image: "img/fairs/2017/1.jpg" },
      { image: "img/fairs/2017/2.jpg" },
      { image: "img/fairs/2017/3.jpg" },
      { image: "img/fairs/2017/4.jpg" },
      { image: "img/fairs/2017/5.jpg" },
      { image: "img/fairs/2017/6.jpg" },
      { image: "img/fairs/2017/7.jpg" },
      { image: "img/fairs/2017/8.jpg" },
      { image: "img/fairs/2017/9.jpg" },
      { image: "img/fairs/2017/10.jpg" },
    ],
    2016: [
      { image: "img/fairs/2016/1.jpg" },
      { image: "img/fairs/2016/2.jpg" },
      { image: "img/fairs/2016/3.jpg" },
      { image: "img/fairs/2016/4.jpg" },
      { image: "img/fairs/2016/5.jpg" },
      { image: "img/fairs/2016/6.jpg" },
      { image: "img/fairs/2016/7.jpg" },
      { image: "img/fairs/2016/8.jpg" },
      { image: "img/fairs/2016/9.jpg" },
      { image: "img/fairs/2016/10.jpg" },
    ],
    2015: [
      { image: "img/fairs/2015/1.jpg" },
      { image: "img/fairs/2015/2.jpg" },
      { image: "img/fairs/2015/3.jpg" },
      { image: "img/fairs/2015/4.jpg" },
      { image: "img/fairs/2015/5.jpg" },
    ],
    2014: [
      { image: "img/fairs/2014/1.jpg" },
      { image: "img/fairs/2014/2.jpg" },
      { image: "img/fairs/2014/3.jpg" },
      { image: "img/fairs/2014/4.jpg" },
      { image: "img/fairs/2014/5.jpg" },
      { image: "img/fairs/2014/6.jpg" },
      { image: "img/fairs/2014/7.jpg" },
    ],
    2013: [
      { image: "img/fairs/2013/1.jpg" },
      { image: "img/fairs/2013/2.jpg" },
      { image: "img/fairs/2013/3.jpg" },
      { image: "img/fairs/2013/4.jpg" },
      { image: "img/fairs/2013/5.jpg" },
      { image: "img/fairs/2013/6.jpg" },
      { image: "img/fairs/2013/7.jpg" },
      { image: "img/fairs/2013/8.jpg" },
      { image: "img/fairs/2013/9.jpg" },
      { image: "img/fairs/2013/10.jpg" },
      { image: "img/fairs/2013/11.jpg" },
      { image: "img/fairs/2013/12.jpg" },
      { image: "img/fairs/2013/13.jpg" },
      { image: "img/fairs/2013/14.jpg" },
      { image: "img/fairs/2013/15.jpg" },
    ],
    2012: [
      { image: "img/fairs/2012/1.jpg" },
      { image: "img/fairs/2012/2.jpg" },
      { image: "img/fairs/2012/3.jpg" },
      { image: "img/fairs/2012/4.jpg" },
      { image: "img/fairs/2012/5.jpg" },
      { image: "img/fairs/2012/6.jpg" },
      { image: "img/fairs/2012/7.jpg" },
      { image: "img/fairs/2012/8.jpg" },
      { image: "img/fairs/2012/9.jpg" },
      { image: "img/fairs/2012/10.jpg" },
      { image: "img/fairs/2012/11.jpg" },
    ],
    2011: [
      { image: "img/fairs/2011/1.jpg" },
      { image: "img/fairs/2011/2.jpg" },
      { image: "img/fairs/2011/3.jpg" },
      { image: "img/fairs/2011/4.jpg" },
      { image: "img/fairs/2011/5.jpg" },
      { image: "img/fairs/2011/6.jpg" },
      { image: "img/fairs/2011/7.jpg" },
      { image: "img/fairs/2011/8.jpg" },
      { image: "img/fairs/2011/9.jpg" },
      { image: "img/fairs/2011/10.jpg" },
    ],
    2010: [
      { image: "img/fairs/2010/1.jpg" },
      { image: "img/fairs/2010/2.jpg" },
      { image: "img/fairs/2010/3.jpg" },
      { image: "img/fairs/2010/4.jpg" },
      { image: "img/fairs/2010/5.jpg" },
      { image: "img/fairs/2010/6.jpg" },
      { image: "img/fairs/2010/7.jpg" },
      { image: "img/fairs/2010/8.jpg" },
      { image: "img/fairs/2010/9.jpg" },
      { image: "img/fairs/2010/10.jpg" },
    ],
    2009: [
      { image: "img/fairs/2009/1.jpg" },
      { image: "img/fairs/2009/2.jpg" },
      { image: "img/fairs/2009/3.jpg" },
      { image: "img/fairs/2009/4.jpg" },
      { image: "img/fairs/2009/5.jpg" },
      { image: "img/fairs/2009/6.jpg" },
      { image: "img/fairs/2009/7.jpg" },
      { image: "img/fairs/2009/8.jpg" },
      { image: "img/fairs/2009/9.jpg" },
      { image: "img/fairs/2009/10.jpg" },
    ],
  };

  const selectedPhotos = fairPhotosByYear[selectedYear] || [];

  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % selectedPhotos.length);
  };

  const showPrev = () => {
    setCurrentPhotoIndex(
      (prev) => (prev - 1 + selectedPhotos.length) % selectedPhotos.length,
    );
  };

  // Klavye yön tuşları ile kontrol
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedPhotos.length]);

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="text-accent" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed mb-8">
              {t.subtitle}
            </p>
          </div>

          {/* Yıl Seçimi */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {t.selectYear}
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedYear === year
                      ? "bg-accent text-accent-foreground shadow-lg scale-105"
                      : "bg-card hover:bg-card/80 text-card-foreground shadow-md hover:shadow-lg"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Fotoğraf Grid */}
          <div className="max-w-6xl mx-auto">
            {selectedPhotos.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={`/${photo.image}`}
                        alt={`Fair ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  {language === "tr"
                    ? "Bu yıl için henüz fotoğraf eklenmemiş."
                    : "No photos added for this year yet."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedPhotos.length > 0 && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-4 flex flex-col items-center w-full max-w-2xl">
            {/* RESİM */}
            <img
              src={`/${selectedPhotos[currentPhotoIndex].image}`}
              alt={`Modal ${currentPhotoIndex + 1}`}
              className="w-150 max-h-[85vh] object-contain rounded-lg mb-6"
            />

            {/* BUTONLAR */}
            <div className="flex items-center justify-center gap-4 w-full">
              <button
                onClick={showPrev}
                className="bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={showNext}
                className="bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition"
              >
                <ChevronRight size={28} />
              </button>

              <button
                onClick={closeModal}
                className="ml-auto bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
