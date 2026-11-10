"use client";

import React, { useState } from "react";
import { CheckCircleIcon, ArrowRightIcon } from "./Icons";

export default function CitizenComplaintForm() {
  const [category, setCategory] = useState("Infrastruktur");
  const [dusun, setDusun] = useState("Dusun Krajan");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp || !message) return;

    // Generate random mock ticket ID
    const randomTicket = `GDG-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setWhatsapp("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section id="pengaduan" className="py-16 md:py-24 bg-[#F4F6F4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 card-shadow border border-[#DCE2DD]">
          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold mb-3">
              <span>Layanan Aspirasi Warga (Lapor Desa)</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] tracking-tight">
              Sampaikan Pengaduan atau Aspirasi Anda
            </h2>
            <p className="text-xs sm:text-sm text-[#68706B] mt-2">
              Setiap laporan warga akan diteruskan langsung ke tim respon cepat Pemerintah Desa Gendingan untuk ditindaklanjuti secara akuntabel.
            </p>
          </div>

          {isSubmitted ? (
            /* Success confirmation panel */
            <div className="p-8 rounded-2xl bg-[#E8F5E9] border border-[#4CAF50]/30 text-center animate-fadeIn">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#2E7D32] mx-auto mb-4 shadow-sm">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#2E7D32] uppercase tracking-wider">
                Laporan Berhasil Diterima
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E2420] mt-1 mb-2">
                Nomor Tiket: <span className="font-mono text-[#2E7D32]">{ticketId}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#68706B] max-w-md mx-auto mb-6">
                Terima kasih <strong>{name}</strong>. Laporan perihal &ldquo;{category}&rdquo; di {dusun} telah tercatat dalam sistem kendali desa. Tim respon kami akan menghubungi Anda melalui nomor WhatsApp yang terdaftar.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20Desa%20Gendingan,%20saya%20telah%20mengirimkan%20laporan%20dengan%20nomor%20tiket%20${ticketId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#4CAF50] hover:bg-[#3D9140] text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  Konfirmasi Langsung ke WhatsApp Kades
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-full bg-white hover:bg-gray-100 text-[#1E2420] text-xs font-semibold border border-[#DCE2DD] transition-colors"
                >
                  Kirim Laporan Baru
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category radio pills */}
              <div>
                <label className="block text-xs font-bold text-[#1E2420] uppercase tracking-wider mb-2">
                  Kategori Pengaduan / Aspirasi:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Infrastruktur",
                    "Pelayanan Publik",
                    "Bantuan Sosial",
                    "Kebersihan / Lingkungan",
                    "Saran & Aspirasi",
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                        category === cat
                          ? "bg-[#4CAF50] text-white shadow-xs font-semibold"
                          : "bg-[#F4F6F4] text-[#1E2420] hover:bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & WhatsApp input grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#1E2420] mb-1.5">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F6F4] border border-[#DCE2DD] text-sm text-[#1E2420] focus:outline-none focus:border-[#4CAF50] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1E2420] mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F6F4] border border-[#DCE2DD] text-sm text-[#1E2420] focus:outline-none focus:border-[#4CAF50] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Dusun Selector */}
              <div>
                <label className="block text-xs font-medium text-[#1E2420] mb-1.5">
                  Lokasi Dusun Domisili / Terjadinya Hal:
                </label>
                <select
                  value={dusun}
                  onChange={(e) => setDusun(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6F4] border border-[#DCE2DD] text-sm text-[#1E2420] focus:outline-none focus:border-[#4CAF50] focus:bg-white transition-colors"
                >
                  <option value="Dusun Krajan">Dusun Krajan (Pusat Balai Desa & Loket)</option>
                  <option value="Dusun Gendingan Kidul">Dusun Gendingan Kidul (Sentra Pertanian & Batik)</option>
                  <option value="Dusun Gendingan Lor">Dusun Gendingan Lor (Sentra Hortikultura & Perikanan)</option>
                </select>
              </div>

              {/* Message text area */}
              <div>
                <label className="block text-xs font-medium text-[#1E2420] mb-1.5">
                  Isi Laporan / Uraian Aspirasi <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan kendala, permohonan bantuan, atau usulan pembangunan yang Anda harapkan..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6F4] border border-[#DCE2DD] text-sm text-[#1E2420] focus:outline-none focus:border-[#4CAF50] focus:bg-white transition-colors"
                />
              </div>

              {/* Privacy note & Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#68706B] text-center sm:text-left">
                  🔒 Privasi Anda dilindungi. Identitas tidak akan dipublikasikan secara terbuka tanpa izin.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4CAF50] hover:bg-[#3D9140] text-white text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all shrink-0"
                >
                  Kirim Laporan Sekarang
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
