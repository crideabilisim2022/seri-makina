"use client";

import { MapPin, Phone, Fan as Fax, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const translations = {
  tr: {
    title: "İletişim",
    subtitle: "Bizimle iletişime geçin",
    address: "Adres",
    phone: "Telefon",
    fax: "Faks",
    email: "E-posta",
    website: "Web Sitesi",
    getDirections: "Yol Tarifi Al",
    addressLine1: "Osman Gazi Mahallesi",
    addressLine2: "3123. Sokak No:3/1",
    addressLine3: "Kıraç / Esenyurt / İstanbul / Türkiye",
  },
  en: {
    title: "Contact",
    subtitle: "Get in touch with us",
    address: "Address",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    website: "Website",
    getDirections: "Get Directions",
    addressLine1: "Osman Gazi Neighborhood",
    addressLine2: "3123rd Street No:3/1",
    addressLine3: "Kıraç / Esenyurt / Istanbul / Turkey",
  },
};

export default function Contact({ language = "tr" }) {
  const t = translations[language] || translations.tr;

  return (
    <section id="contact" className="py-24 bg-secondary scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h2>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* İçerik */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bilgiler */}
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="space-y-6">
              {/* Adres */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.address}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.addressLine1}
                    <br />
                    {t.addressLine2}
                    <br />
                    {t.addressLine3}
                  </p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.phone}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <a
                      href="tel:+902126232156"
                      className="hover:text-accent transition"
                    >
                      +00 90 212 623 21 56
                    </a>
                    <br />
                    <a
                      href="tel:+902126232425"
                      className="hover:text-accent transition"
                    >
                      +00 90 212 623 24 25
                    </a>
                  </p>
                </div>
              </div>

              {/* Faks */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Fax className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.fax}</h3>
                  <p className="text-muted-foreground">+00 90 212 623 24 26</p>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.email}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <a
                      href="mailto:info@serimakina.com"
                      className="hover:text-accent transition"
                    >
                      info@serimakina.com
                    </a>
                    <br />
                    <a
                      href="mailto:seri@serimakina.com"
                      className="hover:text-accent transition"
                    >
                      seri@serimakina.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Web Sitesi */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Globe className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.website}</h3>
                  <a
                    href="https://www.serimakina.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    www.serimakina.com
                  </a>
                </div>
              </div>

              {/* Yol Tarifi Butonu */}
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 mt-6"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Osman+Gazi+Mahallesi+3123+Sokak+No:3/1+Kıraç+Esenyurt+Istanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2" size={18} />
                  {t.getDirections}
                </a>
              </Button>
            </div>
          </div>

          {/* Harita */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1tk3g6FMk3Qj7QhoKdN94n-bsg0oBs0Xb"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
