import "./globals.css";
import { Poppins, Roboto_Slab } from "next/font/google";
import ClientLayout from "./client-layout"; // 🌟 yeni ekleme

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${poppins.variable} ${robotoSlab.variable}`}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
