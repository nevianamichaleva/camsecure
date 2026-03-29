"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/** Заменете src с ваше видео или оставете poster + overlay */
const STOCK_VIDEO =
  "https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[85vh] flex-col justify-end overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28"
    >
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80"
          aria-hidden
        >
          <source src={STOCK_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/75 to-[#0b1220]/40" />
        <div className="absolute inset-0 bg-blue-950/20" />
      </div>

      <div className="pointer-events-none absolute right-4 top-24 -z-10 hidden opacity-40 lg:block">
        <Image
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80"
          alt=""
          width={280}
          height={200}
          className="rounded-lg border border-white/10 shadow-2xl"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-300/90">
            Видеонаблюдение · Консултация · Монтаж
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Защитете дома и бизнеса си с{" "}
            <span className="text-blue-400">CamSecure</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300 sm:text-xl">
            Видео наблюдение за всяко помещение — от избор на оборудване до
            инсталация и поддръжка. Ясни решения, сигурност без компромис.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Виж продуктите
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Свържи се с нас
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
