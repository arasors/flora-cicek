"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import {
  ADDRESS,
  ASSET_ROOT,
  navigation,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-[70] border-b backdrop-blur-xl transition-colors duration-300 ${
          isMenuOpen
            ? "border-white/10 bg-[#171008]"
            : "border-[#21180d]/8 bg-[#fdfbf7]/90"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:h-[82px] lg:px-10">
          <Link
            href="/"
            aria-label="Flora Çiçek ana sayfa"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex size-10 items-center justify-center lg:size-11">
              <Image
                src={`${ASSET_ROOT}/${
                  isMenuOpen
                    ? "flora-icon-transparent.png"
                    : "flora-icon-black-transparent.png"
                }`}
                alt=""
                width={512}
                height={512}
                priority
                className="size-full object-contain transition-opacity duration-300"
              />
            </span>
            <span className="leading-none">
              <span className={`block text-sm font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${isMenuOpen ? "text-white" : "text-[#21180d]"}`}>
                Flora Çiçek
              </span>
              <span className="mt-1.5 hidden text-[9px] font-semibold tracking-[0.19em] text-[#a8782a] uppercase sm:block">
                İstanbul • Toptan
              </span>
            </span>
          </Link>

          <nav aria-label="Ana menü" className="hidden h-full items-center gap-7 lg:flex xl:gap-9">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="group relative flex h-full items-center gap-2 text-[13px] font-semibold text-[#241f18]/65 transition-colors duration-300 hover:text-[#21180d]"
              >
                <span className="text-[9px] tracking-[0.12em] text-[#a8782a]/65">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
                <span
                  className={`absolute right-0 bottom-0 left-0 h-[2px] origin-left bg-[#a8782a] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 text-xs font-semibold text-[#241f18]/65 transition-colors duration-300 hover:text-[#a8782a] xl:flex"
            >
              <Phone aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/iletisim"
              className="group hidden min-h-11 items-center gap-3 rounded-full bg-[#21180d] px-5 text-xs font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#a8782a] sm:flex"
            >
              Teklif iste
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`relative z-[80] flex size-11 items-center justify-center rounded-full border transition-[color,background-color,border-color] duration-300 lg:hidden ${
                isMenuOpen
                  ? "border-white/20 bg-white text-[#21180d]"
                  : "border-[#21180d]/12 bg-transparent text-[#21180d] hover:bg-[#21180d] hover:text-white"
              }`}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
              ) : (
                <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="flora-mobile-menu fixed inset-0 z-[60] overflow-y-auto bg-[#171008] text-white lg:hidden"
        >
          <div aria-hidden="true" className="absolute -top-32 -right-40 size-[34rem] rounded-full border border-[#dfc38d]/10" />
          <div aria-hidden="true" className="absolute -top-12 -right-20 size-[22rem] rounded-full border border-[#dfc38d]/8" />
          <div className="mx-auto flex min-h-full max-w-3xl flex-col px-6 pt-28 pb-8 sm:px-10 sm:pt-32">
            <p className="flora-mobile-menu-item text-[10px] font-bold tracking-[0.25em] text-[#dfc38d] uppercase">
              Menü / Flora Çiçek
            </p>

            <nav aria-label="Mobil menü" className="mt-9 border-t border-white/12">
              {navigation.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flora-mobile-menu-item group flex items-center justify-between border-b border-white/12 py-5 sm:py-6"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#dfc38d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-[clamp(2rem,10vw,4.5rem)] leading-none font-medium tracking-[-0.055em] transition-colors duration-300 ${isActive(item.href) ? "text-[#dfc38d]" : "text-white group-hover:text-[#dfc38d]"}`}>
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 text-white/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#dfc38d]"
                  />
                </Link>
              ))}
            </nav>

            <div className="flora-mobile-menu-item mt-auto grid gap-7 pt-12 sm:grid-cols-2">
              <div>
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Merkez
                </span>
                <p className="mt-3 flex max-w-sm gap-3 text-xs leading-5 text-white/60">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#dfc38d]" />
                  {ADDRESS}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Doğrudan iletişim
                </span>
                <a
                  href={PHONE_HREF}
                  className="mt-3 flex items-center gap-3 text-lg font-semibold text-[#dfc38d] sm:justify-end"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
