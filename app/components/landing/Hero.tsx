// app/components/landing/01-Hero.tsx
'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Globe, Apple, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const platforms = [
    { label: "Web", icon: <Globe size={20} />, tooltip: "Coming soon in July 2025" },
    { label: "iOS", icon: <Apple size={20} />, tooltip: "Coming soon in July 2025" },
    { label: "Android", icon: <Play size={20} />, tooltip: "Coming soon in July 2025" },
  ];

  return (
    <section className="relative w-full h-auto min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute h-screen inset-0 z-[1]">
        <Image
          src="/hero-bg.png"
          alt="Cloudy sky background"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div> {/* Optional subtle overlay */}
      </div>

      <div className="container px-4 mx-auto sm:pt-44 md:pt-32 pb-44 relative z-10">
        {/* Hero Text Content */}
        <div className="text-center max-w-5xl mx-auto mt-32 md:mt-0">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Inbox for Newsletters you care about
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-md md:text-xl text-gray-200 max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}

          >
            Keep up with the newsletters you care about
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-0 text-md md:text-xl text-gray-200 max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}

          >
            Unified, Organized, and Stress Free
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Start for Free <ArrowRight size={18} />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-2">
              <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="User avatar" width={40} height={40} />
              <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover" src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU=" alt="User avatar" width={40} height={40} />
              <Image className="inline-block h-10 w-10 rounded-full ring-2 ring-background object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDVYjOehoYPQGHUU-P_jsZPFW2P1sJX4sYkJuc1Ac-QPFlkrboKfoR3uvN9PcLsDgRFUk&usqp=CAU" alt="User avatar" width={40} height={40} />
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-sm text-gray-200">Loved by 100+ readers</p>
            </div>

          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 p-4 relative justify-center mt-16">
              {platforms.map((p, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full shadow hover:shadow-md transition">
                    {p.icon}
                    <span className="text-sm">{p.label}</span>
                  </button>

                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: -10 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute w-[100px]  bg-gray-600 text-white bg-opacity-50 text-xs px-3 bottom-10 py-1 rounded shadow"
                    >
                      {p.tooltip}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>


        {/* Product Screenshot Overlays */}
        <div className="relative mt-5 md:mt-10">
          {/* Desktop View */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, type: 'spring' }}
            className="relative max-w-5xl mx-auto mr-32"
          >
            <div className="shadow-2xl shadow-black/40 rounded-xl border border-white/10">
              <Image
                src="/desktop.png"
                alt="Rainbox Desktop App Screenshot"
                width={1200}
                height={768}
                className="rounded-xl"
              />
            </div>
          </motion.div>

          {/* Mobile View */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
            className="absolute -bottom-20 right-0 w-1/3 max-w-[280px]"
          >
            <Image
              src="/mobile.png"
              alt="Rainbox Mobile App Screenshot"
              width={400}
              height={824}
              className=" object-cover h-full w-auto shadow-2xl shadow-black/40 rounded-xl border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;