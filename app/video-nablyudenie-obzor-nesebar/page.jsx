import Link from "next/link";

export const metadata = {
  title: "Видеонаблюдение Обзор и Несебър | CamSecure",
  description:
    "Видеонаблюдение за хотели, къщи за гости и апартаменти в Обзор и Несебър. Камери за вход, рецепция, паркинг и общи части с дистанционен достъп.",
};

export default function VideoNablyudenieObzorNesebarPage() {
  return (
    <main className="flex-1 bg-[#020617] text-slate-100">
      <section className="border-b border-white/10 bg-gradient-to-b from-blue-950/80 to-[#020617] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/90">
            Видеонаблюдение · Обзор и Несебър
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Видеонаблюдение за хотели и имоти по морето
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Подходящо за къщи за гости, семейни хотели, апартхотели и ваканционни
            имоти в Обзор, Несебър и околните курорти.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Изпрати запитване
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
            >
              Към началната страница
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#020617] py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Зони, които най-често покриваме
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li>· Вход, рецепция и лоби на хотела</li>
            <li>· Коридори и стълбища</li>
            <li>· Външен басейн и общи части</li>
            <li>· Паркинг и подходи към имота</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-950/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ползи за собственици, които не са постоянно на място
          </h2>
          <p className="mt-4 text-slate-300">
            Много собственици на имоти в Обзор и Несебър живеят в друг град. С
            видеонаблюдение виждате в реално време какво се случва на обекта и
            разполагате със записи при нужда.
          </p>
        </div>
      </section>
    </main>
  );
}

