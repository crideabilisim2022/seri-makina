"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { User, Mail, Phone, FileText, Upload } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
const translations = {
  tr: {
    title: "İş Başvuru Formu",
    subtitle: "Ekibimize katılmak için başvurunuzu yapın",
    fullName: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    birthPlace: "Doğum Yeri",
    birthDate: "Doğum Tarihi",
    position: "Başvurulan Pozisyon",
    gender: "Cinsiyet",
    genderOptions: {
      select: "Seçiniz",
      male: "Erkek",
      female: "Kadın",
      other: "Diğer",
    },
    maritalStatus: "Medeni Hali",
    maritalStatusOptions: {
      select: "Seçiniz",
      single: "Bekâr",
      married: "Evli",
      divorced: "Boşanmış",
    },
    education: "Eğitim Durumu",
    educationOptions: {
      select: "Seçiniz",
      highSchool: "Lise",
      associate: "Ön Lisans",
      bachelor: "Lisans",
      master: "Yüksek Lisans",
      doctorate: "Doktora",
    },
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
    birthPlace: "Place of Birth",
    birthDate: "Date of Birth",
    position: "Position Applied For",
    gender: "Gender",
    genderOptions: {
      select: "Select",
      male: "Male",
      female: "Female",
      other: "Other",
    },
    maritalStatus: "Marital Status",
    maritalStatusOptions: {
      select: "Select",
      single: "Single",
      married: "Married",
      divorced: "Divorced",
    },
    education: "Education Level",
    educationOptions: {
      select: "Select",
      highSchool: "High School",
      associate: "Associate Degree",
      bachelor: "Bachelor's Degree",
      master: "Master's Degree",
      doctorate: "Doctorate",
    },
    message: "Your Message",
    cv: "Upload CV",
    submit: "Submit Application",
    success: "Your application has been submitted successfully!",
  },
};

export default function JobApplication() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const t = translations[language] || translations.tr;
const [loading, setLoading] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 3000);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    // CV dosyasını base64 yap
    let cvFile = null;
    if (formData.get("cv")?.size > 0) {
      const file = formData.get("cv");
      cvFile = {
        name: file.name,
        data: await file.arrayBuffer().then((buf) => Buffer.from(buf).toString("base64")),
      };
    }

    const body = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      birthPlace: formData.get("birthPlace"),
      birthDate: formData.get("birthDate"),
      position: formData.get("position"),
      gender: formData.get("gender"),
      maritalStatus: formData.get("maritalStatus"),
      education: formData.get("education"),
      message: formData.get("message"),
      cv: cvFile,
    };

    try {
      const res = await fetch("/api/job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success("Başvurunuz başarıyla gönderildi!");
        e.target.reset();
      } else {
        toast.error("Başvurunuz gönderilemedi. Tekrar deneyin!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Mail gönderilirken hata oluştu!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
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
                  name="fullName"
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
                  name="email"
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
                  name="phone"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Doğum Yeri */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  {t.birthPlace}
                </label>
                <input
                  type="text"
                  required
                  name="birthPlace"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Doğum Tarihi */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  {t.birthDate}
                </label>
                <input
                  type="date"
                  required
                  name="birthDate"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Cinsiyet */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  {t.gender}
                </label>
                <select
                  required
                  name="gender"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t.genderOptions.select}
                  </option>
                  <option value="Erkek">{t.genderOptions.male}</option>
                  <option value="Kadın">{t.genderOptions.female}</option>
                  <option value="Diğer">{t.genderOptions.other}</option>
                </select>
              </div>

              {/* Medeni Hali */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  {t.maritalStatus}
                </label>
                <select
                  required
                  name="maritalStatus"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t.maritalStatusOptions.select}
                  </option>
                  <option value="Bekar">{t.maritalStatusOptions.single}</option>
                  <option value="Evli">
                    {t.maritalStatusOptions.married}
                  </option>
                  <option value="Boşanmış">
                    {t.maritalStatusOptions.divorced}
                  </option>
                </select>
              </div>

              {/* Eğitim Durumu */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  {t.education}
                </label>
                <select
                  required
                  name="education"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t.educationOptions.select}
                  </option>
                  <option value="Lise">
                    {t.educationOptions.highSchool}
                  </option>
                  <option value="Ön Lisans">
                    {t.educationOptions.associate}
                  </option>
                  <option value="Lisans">
                    {t.educationOptions.bachelor}
                  </option>
                  <option value="Yüksek Lisans">{t.educationOptions.master}</option>
                  <option value="Doktora">
                    {t.educationOptions.doctorate}
                  </option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FileText size={18} />
                  {t.position}
                </label>
                <input
                  type="text"
                  required
                  name="position"
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
                  name="message"
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
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                {loading ? "Gönderiliyor..." : t.submit}
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
