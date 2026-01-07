"use client";

const translations = {
  tr: {
    company: "Seri Makina",
    description: "Oluklu mukavva ambalaj makinaları imalatında öncü firma",
    rights: "Tüm hakları saklıdır.",
    quickLinks: "Hızlı Bağlantılar",
    home: "Ana Sayfa",
    about: "Hakkımızda",
    products: "Ürünler",
    contact: "İletişim",
    catalog: "Katalog",
    address: [
      "Osman Gazi Mahallesi, 3123. Sokak No:3/1",
      "Kıraç / Esenyurt / İstanbul / Türkiye",
    ],
    phone: "Tel",
    fax: "Fax",
    email: "E-posta",
    website: "Web",
  },
  en: {
    company: "Seri Makina",
    description:
      "Leading company in corrugated cardboard packaging machinery manufacturing",
    rights: "All rights reserved.",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    products: "Products",
    contact: "Contact",
    catalog: "Catalog",
    address: [
      "Osman Gazi Neighborhood, 3123rd Street No:3/1",
      "Kıraç / Esenyurt / Istanbul / Turkey",
    ],
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    website: "Website",
  },
};

export default function Footer({ language }) {
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101010] text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Firma Bilgisi */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">{t.company}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {t.description}
            </p>
            <div className="text-sm space-y-1">
              {t.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-accent transition-colors"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-accent transition-colors"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="hover:text-accent transition-colors"
                >
                  {t.products}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-accent transition-colors"
                >
                  {t.contact}
                </button>
              </li>
              <li>
                <a
                  href="http://serimakina.com/katalog/katalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {t.catalog}
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              {t.contact}
            </h4>
            <div className="text-sm space-y-1">
              <p>
                {t.phone}:{" "}
                <a
                  href="tel:+902126232156"
                  className="hover:text-accent transition"
                >
                  00 90 212 623 21 56
                </a>
              </p>
              <p>
                {t.phone}:{" "}
                <a
                  href="tel:+902126232157"
                  className="hover:text-accent transition"
                >
                  00 90 212 623 21 57
                </a>
              </p>
              <p>
                {t.phone}:{" "}
                <a
                  href="tel:+902126232158"
                  className="hover:text-accent transition"
                >
                  00 90 212 623 21 58
                </a>
              </p>
              <p>
                {t.phone}:{" "}
                <a
                  href="tel:+902126232425"
                  className="hover:text-accent transition"
                >
                  00 90 212 623 24 25
                </a>
              </p>
              <p>{t.fax}: 00 90 212 623 24 26</p>
              <p className="mt-2">
                {t.email}:{" "}
                <a
                  href="mailto:info@serimakina.com"
                  className="hover:text-accent transition"
                >
                  info@serimakina.com
                </a>
              </p>
              <p>
                {t.email}:{" "}
                <a
                  href="mailto:seri@serimakina.com"
                  className="hover:text-accent transition"
                >
                  seri@serimakina.com
                </a>
              </p>
              <p className="mt-2">
                {t.website}:{" "}
                <a
                  href="https://www.serimakina.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  www.serimakina.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Alt kısım */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
          <p>
            © {currentYear} {t.company}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
