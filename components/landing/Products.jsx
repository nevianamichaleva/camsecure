"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "./MotionSection";

const products = [
  {
    name: "Стартов пакет „Дом“",
    desc: "2–4 камери, запис на NVR, мобилен достъп — идеално за апартамент или къща.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    alt: "Комплект камери за дом",
  },
  {
    name: "Бизнес · Офис / магазин",
    desc: "Покритие на зали, каса и склад — интеграция и разширяване при растеж.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Видеонаблюдение в офис",
  },
  {
    name: "Персонално решение",
    desc: "Оглед, проект и монтаж според обекта — консултация без ангажимент.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    alt: "Персонална оферта камери",
  },
];

export function Products() {
  return (
    <MotionSection id="products" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Продукти и решения
            </h2>
            <p className="mt-3 text-slate-400">
              Пакети и индивидуални проекти — подбираме оборудване според бюджета и
              риска.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Поръчай демонстрация
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-1 text-xs text-slate-300">
                  {p.alt}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-white">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
