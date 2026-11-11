"use client";

import React from "react";
import Timeline, { TimelineItem } from "@/components/ui/timeline-01-utils/timeline";
import { Badge } from "@/components/ui/badge";

const timelineData: TimelineItem[] = [
  {
    title: "Toponimi Gending & Cikal Bakal Reog Kendang",
    description:
      "Pemukiman empu gamelan tabuhan gending Jawa yang melayani prosesi adat Kadipaten Ngrowo (Tulungagung), melahirkan tradisi adiluhung Tari Reog Kendang Tulungagung yang dilestarikan warga hingga kini.",
    date: "Era Kadipaten Ngrowo",
    image: "/images/gendingan/reog-kendang.jpg",
  },
  {
    title: "Pendidikan MI Al-Ma'arif & Irigasi Ngrowo",
    description:
      "Pendirian lembaga pendidikan tertua MI Al-Ma'arif pada 10 Februari 1963 di Dusun Khasananom (RT 02 / RW 02) serta modernisasi saluran irigasi teknis sawah dari limpahan lembah Sungai Ngrowo.",
    date: "1960 – 1980",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV1XepRpsOaIQ7wAFNtli2zdA_l0h95Vb4B342MwDBPSUJihrRgfN2E43mOd_P7qhTeVZwp_rHqzdW_sJLrGoY1iwPRUtUR1xIUBvEhjfcvgiJ7SE_CVvQrIMAoxZS5Jtvat3j2MEAR8Ei9XV1NhDNJ4OatsEdnSlYRktffL4PKlE4ZNq7wnhiYbYOJ0Qh5Oo3i1rqxkDy8hRPdymhQukop_vJUdMejQqFhDkLj7E",
  },
  {
    title: "Sentra Budidaya Gurame & Penguatan UMKM",
    description:
      "Pengembangan klaster perikanan air tawar budidaya pembesaran ikan gurame terkemuka di Kedungwaru, pembangunan jalan usaha tani beton gotong royong, serta penguatan industri olahan makanan ringan warga.",
    date: "1981 – 2020",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOtRa4nqrGJLPqrEW1OQ33Ry29IavYB-kWFTm29eOIxyTFH9GXwvHeVS819wYsSwgBLFFaUJfR5QkdtvLxMwFTyZeSfrCjfevvB_rC-ZivuF5kgpBFiRCS-RGZA_uINJMXV_vI7gehDuHDeLNHnWW-gcx04AZL25ExUF-DX45A911ADAFh60bPEYvFq1kwk4fgB87YAik4ABU5MenzItPJbuvi8d6tvLfCY63JaLU",
  },
  {
    title: "Desa Mandiri & Transformasi Digital Terbuka",
    description:
      "Pencapaian status Desa Mandiri (IDM), penerapan Sistem Informasi Desa (SID) digital terpadu, publikasi real-time APBDes daring, dan loket pelayanan gratis Rp 0 bagi 4.695 jiwa warga.",
    date: "2021 – Sekarang",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCElV9W7hjyUOO7TjOGfeACAkUyF1m6Wcgjyq1VKwQFK8LhZuGqVH8ggSw6cOIuxyzsGDnOQAiWTjbZVMGlrmLljU8TFZlNdfVxHE7bemuUqviaNXP8bE0jRmpy3GYdpXZhEGq0speiCSHMnFvK4ImsUnxl31I-uD-3P4XN4-9d7S59YRzlw-MLC5BoVYW8d_AdhvvFRf9qOTP9ZRINoHi1QYW80YIr-DnMkWE0Jl4",
  },
];

const TimelineBlock01 = () => {
  return (
    <section className="overflow-hidden mt-8">
      <div className="w-full bg-surface-card rounded-3xl border border-border overflow-hidden shadow-sm">
        {/* Header Block with border-b */}
        <div className="border-b border-border px-6 py-10 md:px-12 md:py-16">
          <div className="max-w-2xl space-y-4">
            <Badge
              variant="outline"
              className="rounded-full px-3.5 py-1 text-xs font-semibold text-primary border-primary/30 bg-secondary-container"
            >
              Timeline • Jejak Sejarah
            </Badge>
            <div className="space-y-3">
              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                A Story Of Growth
              </h2>
              <p className="font-body-md text-base sm:text-lg text-text-secondary leading-relaxed">
                Perjalanan panjang Desa Gendingan mencerminkan dedikasi warga, kearifan seni gending leluhur, serta semangat gotong royong dalam mewujudkan kemandirian dan transparansi publik.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll-Animated Alternating Timeline with Center Progress Fill Line */}
        <div>
          <Timeline items={timelineData} />
        </div>

        {/* Bottom Framing Line */}
        <div className="border-t border-border h-12 md:h-20 bg-surface/30" />
      </div>
    </section>
  );
};

export default TimelineBlock01;
