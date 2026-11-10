"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SearchIcon, CloseIcon, ArrowRightIcon } from "./Icons";

interface SearchItem {
  id: string;
  title: string;
  category: "Layanan" | "Profil" | "Berita" | "Transparansi" | "Potensi";
  href: string;
  description: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: "sktm",
    title: "Surat Keterangan Tidak Mampu (SKTM)",
    category: "Layanan",
    href: "/#layanan",
    description: "Permohonan pengantar beasiswa dan bantuan sosial warga",
  },
  {
    id: "sku",
    title: "Surat Keterangan Usaha (SKU)",
    category: "Layanan",
    href: "/#layanan",
    description: "Legalitas usaha mikro, kecil, dan menengah warga desa",
  },
  {
    id: "skck",
    title: "Surat Pengantar SKCK",
    category: "Layanan",
    href: "/#layanan",
    description: "Pengantar penerbitan catatan kepolisian dari kepolisian resor",
  },
  {
    id: "domisili",
    title: "Surat Keterangan Domisili",
    category: "Layanan",
    href: "/#layanan",
    description: "Surat keterangan tempat tinggal resmi untuk keperluan perbankan/kerja",
  },
  {
    id: "kelahiran",
    title: "Surat Pengantar Akta Kelahiran",
    category: "Layanan",
    href: "/#layanan",
    description: "Pengurusan administrasi kependudukan kelahiran baru",
  },
  {
    id: "sejarah",
    title: "Sejarah Desa Gendingan",
    category: "Profil",
    href: "/profil",
    description: "Kisah babat alas dan asal-usul Desa Gendingan Kedungwaru",
  },
  {
    id: "visi-misi",
    title: "Visi & Misi Pembangunan Desa",
    category: "Profil",
    href: "/profil#visi-misi",
    description: "Arah kebijakan menuju desa mandiri, transparan, dan inklusif 2027",
  },
  {
    id: "sotk",
    title: "Struktur Organisasi & Tata Kerja (SOTK)",
    category: "Profil",
    href: "/pemerintahan",
    description: "Bagan perangkat desa, Kepala Desa, BPD, dan LPM Desa Gendingan",
  },
  {
    id: "apbdes",
    title: "Transparansi APBDes Tahun Anggaran 2027",
    category: "Transparansi",
    href: "/data-statistik#apbdes",
    description: "Laporan realisasi pendapatan desa, belanja desa, dan pembiayaan",
  },
  {
    id: "statistik",
    title: "Data & Statistik Kependudukan",
    category: "Transparansi",
    href: "/data-statistik",
    description: "Grafik distribusi usia, pekerjaan warga, dan tingkat pendidikan",
  },
  {
    id: "batik",
    title: "Sentra Kerajinan Batik Gendingan",
    category: "Potensi",
    href: "/#potensi",
    description: "Motif khas Tulungagung karya paguyuban pembatik lokal",
  },
  {
    id: "berita-rkpdes",
    title: "Musyawarah Desa Penetapan RKPDes 2027",
    category: "Berita",
    href: "/#berita",
    description: "Hasil musyawarah mufakat rencana pembangunan kerja desa",
  },
];

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickSearchModal({ isOpen, onClose }: QuickSearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-[#141815]/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#DCE2DD] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#DCE2DD] bg-[#F4F6F4]/50">
          <SearchIcon className="w-5 h-5 text-[#4CAF50] mr-3 shrink-0" />
          <input
            id="search-modal-title"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik layanan, berita, transparansi, atau nama berkas..."
            autoFocus
            className="w-full bg-transparent text-[#1E2420] text-base placeholder-[#68706B] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#68706B] hover:text-[#1E2420] mr-1"
              aria-label="Hapus kata kunci"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-[#68706B] bg-white rounded-md border border-[#DCE2DD] hover:bg-gray-50"
          >
            ESC
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-gray-100">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#68706B]">
              <p className="text-sm">Tidak ditemukan hasil untuk &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1 text-gray-400">
                Coba gunakan kata kunci umum seperti &ldquo;surat&rdquo;, &ldquo;skck&rdquo;, atau &ldquo;profil&rdquo;
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F4F6F4] transition-colors group"
              >
                <div className="pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        item.category === "Layanan"
                          ? "bg-[#E8F5E9] text-[#2E7D32]"
                          : item.category === "Profil"
                          ? "bg-blue-50 text-blue-700"
                          : item.category === "Transparansi"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {item.category}
                    </span>
                    <h4 className="text-sm font-semibold text-[#1E2420] group-hover:text-[#4CAF50] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#68706B] line-clamp-1">{item.description}</p>
                </div>
                <ArrowRightIcon className="w-4 h-4 text-[#68706B] group-hover:text-[#4CAF50] group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#F4F6F4] text-[11px] text-[#68706B] flex items-center justify-between border-t border-[#DCE2DD]">
          <span>Portal Resmi Desa Gendingan — Kedungwaru, Tulungagung</span>
          <span>Tekan ESC untuk menutup</span>
        </div>
      </div>
    </div>
  );
}
