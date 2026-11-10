"use client";

import React, { useState, useEffect } from "react";
import { CalendarIcon, ClockIcon, MapPinIcon, ArrowRightIcon } from "./Icons";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function AgendaCountdown() {
  // Target date for next major village event: Musrenbangdes 2027
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    // Set fixed future date (20 days from now)
    const target = new Date();
    target.setDate(target.getDate() + 14);
    target.setHours(9, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="agenda" className="py-16 md:py-24 bg-[#F4F6F4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#2E7D32] border border-[#DCE2DD] text-xs font-semibold mb-3">
              <span>Kegiatan Warga</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] tracking-tight">
              Agenda & Jadwal Kegiatan Desa
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#68706B] max-w-md mt-3 md:mt-0">
            Ikuti dan hadiri musyawarah, posyandu, serta kegiatan sosial kemasyarakatan Desa Gendingan.
          </p>
        </div>

        {/* Major Event Horizontal Card with Countdown */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-[#DCE2DD] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Event Info (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-ping" />
                <span>Kegiatan Terdekat Wajib Dihadiri</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2420] mb-4 leading-snug">
                Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) Tahun 2027
              </h3>
              <p className="text-sm text-[#68706B] leading-relaxed mb-6">
                Forum resmi penjaringan aspirasi seluruh elemen warga untuk penyusunan prioritas pembangunan infrastruktur dusun, bantuan modal UMKM, dan program kesehatan keluarga.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#1E2420]">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F4F6F4]">
                  <CalendarIcon className="w-4 h-4 text-[#4CAF50]" />
                  <span><strong>Hari/Tanggal:</strong> Kamis, 26 Nov 2026</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F4F6F4]">
                  <ClockIcon className="w-4 h-4 text-[#4CAF50]" />
                  <span><strong>Pukul:</strong> 09.00 WIB - Selesai</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F4F6F4] sm:col-span-2">
                  <MapPinIcon className="w-4 h-4 text-[#4CAF50]" />
                  <span><strong>Lokasi:</strong> Balai Desa Gendingan, Kec. Kedungwaru</span>
                </div>
              </div>
            </div>

            {/* Countdown Box (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#E8F5E9]/60 border border-[#4CAF50]/30 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-4">
                Waktu Menuju Pelaksanaan
              </span>

              {/* Countdown Numbers Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full mb-6">
                {/* Days */}
                <div className="bg-white p-3 rounded-xl shadow-xs border border-[#4CAF50]/20 flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2E7D32] tabular-nums">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold text-[#68706B] uppercase mt-1">
                    Hari
                  </span>
                </div>

                {/* Hours */}
                <div className="bg-white p-3 rounded-xl shadow-xs border border-[#4CAF50]/20 flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2E7D32] tabular-nums">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold text-[#68706B] uppercase mt-1">
                    Jam
                  </span>
                </div>

                {/* Minutes */}
                <div className="bg-white p-3 rounded-xl shadow-xs border border-[#4CAF50]/20 flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2E7D32] tabular-nums">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold text-[#68706B] uppercase mt-1">
                    Menit
                  </span>
                </div>

                {/* Seconds */}
                <div className="bg-white p-3 rounded-xl shadow-xs border border-[#4CAF50]/20 flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#4CAF50] tabular-nums">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold text-[#68706B] uppercase mt-1">
                    Detik
                  </span>
                </div>
              </div>

              <a
                href="#pengaduan"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#4CAF50] hover:bg-[#3D9140] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Ajukan Aspirasi Sebelum Rapat</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Secondary Upcoming Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#DCE2DD] card-shadow">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32]">
              Kesehatan
            </span>
            <h4 className="font-serif text-base font-bold text-[#1E2420] mt-3 mb-2">
              Posyandu Lansia & Cek Kesehatan Gratis
            </h4>
            <p className="text-xs text-[#68706B] mb-4">
              Pemeriksaan tensi, gula darah, dan pemberian makanan tambahan lansia di Balai Dusun Gendingan Kidul.
            </p>
            <div className="text-[11px] text-[#68706B] border-t border-gray-100 pt-3 flex items-center justify-between">
              <span>📅 Sabtu, 28 Nov 2026</span>
              <span className="font-semibold text-[#4CAF50]">08.00 WIB</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DCE2DD] card-shadow">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
              Transparansi
            </span>
            <h4 className="font-serif text-base font-bold text-[#1E2420] mt-3 mb-2">
              Forum Konsultasi Publik Dana Desa
            </h4>
            <p className="text-xs text-[#68706B] mb-4">
              Pemaparan hasil audit internal dan evaluasi capaian APBDes semester II bersama BPD dan tokoh masyarakat.
            </p>
            <div className="text-[11px] text-[#68706B] border-t border-gray-100 pt-3 flex items-center justify-between">
              <span>📅 Senin, 30 Nov 2026</span>
              <span className="font-semibold text-[#4CAF50]">19.30 WIB</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#DCE2DD] card-shadow">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">
              Ekonomi Warga
            </span>
            <h4 className="font-serif text-base font-bold text-[#1E2420] mt-3 mb-2">
              Bazar UMKM & Pasar Murah Desa
            </h4>
            <p className="text-xs text-[#68706B] mb-4">
              Pasar rakyat penyediaan sembako bersubsidi dan pameran produk olahan pangan serta kerajinan batik desa.
            </p>
            <div className="text-[11px] text-[#68706B] border-t border-gray-100 pt-3 flex items-center justify-between">
              <span>📅 Minggu, 6 Des 2026</span>
              <span className="font-semibold text-[#4CAF50]">06.30 WIB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
