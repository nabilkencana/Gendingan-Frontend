"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, X, Menu, Phone, ExternalLink } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import QuickSearchModal from "./QuickSearchModal";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleSubmenu = (name: string) => {
    setActiveMobileSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              alt="Lambang Kabupaten Tulungagung - Desa Gendingan"
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              src="/logo-tulungagung.png"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-headline-md text-headline-md text-text-primary tracking-tight group-hover:text-primary transition-colors duration-200">
                Desa Gendingan
              </span>
              <span className="font-body-sm text-body-sm text-text-secondary tracking-normal">
                Kab. Tulungagung
              </span>
            </div>
          </Link>

          {/* Desktop Radix NavigationMenu (Silky Smooth Tab & Viewport Animation) */}
          <nav className="hidden xl:flex items-center justify-center">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-1">
                {/* 1. Beranda */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="/"
                      className="font-medium text-text-primary hover:text-primary transition-colors duration-200"
                    >
                      Beranda
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 2. Profil Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-text-primary hover:text-primary">
                    Profil
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[380px] gap-1.5 p-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/profil#sejarah"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">Sejarah Desa</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Asal-usul babat alas, tradisi gamelan gending, dan kronik perkembangan Desa Gendingan.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/profil#visi-misi"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">Visi &amp; Misi</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Arah kebijakan pembangunan desa mandiri, transparan, dan inklusif 2025–2030.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/profil#demografi"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">Wilayah &amp; Demografi</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Batas administratif wilayah 2,11 km², pembagian dusun, dan peta desa.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 3. Pemerintahan Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-text-primary hover:text-primary">
                    Pemerintahan
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[360px] gap-1.5 p-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/pemerintahan"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">Struktur SOTK</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Bagan susunan organisasi dan tata kerja pemerintahan desa resmi.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/pemerintahan"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">Perangkat Desa</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Profil Kepala Desa, Sekretaris Desa, Kepala Seksi, dan Kepala Urusan.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/pemerintahan"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">BPD &amp; Lembaga Desa</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Badan Permusyawaratan Desa, LPM, dan perwakilan rukun warga.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 4. Data & Transparansi Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-text-primary hover:text-primary">
                    Data &amp; Transparansi
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[360px] gap-1.5 p-3">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/data-statistik"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">Statistik Penduduk</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Data agregat riil BPS 2024: 4.695 jiwa, 1.562 KK, pendidikan, dan profesi.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/data-statistik#apbdes"
                            className="block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-surface hover:text-primary"
                          >
                            <div className="text-sm font-semibold text-text-primary">APBDes 2026/2027</div>
                            <p className="line-clamp-2 text-xs leading-snug text-text-secondary mt-1">
                              Transparansi pendapatan desa, belanja fisik, DD, ADD, dan pembiayaan.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 5. Layanan */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="/#layanan"
                      className="font-medium text-text-primary hover:text-primary transition-colors duration-200"
                    >
                      Layanan
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 6. Potensi */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="/#potensi"
                      className="font-medium text-text-primary hover:text-primary transition-colors duration-200"
                    >
                      Potensi
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 7. Berita */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="/#berita"
                      className="font-medium text-text-primary hover:text-primary transition-colors duration-200"
                    >
                      Berita
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 8. Kontak */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link
                      href="/#kontak"
                      className="font-medium text-text-primary hover:text-primary transition-colors duration-200"
                    >
                      Kontak
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Action: Search Box & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="relative hidden sm:flex items-center cursor-pointer group"
            >
              <input
                readOnly
                type="text"
                placeholder="Cari layanan/info..."
                className="w-40 md:w-48 lg:w-56 bg-surface border border-border rounded-full py-2 pl-4 pr-10 font-body-sm text-body-sm text-text-primary placeholder:text-text-secondary focus:outline-none cursor-pointer group-hover:border-primary transition-colors duration-200"
              />
              <button
                type="button"
                aria-label="Tombol cari"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary group-hover:text-primary transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden p-2 rounded-full hover:bg-surface text-text-primary transition-colors"
              aria-label="Cari info desa"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Buka menu navigasi mobile"
              className="xl:hidden w-10 h-10 rounded-full bg-surface-card border border-border flex items-center justify-center text-text-primary cursor-pointer hover:bg-surface active:scale-95 transition-all shadow-xs"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Upgraded Mobile Slide-Over Drawer */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 h-[100dvh] w-screen z-50 bg-surface-dark/60 backdrop-blur-sm xl:hidden animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div
              className="fixed inset-y-0 right-0 w-80 max-w-[88vw] h-[100dvh] bg-surface-card shadow-2xl flex flex-col justify-between border-l border-border animate-slideLeft"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-border bg-surface/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/logo-tulungagung.png"
                      alt="Lambang Kabupaten Tulungagung - Desa Gendingan"
                      className="h-9 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-text-primary font-bold">
                        Desa Gendingan
                      </span>
                      <span className="text-[11px] text-text-secondary">
                        Kecamatan Kedungwaru
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface active:scale-95 transition-all"
                    aria-label="Tutup menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Search Input Trigger */}
                <div
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="mt-4 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-surface-card border border-border text-xs text-text-secondary cursor-pointer hover:border-primary transition-colors shadow-xs"
                >
                  <Search className="w-4 h-4 text-primary" />
                  <span>Cari surat, APBDes, berita...</span>
                </div>
              </div>

              {/* Drawer Navigation Links with Accordion Submenus */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 divide-y divide-border/40">
                <div className="space-y-1 pb-2">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface hover:text-primary transition-colors"
                  >
                    <span>Beranda</span>
                  </Link>

                  {/* Profil Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu("profil")}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface transition-colors"
                    >
                      <span>Profil Desa</span>
                      <ChevronDown
                        className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                          activeMobileSubmenu === "profil" ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {activeMobileSubmenu === "profil" && (
                      <div className="pl-4 pr-1 py-1 space-y-1 animate-fadeIn">
                        <Link
                          href="/profil#sejarah"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • Sejarah Desa Gendingan
                        </Link>
                        <Link
                          href="/profil#visi-misi"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • Visi &amp; Misi 2025–2030
                        </Link>
                        <Link
                          href="/profil#demografi"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • Wilayah &amp; Demografi Dusun
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Pemerintahan Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu("pemerintahan")}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface transition-colors"
                    >
                      <span>Pemerintahan</span>
                      <ChevronDown
                        className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                          activeMobileSubmenu === "pemerintahan" ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {activeMobileSubmenu === "pemerintahan" && (
                      <div className="pl-4 pr-1 py-1 space-y-1 animate-fadeIn">
                        <Link
                          href="/pemerintahan"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • Struktur Organisasi (SOTK)
                        </Link>
                        <Link
                          href="/pemerintahan"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • Jajaran Perangkat Desa
                        </Link>
                        <Link
                          href="/pemerintahan"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • BPD &amp; Lembaga Kemasyarakatan
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Data & Transparansi Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu("transparansi")}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface transition-colors"
                    >
                      <span>Data &amp; Transparansi</span>
                      <ChevronDown
                        className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                          activeMobileSubmenu === "transparansi" ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {activeMobileSubmenu === "transparansi" && (
                      <div className="pl-4 pr-1 py-1 space-y-1 animate-fadeIn">
                        <Link
                          href="/data-statistik"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • Data Kependudukan BPS 2024
                        </Link>
                        <Link
                          href="/data-statistik#apbdes"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-primary hover:bg-surface transition-colors"
                        >
                          • Rincian APBDes 2026/2027
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <Link
                    href="/#layanan"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface hover:text-primary transition-colors"
                  >
                    <span>Layanan Mandiri</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary text-primary">
                      Online
                    </span>
                  </Link>
                  <Link
                    href="/#potensi"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface hover:text-primary transition-colors"
                  >
                    <span>Potensi Desa</span>
                  </Link>
                  <Link
                    href="/#berita"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface hover:text-primary transition-colors"
                  >
                    <span>Berita Desa</span>
                  </Link>
                  <Link
                    href="/#kontak"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm text-text-primary hover:bg-surface hover:text-primary transition-colors"
                  >
                    <span>Kontak &amp; Kantor</span>
                  </Link>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-4 border-t border-border bg-surface/50 space-y-2.5">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Admin%20Desa%20Gendingan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-hover active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Loket 3S</span>
                </a>
                <div className="text-[11px] text-text-secondary text-center">
                  Jam Pelayanan: Senin–Jumat 08.00–15.00 WIB
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Modal Component */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
