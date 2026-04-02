import "./globals.css";
import { Poppins, Roboto_Slab } from "next/font/google";
import ClientLayout from "./client-layout";
import { LanguageProvider } from "@/context/LanguageContext"; // ✅ eklendi
import { Toaster } from 'react-hot-toast';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Seri Makina - Oluklu Mukavva Ambalaj Makinaları",
  description: "Oluklu mukavva ambalaj makinaları imalatı",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://serimakina.com"),
  alternates: {
    canonical: "/",
  },
};
// SERİ MAKİNA. Osman Gazi Mahallesi 3123.Sokak No:3/1. Kıraç / Esenyurt / İstanbul / Türkiye Tel : 00 90 212 623 21 56 (3 Hat) Tel : 00 90 212 623 24 25. Fax .. eklenebilir

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${poppins.variable} ${robotoSlab.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <LanguageProvider>
          {" "}
          {/* ✅ tüm siteyi kapsıyor */}
          <ClientLayout>{children}</ClientLayout>
          <Toaster position="top-right" reverseOrder={false} />
        </LanguageProvider>
      </body>
    </html>
  );
}
