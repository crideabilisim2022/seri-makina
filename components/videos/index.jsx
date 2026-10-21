"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "../video-modal";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  tr: {
    title: "Videolar",
    subtitle: "Makinalarımızın çalışma videolarını izleyin",
    newLabel: "Yeni",
    video1Title: "Seri & Toprint Makina",
    video2Title: "Seri & Toprint Makina",
    video3Title: "Seri & Bosphorus Makina",
    video4Title: "Black Serial Jumbo Kutu Yapım Makinesi",
    video5Title: "Black Serial Makinesi",
    video6Title: "Bosphorus Makinesi",
  },
  en: {
    title: "Videos",
    subtitle: "Watch our machinery in action",
    newLabel: "New",
    video1Title: "Seri & Toprint Machine",
    video2Title: "Seri & Toprint Machine",
    video3Title: "Seri & Bosphorus Machine",

    video4Title: "Black Serial Jumbo Case Maker Machine",
    video5Title: "Black Serial Machine",
    video6Title: "Bosphorus Machine",
  },
};

export default function Videos() {
  const { language } = useLanguage();

  const t = translations[language];
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
     {
      title: t.video4Title,
      thumbnail: "/videos/fairs/1.JPG",
      videoUrl: "videos/fairs/1.mp4",
      isNew: true,
    },
     {
      title: t.video5Title,
      thumbnail: "/videos/fairs/2.JPG",
      videoUrl: "videos/fairs/2.mp4",
      isNew: true,
    },
     {
      title: t.video6Title,
      thumbnail: "/videos/fairs/3.JPG",
      videoUrl: "videos/fairs/3.mp4",
      isNew: true,
    },
    {
      title: t.video1Title,
      thumbnail: "/img/videos/9.JPG",
      videoUrl: "videos/toprint/toprint-1.mp4",
      isNew: false,
    },
    {
      title: t.video2Title,
      thumbnail: "/img/videos/10.JPG",
      videoUrl: "videos/toprint/toprint-2.mp4",
      isNew: false,

    },
    {
      title: t.video3Title,
      thumbnail: "/img/bosphorus/img1.JPG",
      videoUrl: "videos/bosphorus/bosphorus-1.mp4",
      isNew: false,

    },
  ];

  return (
    <>
      <section id="videos" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {video.isNew && (
                    <span className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full shadow">
                      {t.newLabel}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="text-accent-foreground ml-1"
                        size={28}
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
      />
    </>
  );
}
