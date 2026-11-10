import React from "react";
import StickerSlapFooter from "@/components/ui/sticker-slap-footer";

export default function Footer() {
  return (
    <StickerSlapFooter
      wordmark="gendingan"
      homeHref="/"
      navLabel="beranda"
      navHref="/"
      chatHref="https://wa.me/6281234567890"
      chatLabel="whatsapp loket 3s"
      jobsLabel="layanan warga"
      jobs={[
        { title: "surat keterangan usaha (sku)", href: "/#layanan" },
        { title: "surat tidak mampu (sktm)", href: "/#layanan" },
        { title: "pengantar skck digital", href: "/#layanan" },
        { title: "surat domisili warga", href: "/#layanan" },
      ]}
      officeLabel="kantor pemerintah desa"
      address={[
        "jl. raya gendingan no. 12",
        "kecamatan kedungwaru",
        "kabupaten tulungagung 66229",
      ]}
      mapLabel="Buka Google Maps Desa Gendingan"
      mapHref="https://maps.google.com/?q=Kantor+Desa+Gendingan,+Kedungwaru,+Tulungagung"
      contactLabel="kontak resmi & ppid"
      email="pemdes@gendingan-tulungagung.desa.id"
      copiedLabel="email tersalin, siap kirim berkas!"
      note="*jam pelayanan: senin – kamis 08.00–15.00 wib • jumat 08.00–11.30 wib"
      socials={[
        { kind: "instagram", href: "https://instagram.com", label: "Instagram Resmi Desa Gendingan" },
        { kind: "youtube", href: "https://youtube.com", label: "YouTube Resmi Desa Gendingan" },
        { kind: "x", href: "https://x.com", label: "Kanal Informasi Desa Gendingan" },
      ]}
      credits={[
        { role: "pemerintah desa", name: "desa gendingan, kedungwaru" },
        { role: "kabupaten", name: "tulungagung, jawa timur" },
        { role: "lomba website desa", name: "edisi nasional 2027" },
        { role: "standar desain", name: "minimalist editorial & bento grid" },
      ]}
      paper="#F4F6F4"
      panel="#141815"
      cream="#F4F6F4"
      ink="#1E2420"
      accent="#4CAF50"
      height="85svh"
      wordmarkMaxHeight="46svh"
    />
  );
}
