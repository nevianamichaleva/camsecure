"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 px-8 py-16 text-center shadow-2xl shadow-blue-900/40 sm:px-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-400/20 blur-2xl" />
          <h2 className="relative font-[family-name:var(--font-outfit)] text-3xl font-bold text-white sm:text-4xl">
            Безплатна консултация за вашия обект
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-blue-100/90">
            Оставете контакти и кратко описание на обекта — обаждаме се до няколко часа в работно време, за да предложим конкретно решение.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Безплатна консултация
            </Link>
            <Link
              href="#products"
              className="inline-flex min-w-[200px] items-center justify-center rounded-xl border-2 border-white/40 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Виж продуктите
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
