"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { ASSET_ROOT, navigation, PHONE_DISPLAY, PHONE_HREF } from "./data";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dfd0] bg-white/95 backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Flora Çiçek ana sayfa"
          onClick={closeMenu}
          className="shrink-0"
        >
          <Image
            src={`${ASSET_ROOT}/flora-logo.png`}
            alt="Flora Çiçek"
            width={1333}
            height={1180}
            priority
            className="h-11 w-[50px] scale-[1.35] object-contain lg:h-12 lg:w-[55px]"
          />
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium leading-5 text-[#241f18]/80 transition-colors duration-[180ms] ease-out hover:text-[#a8782a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={PHONE_HREF}
            className="hidden h-9 items-center gap-2 rounded-full bg-[#a8782a] px-4 text-sm font-semibold leading-5 whitespace-nowrap text-white transition-colors duration-[180ms] ease-out hover:bg-[#7a5317] sm:flex"
          >
            <Phone aria-hidden="true" className="size-4" strokeWidth={2} />
            {PHONE_DISPLAY}
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-[#241f18] transition-colors duration-[180ms] ease-out hover:bg-[#fbf7ee] hover:text-[#7a5317] lg:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-6" strokeWidth={2} />
            ) : (
              <Menu aria-hidden="true" className="size-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobil menü"
          className="border-t border-[#e8dfd0] bg-white px-4 pt-4 pb-6 sm:px-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3.5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-sm font-medium leading-5 text-[#241f18]/80 transition-colors duration-[180ms] ease-out hover:text-[#a8782a]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={PHONE_HREF}
              onClick={closeMenu}
              className="mt-1 inline-flex h-9 w-fit items-center gap-2 rounded-full bg-[#a8782a] px-4 text-sm font-semibold leading-5 text-white transition-colors duration-[180ms] ease-out hover:bg-[#7a5317]"
            >
              <Phone aria-hidden="true" className="size-4" strokeWidth={2} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
