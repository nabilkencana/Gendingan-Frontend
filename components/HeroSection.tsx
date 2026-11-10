import React from "react";
import Link from "next/link";
import { ArrowRightIcon, ShieldCheckIcon, UsersIcon, MapPinIcon } from "./Icons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#E8F5E9]/50 via-white to-white">
      {/* Decorative background blur blobs */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#E8F5E9] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 left-10 -z-10 w-72 h-72 bg-[#4CAF50]/10 rounded-full blur-2xl opacity-60 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5E9] border border-[#4CAF50]/30 text-[#2E7D32] text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <span>Website Resmi Pemerintah Desa Gendingan • Tulungagung</span>
            </div>

            {/* Editorial H1 */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1E2420] leading-[1.15] tracking-tight mb-6">
              Mewujudkan Pelayanan Publik{" "}
              <span className="text-[#2E7D32] italic font-semibold">Inklusif</span>,
              Cepat, dan Berintegritas
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#68706B] font-normal leading-relaxed mb-8 max-w-xl">
              Selamat datang di portal informasi resmi Pemerintah Desa Gendingan,
              Kecamatan Kedungwaru, Kabupaten Tulungagung. Akses layanan mandiri,
              pantau transparansi APBDes, dan ketahui potensi kekayaan desa secara mudah.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <Link
                href="/#layanan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#4CAF50] hover:bg-[#3D9140] text-white text-sm font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Akses Layanan Desa</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/data-statistik#apbdes"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-[#F4F6F4] text-[#1E2420] border border-[#DCE2DD] text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                Transparansi APBDes
              </Link>
              <Link
                href="/#pengaduan"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#E8F5E9] hover:bg-[#D7EED9] text-[#2E7D32] text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                Pengaduan Warga
              </Link>
            </div>

            {/* Trust and Certifications */}
            <div className="flex items-center gap-4 text-xs text-[#68706B]">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheckIcon className="w-4 h-4 text-[#4CAF50]" />
                <span>Terverifikasi Kemendagri & Pemkab Tulungagung</span>
              </div>
              <span>•</span>
              <span className="text-[#2E7D32] font-semibold">Lomba Desa 2027</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Stats overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCE2DD] bg-[#F4F6F4] aspect-[4/3] sm:aspect-[16/11]">
              {/* Image banner */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCAotC2_BAFmAPBV6ZXw71x0AG1ExVtQc2-kkU5d3zqyJiCtMloMh16imwELRR8R2O13BPQ8AilyxFIKiSN2GkLAy9KOP8-YARuTysUX5wvpuuJFFXc2cf8I6hp8FlQFl15giQiZVCfkyZthkgHy8nUYIEfDcdUJFxp09Vb-0uVFC6MCTA9NuSeRm1Kbz6_FoQ16sR8SkDS50XLvUTYjaQJbf8UuEp1mfWqTpPIXY"
                alt="Pemandangan Lanskap Alam Desa Gendingan Kedungwaru Tulungagung"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141815]/80 via-transparent to-black/10" />

              {/* Floating Pill on image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4CAF50]">
                      Kawasan Unggulan
                    </span>
                    <h2 className="font-serif text-base font-bold text-[#1E2420]">
                      Persawahan & Sentra UMKM Gendingan
                    </h2>
                  </div>
                  <Link
                    href="/profil"
                    className="p-2 rounded-full bg-[#E8F5E9] text-[#2E7D32] hover:bg-[#4CAF50] hover:text-white transition-colors"
                    aria-label="Lihat profil desa"
                  >
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Pill Bar */}
        <div className="mt-12 p-4 sm:p-6 bg-[#F4F6F4] rounded-2xl border border-[#DCE2DD] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-white rounded-xl shadow-xs">
            <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#1E2420] tabular-nums">
              185 <span className="text-sm font-sans font-normal text-[#68706B]">Ha</span>
            </span>
            <span className="text-xs font-medium text-[#68706B]">Luas Wilayah Desa</span>
          </div>
          <div className="p-3 bg-white rounded-xl shadow-xs">
            <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#4CAF50] tabular-nums">
              4.286
            </span>
            <span className="text-xs font-medium text-[#68706B]">Jiwa Penduduk</span>
          </div>
          <div className="p-3 bg-white rounded-xl shadow-xs">
            <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#1E2420] tabular-nums">
              3 <span className="text-sm font-sans font-normal text-[#68706B]">Dusun</span>
            </span>
            <span className="text-xs font-medium text-[#68706B]">Krajan, Kidul, Lor</span>
          </div>
          <div className="p-3 bg-white rounded-xl shadow-xs">
            <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#2E7D32] tabular-nums">
              18 <span className="text-sm font-sans font-normal text-[#68706B]">RT</span> / 6 <span className="text-sm font-sans font-normal text-[#68706B]">RW</span>
            </span>
            <span className="text-xs font-medium text-[#68706B]">Rukun Tetangga & Warga</span>
          </div>
        </div>
      </div>
    </section>
  );
}
