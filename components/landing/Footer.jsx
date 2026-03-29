import Link from "next/link";

const social = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#060a12] py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-white">
              Cam<span className="text-blue-400">Secure</span>
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Видеонаблюдение, консултация и монтаж за дом и бизнес.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Контакт
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href="tel:+359888000000" className="hover:text-white">
                  +359 888 000 000
                </a>
              </li>
              <li>
                <a href="mailto:hello@camsecure.bg" className="hover:text-white">
                  hello@camsecure.bg
                </a>
              </li>
              <li className="text-slate-500">Варна, България</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-slate-300 hover:text-white">
                  Начало
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-300 hover:text-white">
                  Продукти
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-white">
                  За нас
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Социални мрежи
            </h3>
            <ul className="mt-4 flex flex-wrap gap-4">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CamSecure. Всички права запазени.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-slate-400">
              Политика за поверителност
            </Link>
            <Link href="#" className="hover:text-slate-400">
              Общи условия
            </Link>
            <Link href="#" className="hover:text-slate-400">
              Бисквитки
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
