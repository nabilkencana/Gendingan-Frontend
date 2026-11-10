import React from "react";
import Link from "next/link";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "./Icons";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const NEWS_LIST: NewsItem[] = [
  {
    id: "rkpdes-2027",
    title: "Musyawarah Desa Penetapan RKPDes Tahun Anggaran 2027",
    excerpt:
      "Pemerintah Desa Gendingan bersama BPD dan tokoh masyarakat menyepakati prioritas pembangunan jalan usaha tani, drainase lingkungan, serta digitalisasi UMKM.",
    category: "Pemerintahan",
    date: "8 November 2026",
    readTime: "4 menit baca",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBK9kyAxDdu7jr2_pMyBxAqdEwNUMSgTVictiDQ16VizJJox6nylZ7eOam6lOxU2fGDrPvPqa0H0V9Gfs8wbH7J3uwjr0fTVSFZrIGUf1laJurETr1a-JgIBQEGHVduoCqtLTK7D3YkEDse63TvWJF0FaNeDirOYzlEnQbWi1koZWem8RRnKAXlwMmYG72k1N_xZvaQuLTW3T_zwIOQQuHxHQIgBYQax6U7vAamoNM",
  },
  {
    id: "adminduk-keliling",
    title: "Layanan Administrasi Kependudukan Keliling Hadir di Tiap Dusun",
    excerpt:
      "Inovasi jemput bola pengurusan KTP digital, Kartu Keluarga, dan Akta Kelahiran guna memudahkan lansia dan warga dusun terpencil tanpa harus ke balai desa.",
    category: "Pelayanan Publik",
    date: "4 November 2026",
    readTime: "3 menit baca",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp_NGOXLQlEWrJKrXFsAakygr8Jxd5ihvm1bKgnTsc0qJdZ7xdMAHhgLlhDFt9AydHx3c-Ro40WpqwYnmqipEO2388dU6d8HGS4dlKVuWlFm26MYPNQdQR_ba--Zkz7MIopG-E8TLmfTJcos2SFDNDgFL2aH4qNXiPOpa1SOm3Q8RSt6jA55PgQ6GRzFi3wBZul-omdolOE0uvApqf8z7jGw6S6xA94-04u1y6L-U",
  },
  {
    id: "umkm-digital",
    title: "Pelatihan Digitalisasi Pemasaran untuk Pelaku UMKM Gendingan",
    excerpt:
      "Kolaborasi BUMDes dan pegiat ekonomi kreatif membekali 45 pelaku usaha kerajinan batik dan pangan olahan lokal strategi berjualan di e-commerce nasional.",
    category: "Ekonomi Kreatif",
    date: "28 Oktober 2026",
    readTime: "5 menit baca",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9UwzbYuYItvIW6MCwKQtrjiXp6d8TsUYEErOdw2oIlCiKqkOWzOzy4eZCzBmM_xrkvNF1HL4vT5BfBFTv8BNwNUaG8zYfXgovnJc1YQcBYOy8ND_Kka-r8eyOPWkHSJ0_xSksPkV4qyZ9BYO-vqaQwsDzKhXAtgkUJDQZxc9FDdrINVMnF-s30OkJGNXNRkMzcus3YvKMPPnjZOmemx20wEQ8WvtCPDxFla0nbXw",
  },
];

export default function NewsSection() {
  return (
    <section id="berita" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold mb-3">
              <span>Kabar Terkini</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] tracking-tight">
              Berita & Pengumuman Desa
            </h2>
          </div>
          <Link
            href="/#berita"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32] hover:text-[#4CAF50] transition-colors mt-4 md:mt-0"
          >
            <span>Arsip Berita Lengkap</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_LIST.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DCE2DD] card-shadow card-shadow-hover flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#2E7D32] shadow-sm backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Date & Read time */}
                  <div className="flex items-center gap-4 text-xs text-[#68706B] mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2420] group-hover:text-[#4CAF50] transition-colors line-clamp-2 leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E7D32] group-hover:text-[#4CAF50] transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
