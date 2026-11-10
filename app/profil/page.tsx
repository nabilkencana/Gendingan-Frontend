import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircleIcon, MapPinIcon, UsersIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Profil & Sejarah Desa | Pemerintah Desa Gendingan, Tulungagung",
  description:
    "Mengenal lebih dekat sejarah babat alas, visi-misi pembangunan desa, demografi wilayah, dan kebudayaan Desa Gendingan Kedungwaru Tulungagung.",
};

export default function ProfilPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-white">
        {/* Page Banner / Header */}
        <section className="pt-12 pb-16 bg-[#F4F6F4] border-b border-[#DCE2DD]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#2E7D32] border border-[#DCE2DD] text-xs font-semibold mb-3">
              <span>Profil Resmi Desa</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2420] tracking-tight">
              Profil Desa Gendingan
            </h1>
            <p className="text-sm sm:text-base text-[#68706B] max-w-2xl mt-3">
              Mengenal jejak sejarah, visi masa depan, dan kekayaan demografi masyarakat Desa Gendingan, Kecamatan Kedungwaru, Kabupaten Tulungagung.
            </p>
          </div>
        </section>

        {/* Section 1: Sejarah Desa (Timeline Bento) */}
        <section id="sejarah" className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
              Asal-Usul & Kronik
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] mt-1">
              Sejarah Singkat Desa Gendingan
            </h2>
            <p className="text-sm text-[#68706B] mt-2 max-w-2xl">
              Nama &ldquo;Gendingan&rdquo; secara historis berakar dari tradisi leluhur para penabuh gamelan (<i>penggending</i>) dan pengrajin alat musik tradisional Jawa yang bermukim di tepi saluran air subur lereng Tulungagung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Era 1 */}
            <div className="p-8 rounded-2xl bg-[#F4F6F4] border border-[#DCE2DD] card-shadow">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E8F5E9] text-[#2E7D32] mb-4">
                Era Babat Alas (Awal Abad ke-19)
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E2420] mb-3">
                Pemerintahan Awal & Babat Alas
              </h3>
              <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed">
                Diprakarsai oleh tokoh sesepuh Kyai Gending dan para pengikutnya yang membuka hutan belantara di bantaran sungai untuk dijadikan persawahan serta pemukiman tenteram. Semangat musyawarah dan gotong royong ditanamkan sejak awal berdirinya desa.
              </p>
            </div>

            {/* Era 2 */}
            <div className="p-8 rounded-2xl bg-[#F4F6F4] border border-[#DCE2DD] card-shadow">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E8F5E9] text-[#2E7D32] mb-4">
                Era Kolonial & Kemerdekaan
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E2420] mb-3">
                Pembangunan Irigasi Teknis & Lumbung Tani
              </h3>
              <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed">
                Pembangunan jaringan saluran irigasi primer yang terhubung dengan Sungai Ngrowo menjadikan sawah Desa Gendingan tidak pernah kekurangan air, menjadikannya lumbung pangan utama bagi kawasan Kedungwaru.
              </p>
            </div>

            {/* Era 3 */}
            <div className="p-8 rounded-2xl bg-[#F4F6F4] border border-[#DCE2DD] card-shadow">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E8F5E9] text-[#2E7D32] mb-4">
                Era Reformasi & Otonomi
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E2420] mb-3">
                Pengembangan Sentra Batik & Ekonomi Mandiri
              </h3>
              <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed">
                Munculnya paguyuban perajin batik tulis dan pembentukan BUMDes Maju Bersama menjadi tonggak kemandirian ekonomi keluarga, memadukan potensi agraris dengan industri kerajinan kreatif khas Tulungagung.
              </p>
            </div>

            {/* Era 4 */}
            <div className="p-8 rounded-2xl bg-[#F4F6F4] border border-[#DCE2DD] card-shadow">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#4CAF50] text-white mb-4">
                Era Digital (2020 - Sekarang)
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E2420] mb-3">
                Desa Digital, Keterbukaan & Inklusivitas
              </h3>
              <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed">
                Pemerintah Desa bertransformasi penuh menghadirkan loket pelayanan surat mandiri secara daring, keterbukaan anggaran APBDes tanpa rahasia, serta representasi inklusif bagi seluruh warga.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Visi & Misi */}
        <section id="visi-misi" className="py-16 md:py-24 bg-[#F4F6F4] border-y border-[#DCE2DD]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
                Arah Pembangunan
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] mt-1">
                Visi & Misi Desa Gendingan 2025–2030
              </h2>
            </div>

            {/* Visi Box */}
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 card-shadow border border-[#DCE2DD] text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#68706B]">
                Visi Desa
              </span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#2E7D32] mt-3 leading-relaxed">
                &ldquo;Terwujudnya Desa Gendingan yang Maju, Mandiri, Berakhlak, dan Transparan Berlandaskan Gotong Royong serta Kearifan Budaya Lokal.&rdquo;
              </p>
            </div>

            {/* Misi List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "1. Tata Kelola Terbuka",
                  desc: "Mewujudkan birokrasi desa yang bersih, transparan dalam anggaran APBDes, dan responsif terhadap keluhan warga.",
                },
                {
                  title: "2. Pelayanan Publik Digital",
                  desc: "Meningkatkan kualitas loket 3S melalui otomasi surat kependudukan secara cepat tanpa perantara.",
                },
                {
                  title: "3. Pertanian & Irigasi Berkelanjutan",
                  desc: "Modernisasi sarana produksi pertanian dan pemeliharaan saluran irigasi bersama kelompok tani.",
                },
                {
                  title: "4. Pemberdayaan Ekonomi & BUMDes",
                  desc: "Mengembangkan sentra batik, industri olahan pangan, dan unit usaha BUMDes untuk menciptakan lapangan kerja warga.",
                },
                {
                  title: "5. Kesehatan & Kesejahteraan Sosial",
                  desc: "Menjamin ketersediaan posyandu aktif, penurunan stunting, serta jaring pengaman sosial tepat sasaran bagi keluarga prasejahtera.",
                },
                {
                  title: "6. Pelestarian Seni Budaya",
                  desc: "Mendukung paguyuban kesenian karawitan, jaranan, dan tradisi bersih desa sebagai aset identitas kultural masyarakat.",
                },
              ].map((misi, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#DCE2DD] card-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircleIcon className="w-5 h-5 text-[#4CAF50]" />
                    <h3 className="font-serif text-base font-bold text-[#1E2420]">
                      {misi.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#68706B] leading-relaxed">
                    {misi.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Wilayah & Demografi */}
        <section id="demografi" className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4CAF50]">
              Geografis & Wilayah
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] mt-1">
              Batas Wilayah & Pembagian Dusun
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Batas Administratif */}
            <div className="lg:col-span-6 bg-[#F4F6F4] p-8 rounded-2xl border border-[#DCE2DD]">
              <h3 className="font-serif text-xl font-bold text-[#1E2420] mb-4">
                Batas Wilayah Administratif
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#1E2420]">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <span className="font-semibold text-[#68706B]">Sebelah Utara:</span>
                  <span>Desa Bangoan, Kec. Kedungwaru</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <span className="font-semibold text-[#68706B]">Sebelah Timur:</span>
                  <span>Desa Ketanon, Kec. Kedungwaru</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <span className="font-semibold text-[#68706B]">Sebelah Selatan:</span>
                  <span>Kelurahan Kutoanyar, Kec. Tulungagung</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <span className="font-semibold text-[#68706B]">Sebelah Barat:</span>
                  <span>Desa Kedungwaru, Kec. Kedungwaru</span>
                </div>
              </div>
            </div>

            {/* Pembagian Dusun */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-[#DCE2DD] card-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-[#1E2420]">
                    1. Dusun Krajan
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32]">
                    6 RT • 2 RW
                  </span>
                </div>
                <p className="text-xs text-[#68706B]">
                  Pusat administrasi pemerintahan desa, lokasi Kantor Balai Desa, fasilitas pelayanan loket terpadu, dan sekolah dasar.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#DCE2DD] card-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-[#1E2420]">
                    2. Dusun Gendingan Kidul
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32]">
                    6 RT • 2 RW
                  </span>
                </div>
                <p className="text-xs text-[#68706B]">
                  Kawasan sentra pertanian padi irigasi subur, kelompok tani mandiri, dan paguyuban perajin batik tradisional.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#DCE2DD] card-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-[#1E2420]">
                    3. Dusun Gendingan Lor
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32]">
                    6 RT • 2 RW
                  </span>
                </div>
                <p className="text-xs text-[#68706B]">
                  Sentra hortikultura sayuran, kolam budidaya perikanan air tawar, serta sentra peternakan kambing dan sapi perah.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
