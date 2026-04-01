import Link from "next/link";

export const metadata = {
  title: "Видеонаблюдение Варна | CamSecure",
  description:
    "Проектиране, доставка и монтаж на системи за видеонаблюдение във Варна и района. Камери за дом, офис, вход на блок, магазин и паркомясто с достъп от телефон.",
};

export default function VideoNablyudenieVarnaPage() {
  return (
    <main className="flex-1 bg-[#020617] text-slate-100">
      <section className="border-b border-white/10 bg-gradient-to-b from-blue-950/80 to-[#020617] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/90">
            Видеонаблюдение · Варна
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Видеонаблюдение във Варна за дом и бизнес
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Инсталираме камери за входове на блокове, къщи, магазини и офиси във Варна
            и областта. Осигуряваме безплатен оглед, ясна оферта и поддръжка.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact-varna"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Заяви безплатен оглед
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
            Какво включва видеонаблюдението във Варна
          </h2>
          <p className="mt-4 text-slate-300">
            Работим в квартали като Център, Левски, Владиславово, Аспарухово и
            околните села. Предлагаме решения за вход на блок, асансьор, паркоместа,
            офиси и складове.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">Дом и вход на блок</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>· Камери за вход, стълбище, асансьор и паркинг</li>
                <li>· Разпознаване на лица и регистрационни номера (при нужда)</li>
                <li>· Достъп от телефон за домоуправителя и собствениците</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">Бизнес и магазини</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>· Покритие на каса, витрини, складове и товарни зони</li>
                <li>· Smart известия при движение извън работно време</li>
                <li>· Архив на записите според изискванията ви</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Защо да изберете CamSecure във Варна
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300">
              <h3 className="text-base font-semibold text-white">Локален екип</h3>
              <p className="mt-2">
                Базирани сме във Варна и можем да реагираме бързо при оглед и сервиз.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300">
              <h3 className="text-base font-semibold text-white">Ясни цени</h3>
              <p className="mt-2">
                Получавате конкретна оферта според обекта, без скрити такси и дълги
                договори.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300">
              <h3 className="text-base font-semibold text-white">Поддръжка</h3>
              <p className="mt-2">
                При смяна на рутер или телефон съдействаме за настройките на системата.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-varna"
        className="bg-[#020617] py-16 sm:py-20 border-b border-white/10"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Заявете оглед за видеонаблюдение във Варна
          </h2>
          <p className="mt-3 text-slate-300">
            Оставете контактите си и ще се свържем с вас, за да уточним обекта и
            очакванията ви.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Моля, попълнете формата на началната страница или се обадете на посочения
            телефон във футъра.
          </p>
        </div>
      </section>
    </main>
  );
}

