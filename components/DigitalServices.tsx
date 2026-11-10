"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileTextIcon, ShieldCheckIcon, ArrowRightIcon, CheckCircleIcon } from "./Icons";

interface ServiceItem {
  id: string;
  name: string;
  code: string;
  requirement: string;
  duration: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "sku",
    name: "Surat Keterangan Usaha (SKU)",
    code: "SKU-01",
    requirement: "KTP, KK, & Foto Tempat Usaha",
    duration: "15 Menit Online",
  },
  {
    id: "sktm",
    name: "Surat Keterangan Tidak Mampu (SKTM)",
    code: "SKTM-02",
    requirement: "KTP, KK, & Pengantar RT/RW",
    duration: "Selesai Hari Sama",
  },
  {
    id: "domisili",
    name: "Surat Keterangan Domisili",
    code: "SKD-03",
    requirement: "KTP & Surat Pengantar RT",
    duration: "10 Menit Online",
  },
  {
    id: "skck",
    name: "Surat Pengantar SKCK",
    code: "SKCK-04",
    requirement: "KTP, KK, Pas Foto 4x6 (2 lbr)",
    duration: "15 Menit Online",
  },
  {
    id: "nikah",
    name: "Pengantar Nikah (Model N1-N4)",
    code: "NIK-05",
    requirement: "KTP Calon Pengantin & Orang Tua",
    duration: "1 Hari Kerja",
  },
  {
    id: "kelahiran",
    name: "Keterangan Kelahiran / Kematian",
    code: "KKL-06",
    requirement: "Surat Bidan/RS & Kartu Keluarga",
    duration: "15 Menit Online",
  },
];

export default function DigitalServices() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="layanan" className="py-16 md:py-24 bg-[#F4F6F4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#2E7D32] border border-[#DCE2DD] text-xs font-semibold mb-3">
            <span>Pelayanan Mandiri & Transparansi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] tracking-tight">
            Layanan Surat Digital & APBDes Mandiri
          </h2>
          <p className="text-sm sm:text-base text-[#68706B] mt-3">
            Pengurusan administrasi kependudukan tanpa antre panjang, transparan, dan terintegrasi langsung dengan database desa.
          </p>
        </div>

        {/* Top Grid: 6 Digital Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 card-shadow card-shadow-hover border border-[#DCE2DD]/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                    <FileTextIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#F4F6F4] text-[#68706B] border border-[#DCE2DD]">
                    {srv.code}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1E2420] mb-2 leading-snug">
                  {srv.name}
                </h3>
                <p className="text-xs text-[#68706B] mb-4">
                  Syarat: <span className="font-medium text-[#1E2420]">{srv.requirement}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                  ⚡ {srv.duration}
                </span>
                <button
                  onClick={() => setSelectedService(srv)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#4CAF50] hover:text-[#3D9140] transition-colors"
                >
                  <span>Ajukan Surat</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: APBDes Transparansi Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 card-shadow border border-[#DCE2DD]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DCE2DD]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold mb-2">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>Akuntabilitas Publik</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2420]">
                Ringkasan APBDes Gendingan Tahun Anggaran 2027
              </h3>
              <p className="text-xs sm:text-sm text-[#68706B] mt-1">
                Keterbukaan informasi keuangan desa berdasarkan Permendagri No. 20/2018.
              </p>
            </div>
            <Link
              href="/data-statistik#apbdes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4CAF50] text-white text-xs font-semibold hover:bg-[#3D9140] transition-colors shrink-0 shadow-sm"
            >
              <span>Laporan Lengkap & Rincian</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Budget Breakdown Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* 1. Pendapatan */}
            <div className="p-5 rounded-2xl bg-[#F4F6F4] border border-[#DCE2DD]/60">
              <span className="text-xs font-semibold text-[#68706B] uppercase tracking-wider">
                Total Pendapatan Desa
              </span>
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#2E7D32] tabular-nums mt-1 mb-2">
                Rp 2.145.820.000
              </span>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-[#2E7D32] h-full rounded-full" style={{ width: "94%" }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#68706B]">
                <span>Realisasi Penerimaan: 94%</span>
                <span className="font-semibold text-[#1E2420]">DD, ADD, & PADes</span>
              </div>
            </div>

            {/* 2. Belanja */}
            <div className="p-5 rounded-2xl bg-[#F4F6F4] border border-[#DCE2DD]/60">
              <span className="text-xs font-semibold text-[#68706B] uppercase tracking-wider">
                Total Belanja Desa
              </span>
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#1E2420] tabular-nums mt-1 mb-2">
                Rp 2.080.450.000
              </span>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-[#4CAF50] h-full rounded-full" style={{ width: "89%" }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#68706B]">
                <span>Penyaluran Fisik & Sosial: 89%</span>
                <span className="font-semibold text-[#1E2420]">Infrastruktur & PMT</span>
              </div>
            </div>

            {/* 3. Pembiayaan */}
            <div className="p-5 rounded-2xl bg-[#F4F6F4] border border-[#DCE2DD]/60">
              <span className="text-xs font-semibold text-[#68706B] uppercase tracking-wider">
                Pembiayaan & SiLPA
              </span>
              <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D97706] tabular-nums mt-1 mb-2">
                Rp 65.370.000
              </span>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-[#D97706] h-full rounded-full" style={{ width: "100%" }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#68706B]">
                <span>Cadangan Bencana: 100%</span>
                <span className="font-semibold text-[#1E2420]">BUMDes & Cadangan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Pengajuan Layanan Mandiri */}
        {selectedService && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141815]/60 backdrop-blur-xs"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 card-shadow border border-[#DCE2DD] animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#DCE2DD] mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#4CAF50]">
                    {selectedService.code}
                  </span>
                  <h3 id="service-modal-title" className="font-serif text-xl font-bold text-[#1E2420]">
                    {selectedService.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-full hover:bg-[#F4F6F4] text-[#68706B]"
                  aria-label="Tutup form"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#68706B] mb-4">
                Layanan ini diproses melalui sistem persuratan terpadu Desa Gendingan. Pastikan dokumen syarat telah siap.
              </p>

              <div className="p-4 rounded-xl bg-[#E8F5E9] mb-6">
                <h4 className="text-xs font-bold text-[#2E7D32] mb-1">Persyaratan Dokumen:</h4>
                <p className="text-xs text-[#1E2420] font-medium">{selectedService.requirement}</p>
                <p className="text-[11px] text-[#68706B] mt-1">Estimasi pengerjaan: {selectedService.duration}</p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#1E2420] hover:bg-[#F4F6F4]"
                >
                  Batal
                </button>
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20Desa%20Gendingan,%20saya%20ingin%20mengajukan%20${encodeURIComponent(
                    selectedService.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#4CAF50] hover:bg-[#3D9140] text-white text-xs font-semibold shadow-sm"
                >
                  Lanjut via WhatsApp Loket
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
