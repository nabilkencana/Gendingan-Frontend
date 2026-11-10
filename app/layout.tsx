import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pemerintah Desa Gendingan - Kabupaten Tulungagung | Portal Resmi Desa",
  description:
    "Portal Resmi Pemerintah Desa Gendingan, Kecamatan Kedungwaru, Kabupaten Tulungagung. Transparansi, Layanan Publik Digital, dan Potensi Desa.",
  keywords: [
    "Desa Gendingan",
    "Pemerintah Desa Gendingan",
    "Kedungwaru",
    "Tulungagung",
    "Layanan Desa",
    "APBDes Desa Gendingan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen bg-surface font-sans text-text-primary antialiased selection:bg-secondary selection:text-tertiary">
        {children}
      </body>
    </html>
  );
}
