import Link from "next/link";

export const metadata = {
  title: "Видеонаблюдение Добрич | CamSecure",
  description:
    "Видеонаблюдение в Добрич и региона – монтаж на камери за дом, село, стопански двор и малък бизнес. Достъп от телефон и дистанционен преглед на записите.",
};

export default function VideoNablyudenieDobrichPage() {
  return (
    <main className="flex-1 bg-[#020617] text-slate-100">
      <section className="border-b border-white/10 bg-gradient-to-b from-blue-950/80 to-[#020617] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/90">
            Видеонаблюдение · Добрич
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Камери и видеонаблюдение в Добрич и селата
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Подходящо за къщи, дворове, гаражи, земеделски стопанства и малки
            предприятия в Добрич и околните населени места.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Попълни форма за запитване
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
            Решения за село и стопански двор
          </h2>
          <p className="mt-4 text-slate-300">
            Често в района на Добрич видеонаблюдението се използва за защита на
            селски къщи, ферми, складове за зърно и техника.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li>· Камери за дворове, навеси и входове</li>
            <li>· Покритие на складове и халета с широк ъгъл</li>
            <li>· Smart известия при движение вечер и през нощта</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-950/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Процес на работа в Добрич
          </h2>
          <ol className="mt-6 space-y-3 text-sm text-slate-300">
            <li>1. Кратък разговор или форма за запитване</li>
            <li>2. Описание на обекта и желаното покритие</li>
            <li>3. Оферта с варианти според бюджета</li>
            <li>4. Монтаж и обучение как да ползвате приложението</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

