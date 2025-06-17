// app/page.tsx
import Navbar from '@/app/components/landing/Navbar';
import Hero from '@/app/components/landing/Hero';
import Features from '@/app/components/landing/Features';
import Pricing from '@/app/components/landing/Pricing';
import Faq from '@/app/components/landing/Faq';
import Cta from '@/app/components/landing/Cta';
import Footer from '@/app/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <div className='px-2'>
        <Features />
        <Pricing />
        <Faq />
        <Cta />
        <Footer />
      </div>

    </main>
  );
}