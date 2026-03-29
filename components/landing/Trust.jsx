"use client";

import { MotionSection } from "./MotionSection";

const partners = ["Partner A", "Partner B", "Partner C", "Partner D"];

const testimonials = [
  {
    quote:
      "Монтажът мина за ден, приложението е интуитивно. Препоръчвам за офиса ни.",
    author: "Иван П.",
    role: "Малък бизнес, София",
  },
  {
    quote:
      "Получихме ясна оферта и камерите покриват двора и входа — спим спокойно.",
    author: "Мария С.",
    role: "Частен дом",
  },
  {
    quote:
      "Поддръжката отговори бързо при смяна на рутера. Професионално отношение.",
    author: "Георги Д.",
    role: "Магазин",
  },
];

export function Trust() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Доверие и партньори
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          Работим с водещи доставчици; логата по-долу са placeholder — заменете с
          ваши брандове.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-14 min-w-[120px] items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 text-sm font-medium text-slate-500"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
            >
              <p className="text-sm leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 border-t border-white/10 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-white">{t.author}</span>
                  <span className="mt-1 block text-xs text-slate-500">{t.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
