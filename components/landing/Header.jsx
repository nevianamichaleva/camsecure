"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#home", label: "Начало" },
  { href: "#products", label: "Продукти" },
  { href: "#about", label: "За нас" },
  { href: "#contact", label: "Свържи се с нас" },
  { href: "/video-nablyudenie-varna", label: "Варна" },
  { href: "/video-nablyudenie-dobrich", label: "Добрич" },
  { href: "/video-nablyudenie-obzor-nesebar", label: "Обзор / Несебър" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="font-[family-name:var(--font-outfit)] text-xl font-semibold tracking-tight text-white"
        >
          Cam<span className="text-blue-400">Secure</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основна навигация">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#products"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-400/50 hover:bg-white/5"
          >
            Виж продуктите
          </Link>
          <Link
            href="#contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
          >
            Свържи се с нас
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Меню"
        >
          <span className="sr-only">Меню</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b1220]/98 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Мобилна навигация">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg py-2 text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-lg bg-blue-600 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Свържи се с нас
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
