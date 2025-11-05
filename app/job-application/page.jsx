"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { User, Mail, Phone, FileText, Upload } from "lucide-react";

const translations = {
  tr: {
    title: "İş Başvuru Formu",
    subtitle: "Ekibimize katılmak için başvurunuzu yapın",
    fullName: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    position: "Başvurulan Pozisyon",
    message: "Mesajınız",
    cv: "CV Yükle",
    submit: "Başvuruyu Gönder",
    success: "Başvurunuz başarıyla gönderildi!",
  },
  en: {
    title: "Job Application Form",
    subtitle: "Apply to join our team",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    position: "Position Applied For",
    message: "Your Message",
    cv: "Upload CV",
    submit: "Submit Application",
    success: "Your application has been submitted successfully!",
  },
};

export default function JobApplication() {
  const [language, setLanguage] = useState("tr");
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-lg p-8 shadow-lg space-y-6"
            >
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <User size={18} />
                  {t.fullName}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Mail size={18} />
                  {t.email}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Phone size={18} />
                  {t.phone}
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FileText size={18} />
                  {t.position}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FileText size={18} />
                  {t.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Upload size={18} />
                  {t.cv}
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                {t.submit}
              </button>

              {submitted && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
                  {t.success}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
