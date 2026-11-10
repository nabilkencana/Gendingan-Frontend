---
name: Portal Resmi Pemerintah Desa Gendingan (Tulungagung)
description: Design system bergaya Minimalist Editorial & Bento Grid untuk Lomba Website Desa Nasional 2027.
colors:
  primary: "#4CAF50"
  primary-hover: "#3D9140"
  secondary: "#E8F5E9"
  tertiary: "#2E7D32"
  background: "#FFFFFF"
  surface: "#F4F6F4"
  surface-card: "#FFFFFF"
  surface-dark: "#141815"
  text-primary: "#1E2420"
  text-secondary: "#68706B"
  text-on-dark: "#F4F6F4"
  border: "#DCE2DD"
  success: "#2E7D32"
  warning: "#D97706"
  error: "#DC2626"
typography:
  h1:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 2.75rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  h2:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
  h3:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.35
  body-md:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    borderColor: "{colors.border}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
  section-container:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.2xl}"
  card:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "0 4px 20px rgba(0, 0, 0, 0.04)"
  input-search:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
---
## Overview
Sistem desain ini dirancang khusus untuk **Website Resmi Pemerintah Desa Gendingan, Kabupaten Tulungagung** dalam rangka **Lomba Website Desa Nasional 2027**. Menggabungkan kewibawaan editorial (*serif headings*) dengan kemudahan akses layanan publik modern (*bento grid*, *pill-shaped controls*, dan *tonal layering*), antarmuka ini mematahkan kesan kaku website instansi pemerintah tradisional dan menggantinya dengan pengalaman warga yang hangat, transparan, serta inklusif.
## Colors
- **Primary (`#4CAF50`)**: Digunakan secara terukur pada CTA utama ("Layanan Desa", "Buat Laporan Pengaduan", "Detail Kegiatan"), garis bawah menu aktif, serta aksen ikon.
- **Secondary Tint (`#E8F5E9`)**: Digunakan sebagai latar belakang wadah ikon statistik kependudukan dan kotak angka pada komponen hitung mundur agenda desa.
- **Tonal Surface (`#F4F6F4` & `#FFFFFF`)**: Kedalaman halaman dibangun tanpa garis pembatas yang kaku. Setiap seksi dibungkus dalam permukaan `#F4F6F4` ber-radius `24px`, sementara kartu konten di dalamnya menggunakan `#FFFFFF` murni.
- **Footer Surface (`#141815`)**: Memberikan penutup visual yang tegas dan kontras untuk informasi kontak resmi, jam pelayanan, serta tautan cepat PPID/Transparansi.
## Typography
- **Editorial Serif (`Playfair Display`)**: Digunakan khusus untuk `H1`, `H2`, dan `H3`. Memberikan nuansa kultural, berwibawa, dan humanis.
- **Clean Sans (`Plus Jakarta Sans`)**: Digunakan untuk seluruh teks paragraf, navigasi, tombol, label kategori, tabel data, pencarian (`Fuse.js`), dan grafik (`Recharts`). Wajib mengaktifkan `tabular-nums` pada angka statistik penduduk, APBDes, dan countdown timer.
## Spacing & Layout
- Mengikuti **8px grid system** dengan lebar kontainer utama maksimum `1200px`.
- Memadukan tata letak **12-column Bento Grid** (untuk ringkasan profil + peta `react-leaflet` serta dokumentasi galeri) dan **3-column Card Grid** (untuk Berita Desa dan Potensi Desa).
## Shapes
- **Pillowy Sections (`24px`)**: Membungkus kelompok konten per seksi agar terlihat rapi dan modular.
- **Rounded Cards (`16px`)**: Standar sudut untuk seluruh kartu berita, potensi, agenda, dan peta.
- **Full Pill (`9999px`)**: Diterapkan secara konsisten pada seluruh tombol aksi, kolom pencarian layanan, dan lencana kategori (*badges*).
## Elevation & Depth
- Mengandalkan **Tonal Elevation** (kartu putih `#FFFFFF` di atas kanvas seksi `#F4F6F4`) yang diperhalus dengan `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04)`.
## Components
- **Navbar + Quick Search**: Menyediakan akses langsung ke 8 menu utama dengan dropdown pada "Profil" serta pemicu pencarian cepat berbasis `Fuse.js`.
- **Interactive Map Card (`react-leaflet`)**: Kartu vertikal di samping ringkasan profil desa yang menampilkan batas wilayah Desa Gendingan dan titik fasilitas umum.
- **Agenda Card with Countdown**: Kartu horizontal yang menyandingkan informasi kegiatan warga/musyawarah desa dengan penghitung waktu mundur (*Hari, Jam, Menit*).
- **Data & Chart Containers (`Recharts` ready)**: Untuk halaman dalam berikutnya (Data & Statistik serta Transparansi), kartu putih `#FFFFFF` ber-radius `16px` akan menjadi kanvas grafik dengan palet turunan hijau (`#2E7D32`, `#4CAF50`, `#81C784`, `#C8E6C9`).
## Rules to Never Break
- **Jangan pernah** menggunakan teks *placeholder* wisata asing atau *lorem ipsum*; selalu gunakan terminologi pemerintahan dan kemasyarakatan Desa Gendingan, Kabupaten Tulungagung.
- **Jangan pernah** menambahkan formulir langganan *newsletter* di area footer.
- **Jangan pernah** mencampur-adukkan radius tombol; semua tombol aksi utama dan sekunder wajib menggunakan *full pill shape* (`9999px`).
- **Selalu** pastikan rasio kontras teks memenuhi minimal standar WCAG AA (4.5:1) untuk menjamin keterbacaan bagi warga dari seluruh kelompok usia.