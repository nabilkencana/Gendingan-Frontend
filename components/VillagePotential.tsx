import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

interface PotentialItem {
  id: string;
  title: string;
  category: string;
  description: string;
  stats: string;
  imageUrl: string;
}

const POTENTIALS: PotentialItem[] = [
  {
    id: "batik",
    title: "Sentra Batik & Kerajinan Tangan",
    category: "Ekonomi Kreatif",
    description:
      "Warisan budaya membatik tulis dan cap dengan motif Barong Kethek serta flora lokal yang diproduksi oleh 3 kelompok pembatik wanita mandiri.",
    stats: "3 Kelompok • 45 Pengrajin",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCElV9W7hjyUOO7TjOGfeACAkUyF1m6Wcgjyq1VKwQFK8LhZuGqVH8ggSw6cOIuxyzsGDnOQAiWTjbZVMGlrmLljU8TFZlNdfVxHE7bemuUqviaNXP8bE0jRmpy3GYdpXZhEGq0speiCSHMnFvK4ImsUnxl31I-uD-3P4XN4-9d7S59YRzlw-MLC5BoVYW8d_AdhvvFRf9qOTP9ZRINoHi1QYW80YIr-DnMkWE0Jl4",
  },
  {
    id: "pangan",
    title: "Olahan Pangan & Jajanan Tradisional",
    category: "Kuliner & UMKM",
    description:
      "Produksi jenang ketan, keripik pisang tanduk, sambel pecel sangrai, dan aneka kue basah khas Jawa Timuran bersertifikasi halal dan P-IRT.",
    stats: "18 Produsen UMKM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLXbhM5RPnkuOWnPHhs-0VbR4uk-ZQDTpDkEczOhZvZN7ArJzWD2u2tV3bKhU3xhqXzbmB6all-wTcxaHesaz9QOvI2uRnbFvMAD2RZ_Jpi3I7PvGU9uR2wVTPrpFhgDnf12io9mgJw4VfTEANNRs85BWBRlDi4T9F9zTCIae8Rif-XRdJaH8B6GZM7km7bd8cwuoiKRwK-kiHXkXSCCxR-Zn_WM7RlJ7-4tup54c",
  },
  {
    id: "padi",
    title: "Lumbung Padi & Hortikultura",
    category: "Pertanian",
    description:
      "Hamparan sawah 110 hektar beririgasi teknis dengan indeks pertanaman IP 300 menghasilkan beras premium dan komoditas hortikultura sayuran segar.",
    stats: "110 Ha Sawah • 5 Gapoktan",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMiK5OszbGYrUv2idtLYNkg__4ObqBW7V-_hKWEK62JkFiEbz3P7WF6suvYQP777xXZGGyETaAqD21cN-hG1Vkm3hkD1yeXKvzhVbeW0Y5ym2-EnMlkory_YQlQ1EKt9WKGiNNS0VJFcWkz54Ql7emTOUchafZolfjgjmRyLKu5uNKhOP17Gw8SAGwT6tS7dMCJiEdSQb5oaULBmwhYdg7-DsJBn0FR6Z36kZyT-Y",
  },
  {
    id: "ikan-ternak",
    title: "Budi Daya Perikanan & Ternak",
    category: "Peternakan",
    description:
      "Kawasan budi daya ikan gurami dan lele sistem bioflok, serta sentra peternakan kambing peranakan etawa dan sapi potong rakyat.",
    stats: "32 Kolam • 14 Peternak",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOtRa4nqrGJLPqrEW1OQ33Ry29IavYB-kWFTm29eOIxyTFH9GXwvHeVS819wYsSwgBLFFaUJfR5QkdtvLxMwFTyZeSfrCjfevvB_rC-ZivuF5kgpBFiRCS-RGZA_uINJMXV_vI7gehDuHDeLNHnWW-gcx04AZL25ExUF-DX45A911ADAFh60bPEYvFq1kwk4fgB87YAik4ABU5MenzItPJbuvi8d6tvLfCY63JaLU",
  },
  {
    id: "kesenian",
    title: "Pelestarian Kesenian Karawitan & Jaranan",
    category: "Seni Budaya",
    description:
      "Grup karawitan laras madya dan kesenian jaranan sentherewe khas Tulungagung yang aktif diwariskan ke generasi muda di balai dusun.",
    stats: "4 Paguyuban Seni",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYUjCzkWpUAM2NwxzhqxBbfs3pZSi02hag4cVMqqTtY_knpShET6QJojPf6uc8V1WC8cuLhOgkCB_a6x0yb85V6EsIgCz7TbFalp-Z59OWq7MlQ1VLEZLj0S21Ao_AAmOzh2UNC3CL7BQIg6y9l7mdbOo6nghjs1RVtDBJ9zMzUe_l-nB0KCPIOYnkHkwAM6veDhRpn2P3k-pLPV8mo4RBwnlbgL3y52Vkm_3-Jew",
  },
  {
    id: "bumdes",
    title: "Unit Usaha BUMDes Maju Bersama",
    category: "BUMDes",
    description:
      "Badan Usaha Milik Desa yang mengelola sarana air minum pedesaan (HIPPAM), kios saprotan pertanian, dan agen pembayaran resmi terpadu.",
    stats: "Omzet Rp 380 Juta/Tahun",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1K6qVIhNtk8ZEUARLGsmWmnyayftliEeYm6TwcrwI1jxOQ1PodxU5vA4R4rhsY8_saNqMEQFwLTdThuerhtuSdQgLHfdo0Fbk6gyyX5x1uy3tUlTU6GcfFNE_RMEz2YqKF4LkEwxOTmKUPnjuBH5wWmpDBbKb15AWJ6G_tJtnM3NDDvnNvUzCjLPr7cnW0k7kDv9CqhO507mozMwj5VwKKp9kKdFGAijaXrj60U",
  },
];

export default function VillagePotential() {
  return (
    <section id="potensi" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold mb-3">
              <span>Potensi & Komoditas Unggulan</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2420] tracking-tight">
              Kekayaan Alam & Kreativitas Warga
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#68706B] max-w-md mt-3 md:mt-0">
            Digerakkan oleh warga dan kelompok tani untuk mewujudkan kemandirian ekonomi desa yang berdaya saing.
          </p>
        </div>

        {/* 3-Column Bento/Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POTENTIALS.map((pot) => (
            <div
              key={pot.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#DCE2DD] card-shadow card-shadow-hover flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={pot.imageUrl}
                    alt={pot.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#141815]/80 text-[#F4F6F4] backdrop-blur-xs">
                      {pot.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-[#4CAF50] mb-1.5">
                    {pot.stats}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E2420] group-hover:text-[#4CAF50] transition-colors mb-2.5 leading-snug">
                    {pot.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68706B] leading-relaxed">
                    {pot.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#2E7D32]">
                  Produk Unggulan
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#68706B] group-hover:text-[#4CAF50] transition-colors">
                  <span>Info Kemitraan</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
