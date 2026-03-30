"use client";

import { useState } from "react";
import { submitContactInquiry } from "@/lib/realtimeDb";

const initial = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const busy = status === "sending";

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    setStatus("sending");

    try {
      await submitContactInquiry(values);
      setStatus("success");
      setValues(initial);
    } catch (err) {
      console.error(err);
      setStatus("error");
      const code = err?.code ?? "";
      const msg = err?.message ?? "";
      const hint =
        code === "permission-denied"
          ? " Няма права за запис (Realtime Database → Rules: contactInquiries, publish)."
          : "";
      setErrorMessage(
        `Неуспешно изпращане.${hint}${code ? ` Код: ${code}.` : ""}${msg ? ` ${msg}` : ""}`,
      );
    }
  }

  function handleChange(field) {
    return (e) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (status === "success" || status === "error") setStatus("idle");
    };
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-xl backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2 sm:grid-cols-1">
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300">
            Име <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={200}
            value={values.name}
            onChange={handleChange("name")}
            disabled={busy}
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
            placeholder="Вашето име"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={320}
            value={values.email}
            onChange={handleChange("email")}
            disabled={busy}
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-300">
            Телефон <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={50}
            value={values.phone}
            onChange={handleChange("phone")}
            disabled={busy}
            className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
            placeholder="+359 ..."
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300">
            Запитване <span className="text-red-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            value={values.message}
            onChange={handleChange("message")}
            disabled={busy}
            className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
            placeholder="Опишете обекта, броя камери или как можем да помогнем..."
          />
        </div>
      </div>

      {status === "success" && (
        <p className="mt-4 rounded-lg bg-emerald-500/15 px-4 py-3 text-sm text-emerald-300">
          Благодарим ви! Получихме запитването и ще се свържем с вас скоро.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="mt-4 rounded-lg bg-red-500/15 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {busy ? "Изпращане..." : "Изпрати запитване"}
      </button>
    </form>
  );
}
