import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Products } from "@/components/landing/Products";
import { About } from "@/components/landing/About";
import { Trust } from "@/components/landing/Trust";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Products />
        <About />
        <Trust />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
