import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UsersIcon, ShieldCheckIcon, PhoneIcon } from "@/components/Icons";

export const metadata = {
  title: "Pemerintahan Desa & SOTK | Pemerintah Desa Gendingan, Tulungagung",
  description:
    "Struktur Organisasi dan Tata Kerja (SOTK) Pemerintah Desa Gendingan, profil Kepala Desa, Perangkat Desa, BPD, dan Lembaga Kemasyarakatan.",
};

interface Official {
  name: string;
  role: string;
  nipd?: string;
  department: string;
  description: string;
}

const OFFICIALS: Official[] = [
  {
    name: "H. Supriyanto, S.Sos.",
    role: "Kepala Desa (Kades)",
    nipd: "19740512 201901 1 001",
    department: "Pimpinan Desa",
    description: "Memimpin penyelenggaraan pemerintahan desa, pembinaan kemasyarakatan, dan pemberdayaan ekonomi warga.",
  },
  {
    name: "Drs. Bambang Wijaya",
    role: "Sekretaris Desa (Sekdes)",
    nipd: "19780820 200801 1 002",
    department: "Sekretariat Desa",
    description: "Mengkoordinasikan urusan ketatausahaan, administrasi umum, keuangan, dan penyusunan regulasi desa.",
  },
  {
    name: "Siti Aminah, S.E.",
    role: "Kepala Urusan Keuangan (Kaur Keuangan)",
    nipd: "19850314 201501 2 003",
    department: "Sekretariat Desa",
    description: "Pengelolaan tata buku APBDes, penatausahaan belanja desa, pelaporan pajak, dan SPJ kegiatan.",
  },
  {
    name: "Rizky Pratama, S.Kom.",
    role: "Kaur TU & Umum / Pengelola Digital",
    nipd: "19920722 201901 1 004",
    department: "Sekretariat Desa",
    description: "Pelayanan kearsipan persuratan, inventarisasi aset desa, dan administrasi portal digital.",
  },
  {
    name: "Hendro Sasongko, S.T.",
    role: "Kaur Perencanaan",
    nipd: "19881105 201701 1 005",
    department: "Sekretariat Desa",
    description: "Penyusunan RKPDes, RPJMDes, asistensi dokumen teknis pembangunan sarana dan prasarana fisik.",
  },
  {
    name: "Agus Setiawan, S.IP.",
    role: "Kasi Pemerintahan",
    nipd: "19820419 201201 1 006",
    department: "Pelaksana Teknis",
    description: "Pengelolaan administrasi kependudukan, pembinaan ketentraman warga, dan fasilitasi RT/RW.",
  },
  {
    name: "Nurul Hidayati, S.Pd.",
    role: "Kasi Kesejahteraan",
    nipd: "19890918 201801 2 007",
    department: "Pelaksana Teknis",
    description: "Pemberdayaan kelompok tani, pembinaan posyandu balita/lansia, keagamaan, dan jaring sosial.",
  },
  {
    name: "Eko Prasetyo, S.Sos.",
    role: "Kasi Pelayanan",
    nipd: "19910125 202001 1 008",
    department: "Pelaksana Teknis",
    description: "Loket pelayanan administrasi 3S terpadu, penerbitan surat keterangan warga, dan legalisasi berkas.",
  },
];

export default function PemerintahanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-white">
        {/* Page Banner Header */}
        <section className="pt-12 pb-16 bg-[#F4F6F4] border-b border-[#DCE2DD]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#2E7D32] border border-[#DCE2DD] text-xs font-semibold mb-3">
              <span>Struktur & Tata Kerja</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2420] tracking-tight">
              Pemerintahan Desa Gendingan
            </h1>
            <p className="text-sm sm:text-base text-[#68706B] max-w-2xl mt-3">
              Jajaran aparatur pemerintah desa yang berdedikasi melayani dengan prinsip transparansi, akuntabilitas, dan gotong royong.
            </p>
          </div>
        </section>

        {/* Profil Kepala Desa Featured */}
        <section className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-[#E8F5E9]/50 rounded-3xl p-8 sm:p-12 border border-[#4CAF50]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 h-56 rounded-2xl bg-white border-2 border-[#4CAF50] overflow-hidden shadow-lg p-2">
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-[#2E7D32] to-[#4CAF50] flex flex-col items-center justify-center text-white">
                  <UsersIcon className="w-20 h-20 opacity-80 mb-2" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Foto Resmi Kades</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
                Kepala Desa Periode 2025–2031
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] mt-1 mb-2">
                H. Supriyanto, S.Sos.
              </h2>
              <p className="text-xs font-mono text-[#68706B] mb-4">
                NIPD: 19740512 201901 1 001
              </p>

              <blockquote className="p-4 rounded-xl bg-white border-l-4 border-[#4CAF50] text-xs sm:text-sm text-[#1E2420] italic mb-6">
                &ldquo;Amanah kepemimpinan ini kami dedikasikan seutuhnya demi kemudahan urusan warga, kejujuran pengelolaan dana desa, dan kejayaan potensi budaya Gendingan.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-white rounded-xl">
                  <span className="text-[#68706B] block">Pendidikan:</span>
                  <span className="font-bold text-[#1E2420]">Sarjana Ilmu Sosial</span>
                </div>
                <div className="p-3 bg-white rounded-xl">
                  <span className="text-[#68706B] block">Fokus Kebijakan:</span>
                  <span className="font-bold text-[#1E2420]">Pelayanan 3S & Irigasi</span>
                </div>
                <div className="p-3 bg-white rounded-xl">
                  <span className="text-[#68706B] block">Kontak Layanan:</span>
                  <span className="font-bold text-[#4CAF50]">kades@gendingan.desa.id</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jajaran Perangkat Desa Grid */}
        <section className="py-12 pb-24 bg-[#F4F6F4] border-t border-[#DCE2DD]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
                Aparatur Sipil Desa
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1E2420] mt-1">
                Jajaran Perangkat Desa Gendingan
              </h2>
              <p className="text-xs sm:text-sm text-[#68706B] mt-2">
                Pelaksana tugas teknis dan administratif dalam struktur organisasi tata kerja desa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OFFICIALS.slice(1).map((off, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#DCE2DD] card-shadow card-shadow-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] mb-4">
                      <UsersIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4F6F4] text-[#4CAF50]">
                      {off.department}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1E2420] mt-2 mb-0.5">
                      {off.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#2E7D32] mb-1">
                      {off.role}
                    </p>
                    {off.nipd && (
                      <p className="text-[10px] font-mono text-[#68706B] mb-3">
                        NIPD: {off.nipd}
                      </p>
                    )}
                    <p className="text-xs text-[#68706B] leading-relaxed">
                      {off.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-[#68706B]">
                    Status: <span className="font-semibold text-[#1E2420]">Aktif Menjabat</span>
                  </div>
                </div>
              ))}
            </div>

            {/* BPD & LPM Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#DCE2DD] card-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
                  Fungsi Legislasi & Pengawasan
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E2420] mt-1 mb-3">
                  Badan Permusyawaratan Desa (BPD)
                </h3>
                <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed mb-4">
                  BPD Desa Gendingan terdiri dari 7 anggota keterwakilan wilayah dusun yang bertugas membahas peraturan desa, menyerap aspirasi warga, dan mengawasi kinerja aparatur pemerintah desa.
                </p>
                <div className="p-3 rounded-xl bg-[#F4F6F4] text-xs font-medium text-[#1E2420]">
                  Ketua BPD: <strong>Drs. H. Mulyono, M.Pd.</strong>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#DCE2DD] card-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
                  Pemberdayaan Kemasyarakatan
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E2420] mt-1 mb-3">
                  Lembaga Pemberdayaan Masyarakat (LPM)
                </h3>
                <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed mb-4">
                  Wadah kemitraan antara warga dan pemerintah desa dalam menggerakkan gotong royong swadaya masyarakat, pelestarian lingkungan hidup, dan peningkatan partisipasi pembangunan.
                </p>
                <div className="p-3 rounded-xl bg-[#F4F6F4] text-xs font-medium text-[#1E2420]">
                  Ketua LPM: <strong>Ir. Sugeng Hartono</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
