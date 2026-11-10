"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPinIcon, UsersIcon, ArrowRightIcon, CheckCircleIcon } from "./Icons";

interface FacilityPin {
  id: string;
  name: string;
  category: "Pemerintahan" | "Kesehatan" | "Pendidikan" | "Ekonomi";
  x: number; // percentage
  y: number; // percentage
  desc: string;
}

const FACILITIES: FacilityPin[] = [
  {
    id: "kantor-desa",
    name: "Kantor Pemerintah Desa Gendingan",
    category: "Pemerintahan",
    x: 48,
    y: 42,
    desc: "Pusat pelayanan administrasi kependudukan & loket 3S terpadu",
  },
  {
    id: "pustu",
    name: "Puskesmas Pembantu (Pustu) Gendingan",
    category: "Kesehatan",
    x: 62,
    y: 35,
    desc: "Layanan periksa umum, posyandu lansia, dan imunisasi balita",
  },
  {
    id: "balai",
    name: "Balai Pertemuan Warga Dusun Krajan",
    category: "Pemerintahan",
    x: 35,
    y: 58,
    desc: "Tempat musyawarah dusun, rembuk tani, dan latihan karawitan",
  },
  {
    id: "pasar",
    name: "Sentra Pasar Desa & BUMDes Maju",
    category: "Ekonomi",
    x: 75,
    y: 65,
    desc: "Pusat perputaran ekonomi komoditas pangan dan gerai batik warga",
  },
  {
    id: "sekolah",
    name: "SDN 1 & 2 Gendingan",
    category: "Pendidikan",
    x: 30,
    y: 30,
    desc: "Lembaga pendidikan formal dasar berwawasan lingkungan adiwiyata",
  },
];

export default function ProfileBento() {
  const [activePin, setActivePin] = useState<FacilityPin>(FACILITIES[0]);

  return (
    <section id="profil" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold mb-3">
              <span>Tentang & Wilayah</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] tracking-tight">
              Profil Desa & Peta Fasilitas Terpadu
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#68706B] max-w-md mt-3 md:mt-0">
            Harmoni tradisi agraris, kerajinan batik, dan tata kelola pemerintahan terbuka di gerbang utara Tulungagung.
          </p>
        </div>

        {/* Outer Pillowy Container (#F4F6F4 with 24px rounded) */}
        <div className="bg-[#F4F6F4] rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#DCE2DD]">
          {/* 12-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Card 1: Ringkasan Profil & Visi (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 card-shadow border border-[#DCE2DD]/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
                  Kilas Desa Gendingan
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2420] mt-2 mb-4">
                  Desa Mandiri Berbasis Budaya, Irigasi Subur, dan Gotong Royong
                </h3>
                <p className="text-sm sm:text-base text-[#68706B] leading-relaxed mb-6">
                  Desa Gendingan berlokasi strategis di Kecamatan Kedungwaru, berbatasan langsung dengan pusat Kabupaten Tulungagung. Dikenal sejak era babat alas sebagai wilayah yang sarat nilai luhur seni gamelan (<i>gending</i>) dan sistem irigasi teknis peninggalan leluhur yang mengalirkan kesuburan tanah persawahan sepanjang tahun.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F6F4]">
                    <CheckCircleIcon className="w-5 h-5 text-[#4CAF50] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1E2420]">Pelayanan 3S</h4>
                      <p className="text-xs text-[#68706B]">Senyum, Sapa, Selesai di loket digital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F6F4]">
                    <CheckCircleIcon className="w-5 h-5 text-[#4CAF50] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#1E2420]">Transparansi Penuh</h4>
                      <p className="text-xs text-[#68706B]">Publikasi terbuka APBDes setiap triwulan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE2DD] flex items-center justify-between">
                <span className="text-xs text-[#68706B]">
                  Kepala Desa: <strong className="text-[#1E2420]">H. Supriyanto, S.Sos.</strong>
                </span>
                <Link
                  href="/profil"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E7D32] hover:text-[#4CAF50] transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Demografi & Statistik Ringkas (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 card-shadow border border-[#DCE2DD]/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
                  Statistik Kependudukan
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1E2420] mt-2 mb-4">
                  Data Warga Terkini 2027
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#E8F5E9] border border-[#4CAF50]/20">
                    <div className="flex items-center gap-2.5">
                      <UsersIcon className="w-5 h-5 text-[#2E7D32]" />
                      <span className="text-xs font-semibold text-[#1E2420]">Total Penduduk</span>
                    </div>
                    <span className="font-serif text-xl font-bold text-[#2E7D32] tabular-nums">
                      4.286 <span className="text-xs font-sans font-normal">Jiwa</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#F4F6F4]">
                      <span className="text-[11px] font-medium text-[#68706B]">Laki-laki</span>
                      <span className="block font-serif text-lg font-bold text-[#1E2420] tabular-nums mt-0.5">
                        2.124 <span className="text-xs font-sans font-normal text-[#68706B]">Jiwa</span>
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F6F4]">
                      <span className="text-[11px] font-medium text-[#68706B]">Perempuan</span>
                      <span className="block font-serif text-lg font-bold text-[#1E2420] tabular-nums mt-0.5">
                        2.162 <span className="text-xs font-sans font-normal text-[#68706B]">Jiwa</span>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#F4F6F4]">
                      <span className="text-[11px] font-medium text-[#68706B]">Kepala Keluarga (KK)</span>
                      <span className="block font-serif text-lg font-bold text-[#1E2420] tabular-nums mt-0.5">
                        1.340 <span className="text-xs font-sans font-normal text-[#68706B]">KK</span>
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F6F4]">
                      <span className="text-[11px] font-medium text-[#68706B]">Kepadatan</span>
                      <span className="block font-serif text-lg font-bold text-[#1E2420] tabular-nums mt-0.5">
                        2.316 <span className="text-[10px] font-sans font-normal text-[#68706B]">Jiwa/km²</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE2DD] flex items-center justify-between">
                <span className="text-[11px] text-[#68706B]">Sumber: SIAK & BPS Tulungagung</span>
                <Link
                  href="/data-statistik"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E7D32] hover:text-[#4CAF50] transition-colors"
                >
                  <span>Grafik Lengkap</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Peta Digital Interaktif & Titik Fasilitas (Full 12 cols) */}
            <div className="lg:col-span-12 bg-white rounded-2xl p-6 sm:p-8 card-shadow border border-[#DCE2DD]/60">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-[#4CAF50]" />
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E2420]">
                      Peta Digital Fasilitas Umum Desa Gendingan
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#68706B] mt-1">
                    Klik pin pada peta untuk melihat informasi titik sarana dan prasarana umum desa.
                  </p>
                </div>

                {/* Facility Category Filter Tabs */}
                <div className="flex flex-wrap gap-1.5">
                  {FACILITIES.map((fac) => (
                    <button
                      key={fac.id}
                      onClick={() => setActivePin(fac)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        activePin.id === fac.id
                          ? "bg-[#4CAF50] text-white shadow-xs"
                          : "bg-[#F4F6F4] text-[#1E2420] hover:bg-gray-200"
                      }`}
                    >
                      {fac.name.split(" ")[0]} {fac.name.split(" ")[1] || ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Vector Map Container */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* SVG Visual Map */}
                <div className="lg:col-span-8 relative aspect-[16/9] w-full bg-[#E8F5E9]/40 rounded-xl overflow-hidden border border-[#DCE2DD] p-4 flex items-center justify-center">
                  <svg
                    className="w-full h-full text-emerald-800"
                    viewBox="0 0 800 450"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Village Border Polygon */}
                    <path
                      d="M 120 80 Q 280 40 450 60 T 700 110 Q 760 220 720 340 T 520 410 Q 320 390 180 370 T 80 230 Z"
                      fill="#C8E6C9"
                      fillOpacity="0.45"
                      stroke="#4CAF50"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                    />

                    {/* River / Irrigation canal */}
                    <path
                      d="M 140 70 Q 300 160 420 220 T 710 330"
                      stroke="#81D4FA"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Main Road */}
                    <path
                      d="M 90 240 Q 380 230 730 200"
                      stroke="#DCE2DD"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 90 240 Q 380 230 730 200"
                      stroke="#FFA000"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      strokeLinecap="round"
                    />

                    {/* Secondary Road */}
                    <path
                      d="M 460 65 L 440 400"
                      stroke="#DCE2DD"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    {/* Dusun labels */}
                    <text x="220" y="150" fill="#2E7D32" fontSize="13" fontWeight="600" opacity="0.8">
                      Dusun Krajan
                    </text>
                    <text x="540" y="140" fill="#2E7D32" fontSize="13" fontWeight="600" opacity="0.8">
                      Dusun Gendingan Lor
                    </text>
                    <text x="320" y="340" fill="#2E7D32" fontSize="13" fontWeight="600" opacity="0.8">
                      Dusun Gendingan Kidul
                    </text>
                  </svg>

                  {/* Facility Pins overlay */}
                  {FACILITIES.map((fac) => {
                    const isSelected = activePin.id === fac.id;
                    return (
                      <button
                        key={fac.id}
                        onClick={() => setActivePin(fac)}
                        style={{ left: `${fac.x}%`, top: `${fac.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all group ${
                          isSelected
                            ? "bg-[#4CAF50] text-white ring-4 ring-[#4CAF50]/30 scale-125 z-20"
                            : "bg-white text-[#2E7D32] hover:bg-[#E8F5E9] shadow-md z-10"
                        }`}
                        title={fac.name}
                        aria-label={fac.name}
                      >
                        <MapPinIcon className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>

                {/* Pin Info Detail Panel */}
                <div className="lg:col-span-4 p-5 rounded-xl bg-[#F4F6F4] border border-[#DCE2DD]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4CAF50]">
                    Detail Fasilitas
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#1E2420] mt-1 mb-2">
                    {activePin.name}
                  </h4>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white text-[#2E7D32] border border-[#DCE2DD] mb-3">
                    Kategori: {activePin.category}
                  </div>
                  <p className="text-xs text-[#68706B] leading-relaxed mb-4">
                    {activePin.desc}
                  </p>
                  <div className="text-[11px] text-[#68706B] space-y-1">
                    <p>📍 Wilayah: Kec. Kedungwaru, Kab. Tulungagung</p>
                    <p>⏰ Akses: 24 Jam / Hari Kerja</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
