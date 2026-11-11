"use client";

import React, { useState } from "react";
import {
  MapPin,
  Building2,
  HeartPulse,
  GraduationCap,
  Sprout,
  Store,
  Compass,
  ExternalLink,
  Layers,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface POILocation {
  id: string;
  name: string;
  shortName: string;
  category: "pemerintahan" | "kesehatan" | "pendidikan" | "pertanian" | "ekonomi";
  categoryLabel: string;
  dusun: string;
  description: string;
  hours: string;
  coords: string;
  x: number; // percentage in SVG map
  y: number; // percentage in SVG map
  mapsUrl: string;
}

const POI_LIST: POILocation[] = [
  {
    id: "balai-desa",
    name: "Kantor Pemerintah Desa Gendingan",
    shortName: "Balai Desa",
    category: "pemerintahan",
    categoryLabel: "Pemerintahan & Layanan",
    dusun: "Dusun Gendingan Krajan",
    description: "Pusat tata kelola pemerintahan desa, pendopo musyawarah warga, dan loket 3S pelayanan administrasi kependudukan (KTP, KK, Surat Pengantar) gratis Rp 0.",
    hours: "Senin – Jumat: 08.00 – 15.00 WIB",
    coords: "-8.0266656, 111.9085448",
    x: 49,
    y: 44,
    mapsUrl: "https://maps.google.com/?q=Kantor+Desa+Gendingan,+Kedungwaru,+Tulungagung",
  },
  {
    id: "pustu",
    name: "Puskesmas Pembantu (Pustu) Gendingan",
    shortName: "Pustu Kesehatan",
    category: "kesehatan",
    categoryLabel: "Fasilitas Kesehatan",
    dusun: "Dusun Gendingan Krajan",
    description: "Layanan periksa kesehatan umum pertama warga, balai posyandu terintegrasi balita dan lansia, imunisasi rutin, serta penanganan rujukan ke Puskesmas Kedungwaru.",
    hours: "Senin – Sabtu: 08.00 – 12.00 WIB",
    coords: "-8.025100, 111.909200",
    x: 61,
    y: 28,
    mapsUrl: "https://maps.google.com/?q=Pustu+Gendingan,+Kedungwaru,+Tulungagung",
  },
  {
    id: "sdn-gendingan",
    name: "SDN 1 & SDN 2 Gendingan",
    shortName: "SDN 1 & 2",
    category: "pendidikan",
    categoryLabel: "Pendidikan Dasar",
    dusun: "Dusun Gendingan Krajan",
    description: "Sekolah dasar negeri terakreditasi resmi Kemendikbudristek dengan sarana ruang kelas representatif, perpustakaan desa, lab komputer, dan lapangan olahraga hijau.",
    hours: "Senin – Sabtu: 07.00 – 13.00 WIB",
    coords: "-8.028400, 111.907800",
    x: 36,
    y: 25,
    mapsUrl: "https://maps.google.com/?q=SDN+1+Gendingan,+Kedungwaru,+Tulungagung",
  },
  {
    id: "mi-almaarif",
    name: "MI Al-Ma'arif Gendingan (Berdiri 1963)",
    shortName: "MI Al-Ma'arif",
    category: "pendidikan",
    categoryLabel: "Pendidikan Bersejarah",
    dusun: "Dusun Khasananom (RT 02 / RW 02)",
    description: "Lembaga pendidikan Islam tertua bersejarah di Desa Gendingan yang didirikan pada 10 Februari 1963. Pusat pembentukan karakter akhlak mulia dan pendidikan keagamaan warga.",
    hours: "Senin – Sabtu: 07.00 – 13.30 WIB",
    coords: "-8.024200, 111.906100",
    x: 20,
    y: 43,
    mapsUrl: "https://maps.google.com/?q=MI+Al+Maarif+Gendingan,+Kedungwaru,+Tulungagung",
  },
  {
    id: "sentra-gurame",
    name: "Sentra Budidaya Gurame Air Tawar",
    shortName: "Sentra Gurame",
    category: "pertanian",
    categoryLabel: "Sentra Perikanan & Ternak",
    dusun: "Dusun Gendingan Selatan",
    description: "Klaster kolam pembesaran ikan gurame terkemuka di Kedungwaru dengan memanfaatkan air irigasi lembah Sungai Ngrowo. Memasok komoditas kuliner Tulungagung dan Jawa Timur.",
    hours: "Buka Setiap Hari: 07.00 – 17.00 WIB",
    coords: "-8.031500, 111.910200",
    x: 56,
    y: 74,
    mapsUrl: "https://maps.google.com/?q=Desa+Gendingan,+Kedungwaru,+Tulungagung",
  },
  {
    id: "lumbung-padi",
    name: "Lumbung Padi & Irigasi Lembah Ngrowo",
    shortName: "Lumbung Padi",
    category: "pertanian",
    categoryLabel: "Lumbung Pertanian Padi",
    dusun: "Dusun Gendingan Timur",
    description: "Hamparan sawah padi irigasi teknis produktif seluas puluhan hektar binaan gabungan kelompok tani (Gapoktan) penghasil beras mentik wangi dan komoditas hortikultura.",
    hours: "Akses Terbuka 24 Jam",
    coords: "-8.027800, 111.913500",
    x: 78,
    y: 45,
    mapsUrl: "https://maps.google.com/?q=Desa+Gendingan,+Kedungwaru,+Tulungagung",
  },
  {
    id: "bumdes-ritel",
    name: "BUMDes Maju Bersama & Sentra Kriya",
    shortName: "BUMDes Maju",
    category: "ekonomi",
    categoryLabel: "Perekonomian Kerakyatan",
    dusun: "Dusun Gendingan Krajan",
    description: "Unit usaha milik desa yang mengelola air bersih HIPPAM, penyediaan pupuk saprotan bagi petani, display produk kriya batik dan olahan jajanan tradisional warga.",
    hours: "Senin – Sabtu: 08.00 – 16.00 WIB",
    coords: "-8.026100, 111.907900",
    x: 34,
    y: 66,
    mapsUrl: "https://maps.google.com/?q=Desa+Gendingan,+Kedungwaru,+Tulungagung",
  },
];

const CATEGORIES = [
  { id: "semua", label: "Semua Fasilitas", icon: Layers },
  { id: "pemerintahan", label: "Pemerintahan", icon: Building2 },
  { id: "kesehatan", label: "Kesehatan", icon: HeartPulse },
  { id: "pendidikan", label: "Pendidikan", icon: GraduationCap },
  { id: "pertanian", label: "Pertanian & Gurame", icon: Sprout },
  { id: "ekonomi", label: "BUMDes & UMKM", icon: Store },
];

export default function InteractiveVillageMap() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [activePOI, setActivePOI] = useState<POILocation>(POI_LIST[0]);
  const [viewMode, setViewMode] = useState<"interactive" | "satellite">("interactive");

  const filteredPOIs = POI_LIST.filter(
    (poi) => selectedCategory === "semua" || poi.category === selectedCategory
  );

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Filter & Mode Switcher Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-card rounded-2xl p-4 border border-border shadow-xs">
        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer",
                  isSelected
                    ? "bg-primary text-on-primary shadow-xs scale-[1.02]"
                    : "bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-container"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle: Interactive Vector vs Google Maps Satelit */}
        <div className="inline-flex items-center p-1 rounded-full bg-surface border border-border shrink-0 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setViewMode("interactive")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
              viewMode === "interactive"
                ? "bg-primary text-on-primary shadow-xs"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Peta Fasilitas
          </button>
          <button
            type="button"
            onClick={() => setViewMode("satellite")}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
              viewMode === "satellite"
                ? "bg-primary text-on-primary shadow-xs"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Google Maps Satelit
          </button>
        </div>
      </div>

      {/* Main Map Viewer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Side: Interactive Map Visual (8 cols) */}
        <div className="lg:col-span-8 bg-surface-card rounded-3xl overflow-hidden border border-border shadow-sm flex flex-col justify-between min-h-[480px] relative">
          {viewMode === "satellite" ? (
            /* Google Maps Live Satellite / Interactive Frame */
            <div className="w-full h-full min-h-[480px] relative">
              <iframe
                title="Google Maps Satelit Desa Gendingan"
                src="https://maps.google.com/maps?q=Kantor+Desa+Gendingan,+Kedungwaru,+Tulungagung&t=k&z=15&output=embed"
                className="w-full h-full min-h-[480px] border-0"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute top-3 left-3 bg-surface-dark/85 backdrop-blur-md px-3 py-1.5 rounded-full text-on-primary text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
                <span>Citra Satelit Resmi Google Maps</span>
              </div>
            </div>
          ) : (
            /* Interactive Custom Spasial Map with Clickable Pins & Zones */
            <div className="relative w-full h-full min-h-[480px] bg-gradient-to-br from-[#E8F5E9]/60 via-[#F4F6F4] to-[#E0F2F1]/50 p-4 sm:p-6 flex items-center justify-center overflow-hidden select-none">
              {/* SVG Background Vector for Gendingan Territory */}
              <svg
                viewBox="0 0 900 520"
                className="w-full h-full max-h-[500px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="padukuhanKrajan" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C8E6C9" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#A5D6A7" stopOpacity="0.45" />
                  </linearGradient>
                  <linearGradient id="padukuhanSelatan" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#DCEDC8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#C5E1A5" stopOpacity="0.45" />
                  </linearGradient>
                  <linearGradient id="padukuhanTimur" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E8F5E9" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#C8E6C9" stopOpacity="0.55" />
                  </linearGradient>
                </defs>

                {/* Village Perimeter Boundary (2,11 km2 Polygon) */}
                <path
                  d="M 100 70 C 260 25, 500 35, 740 80 C 830 140, 850 290, 790 420 C 660 485, 440 475, 240 455 C 100 435, 60 310, 70 180 Z"
                  fill="url(#padukuhanKrajan)"
                  stroke="#4CAF50"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                />

                {/* Dusun 1: Khasananom (North-West) */}
                <path
                  d="M 100 70 C 220 45, 310 70, 320 205 C 210 225, 110 200, 70 180 Z"
                  fill="#FFF9C4"
                  fillOpacity="0.45"
                  stroke="#FBC02D"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text x="120" y="105" fill="#795548" fontSize="13" fontWeight="800" letterSpacing="0.02em">
                  DUSUN KHASANANOM
                </text>

                {/* Dusun 2: Gendingan Krajan (Center) */}
                <text x="385" y="100" fill="#1B5E20" fontSize="13" fontWeight="800" letterSpacing="0.02em">
                  DUSUN GENDINGAN KRAJAN
                </text>

                {/* Dusun 3: Gendingan Selatan (South) */}
                <path
                  d="M 270 325 C 420 315, 620 325, 700 445 C 500 475, 300 455, 240 455 Z"
                  fill="url(#padukuhanSelatan)"
                  stroke="#689F38"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text x="380" y="440" fill="#33691E" fontSize="13" fontWeight="800" letterSpacing="0.02em">
                  DUSUN GENDINGAN SELATAN
                </text>

                {/* Dusun 4: Gendingan Timur (East) */}
                <path
                  d="M 550 80 C 700 90, 825 160, 790 330 C 660 305, 550 260, 510 160 Z"
                  fill="url(#padukuhanTimur)"
                  stroke="#43A047"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text x="615" y="140" fill="#1B5E20" fontSize="13" fontWeight="800" letterSpacing="0.02em">
                  DUSUN GENDINGAN TIMUR
                </text>

                {/* River / Irigasi Lembah Ngrowo */}
                <path
                  d="M 90 120 Q 280 200, 460 260 T 830 390"
                  stroke="#4FC3F7"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M 90 120 Q 280 200, 460 260 T 830 390"
                  stroke="#0288D1"
                  strokeWidth="2.5"
                  strokeDasharray="10 8"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <text x="645" y="408" fill="#0277BD" fontSize="11" fontWeight="700">
                  Irigasi Lembah Ngrowo
                </text>

                {/* Main Arterial Road */}
                <path
                  d="M 65 275 Q 420 265, 840 235"
                  stroke="#CFD8DC"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  d="M 65 275 Q 420 265, 840 235"
                  stroke="#FFB300"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                />
                <text x="105" y="295" fill="#455A64" fontSize="10.5" fontWeight="700">
                  Jl. Raya Gendingan (Poros Kedungwaru)
                </text>

                {/* Connecting Secondary Road */}
                <path
                  d="M 465 65 L 450 440"
                  stroke="#CFD8DC"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>

              {/* Clickable POI Markers with Crisp Compact Labels */}
              {filteredPOIs.map((poi) => {
                const isActive = activePOI.id === poi.id;

                return (
                  <button
                    key={poi.id}
                    type="button"
                    onClick={() => setActivePOI(poi)}
                    style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-30 cursor-pointer focus:outline-none",
                      isActive ? "scale-110 z-40" : "hover:scale-105"
                    )}
                    aria-label={`Pilih lokasi ${poi.name}`}
                  >
                    <div
                      className={cn(
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all shadow-md mx-auto",
                        isActive
                          ? "bg-primary text-on-primary ring-4 ring-primary/30 shadow-lg"
                          : "bg-surface-card text-primary hover:bg-secondary-container border border-border"
                      )}
                    >
                      {poi.category === "pemerintahan" && <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {poi.category === "kesehatan" && <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {poi.category === "pendidikan" && <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {poi.category === "pertanian" && <Sprout className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {poi.category === "ekonomi" && <Store className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>

                    {/* Compact Single-Line Label Tag */}
                    <div
                      className={cn(
                        "mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all shadow-sm",
                        isActive
                          ? "bg-surface-dark text-on-primary border border-white/20"
                          : "bg-surface-card/95 text-text-primary border border-border group-hover:border-primary/40"
                      )}
                    >
                      {poi.shortName}
                    </div>
                  </button>
                );
              })}

              {/* Compass Widget */}
              <div className="absolute bottom-4 left-4 bg-surface-card/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-border shadow-xs text-[11px] font-semibold text-text-primary flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span>Utara Menghadap Lereng Wilis</span>
              </div>

              {/* Status Hint */}
              <div className="absolute top-4 left-4 bg-surface-card/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-border shadow-xs text-[11px] font-medium text-text-secondary hidden sm:flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-primary" />
                <span>Klik pin lokasi di peta untuk informasi detail</span>
              </div>
            </div>
          )}

          {/* Bottom Bar: Coordinates and Tips */}
          <div className="p-3.5 sm:p-4 bg-surface border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Titik Pusat: <strong>8°01'36.0"S 111°54'30.8"E</strong> • Elevasi: ±85–95 mdpl</span>
            </div>
            <a
              href="https://maps.google.com/?q=Kantor+Desa+Gendingan,+Kedungwaru,+Tulungagung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
            >
              <span>Buka di Aplikasi Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Active POI Detail Card (4 cols) */}
        <div className="lg:col-span-4 bg-surface-card rounded-3xl p-6 sm:p-7 border border-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">
                {activePOI.categoryLabel}
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-semibold">
                Terverifikasi
              </span>
            </div>

            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-text-primary mb-2 leading-snug">
              {activePOI.name}
            </h3>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-surface border border-border text-text-primary mb-4">
              📍 {activePOI.dusun}
            </div>

            <p className="font-body-md text-sm text-text-secondary leading-relaxed mb-6">
              {activePOI.description}
            </p>

            <div className="p-4 rounded-2xl bg-surface border border-border/80 space-y-2.5 text-xs text-text-secondary mb-6">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-text-primary shrink-0">Waktu Layanan:</span>
                <span>{activePOI.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-text-primary shrink-0">Akses Jalan:</span>
                <span>Beraspal mulus, dapat diakses roda 4/truk tani</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-text-primary shrink-0">Status Bangunan:</span>
                <span className="text-primary font-semibold">Aset Desa Terdata</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <a
              href={activePOI.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-primary-hover text-on-primary font-label-md text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              <span>Petunjuk Arah (Navigasi GPS)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
