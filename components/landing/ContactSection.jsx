"use client";

import { MotionSection } from "./MotionSection";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      className="border-t border-white/10 bg-[#080d18] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Свържете се с нас
          </h2>
          <p className="mt-3 text-slate-400">
            Попълнете формата — ще отговорим с оферта или час за оглед.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mx-0">
          <ContactForm />
        </div>
      </div>
    </MotionSection>
  );
}
