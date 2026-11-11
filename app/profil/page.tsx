"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import TimelineBlock01 from "@/components/ui/timeline-01";
import InteractiveVillageMap from "@/components/InteractiveVillageMap";

export default function ProfilPage() {

  const [activeTab, setActiveTab] = useState<"sejarah" | "visi-misi" | "wilayah">("sejarah");

  useEffect(() => {
    const syncHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h.includes("visi")) {
        setActiveTab("visi-misi");
      } else if (h.includes("wilayah") || h.includes("demografi")) {
        setActiveTab("wilayah");
      } else if (h.includes("sejarah")) {
        setActiveTab("sejarah");
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const handleTabChange = (tab: "sejarah" | "visi-misi" | "wilayah") => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${tab}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="w-full pt-24 pb-16 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
{/*  Active Navigation Sync for Page Context  */}

{/*  Page Header Banner with Visual Depth  */}
<section className="w-full px-4 sm:px-8 lg:px-12 py-6">
<div className="relative w-full rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[340px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 shadow-sm bg-cover bg-center" data-alt="Lush green panoramic terraced rice fields in tropical East Java village at golden dawn with mist rolling across distant volcanic peaks and clear tranquil atmosphere, fine art landscape photography style with emerald green tones" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCr6oqzmGYSsPs-sX6_oqAToJ_LrUqQ-U6hEH0zouWzeS3OQ6qlrd17TlzJ7FHU2UVXBGIcecJi_Auvpu_d-7K9nmgiB3Sdlo5nG_jWtFJFp6suxBfgJyI0dqnchOws5tuueTzxMiWs9KGdzgOXbzazOyhggBGaB6P76CJOn4UPXsmcnWGzdyWyscjXgN9Cn0wvJtBR7wmUHoMxMwl2eNUoPCTG1-zQ7vbbducJLuw')"}}>
{/*  Gradient Scrim for Editorial Typography Contrast  */}
<div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/75 to-surface-dark/40 z-0"></div>
{/*  Top Row: Breadcrumb & Civic Registry Badge  */}
<div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
<nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark/60 backdrop-blur-md text-text-on-dark font-label-sm text-label-sm">
<span className="opacity-80">Beranda</span>
<span className="opacity-50">/</span>
<span className="text-primary-fixed font-semibold">Profil Desa</span>
</nav>

</div>
{/*  Center Title & Subtitle Editorial Group  */}
<div className="relative z-10 max-w-3xl my-6">
<span className="font-label-sm text-label-sm tracking-wider uppercase text-primary-fixed font-semibold mb-2 block">
          Pemerintah Desa Gendingan • Kedungwaru
        </span>
<h1 className="font-headline-xl text-3xl sm:text-4xl md:text-headline-xl text-text-on-dark tracking-tight leading-tight mb-3">
          Profil Desa Gendingan
        </h1>
<p className="font-body-lg text-body-lg text-secondary-fixed-dim max-w-2xl leading-relaxed">
          Mengenal lebih dekat akar sejarah, arah kebijakan pembangunan berkelanjutan, serta bentang wilayah dan kelembagaan warga di Kabupaten Tulungagung.
        </p>
</div>
{/*  Interactive Tab Switch Island (Floating Bottom)  */}
<div className="relative z-10 pt-2 flex justify-start sm:justify-center">
  <div className="inline-flex flex-wrap items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-surface-card/95 backdrop-blur-md shadow-md border border-border/40">
    <button
      type="button"
      onClick={() => handleTabChange("sejarah")}
      className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
        activeTab === "sejarah"
          ? "bg-primary text-on-primary shadow-sm font-semibold scale-[1.02]"
          : "text-text-primary hover:bg-surface-container font-medium hover:text-primary"
      }`}
    >
      <span className="material-symbols-outlined text-sm">menu_book</span>
      <span>Sejarah Desa</span>
    </button>
    <button
      type="button"
      onClick={() => handleTabChange("visi-misi")}
      className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
        activeTab === "visi-misi"
          ? "bg-primary text-on-primary shadow-sm font-semibold scale-[1.02]"
          : "text-text-primary hover:bg-surface-container font-medium hover:text-primary"
      }`}
    >
      <span className="material-symbols-outlined text-sm">flag</span>
      <span>Visi &amp; Misi</span>
    </button>
    <button
      type="button"
      onClick={() => handleTabChange("wilayah")}
      className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
        activeTab === "wilayah"
          ? "bg-primary text-on-primary shadow-sm font-semibold scale-[1.02]"
          : "text-text-primary hover:bg-surface-container font-medium hover:text-primary"
      }`}
    >
      <span className="material-symbols-outlined text-sm">map</span>
      <span>Wilayah &amp; Geografis</span>
    </button>
  </div>
</div>
</div>
</section>
<AnimatePresence mode="wait">
  {activeTab === "sejarah" && (
    <motion.div
      key="tab-sejarah"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/*  SECTION A: SEJARAH DESA  */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-6" id="sejarah">
<div className="w-full bg-surface rounded-[24px] p-6 sm:p-10 lg:p-12 flex flex-col gap-10">
{/*  Split Narrative Section  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
{/*  Left 7 Cols: Editorial Narrative  */}
<div className="lg:col-span-7 bg-surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm mb-4">
<span className="material-symbols-outlined text-sm">history_edu</span>
<span>Asal-Usul &amp; Dokumen Sejarah Resmi</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight mb-4">
              Sejarah Asli &amp; Warisan Budaya Desa Gendingan
            </h2>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-4">
              Secara toponimi dan catatan sejarah Kadipaten Ngrowo (kini Kabupaten Tulungagung), nama <strong>Gendingan</strong> berasal dari kata <em>"gending"</em> yang merujuk pada komposisi tabuhan gamelan Jawa. Di masa Mataram Islam, kawasan subur di tepi lembah Sungai Ngrowo ini dihuni oleh para empu penabuh gamelan dan pembuat kendang yang melayani prosesi upacara adat agung Kadipaten Ngrowo.
            </p>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-4">
              Keterampilan menabuh instrumen gamelan tersebut berakar kuat menjadi cikal bakal kesenian adiluhung <strong>Tari Reog Kendang Tulungagung</strong>—kesenian tradisional khas di mana para penari menari serempak sambil memegang dan menabuh kendang <em>dhodhog</em>. Hingga kini, sanggar seni di Desa Gendingan terus aktif melestarikan kesenian ini dan tercatat dalam berbagai kajian etnomusikologi akademik.
            </p>
<p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-6">
              Dalam bidang pendidikan dan sosial keagamaan, Desa Gendingan mencatat tonggak bersejarah dengan berdirinya <strong>Madrasah Ibtidaiyah (MI) Al-Ma&apos;arif</strong> pada 10 Februari 1963 di Dusun Khasananom, membuktikan bahwa warga Gendingan sejak dahulu memprioritaskan pendidikan akhlak dan kerukunan gotong royong.
            </p>
</div>
{/*  Highlight Blockquote with Green Accent  */}
<div className="rounded-xl bg-surface-container-low p-5 pl-6 relative overflow-hidden mb-2">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<p className="font-serif text-lg text-text-primary italic leading-snug mb-2 font-semibold">
              &ldquo;Nguri-uri budaya luhur gending, mbangun desa kanthi transparan, guyub, lan berdikari.&rdquo;
            </p>
<span className="font-label-sm text-label-sm text-text-secondary block">
              — Rujukan Resmi: Dokumen RPJMDes Gendingan &amp; Publikasi BPS Tulungagung (Kecamatan Kedungwaru Dalam Angka)
            </span>
</div>
</div>
{/*  Right 5 Cols: Visual Archive Card dengan Foto Dokumen Asli  */}
<div className="lg:col-span-5 bg-surface-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm">
<div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[300px] rounded-xl overflow-hidden group">
<img alt="Dokumentasi Warisan Budaya Reog Kendang Desa Gendingan" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="/images/gendingan/reog-kendang.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-dark/85 via-surface-dark/25 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-surface-dark/80 backdrop-blur-md text-text-on-dark font-body-sm text-body-sm border border-white/10">
<span className="font-label-sm text-label-sm text-primary-fixed block font-bold mb-1">
  Dokumentasi Warisan Asli Gendingan
</span>
Gamelan Gong &amp; Set Kendang Dhodhog Reog Kendang Tulungagung yang dilestarikan di sanggar kesenian warga Desa Gendingan.
</div>
</div>
</div>
</div>
{/*  Integrated TimelineBlock01 with Vertical Milestones  */}
<TimelineBlock01 />
</div>
</section>
    </motion.div>
  )}

  {activeTab === "visi-misi" && (
    <motion.div
      key="tab-visi-misi"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/*  SECTION B: VISI & MISI PEMERINTAH DESA  */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-6" id="visi-misi">
<div className="w-full bg-surface rounded-[24px] p-6 sm:p-10 lg:p-12 flex flex-col gap-10">
{/*  Section Header  */}
<div className="text-center max-w-2xl mx-auto flex flex-col items-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-sm">explore</span>
<span>Rencana Pembangunan Jangka Menengah Desa (RPJMDes)</span>
</span>
<h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight mb-2">
          Visi &amp; Misi Pembangunan Desa
        </h2>
<p className="font-body-md text-body-md text-text-secondary">
          Arah kebijakan strategis periode 2022–2028 dalam mewujudkan tata kelola desa yang melayani, mandiri, dan berdaya saing.
        </p>
</div>
{/*  Visi Banner Card  */}
<div className="w-full bg-surface-card rounded-2xl p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md mb-6">
<span className="material-symbols-outlined text-sm">verified</span>
<span>VISI DESA GENDINGAN 2022 – 2028</span>
</div>
<p className="font-serif text-xl sm:text-2xl md:text-3xl text-text-primary max-w-4xl mx-auto leading-relaxed italic font-semibold">
          "Terwujudnya Desa Gendingan yang Maju, Mandiri, Berbudaya, dan Sejahtera Melalui Tata Kelola Pemerintahan yang Transparan, Inovatif, dan Melayani."
        </p>
</div>
{/*  Misi 2x3 Bento Grid  */}
<div>
<div className="flex items-center justify-between mb-4">
<span className="font-headline-sm text-headline-sm text-text-primary">6 Pilar Misi Utama</span>
<span className="font-label-sm text-label-sm text-text-secondary">Fokus Sasaran Terukur</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{/*  Misi 01  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
<div className="flex items-start justify-between gap-4 mb-4">
<span className="w-12 h-12 rounded-full bg-secondary-container text-primary font-headline-md text-headline-md flex items-center justify-center font-bold">
                01
              </span>
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-base">shield_with_heart</span>
</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">
                Tata Kelola Transparan &amp; Akuntabel
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Penyelenggaraan tata pamong desa yang bersih, berkeadilan, bebas pungli, dan disajikan secara terbuka melalui platform SID daring serta papan pengumuman dusun.
              </p>
</div>
</div>
{/*  Misi 02  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
<div className="flex items-start justify-between gap-4 mb-4">
<span className="w-12 h-12 rounded-full bg-secondary-container text-primary font-headline-md text-headline-md flex items-center justify-center font-bold">
                02
              </span>
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-base">support_agent</span>
</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">
                Pelayanan Publik Prima &amp; Cepat
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Transformasi loket satu atap kantor desa, penerbitan surat kependudukan cepat 15 menit, serta pendampingan langsung bagi warga lansia dan disabilitas.
              </p>
</div>
</div>
{/*  Misi 03  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
<div className="flex items-start justify-between gap-4 mb-4">
<span className="w-12 h-12 rounded-full bg-secondary-container text-primary font-headline-md text-headline-md flex items-center justify-center font-bold">
                03
              </span>
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-base">potted_plant</span>
</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">
                Kemandirian Ekonomi &amp; UMKM
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Pemberdayaan BUMDes Maju Bersama, fasilitasi legalitas P-IRT usaha rumahan, permodalan kelompok tani, serta akses pemasaran produk lokal antarkota.
              </p>
</div>
</div>
{/*  Misi 04  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
<div className="flex items-start justify-between gap-4 mb-4">
<span className="w-12 h-12 rounded-full bg-secondary-container text-primary font-headline-md text-headline-md flex items-center justify-center font-bold">
                04
              </span>
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-base">domain</span>
</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">
                Infrastruktur Merata &amp; Berkelanjutan
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Peningkatan perkerasan jalan lingkungan antar-dusun, revitalisasi drainase pengendali genangan musiman, serta penyediaan ruang bermain hijau terpadu.
              </p>
</div>
</div>
{/*  Misi 05  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
<div className="flex items-start justify-between gap-4 mb-4">
<span className="w-12 h-12 rounded-full bg-secondary-container text-primary font-headline-md text-headline-md flex items-center justify-center font-bold">
                05
              </span>
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-base">school</span>
</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">
                Kualitas SDM, Kesehatan &amp; Pendidikan
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Operasional Posyandu Terintegrasi Holistik, intervensi zero-stunting bagi balita, kursus keterampilan pemuda, serta program apresiasi pelajar teladan.
              </p>
</div>
</div>
{/*  Misi 06  */}
<div className="bg-surface-card rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
<div className="flex items-start justify-between gap-4 mb-4">
<span className="w-12 h-12 rounded-full bg-secondary-container text-primary font-headline-md text-headline-md flex items-center justify-center font-bold">
                06
              </span>
<span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-base">palette</span>
</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-text-primary mb-2">
                Pelestarian Budaya &amp; Guyub Warga
              </h3>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Merawat tradisi turun-temurun Bersih Desa, memfasilitasi sanggar jaranan &amp; karawitan remaja, serta mengokohkan kerukunan antarumat beragama.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
    </motion.div>
  )}

  {activeTab === "wilayah" && (
    <motion.div
      key="tab-wilayah"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/*  SECTION C: KONDISI GEOGRAFIS & WILAYAH DESA  */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-6" id="wilayah">
<div className="w-full bg-surface rounded-[24px] p-6 sm:p-10 lg:p-12 flex flex-col gap-10">
{/*  Section Header  */}
<div className="text-center max-w-2xl mx-auto flex flex-col items-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-sm">pin_drop</span>
<span>Spasial, Batas Administrasi, dan Monografi</span>
</span>
<h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight mb-2">
          Kondisi Geografis &amp; Wilayah Desa
        </h2>
<p className="font-body-md text-body-md text-text-secondary">
          Karakteristik bentang lahan dataran rendah dengan persawahan teknis produktif di kawasan penyangga Kota Tulungagung.
        </p>
</div>
{/*  Geodata & Verified Administrative Borders Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
  {/* Card 1: 4 Indikator Geografis Riil BPS 2024 */}
  <div className="bg-surface-card rounded-3xl p-6 sm:p-8 shadow-sm border border-border flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
        <h3 className="font-headline-sm text-lg sm:text-xl text-text-primary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">analytics</span>
          <span>Indikator Geografis Riil</span>
        </h3>
        <span className="text-[11px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-secondary-container">
          BPS Tulungagung 2024
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3.5">
        <div className="p-3.5 rounded-2xl bg-surface border border-border/60">
          <span className="font-label-sm text-xs text-text-secondary block">Luas Wilayah</span>
          <span className="font-headline-md text-xl sm:text-2xl text-text-primary font-bold tabular-nums">2,11</span>
          <span className="font-body-sm text-xs text-text-secondary"> km² (7,15% kec.)</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-surface border border-border/60">
          <span className="font-label-sm text-xs text-text-secondary block">Elevasi Ketinggian</span>
          <span className="font-headline-md text-xl sm:text-2xl text-text-primary font-bold tabular-nums">± 85–95</span>
          <span className="font-body-sm text-xs text-text-secondary"> mdpl (Aluvial Subur)</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-surface border border-border/60">
          <span className="font-label-sm text-xs text-text-secondary block">Suhu Rata-rata</span>
          <span className="font-headline-md text-xl sm:text-2xl text-text-primary font-bold tabular-nums">24° – 32°</span>
          <span className="font-body-sm text-xs text-text-secondary"> Celcius</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-surface border border-border/60">
          <span className="font-label-sm text-xs text-text-secondary block">Jarak ke Kantor Camat</span>
          <span className="font-headline-md text-xl sm:text-2xl text-text-primary font-bold tabular-nums">2,5</span>
          <span className="font-body-sm text-xs text-text-secondary"> km (4,7 km ke kota)</span>
        </div>
      </div>
    </div>
    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] text-text-secondary">
      <span>Tipologi: Dataran Rendah Pertanian Teknis</span>
      <span>Akses: 100% Jalan Beraspal</span>
    </div>
  </div>

  {/* Card 2: Batas Wilayah Administratif Riil BPS Kedungwaru */}
  <div className="bg-surface-card rounded-3xl p-6 sm:p-8 shadow-sm border border-border flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
        <h3 className="font-headline-sm text-lg sm:text-xl text-text-primary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">explore</span>
          <span>Batas Wilayah Administratif</span>
        </h3>
        <span className="text-[11px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-secondary-container">
          Kode: 35.04.03.2016
        </span>
      </div>
      <div className="flex flex-col gap-2.5 font-body-sm text-xs sm:text-sm text-text-secondary">
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border/60">
          <span className="flex items-center gap-2 font-medium text-text-primary">
            <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold text-xs shrink-0">U</span>
            Sebelah Utara
          </span>
          <span className="text-text-primary font-bold">Desa Ngujang</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border/60">
          <span className="flex items-center gap-2 font-medium text-text-primary">
            <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold text-xs shrink-0">T</span>
            Sebelah Timur
          </span>
          <span className="text-text-primary font-bold">Desa Tapan</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border/60">
          <span className="flex items-center gap-2 font-medium text-text-primary">
            <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold text-xs shrink-0">S</span>
            Sebelah Selatan
          </span>
          <span className="text-text-primary font-bold">Desa Ketanon &amp; Desa Rejoagung</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border/60">
          <span className="flex items-center gap-2 font-medium text-text-primary">
            <span className="w-6 h-6 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold text-xs shrink-0">B</span>
            Sebelah Barat
          </span>
          <span className="text-text-primary font-bold">Desa Simo</span>
        </div>
      </div>
    </div>
    <div className="mt-4 pt-3 border-t border-border text-[11px] text-text-secondary text-right">
      Sumber Rujukan: BPS Kab. Tulungagung &amp; SK Kemendagri
    </div>
  </div>
</div>

{/*  Dedicated Interactive Map Explorer (User Friendly for General Public)  */}
<div className="w-full">
  <div className="mb-4">
    <span className="text-xs font-bold uppercase tracking-wider text-primary block">
      Eksplorasi Spasial Ramah Warga
    </span>
    <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-text-primary mt-1">
      Peta Interaktif Titik Layanan &amp; Fasilitas Desa Gendingan
    </h3>
    <p className="text-xs sm:text-sm text-text-secondary mt-1">
      Pilih kategori fasilitas di bawah, klik titik lokasi untuk melihat foto, jam buka, dan petunjuk arah navigasi GPS langsung.
    </p>
  </div>

  <InteractiveVillageMap />
</div>
{/*  Bottom Row: 4 Dusun Detailed Cards  */}
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-text-primary font-semibold">Pembagian Wilayah Padukuhan (4 Dusun)</span>
<span className="font-label-sm text-label-sm text-text-secondary">Total 8 RW • 22 RT (BPS 2024)</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/*  Dusun 1  */}
<div className="bg-surface-card rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-headline-md text-headline-md text-text-primary font-bold">Dusun Khasananom</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm font-semibold">
                  2 RW • 6 RT
                </span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Kawasan bersejarah berdirinya MI Al-Ma'arif sejak 1963, pemukiman agraris rukun warga, serta fasilitas keagamaan dan pendidikan karakter.
              </p>
</div>
<div className="mt-4 pt-3 flex items-center gap-2 text-text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-primary">location_city</span>
<span>Pusat Edukasi &amp; Sejarah</span>
</div>
</div>
{/*  Dusun 2  */}
<div className="bg-surface-card rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-headline-md text-headline-md text-text-primary font-bold">Dusun Gendingan Krajan</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm font-semibold">
                  2 RW • 6 RT
                </span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Pusat tata kelola pemerintahan desa tempat berdirinya Kantor Balai Desa Gendingan, loket pelayanan publik 3S terpadu, dan gedung pertemuan.
              </p>
</div>
<div className="mt-4 pt-3 flex items-center gap-2 text-text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-primary">storefront</span>
<span>Pusat Pemerintahan &amp; Balai Desa</span>
</div>
</div>
{/*  Dusun 3  */}
<div className="bg-surface-card rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-headline-md text-headline-md text-text-primary font-bold">Dusun Gendingan Selatan</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm font-semibold">
                  2 RW • 5 RT
                </span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Kawasan permukiman produktif, sentra budidaya pembesaran ikan gurame air tawar, serta klaster UMKM olahan pangan dan kacang sangrai.
              </p>
</div>
<div className="mt-4 pt-3 flex items-center gap-2 text-text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-primary">agriculture</span>
<span>Sentra Gurame &amp; UMKM Olahan</span>
</div>
</div>
{/*  Dusun 4  */}
<div className="bg-surface-card rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
<div>
<div className="flex items-center justify-between mb-3">
<span className="font-headline-md text-headline-md text-text-primary font-bold">Dusun Gendingan Timur</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm font-semibold">
                  2 RW • 5 RT
                </span>
</div>
<p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
                Lumbung persawahan padi teknis subur lembah Sungai Ngrowo, kelompok tani gabungan, peternakan rakyat, dan gelanggang pemuda desa.
              </p>
</div>
<div className="mt-4 pt-3 flex items-center gap-2 text-text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-primary">sports_soccer</span>
<span>Lumbung Padi &amp; Pertanian Teknis</span>
</div>
</div>
</div>
</div>
</div>
</section>
    </motion.div>
  )}
</AnimatePresence>

{/*  SECTION D: PRE-FOOTER EXPLORATION BANNER  */}
<section className="w-full px-4 sm:px-8 lg:px-12 py-8">
<div className="relative w-full rounded-[24px] overflow-hidden bg-surface-dark p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center shadow-lg">
{/*  Subtle Decorative Floral Gradient Backdrop  */}
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-surface-dark to-primary/10 pointer-events-none"></div>
<div className="relative z-10 max-w-3xl flex flex-col items-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card/10 text-primary-fixed font-label-sm text-label-sm mb-4">
<span className="material-symbols-outlined text-sm">account_balance</span>
<span>Aparatur &amp; Layanan Publik Terbuka</span>
</span>
<h2 className="font-headline-xl text-headline-xl text-text-on-dark tracking-tight mb-4">
          Kenali Struktur Pemerintahan Desa Gendingan
        </h2>
<p className="font-body-lg text-body-lg text-secondary-fixed-dim leading-relaxed mb-8 max-w-2xl">
          Pelajari susunan pamong desa, Badan Permusyawaratan Desa (BPD), Lembaga Pemberdayaan Masyarakat (LPM), dan dedikasi tim SID dalam mengawal transparansi desa.
        </p>
{/*  CTA Row  */}
<div className="flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-on-primary font-label-lg text-label-lg shadow-md transition-all" href="/pemerintahan">
<span>Lihat Pemerintahan Desa</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-surface-card text-text-primary hover:bg-surface-container font-label-lg text-label-lg transition-all" href="/#pengaduan">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
<span>Sampaikan Pengaduan</span>
</a>
</div>
</div>
</div>
</section>
</div></main>
      <Footer />
    </div>
  );
}
