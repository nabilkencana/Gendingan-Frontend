import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Data & Statistik Kependudukan & APBDes | Desa Gendingan Tulungagung",
  description:
    "Statistik demografi kependudukan riil BPS Tulungagung 2024, distribusi usia, mata pencaharian warga, tingkat pendidikan, dan transparansi laporan APBDes Desa Gendingan.",
};

export default function DataStatistikPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Page Header */}
        <section className="bg-surface-card border-b border-border py-12 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary border border-border text-xs font-semibold mb-3">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Data Riil Terverifikasi BPS Kabupaten Tulungagung 2024</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight">
              Data & Statistik Kependudukan Desa Gendingan
            </h1>
            <p className="font-body-md text-body-md text-text-secondary max-w-3xl mt-3">
              Kompilasi data agregat kependudukan riil bersumber dari Publikasi Resmi Badan Pusat Statistik (BPS) Kabupaten Tulungagung <i>&ldquo;Kecamatan Kedungwaru Dalam Angka 2024&rdquo;</i> dan Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil).
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 sm:px-12 mt-12 space-y-12">
          {/* 1. Ringkasan Demografi Utama (BPS 2024) */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Agregat Kependudukan Riil
                </span>
                <h2 className="font-headline-lg text-headline-lg text-text-primary mt-0.5">
                  Statistik Penduduk Desa Gendingan
                </h2>
              </div>
              <a
                href="https://tulungagungkab.bps.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-card border border-border text-xs font-semibold text-primary hover:bg-surface shadow-xs transition"
              >
                <span>Portal BPS Tulungagung</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-secondary border border-primary/20 shadow-xs">
                <span className="text-xs font-semibold text-primary">Total Penduduk</span>
                <span className="block font-headline-xl text-headline-xl font-bold text-text-primary tabular-nums mt-1">
                  4.695
                </span>
                <span className="text-xs text-text-secondary mt-1 block">Jiwa (4,9% penduduk kec.)</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-card border border-border shadow-xs">
                <span className="text-xs font-semibold text-text-secondary">Kepala Keluarga</span>
                <span className="block font-headline-xl text-headline-xl font-bold text-text-primary tabular-nums mt-1">
                  1.562
                </span>
                <span className="text-xs text-text-secondary mt-1 block">KK Terdaftar</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-card border border-border shadow-xs">
                <span className="text-xs font-semibold text-text-secondary">Laki-laki</span>
                <span className="block font-headline-xl text-headline-xl font-bold text-primary tabular-nums mt-1">
                  2.407
                </span>
                <span className="text-xs text-text-secondary mt-1 block">Sex Ratio 105,2</span>
              </div>

              <div className="p-6 rounded-2xl bg-surface-card border border-border shadow-xs">
                <span className="text-xs font-semibold text-text-secondary">Perempuan</span>
                <span className="block font-headline-xl text-headline-xl font-bold text-primary-container tabular-nums mt-1">
                  2.288
                </span>
                <span className="text-xs text-text-secondary mt-1 block">Jiwa Warga</span>
              </div>
            </div>

            {/* Wilayah & Kepadatan Bar */}
            <div className="p-6 rounded-2xl bg-surface-card border border-border shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">straighten</span>
                </div>
                <div>
                  <span className="text-xs text-text-secondary block">Luas Wilayah Desa:</span>
                  <strong className="text-sm text-text-primary font-bold">2,11 km² (211 Hektar)</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">density_medium</span>
                </div>
                <div>
                  <span className="text-xs text-text-secondary block">Kepadatan Penduduk:</span>
                  <strong className="text-sm text-text-primary font-bold">2.225 Jiwa / km²</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">near_me</span>
                </div>
                <div>
                  <span className="text-xs text-text-secondary block">Jarak ke Kota Tulungagung:</span>
                  <strong className="text-sm text-text-primary font-bold">2,5 Kilometer</strong>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Rincian APBDes 2026/2027 */}
          <section id="apbdes" className="space-y-6">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Transparansi Keuangan Publik
              </span>
              <h2 className="font-headline-lg text-headline-lg text-text-primary mt-0.5">
                Laporan APBDes Tahun Anggaran 2026 / 2027
              </h2>
              <p className="text-xs text-text-secondary mt-1">
                Keterbukaan informasi keuangan desa berdasarkan Permendagri No. 20/2018.
              </p>
            </div>

            <div className="bg-surface-card rounded-2xl overflow-hidden border border-border shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-surface-dark text-text-on-dark">
                      <th className="py-4 px-6 font-semibold">Uraian Rekening Anggaran</th>
                      <th className="py-4 px-6 font-semibold text-right">Target (Rp)</th>
                      <th className="py-4 px-6 font-semibold text-right">Realisasi (Rp)</th>
                      <th className="py-4 px-6 font-semibold text-center">Persentase</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-secondary/60 font-bold text-primary">
                      <td colSpan={4} className="py-3 px-6">1. PENDAPATAN DESA</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 pl-10 text-text-primary">1.1. Pendapatan Asli Desa (PADes)</td>
                      <td className="py-3 px-6 text-right tabular-nums">185.000.000</td>
                      <td className="py-3 px-6 text-right tabular-nums">178.500.000</td>
                      <td className="py-3 px-6 text-center tabular-nums font-semibold text-primary">96.5%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 pl-10 text-text-primary">1.2. Alokasi Dana Desa (ADD)</td>
                      <td className="py-3 px-6 text-right tabular-nums">720.820.000</td>
                      <td className="py-3 px-6 text-right tabular-nums">720.820.000</td>
                      <td className="py-3 px-6 text-center tabular-nums font-semibold text-primary">100.0%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 pl-10 text-text-primary">1.3. Dana Desa (DD - APBN)</td>
                      <td className="py-3 px-6 text-right tabular-nums">1.050.000.000</td>
                      <td className="py-3 px-6 text-right tabular-nums">980.000.000</td>
                      <td className="py-3 px-6 text-center tabular-nums font-semibold text-primary">93.3%</td>
                    </tr>
                    <tr className="bg-secondary/60 font-bold text-primary">
                      <td colSpan={4} className="py-3 px-6">2. BELANJA DESA</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 pl-10 text-text-primary">2.1. Penyelenggaraan Pemerintahan Desa</td>
                      <td className="py-3 px-6 text-right tabular-nums">680.450.000</td>
                      <td className="py-3 px-6 text-right tabular-nums">645.000.000</td>
                      <td className="py-3 px-6 text-center tabular-nums font-semibold text-primary-container">94.8%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 pl-10 text-text-primary">2.2. Pembangunan Desa (Fisik, Jalan Tani & Irigasi)</td>
                      <td className="py-3 px-6 text-right tabular-nums">920.000.000</td>
                      <td className="py-3 px-6 text-right tabular-nums">850.000.000</td>
                      <td className="py-3 px-6 text-center tabular-nums font-semibold text-primary-container">92.4%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 pl-10 text-text-primary">2.3. Pembinaan Kemasyarakatan (Seni Budaya & Pemuda)</td>
                      <td className="py-3 px-6 text-right tabular-nums">180.000.000</td>
                      <td className="py-3 px-6 text-right tabular-nums">165.000.000</td>
                      <td className="py-3 px-6 text-center tabular-nums font-semibold text-primary-container">91.7%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 pl-10 text-text-primary">2.4. Pemberdayaan Masyarakat (UMKM Batik & Pangan)</td>
                      <td className="py-3 px-6 text-right tabular-nums">220.000.000</td>
                      <td className="py-3 px-6 text-right tabular-nums">200.000.000</td>
                      <td className="py-3 px-6 text-center tabular-nums font-semibold text-primary-container">90.9%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
