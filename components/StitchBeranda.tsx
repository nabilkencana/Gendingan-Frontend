"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import QuickSearchModal from "./QuickSearchModal";
import { LayoutGrid, type Card } from "@/components/ui/layout-grid";

export default function StitchBeranda() {

  const HERO_PHOTOS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC22zwsDt7ysPbfUREVqFtl8gBhtgwWtvM_Xm2-5Soq4cqTj9ka1NCRIKoaRABoOaZHgCmylHSCxlZ8DALaWCakddHzWmpFNznkDZyn0Mwf7PnhI8LY3NzYTQ7wvzzwwKsdj6APf8oPWFy24_oZF-Hq51V_jwcFWeoEse6AEy55lhmBMiQl_MNt9TYhCfH-cIiFRpFB2Y08ha2SEdQVHmKmm4r6icAy3cktVIOo6yE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCAotC2_BAFmAPBV6ZXw71x0AG1ExVtQc2-kkU5d3zqyJiCtMloMh16imwELRR8R2O13BPQ8AilyxFIKiSN2GkLAy9KOP8-YARuTysUX5wvpuuJFFXc2cf8I6hp8FlQFl15giQiZVCfkyZthkgHy8nUYIEfDcdUJFxp09Vb-0uVFC6MCTA9NuSeRm1Kbz6_FoQ16sR8SkDS50XLvUTYjaQJbf8UuEp1mfWqTpPIXY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCOtRa4nqrGJLPqrEW1OQ33Ry29IavYB-kWFTm29eOIxyTFH9GXwvHeVS819wYsSwgBLFFaUJfR5QkdtvLxMwFTyZeSfrCjfevvB_rC-ZivuF5kgpBFiRCS-RGZA_uINJMXV_vI7gehDuHDeLNHnWW-gcx04AZL25ExUF-DX45A911ADAFh60bPEYvFq1kwk4fgB87YAik4ABU5MenzItPJbuvi8d6tvLfCY63JaLU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDOlcEH7bjzb2WVylBb1FSpLH-8aE1DLk2wt8GKdcocn6W20lqJOv-HfzwDPNeKUmDj3YOkEN-xoi0GARwLOx6q5OiGj6KgjbvQJD8nhOPcgQ9lERdpk7oFmnyW5Qc7l5tJ3Z6su3D0VYZ8SofhDiSjoFIl3-y_FWPm5k4v4korihp0ODCQ45USdLc5yhvhbxiBsnck8g93t6YXrQgA3HoYVFmOr56pu0S1uEVV0YI"
  ];
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    const photoTimer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 5000);
    return () => clearInterval(photoTimer);
  }, [HERO_PHOTOS.length]);
  const galleryCards: Card[] = [
    {
      id: 1,
      className: "md:col-span-2",
      title: "Gotong Royong Pembangunan Jembatan Tani Dusun Gendingan Kidul",
      category: "Pembangunan Partisipatif",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOtRa4nqrGJLPqrEW1OQ33Ry29IavYB-kWFTm29eOIxyTFH9GXwvHeVS819wYsSwgBLFFaUJfR5QkdtvLxMwFTyZeSfrCjfevvB_rC-ZivuF5kgpBFiRCS-RGZA_uINJMXV_vI7gehDuHDeLNHnWW-gcx04AZL25ExUF-DX45A911ADAFh60bPEYvFq1kwk4fgB87YAik4ABU5MenzItPJbuvi8d6tvLfCY63JaLU",
      content: (
        <div>
          <span className="text-xs uppercase font-bold text-primary-fixed tracking-wider bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
            Pembangunan Partisipatif
          </span>
          <h3 className="font-headline-lg text-headline-lg text-white mt-3 mb-2">
            Gotong Royong Pembangunan Jembatan Tani Dusun Gendingan Kidul
          </h3>
          <p className="font-body-md text-body-md text-white/90 leading-relaxed max-w-lg">
            Warga dan gabungan kelompok tani bahu-membahu membangun akses jembatan usaha tani guna memperlancar distribusi hasil panen padi, hortikultura, dan pakan ternak.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      className: "col-span-1",
      title: "Standar Layanan 3S di Loket Pelayanan Terpadu",
      category: "Pelayanan Publik",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLXbhM5RPnkuOWnPHhs-0VbR4uk-ZQDTpDkEczOhZvZN7ArJzWD2u2tV3bKhU3xhqXzbmB6all-wTcxaHesaz9QOvI2uRnbFvMAD2RZ_Jpi3I7PvGU9uR2wVTPrpFhgDnf12io9mgJw4VfTEANNRs85BWBRlDi4T9F9zTCIae8Rif-XRdJaH8B6GZM7km7bd8cwuoiKRwK-kiHXkXSCCxR-Zn_WM7RlJ7-4tup54c",
      content: (
        <div>
          <span className="text-xs uppercase font-bold text-primary-fixed tracking-wider bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
            Pelayanan Publik
          </span>
          <h3 className="font-headline-md text-headline-md text-white mt-3 mb-2">
            Standar Layanan 3S di Loket Pelayanan Terpadu
          </h3>
          <p className="font-body-sm text-body-sm text-white/90 leading-relaxed">
            Penerapan Senyum, Sapa, dan Selesai di loket digital balai desa untuk pelayanan administrasi warga secara cepat, ramah, dan bebas pungutan.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      className: "col-span-1",
      title: "Panen Raya Padi Organik Bersama Gabungan Kelompok Tani",
      category: "Ketahanan Pangan",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAV1XepRpsOaIQ7wAFNtli2zdA_l0h95Vb4B342MwDBPSUJihrRgfN2E43mOd_P7qhTeVZwp_rHqzdW_sJLrGoY1iwPRUtUR1xIUBvEhjfcvgiJ7SE_CVvQrIMAoxZS5Jtvat3j2MEAR8Ei9XV1NhDNJ4OatsEdnSlYRktffL4PKlE4ZNq7wnhiYbYOJ0Qh5Oo3i1rqxkDy8hRPdymhQukop_vJUdMejQqFhDkLj7E",
      content: (
        <div>
          <span className="text-xs uppercase font-bold text-primary-fixed tracking-wider bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
            Ketahanan Pangan
          </span>
          <h3 className="font-headline-md text-headline-md text-white mt-3 mb-2">
            Panen Raya Padi Organik Bersama Gabungan Kelompok Tani
          </h3>
          <p className="font-body-sm text-body-sm text-white/90 leading-relaxed">
            Sinergi petani dan penyuluh pertanian lapangan menghasilkan gabah kualitas super dengan pemanfaatan pupuk hayati mandiri.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      className: "md:col-span-2",
      title: "Pentas Seni Budaya dan Karawitan Bersih Desa Gendingan",
      category: "Seni & Tradisi",
      thumbnail:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCMiK5OszbGYrUv2idtLYNkg__4ObqBW7V-_hKWEK62JkFiEbz3P7WF6suvYQP777xXZGGyETaAqD21cN-hG1Vkm3hkD1yeXKvzhVbeW0Y5ym2-EnMlkory_YQlQ1EKt9WKGiNNS0VJFcWkz54Ql7emTOUchafZolfjgjmRyLKu5uNKhOP17Gw8SAGwT6tS7dMCJiEdSQb5oaULBmwhYdg7-DsJBn0FR6Z36kZyT-Y",
      content: (
        <div>
          <span className="text-xs uppercase font-bold text-primary-fixed tracking-wider bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
            Seni &amp; Tradisi
          </span>
          <h3 className="font-headline-lg text-headline-lg text-white mt-3 mb-2">
            Pentas Seni Budaya dan Karawitan Bersih Desa Gendingan
          </h3>
          <p className="font-body-md text-body-md text-white/90 leading-relaxed max-w-lg">
            Pelestarian kesenian karawitan Jawa dan pertunjukan jaranan sentherewe oleh generasi muda desa sebagai wujud syukur dan perekat kebersamaan warga.
          </p>
        </div>
      ),
    },
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
  const [complaintCategory, setComplaintCategory] = useState("Infrastruktur");
  const [complaintName, setComplaintName] = useState("");
  const [complaintWa, setComplaintWa] = useState("");
  const [complaintMsg, setComplaintMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  // Live countdown state
  const [cd1, setCd1] = useState({ d: 2, h: 4, m: 15 });
  const [cd2, setCd2] = useState({ d: 6, h: 10, m: 30 });
  const [cd3, setCd3] = useState({ d: 12, h: 1, m: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCd1((prev) => {
        if (prev.m > 0) return { ...prev, m: prev.m - 1 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59 };
        if (prev.d > 0) return { d: prev.d - 1, h: 23, m: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaintName || !complaintWa || !complaintMsg) return;
    setTicketId("GDG-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000));
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
<div className="w-full px-3.5 sm:px-6 lg:px-12 py-3 sm:py-6 space-y-8 sm:space-y-16">
{/*  1. HERO SECTION  */}
<section className="relative isolate w-full min-h-[500px] sm:min-h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between p-4 sm:p-8 md:p-12 text-center text-on-primary shadow-lg">
<div className="absolute inset-0 w-full h-full bg-cover bg-center -z-20 transition-all duration-1000 ease-in-out" style={{ backgroundImage: "url(" + HERO_PHOTOS[activePhotoIdx] + ")" }}>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-surface-dark/75 via-surface-dark/80 to-surface-dark/95 -z-10"></div>
<div className="pt-2"></div>
{/*  Center Content & Search  */}
<div className="max-w-4xl mx-auto my-auto py-4 flex flex-col items-center">
<h1 className="font-headline-xl text-2xl sm:text-4xl md:text-headline-xl text-on-primary mb-3 sm:mb-4 tracking-tight drop-shadow-sm max-w-3xl leading-snug">
          Selamat Datang di Desa Gendingan
        </h1>
<p className="font-body-md sm:font-body-lg text-xs sm:text-base md:text-body-lg text-on-primary/90 max-w-2xl mx-auto mb-5 sm:mb-8 leading-relaxed">
          Wujudkan Tata Kelola Desa yang Transparan, Pelayanan Publik Prima, dan Masyarakat Mandiri di Kabupaten Tulungagung.
        </p>
{/*  Prominent Search Bar  */}
<div className="w-full max-w-2xl bg-surface-card rounded-full p-1.5 sm:p-2 pl-3.5 sm:pl-6 flex items-center shadow-xl mb-5 sm:mb-6 transition-all focus-within:shadow-2xl">
<span className="material-symbols-outlined text-text-secondary mr-2">search</span>
<input onClick={() => setIsSearchOpen(true)} className="w-full bg-transparent font-body-sm text-body-sm text-text-primary placeholder:text-text-secondary outline-none cursor-pointer" placeholder="Cari layanan, surat, APBDes..." type="text" readOnly />
<button onClick={() => setIsSearchOpen(true)} className="shrink-0 bg-primary-container hover:bg-primary-hover text-on-primary font-label-md text-xs sm:text-label-md px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full transition flex items-center gap-1 sm:gap-1.5 shadow-sm" type="button">
<span>Cari</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Action CTAs  */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-on-primary font-label-lg text-xs sm:text-label-lg px-6 py-2.5 sm:py-3 rounded-full shadow-md transition-all" href="#layanan">
<span className="material-symbols-outlined text-lg">assignment</span>
<span>Layanan Desa</span>
</a>
<button onClick={() => setIsComplaintModalOpen(true)} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-card hover:bg-surface text-text-primary font-label-lg text-xs sm:text-label-lg px-6 py-2.5 sm:py-3 rounded-full shadow-md transition-all cursor-pointer" type="button">
<span className="material-symbols-outlined text-lg">campaign</span>
<span>Sampaikan Pengaduan</span></button>
</div>
</div>
{/*  Hero Bottom Bar  */}
<div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">

<div aria-label="Indikator Banner" className="flex items-center justify-center gap-2 py-2 mx-auto">
  {HERO_PHOTOS.map((_, idx) => (
    <button
      key={idx}
      type="button"
      onClick={() => setActivePhotoIdx(idx)}
      aria-label={`Pilih foto ${idx + 1}`}
      className={`transition-all duration-300 rounded-full cursor-pointer ${
        activePhotoIdx === idx
          ? "w-8 h-2.5 bg-primary-container shadow-md"
          : "w-2.5 h-2.5 bg-on-primary/40 hover:bg-on-primary/70"
      }`}
    />
  ))}
</div>
</div>
</section>
{/*  2. PROFIL & STATISTIK DESA (Bento Grid 12-Col)  */}
<section className="bg-surface rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
{/*  Left Column (6 cols): 2 Stacked White Cards  */}
<div className="lg:col-span-6 flex flex-col gap-6">
{/*  Top Card  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-2">
<span className="material-symbols-outlined text-sm">explore</span>
<span>Profil Wilayah</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg text-text-primary mb-2 sm:mb-3">Tentang Desa Gendingan</h2>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                Desa Gendingan terletak strategis di Kecamatan Kedungwaru, Kabupaten Tulungagung. Dikenal dengan karakter masyarakat yang agamis, guyub rukun, dan berdaya saing tinggi, Pemerintah Desa berkomitmen mewujudkan tata kelola desa yang modern, terbuka, serta berorientasi pada peningkatan kesejahteraan warga dan keterbukaan informasi publik.
              </p>
</div>
<div className="pt-4 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-text-secondary">Kode Wilayah: 35.04.05.2003</span>
<Link className="inline-flex items-center gap-1 text-primary font-label-md text-label-md hover:underline" href="/profil">
<span>Pelajari Selengkapnya</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</Link>
</div>
</div>
{/*  Bottom Card: Demographic Highlight Rows (Real BPS Tulungagung Data)  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col gap-3 justify-around">
  <div className="flex items-center justify-between pb-1 border-b border-border/60">
    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
      Data Kependudukan Riil (BPS 2024)
    </span>
    <Link href="/data-statistik" className="text-xs text-primary font-semibold hover:underline flex items-center gap-0.5">
      <span>Lihat Grafik</span>
      <span className="material-symbols-outlined text-xs">arrow_forward</span>
    </Link>
  </div>

  {/* Stat 1: 4.695 Jiwa Penduduk */}
  <Link
    href="/data-statistik"
    className="flex items-start gap-4 p-3 rounded-xl bg-surface hover:bg-secondary/40 border border-border/60 transition-all group"
  >
    <div className="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-xl">groups</span>
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between">
        <div className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors font-bold tabular-nums">
          4.695 Jiwa Penduduk
        </div>
        <span className="text-[10px] font-semibold text-primary bg-white px-2 py-0.5 rounded-full border border-border">
          Riil BPS
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
        Laki-laki 2.407 • Perempuan 2.288 • Sex Ratio 105,2 (BPS Kec. Kedungwaru 2024).
      </p>
    </div>
  </Link>

  {/* Stat 2: 1.562 Kepala Keluarga */}
  <Link
    href="/data-statistik"
    className="flex items-start gap-4 p-3 rounded-xl bg-surface hover:bg-secondary/40 border border-border/60 transition-all group"
  >
    <div className="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-xl">home_work</span>
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between">
        <div className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors font-bold tabular-nums">
          1.562 Kepala Keluarga (KK)
        </div>
        <span className="text-[10px] font-semibold text-primary bg-white px-2 py-0.5 rounded-full border border-border">
          Riil Disdukcapil
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
        Kepadatan 2.225 Jiwa/km² tersebar harmonis di lingkungan rukun warga yang aktif.
      </p>
    </div>
  </Link>

  {/* Stat 3: 8 RW & 22 RT */}
  <Link
    href="/data-statistik"
    className="flex items-start gap-4 p-3 rounded-xl bg-surface hover:bg-secondary/40 border border-border/60 transition-all group"
  >
    <div className="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
      <span className="material-symbols-outlined text-xl">location_city</span>
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between">
        <div className="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors font-bold tabular-nums">
          8 RW & 22 RT (Luas 2,11 km²)
        </div>
        <span className="text-[10px] font-semibold text-primary bg-white px-2 py-0.5 rounded-full border border-border">
          Riil Wilayah
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
        Mencakup Dusun Krajan & Gendingan dengan jarak 2,5 km ke pusat Tulungagung.
      </p>
    </div>
  </Link>
</div>
</div>
{/*  Right Column (6 cols): Full Google Maps Embed  */}
<div className="lg:col-span-6 bg-surface-card rounded-2xl overflow-hidden shadow-sm border border-border h-full min-h-[340px] sm:min-h-[480px] relative">
  <iframe
    title="Peta Resmi Desa Gendingan Google Maps"
    src="https://maps.google.com/maps?q=Kantor+Desa+Gendingan,+Kedungwaru,+Tulungagung&z=15&output=embed"
    className="w-full h-full min-h-[340px] sm:min-h-[480px] border-0"
    loading="lazy"
    allowFullScreen
  />
</div>
</div>
</section>
{/*  3. BERITA DESA TERBARU (3-Column Equal Card Grid)  */}
<section className="space-y-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
<div>
<div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-1">
<span className="material-symbols-outlined text-sm">newspaper</span>
<span>Warta Gendingan</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg text-text-primary">Berita &amp; Kabar Desa</h2>
<p className="font-body-md text-body-md text-text-secondary mt-1">
            Ikuti perkembangan informasi terkini, agenda pemerintahan, dan pengumuman resmi Desa Gendingan.
          </p>
</div>
<a className="shrink-0 inline-flex items-center gap-1 text-primary hover:text-primary-hover font-label-md text-label-md" href="#">
<span>Lihat Semua Berita</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Card 1  */}
<article className="bg-surface-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
<div className="relative w-full aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Deliberation meeting at Desa Gendingan Tulungagung village hall, village head and local representatives sitting courteously discussing community budget with laptops and notebooks, bright natural daylight, respectful civic atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp_NGOXLQlEWrJKrXFsAakygr8Jxd5ihvm1bKgnTsc0qJdZ7xdMAHhgLlhDFt9AydHx3c-Ro40WpqwYnmqipEO2388dU6d8HGS4dlKVuWlFm26MYPNQdQR_ba--Zkz7MIopG-E8TLmfTJcos2SFDNDgFL2aH4qNXiPOpa1SOm3Q8RSt6jA55PgQ6GRzFi3wBZul-omdolOE0uvApqf8z7jGw6S6xA94-04u1y6L-U" />
<span className="absolute top-3 left-3 bg-surface-card/90 backdrop-blur-md font-label-sm text-label-sm text-primary px-3 py-1 rounded-full shadow-sm">
              Pemerintahan
            </span>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-4">
<div>
<div className="font-body-sm text-body-sm text-text-secondary mb-2 flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs">calendar_today</span>
<span>10 Nov 2026</span>
<span>•</span>
<span>Balai Desa Gendingan</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                Musyawarah Desa Penetapan RKPDes Tahun Anggaran 2027
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary line-clamp-2">
                Pemerintah Desa bersama Badan Permusyawaratan Desa (BPD) dan tokoh warga menetapkan rencana kerja pembangunan terpadu dengan fokus infrastruktur dan pangan.
              </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary group-hover:gap-2 transition-all" href="#">
<span>Baca selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_right_alt</span>
</a>
</div>
</article>
{/*  Card 2  */}
<article className="bg-surface-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
<div className="relative w-full aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Village government mobile service in Tulungagung, friendly civil staff serving rural villagers under a shaded community tent, handing over documents with smiles, clear morning lighting, community service documentary style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCElV9W7hjyUOO7TjOGfeACAkUyF1m6Wcgjyq1VKwQFK8LhZuGqVH8ggSw6cOIuxyzsGDnOQAiWTjbZVMGlrmLljU8TFZlNdfVxHE7bemuUqviaNXP8bE0jRmpy3GYdpXZhEGq0speiCSHMnFvK4ImsUnxl31I-uD-3P4XN4-9d7S59YRzlw-MLC5BoVYW8d_AdhvvFRf9qOTP9ZRINoHi1QYW80YIr-DnMkWE0Jl4" />
<span className="absolute top-3 left-3 bg-surface-card/90 backdrop-blur-md font-label-sm text-label-sm text-primary px-3 py-1 rounded-full shadow-sm">
              Layanan Publik
            </span>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-4">
<div>
<div className="font-body-sm text-body-sm text-text-secondary mb-2 flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs">calendar_today</span>
<span>08 Nov 2026</span>
<span>•</span>
<span>Dusun Ngemplak</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                Layanan Administrasi Kependudukan Keliling Kini Hadir di Tiap Dusun
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary line-clamp-2">
                Inisiatif jemput bola pengurusan KTP digital, kartu keluarga, dan akta kelahiran untuk memudahkan warga lansia dan petani tanpa antrean kantor.
              </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary group-hover:gap-2 transition-all" href="#">
<span>Baca selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_right_alt</span>
</a>
</div>
</article>
{/*  Card 3  */}
<article className="bg-surface-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
<div className="relative w-full aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Workshop for village small business owners in East Java, instructor demonstrating digital payment tools and e-commerce packaging to energetic Indonesian MSME artisans, warm inspiring ambiance, clean interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYUjCzkWpUAM2NwxzhqxBbfs3pZSi02hag4cVMqqTtY_knpShET6QJojPf6uc8V1WC8cuLhOgkCB_a6x0yb85V6EsIgCz7TbFalp-Z59OWq7MlQ1VLEZLj0S21Ao_AAmOzh2UNC3CL7BQIg6y9l7mdbOo6nghjs1RVtDBJ9zMzUe_l-nB0KCPIOYnkHkwAM6veDhRpn2P3k-pLPV8mo4RBwnlbgL3y52Vkm_3-Jew" />
<span className="absolute top-3 left-3 bg-surface-card/90 backdrop-blur-md font-label-sm text-label-sm text-primary px-3 py-1 rounded-full shadow-sm">
              Pemberdayaan
            </span>
</div>
<div className="p-6 flex flex-col flex-1 justify-between gap-4">
<div>
<div className="font-body-sm text-body-sm text-text-secondary mb-2 flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs">calendar_today</span>
<span>04 Nov 2026</span>
<span>•</span>
<span>BUMDes Maju Bersama</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                Pelatihan Digitalisasi Pemasaran untuk Pelaku UMKM Desa Gendingan
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary line-clamp-2">
                Puluhan pengrajin batik dan produsen jajanan tradisional dibekali keterampilan foto produk, manajemen keuangan digital, dan pemasaran daring.
              </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary group-hover:gap-2 transition-all" href="#">
<span>Baca selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_right_alt</span>
</a>
</div>
</article>
</div>
</section>
{/*  4. PROGRAM & PEMBANGUNAN UNGGULAN 2026 (Full-Width Featured Banner)  */}
<section className="relative isolate w-full min-h-[480px] sm:min-h-[580px] md:min-h-[660px] rounded-2xl sm:rounded-3xl overflow-hidden flex items-end p-4 sm:p-6 md:p-12 shadow-xl">
<div className="absolute inset-0 w-full h-full bg-cover bg-center -z-20" data-alt="Modern concrete rural agricultural irrigation canal running through vibrant rice fields in Tulungagung Java with distant solar-powered water monitoring station, warm sunset light reflecting in water channels, peaceful and progressive rural atmosphere" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCAotC2_BAFmAPBV6ZXw71x0AG1ExVtQc2-kkU5d3zqyJiCtMloMh16imwELRR8R2O13BPQ8AilyxFIKiSN2GkLAy9KOP8-YARuTysUX5wvpuuJFFXc2cf8I6hp8FlQFl15giQiZVCfkyZthkgHy8nUYIEfDcdUJFxp09Vb-0uVFC6MCTA9NuSeRm1Kbz6_FoQ16sR8SkDS50XLvUTYjaQJbf8UuEp1mfWqTpPIXY')"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/30 to-transparent -z-10"></div>
{/*  Floating Glass Card Overlay  */}
<div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="bg-surface-card/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 max-w-xl shadow-xl w-full">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Program Unggulan 2026</span>
<h2 className="font-headline-lg text-lg sm:text-2xl md:text-headline-lg text-text-primary mt-1 mb-2">
            Transformasi Layanan Digital &amp; Transparansi APBDes Mandiri
          </h2>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-4">
            Integrasi sistem pelayanan administrasi surat daring terpadu, papan pemantauan realisasi anggaran publik real-time, serta modernisasi jaringan irigasi tersier persawahan warga.
          </p>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:gap-2 transition-all" href="/data-statistik#apbdes">
<span>Lihat detail pembangunan</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Carousel Nav Controls  */}
<div className="flex items-center gap-3 self-end md:self-auto bg-surface-dark/70 backdrop-blur-md px-4 py-2 rounded-full">
<button aria-label="Sebelumnya" className="w-9 h-9 rounded-full bg-surface-card/20 hover:bg-surface-card/40 text-on-primary flex items-center justify-center transition" type="button">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<div className="flex items-center gap-1.5 px-2">
<span className="w-5 h-2 rounded-full bg-primary-container"></span>
<span className="w-2 h-2 rounded-full bg-on-primary/40"></span>
<span className="w-2 h-2 rounded-full bg-on-primary/40"></span>
<span className="w-2 h-2 rounded-full bg-on-primary/40"></span>
</div>
<button aria-label="Selanjutnya" className="w-9 h-9 rounded-full bg-surface-card/20 hover:bg-surface-card/40 text-on-primary flex items-center justify-center transition" type="button">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</section>
{/*  5. POTENSI DESA GENDINGAN (3x2 Card Grid)  */}
<section className="space-y-8">
<div className="text-center max-w-2xl mx-auto">
<div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-1">
<span className="material-symbols-outlined text-sm">stars</span>
<span>Potensi Unggulan</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg text-text-primary">Kekayaan &amp; Potensi Desa Gendingan</h2>
<p className="font-body-md text-body-md text-text-secondary mt-2">
          Mengenal lebih dekat kekayaan ekonomi kreatif, ketahanan pangan, seni budaya, dan kelembagaan ekonomi kerakyatan kami.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Potential 1  */}
<div className="bg-surface-card rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Handcrafted Tulungagung batik textile with intricate traditional patterns being created by skilled village women using canting, detailed close-up, cultural heritage colors and rich natural textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQni7dTeq5b9ioh7HoSNZ2NzTML_5LD3sk-1D8dEZ1Kkh0nEFxKYOusG5O-gCdbWYP-EhOT1z64e092044em3hP0r2z_oaS0PfxiaIlDiyay50lOVyIKawH0qcsToTdVC7KxpguvkbHTEIE31XxNR6vLIEsCTxBxO0gO1w6jSdfKLJ3EHM7SrAxiICzR7W1Ks4orkoSF_gs_R32dVV4aNbQq2kx8LLNROnuSVqDFQ" />
</div>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-sm">palette</span>
<span>UMKM &amp; Kriya</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">Sentra Batik &amp; Kerajinan Tangan</h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Produk kriya unggulan karya perajin lokal Desa Gendingan dengan corak khas pesisiran dan flora lokal Tulungagung.
            </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary mt-4 group-hover:gap-2 transition-all" href="#">
<span>Selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Potential 2  */}
<div className="bg-surface-card rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisanal traditional Javanese snacks and packaged dried cassava crackers arranged aesthetically on woven bamboo tray, warm studio-style rural lighting, natural culinary presentation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOGHRbSnJd9LNyo5TW35IKK-Q7xEv-SGyh1v8GaAoLoPtyiQZRylZHgOUrWPQuTN-z360I9Oc2jPCH8r1qeJG7Q0IF0NzWB0-Tqaw3oA7VjIPHflpFkNFV3xPTJgcwr2fxwq6G7xiL80GlzgM9LBWv7aQzhIeUaEu5StFsOJwZG2iRyLbwWgj4DCMc-NuUxW73FYHsgMaBZKxXGAJVQRANa_5LSVaCuN06h8-p8qc" />
</div>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-sm">restaurant</span>
<span>Kuliner Lokal</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">Olahan Pangan &amp; Jajanan Tradisional</h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Aneka produk pangan olahan sehat khas Tulungagung hasil produksi kelompok wanita tani (KWT) dan UMKM desa.
            </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary mt-4 group-hover:gap-2 transition-all" href="#">
<span>Selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Potential 3  */}
<div className="bg-surface-card rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Expansive golden ripe paddy rice field in Tulungagung with clear irrigation water channels and healthy rice stalks ready for harvest under blue morning sky, agricultural documentary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK9kyAxDdu7jr2_pMyBxAqdEwNUMSgTVictiDQ16VizJJox6nylZ7eOam6lOxU2fGDrPvPqa0H0V9Gfs8wbH7J3uwjr0fTVSFZrIGUf1laJurETr1a-JgIBQEGHVduoCqtLTK7D3YkEDse63TvWJF0FaNeDirOYzlEnQbWi1koZWem8RRnKAXlwMmYG72k1N_xZvaQuLTW3T_zwIOQQuHxHQIgBYQax6U7vAamoNM" />
</div>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-sm">eco</span>
<span>Pertanian</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">Lumbung Padi &amp; Hortikultura</h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Lahan pertanian produktif dengan sistem irigasi teknis teratur, penyuplai komoditas pangan utama kecamatan.
            </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary mt-4 group-hover:gap-2 transition-all" href="#">
<span>Selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Potential 4  */}
<div className="bg-surface-card rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Freshwater fish farming ponds with aerators and clean water in rural Java, surrounded by banana trees and vegetable patches, sustainable agricultural ecosystem" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9UwzbYuYItvIW6MCwKQtrjiXp6d8TsUYEErOdw2oIlCiKqkOWzOzy4eZCzBmM_xrkvNF1HL4vT5BfBFTv8BNwNUaG8zYfXgovnJc1YQcBYOy8ND_Kka-r8eyOPWkHSJ0_xSksPkV4qyZ9BYO-vqaQwsDzKhXAtgkUJDQZxc9FDdrINVMnF-s30OkJGNXNRkMzcus3YvKMPPnjZOmemx20wEQ8WvtCPDxFla0nbXw" />
</div>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-sm">water</span>
<span>Perikanan &amp; Ternak</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">Budi Daya Perikanan &amp; Ternak</h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Klaster budidaya lele dan gurame air tawar terintegrasi dengan peternakan kambing peranakan etawa mandiri.
            </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary mt-4 group-hover:gap-2 transition-all" href="#">
<span>Selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Potential 5  */}
<div className="bg-surface-card rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Traditional East Javanese cultural performance in Tulungagung village, young dancers in ornate traditional costumes performing with gamelan musicians in background, respectful cultural preservation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFA-_WbePlqN5SISa2or134j_IH7qswmy3HrLm3Kbs6zLeUO8vIptPJ68Eap3S2dSUpMwmkqWBh7vFbmdyfwfWg7jre4zJl_Q26ZJaatTsfEiooZKDDBGKeJIl2J-iemNxn4LBezzY3V0W7R8S3NpW0TIGOuQ0Qn4yVHIcrDCPueO3DiWsv8H7D6H1QzYFvH00wcKb7mymdUeGTSRoJOAvtcDeLbw9mICZl5C9qFw" />
</div>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-sm">theater_comedy</span>
<span>Seni &amp; Budaya</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">Pelestarian Kesenian &amp; Tradisi</h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Paguyuban karawitan, jaranan sentherewe, dan ritual adat Bersih Desa tahunan sebagai wujud syukur bersama.
            </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary mt-4 group-hover:gap-2 transition-all" href="#">
<span>Selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Potential 6  */}
<div className="bg-surface-card rounded-2xl p-4 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
<div>
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Clean and organized village-owned enterprise office and mart in East Java, displaying local agricultural products and handling digital financial payment kiosks for villagers, neat and professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZjT3e0fOzFaaxhy5HMZs2LE19ltkXnaJmb7oC__ykXqEjT5BV3SRYCgsv3VIO4UOnvMHJN10-YVe3LioBlMpo9aY-6w5dZousNt_JUgwcBHcQKHf5pvhNErmgT9F6xswleeV-imDH0GfwE4SqcY0c_sGHiQAviS8RmdmnlxinE2-Dkk2fr_9Yl6a3UupIPiOy1htSl1X5DTRnrNcF57qxGywRyXWmgb5nqVmalYk" />
</div>
<div className="flex items-center gap-1 text-primary font-label-sm text-label-sm mb-1">
<span className="material-symbols-outlined text-sm">storefront</span>
<span>BUMDes</span>
</div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">Unit Usaha BUMDes Maju Bersama</h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Pengelolaan pasar desa, penyediaan sarana produksi pertanian, serta layanan perbankan mini untuk warga desa.
            </p>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary mt-4 group-hover:gap-2 transition-all" href="#">
<span>Selengkapnya</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
<div className="flex justify-center pt-4">
<a className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-hover text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-full shadow transition-all" href="/#potensi">
<span>Lihat Semua Potensi Desa</span>
<span className="material-symbols-outlined text-sm">grid_view</span>
</a>
</div>
</section>
{/*  6. AGENDA & KEGIATAN DESA (Stacked Horizontal Cards with Countdown)  */}
<section className="space-y-8">
<div className="text-center max-w-2xl mx-auto">
<div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-1">
<span className="material-symbols-outlined text-sm">event_upcoming</span>
<span>Jadwal Kegiatan</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg text-text-primary">Agenda &amp; Kegiatan Desa</h2>
<p className="font-body-md text-body-md text-text-secondary mt-1">
          Jadwal musyawarah, pelayanan kesehatan masyarakat, serta agenda kemasyarakatan terdekat.
        </p>
</div>
<div className="flex flex-col gap-4">
{/*  Agenda 1  */}
<div className="bg-surface-card rounded-2xl p-4 md:p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
{/*  Left Thumbnail  */}
<div className="w-full md:w-36 h-44 md:h-36 rounded-xl overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Village health post posyandu nurse gently examining elderly resident blood pressure in warm clean village clinic, caring community health setting in Indonesia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_1K6qVIhNtk8ZEUARLGsmWmnyayftliEeYm6TwcrwI1jxOQ1PodxU5vA4R4rhsY8_saNqMEQFwLTdThuerhtuSdQgLHfdo0Fbk6gyyX5x1uy3tUlTU6GcfFNE_RMEz2YqKF4LkEwxOTmKUPnjuBH5wWmpDBbKb15AWJ6G_tJtnM3NDDvnNvUzCjLPr7cnW0k7kDv9CqhO507mozMwj5VwKKp9kKdFGAijaXrj60U" />
<span className="absolute top-2 left-2 bg-primary-container text-on-primary text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
              Pelayanan
            </span>
</div>
{/*  Center Metadata  */}
<div className="flex-1 w-full flex flex-col gap-2">
<h3 className="font-headline-md text-headline-md text-text-primary">
              Posyandu Lansia &amp; Pemeriksaan Kesehatan Gratis
            </h3>
<p className="font-body-sm text-body-sm text-text-secondary">
              Pemeriksaan gula darah, tensi, dan pemberian vitamin berkala untuk warga lanjut usia di lingkungan Dusun Krajan.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 pt-1">
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
<span>15 Nov 2026</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">schedule</span>
<span>08:00 - 11:30 WIB</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">place</span>
<span className="truncate">Balai Dusun Krajan</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">group</span>
<span>150+ Lansia</span>
</div>
</div>
</div>
{/*  Right Countdown  */}
<div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-border/40">
<span className="font-label-sm text-label-sm text-text-secondary font-medium">Hitung Mundur Pelaksanaan</span>
<div className="flex items-center gap-2">
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">05</div>
<div className="text-[10px] text-text-secondary uppercase">Hari</div>
</div>
<span className="font-bold text-text-secondary">:</span>
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">10</div>
<div className="text-[10px] text-text-secondary uppercase">Jam</div>
</div>
<span className="font-bold text-text-secondary">:</span>
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">40</div>
<div className="text-[10px] text-text-secondary uppercase">Menit</div>
</div>
</div>
<a className="mt-1 bg-primary-container hover:bg-primary-hover text-on-primary font-label-sm text-label-sm px-5 py-2 rounded-full transition shadow-sm" href="#">
              Detail Kegiatan
            </a>
</div>
</div>
{/*  Agenda 2  */}
<div className="bg-surface-card rounded-2xl p-4 md:p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
{/*  Left Thumbnail  */}
<div className="w-full md:w-36 h-44 md:h-36 rounded-xl overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Village consultative forum meeting in Tulungagung pendopo, village leaders with budget transparency banners presented on screen, civic participation in East Java" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-XGyvEhf3jR-A7auP7PBCSy0EkvpT5uzQTJ-zlml4c9aWobKQ17cUxI6Nq1GlOAfU-EkBKJJxTf6kyRFnPiou1OIc-Rz-vxF4cJUH9-B-MQJtsWLOmmjzI8fSBd7qKWiZfDAGAWVux-WqdVBvLHgU1Qw1_JbS0zSLym2dWSeg-mJDnnEDTSUqp9ujMPtYwcGsYVZCTOrKM4SkhVbh8HlUdqST-UpONPQyzzcHcc" />
<span className="absolute top-2 left-2 bg-primary-container text-on-primary text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
              Musyawarah
            </span>
</div>
{/*  Center Metadata  */}
<div className="flex-1 w-full flex flex-col gap-2">
<h3 className="font-headline-md text-headline-md text-text-primary">
              Forum Konsultasi Publik Transparansi Dana Desa
            </h3>
<p className="font-body-sm text-body-sm text-text-secondary">
              Pemaparan terbuka realisasi penggunaan APBDes triwulan akhir dan penyerapan usulan pembangunan dari perwakilan dusun.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 pt-1">
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
<span>22 Nov 2026</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">schedule</span>
<span>09:00 - 12:00 WIB</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">place</span>
<span className="truncate">Pendopo Balai Desa</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">group</span>
<span>BPD &amp; Tokoh Warga</span>
</div>
</div>
</div>
{/*  Right Countdown  */}
<div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-border/40">
<span className="font-label-sm text-label-sm text-text-secondary font-medium">Hitung Mundur Pelaksanaan</span>
<div className="flex items-center gap-2">
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">12</div>
<div className="text-[10px] text-text-secondary uppercase">Hari</div>
</div>
<span className="font-bold text-text-secondary">:</span>
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">11</div>
<div className="text-[10px] text-text-secondary uppercase">Jam</div>
</div>
<span className="font-bold text-text-secondary">:</span>
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">40</div>
<div className="text-[10px] text-text-secondary uppercase">Menit</div>
</div>
</div>
<a className="mt-1 bg-primary-container hover:bg-primary-hover text-on-primary font-label-sm text-label-sm px-5 py-2 rounded-full transition shadow-sm" href="#">
              Detail Kegiatan
            </a>
</div>
</div>
{/*  Agenda 3  */}
<div className="bg-surface-card rounded-2xl p-4 md:p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
{/*  Left Thumbnail  */}
<div className="w-full md:w-36 h-44 md:h-36 rounded-xl overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Vibrant community bazaar market on village field in Java, decorated stalls selling local fresh produce and snacks, Indonesian families enjoying morning sunshine" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBej8h5F2vmIrqIYg6Qm39q9mZAMm36-k0BnyTFHxzSTrGuLT95Dh6HUInjhaSN8tfCcN8ynBALuj1Ns8VzaXSocthnzNWrPKRgSoH8JVk3C-Ew_fr0CRmUOW3Hf91e4_yxLLwm0-z_s4bWn-ytBuJMjUFZGaF9SnxCE2oatUmN0kmw0NgHqeeG6IYdrvu7HNyIjOKcziODjprUpEZO4qIgIuPZ6hG-MfUgQHfkSiQ" />
<span className="absolute top-2 left-2 bg-primary-container text-on-primary text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
              Pemberdayaan
            </span>
</div>
{/*  Center Metadata  */}
<div className="flex-1 w-full flex flex-col gap-2">
<h3 className="font-headline-md text-headline-md text-text-primary">
              Bazar UMKM &amp; Pasar Murah Desa Gendingan
            </h3>
<p className="font-body-sm text-body-sm text-text-secondary">
              Pameran produk unggulan warga desa serta penyediaan sembako bersubsidi bekerja sama dengan BUMDes dan Dinas Koperasi.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 pt-1">
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
<span>29 Nov 2026</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">schedule</span>
<span>07:00 - 14:00 WIB</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">place</span>
<span className="truncate">Lapangan Desa</span>
</div>
<div className="flex items-center gap-1 text-text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-sm">group</span>
<span>500+ Pengunjung</span>
</div>
</div>
</div>
{/*  Right Countdown  */}
<div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-border/40">
<span className="font-label-sm text-label-sm text-text-secondary font-medium">Hitung Mundur Pelaksanaan</span>
<div className="flex items-center gap-2">
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">19</div>
<div className="text-[10px] text-text-secondary uppercase">Hari</div>
</div>
<span className="font-bold text-text-secondary">:</span>
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">09</div>
<div className="text-[10px] text-text-secondary uppercase">Jam</div>
</div>
<span className="font-bold text-text-secondary">:</span>
<div className="bg-secondary-container px-3 py-1.5 rounded-xl text-center min-w-[54px]">
<div className="font-headline-sm text-headline-sm text-primary font-bold tabular-nums">40</div>
<div className="text-[10px] text-text-secondary uppercase">Menit</div>
</div>
</div>
<a className="mt-1 bg-primary-container hover:bg-primary-hover text-on-primary font-label-sm text-label-sm px-5 py-2 rounded-full transition shadow-sm" href="#">
              Detail Kegiatan
            </a>
</div>
</div>
</div>
<div className="flex justify-center pt-2">
<a className="inline-flex items-center gap-2 bg-surface-card hover:bg-surface text-primary font-label-lg text-label-lg px-8 py-3 rounded-full shadow-sm transition" href="#">
<span>Lihat Semua Agenda</span>
<span className="material-symbols-outlined text-sm">event</span>
</a>
</div>
</section>
{/*  7. GALERI DOKUMENTASI DESA (Asymmetric Bento Photo Grid)  */}
<section className="space-y-8">
<div className="text-center max-w-2xl mx-auto">
<div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm uppercase tracking-wider mb-1">
<span className="material-symbols-outlined text-sm">photo_library</span>
<span>Dokumentasi Visual</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-headline-lg text-text-primary">Galeri Dokumentasi Desa</h2>
<p className="font-body-md text-body-md text-text-secondary mt-1">
          Potret kebersamaan gotong royong, pembangunan sarana publik, dan dinamika hangat masyarakat Desa Gendingan.
        </p>
</div>
{/*  Interactive Animated Bento Grid (Framer Motion LayoutGrid)  */}
<div className="w-full">
  <LayoutGrid cards={galleryCards} />
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
<p className="font-body-sm text-body-sm text-text-secondary text-center sm:text-left">
          Dokumentasi resmi seluruh program kerja Pemerintah dan dinamika sosial masyarakat Desa Gendingan.
        </p>
<a className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-hover text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-full shadow transition-all" href="#">
<span className="material-symbols-outlined text-sm">collections</span>
<span>Buka Galeri Lengkap</span>
</a>
</div>
</section>

{/*  8. PRE-FOOTER CTA BANNER (Pengaduan & Aspirasi)  */}
<section className="relative isolate w-full rounded-3xl overflow-hidden p-6 md:p-space-3xl text-center text-on-primary shadow-xl">
<div className="absolute inset-0 w-full h-full bg-cover bg-center -z-20" data-alt="Dusk panoramic view of rural village roofs and peaceful green surroundings in Tulungagung East Java, twilight blue hour sky with soft warm ambient lights glowing from village homes, cinematic serene landscape" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOlcEH7bjzb2WVylBb1FSpLH-8aE1DLk2wt8GKdcocn6W20lqJOv-HfzwDPNeKUmDj3YOkEN-xoi0GARwLOx6q5OiGj6KgjbvQJD8nhOPcgQ9lERdpk7oFmnyW5Qc7l5tJ3Z6su3D0VYZ8SofhDiSjoFIl3-y_FWPm5k4v4korihp0ODCQ45USdLc5yhvhbxiBsnck8g93t6YXrQgA3HoYVFmOr56pu0S1uEVV0YI')"}}>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/85 to-surface-dark/95 -z-10"></div>
<div className="max-w-2xl mx-auto flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-primary-container/20 text-primary-fixed flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-3xl">record_voice_over</span>
</div>
<h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-primary mb-2 sm:mb-3">
          Sampaikan Pengaduan atau Aspirasi Anda
        </h2>
<p className="font-body-md text-xs sm:text-body-md text-on-primary/90 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Partisipasi aktif Anda adalah kunci kemajuan Desa Gendingan. Sampaikan usulan pembangunan, pengaduan fasilitas umum, atau kendala layanan secara transparan dan terpantau.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
<button onClick={() => setIsComplaintModalOpen(true)} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-hover text-on-primary font-label-lg text-xs sm:text-label-lg px-6 sm:px-8 py-3 rounded-full shadow-lg transition-all cursor-pointer" type="button">
<span className="material-symbols-outlined text-lg">edit_note</span>
<span>Buat Laporan Pengaduan</span></button>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-card/20 hover:bg-surface-card/30 backdrop-blur-md text-on-primary font-label-lg text-xs sm:text-label-lg px-6 sm:px-7 py-3 rounded-full shadow transition-all" href="#">
<span className="material-symbols-outlined text-lg">track_changes</span>
<span>Lacak Status Laporan</span>
</a>
</div>
</div>
</section>
</div>
</div></main>

      <QuickSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Complaint Modal */}
      {isComplaintModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dark/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsComplaintModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-surface-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-2xl">edit_note</span>
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  Sampaikan Pengaduan / Aspirasi
                </h3>
              </div>
              <button
                onClick={() => setIsComplaintModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:bg-surface"
              >
                ✕
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-secondary text-primary mx-auto flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary">
                  Pengaduan Diterima!
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  Nomor Tiket: <strong className="font-mono text-primary">{ticketId}</strong>
                </p>
                <p className="text-xs text-text-secondary mt-3">
                  Terima kasih {complaintName}. Laporan Anda perihal &ldquo;{complaintCategory}&rdquo; telah diteruskan ke perangkat desa Gendingan.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsComplaintModalOpen(false);
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary-hover"
                >
                  Tutup
                </button>
              </div>
            ) : (
              <form onSubmit={handleComplaintSubmit} className="space-y-4">
                <div>
                  <label className="block font-label-sm text-label-sm text-text-primary mb-1">
                    Kategori Laporan
                  </label>
                  <select
                    value={complaintCategory}
                    onChange={(e) => setComplaintCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary font-body-sm text-body-sm outline-none"
                  >
                    <option value="Infrastruktur & Jalan Tani">Infrastruktur & Jalan Tani</option>
                    <option value="Pelayanan Administrasi Loket">Pelayanan Administrasi Loket</option>
                    <option value="Bantuan Sosial & Kesehatan">Bantuan Sosial & Kesehatan</option>
                    <option value="Kebersihan & Lingkungan">Kebersihan & Lingkungan</option>
                    <option value="Usulan Pembangunan Desa">Usulan Pembangunan Desa</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-text-primary mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={complaintName}
                    onChange={(e) => setComplaintName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary font-body-sm text-body-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-text-primary mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={complaintWa}
                    onChange={(e) => setComplaintWa(e.target.value)}
                    placeholder="081234567890"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary font-body-sm text-body-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-text-primary mb-1">
                    Uraian Aspirasi / Keluhan
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={complaintMsg}
                    onChange={(e) => setComplaintMsg(e.target.value)}
                    placeholder="Tuliskan kendala atau aspirasi Anda secara jelas..."
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary font-body-sm text-body-sm outline-none"
                  />
                </div>
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsComplaintModalOpen(false)}
                    className="px-5 py-2 rounded-full font-label-md text-label-md text-text-secondary hover:bg-surface"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-primary-container hover:bg-primary-hover text-on-primary font-label-md text-label-md shadow-sm transition"
                  >
                    Kirim Laporan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
