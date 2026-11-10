"use client";

import React, { useState } from "react";
import { CloseIcon, ArrowRightIcon } from "./Icons";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "jembatan-tani",
    title: "Gotong Royong Pembangunan Jembatan Tani Dusun Gendingan Kidul",
    category: "Infrastruktur & Gotong Royong",
    date: "Oktober 2026",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFA-_WbePlqN5SISa2or134j_IH7qswmy3HrLm3Kbs6zLeUO8vIptPJ68Eap3S2dSUpMwmkqWBh7vFbmdyfwfWg7jre4zJl_Q26ZJaatTsfEiooZKDDBGKeJIl2J-iemNxn4LBezzY3V0W7R8S3NpW0TIGOuQ0Qn4yVHIcrDCPueO3DiWsv8H7D6H1QzYFvH00wcKb7mymdUeGTSRoJOAvtcDeLbw9mICZl5C9qFw",
  },
  {
    id: "layanan-3s",
    title: "Standar Layanan 3S di Loket Pelayanan Terpadu Kantor Desa",
    category: "Pelayanan Publik",
    date: "September 2026",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOGHRbSnJd9LNyo5TW35IKK-Q7xEv-SGyh1v8GaAoLoPtyiQZRylZHgOUrWPQuTN-z360I9Oc2jPCH8r1qeJG7Q0IF0NzWB0-Tqaw3oA7VjIPHflpFkNFV3xPTJgcwr2fxwq6G7xiL80GlzgM9LBWv7aQzhIeUaEu5StFsOJwZG2iRyLbwWgj4DCMc-NuUxW73FYHsgMaBZKxXGAJVQRANa_5LSVaCuN06h8-p8qc",
  },
  {
    id: "panen-raya",
    title: "Panen Raya Padi Organik Bersama Gabungan Kelompok Tani",
    category: "Pertanian",
    date: "Agustus 2026",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQni7dTeq5b9ioh7HoSNZ2NzTML_5LD3sk-1D8dEZ1Kkh0nEFxKYOusG5O-gCdbWYP-EhOT1z64e092044em3hP0r2z_oaS0PfxiaIlDiyay50lOVyIKawH0qcsToTdVC7KxpguvkbHTEIE31XxNR6vLIEsCTxBxO0gO1w6jSdfKLJ3EHM7SrAxiICzR7W1Ks4orkoSF_gs_R32dVV4aNbQq2kx8LLNROnuSVqDFQ",
  },
  {
    id: "seni-budaya",
    title: "Pentas Seni Budaya dan Karawitan Bersih Desa Gendingan",
    category: "Tradisi & Budaya",
    date: "Juli 2026",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOlcEH7bjzb2WVylBb1FSpLH-8aE1DLk2wt8GKdcocn6W20lqJOv-HfzwDPNeKUmDj3YOkEN-xoi0GARwLOx6q5OiGj6KgjbvQJD8nhOPcgQ9lERdpk7oFmnyW5Qc7l5tJ3Z6su3D0VYZ8SofhDiSjoFIl3-y_FWPm5k4v4korihp0ODCQ45USdLc5yhvhbxiBsnck8g93t6YXrQgA3HoYVFmOr56pu0S1uEVV0YI",
  },
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold mb-3">
              <span>Dokumentasi Kegiatan</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] tracking-tight">
              Galeri Jejak Langkah Desa
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#68706B] max-w-md mt-3 md:mt-0">
            Momen kebersamaan pembangunan, pelayanan ramah warga, dan pelestarian kearifan lokal Desa Gendingan.
          </p>
        </div>

        {/* 4-Item Masonry/Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-[#DCE2DD] card-shadow card-shadow-hover relative aspect-[4/5] bg-gray-100 flex flex-col justify-end p-5"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141815]/90 via-[#141815]/30 to-transparent" />

              <div className="relative z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#4CAF50] text-white mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] text-gray-300 font-medium">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141815]/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#141815]/60 hover:bg-[#141815] text-white transition-colors"
                  aria-label="Tutup foto"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#E8F5E9] text-[#2E7D32]">
                    {activeImage.category}
                  </span>
                  <span className="text-xs text-[#68706B]">• {activeImage.date}</span>
                </div>
                <h3 id="gallery-modal-title" className="font-serif text-xl font-bold text-[#1E2420]">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-[#68706B] mt-2">
                  Dokumentasi resmi Bagian Publikasi & Informasi Pemerintah Desa Gendingan, Kec. Kedungwaru, Kab. Tulungagung.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
