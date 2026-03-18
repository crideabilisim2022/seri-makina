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
    video1Title: "Seri & Toprint Machine",
    video2Title: "Seri & Toprint Machine",
    video3Title: "Seri & Toprint Machine",
  },
  en: {
    title: "Videos",
    subtitle: "Watch our machinery in action",
    newLabel: "New",
    video1Title: "Seri & Toprint Machine",
    video2Title: "Seri & Toprint Machine",
    video3Title: "Seri & Toprint Machine",
  },
};

export default function Videos() {
  const { language } = useLanguage();

  const t = translations[language];
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: t.video1Title,
      thumbnail: "/img/videos/9.JPG",
      videoUrl: "videos/toprint/toprint-1.mp4",
      isNew: true,
    },
    {
      title: t.video2Title,
      thumbnail: "/img/videos/10.JPG",
      videoUrl: "videos/toprint/toprint-2.mp4",
      isNew: true,

    },
    {
      title: t.video3Title,
      thumbnail: "/img/videos/11.JPG",
      videoUrl: "videos/toprint/toprint-3.mp4",
      isNew: true,

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
