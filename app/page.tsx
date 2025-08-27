import Hero from "@/app/components/landing/Hero";
import HeroScreenshot from "@/app/components/landing/HeroScreenshot";
import Features from "@/app/components/landing/Features";
import Pricing from "@/app/components/landing/Pricing";
import Faq from "@/app/components/landing/Faq";
import Cta from "@/app/components/landing/Cta";
import Footer from "@/app/components/landing/Footer";
import "@/app/styles/global.css";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <main className="flex flex-col gap-24 bg-background px-4 sm:px-6 lg:px-8">
        <HeroScreenshot />
        <Features />
        <Pricing />
        <Faq />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
