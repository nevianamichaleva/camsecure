"use client";

import { MotionSection } from "./MotionSection";

export function About() {
  return (
    <MotionSection id="about" className="border-y border-white/10 bg-slate-950/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              За нас
            </h2>
            <p className="mt-4 text-slate-400">
              CamSecure обединява консултация, доставка и монтаж на системи за
              видеонаблюдение. Работим с проверени марки и ясни договори — без
              скрити такси и с поддръжка, когато имате нужда.
            </p>
            <ul className="mt-8 space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Безплатен оглед и оферта за обекти в района на обслужване
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Обучение как да ползвате приложението и записите
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Съдействие при застрахователни и правни казуси със записи
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/80">
            <div className="relative pt-[56.25%]">
              {/* <iframe
                className="absolute inset-0 h-full w-full rounded-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Видео презентация на CamSecure"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              /> */}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
