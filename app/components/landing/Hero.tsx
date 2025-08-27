"use client";

import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import Navbar from "./Navbar";

// Enhanced Particles component with better performance and visuals
const Particles = () => {
  const particleData = useMemo(() => {
    return Array.from({ length: 25 }).map(() => {
      const size = Math.random() * 3 + 2;
      return {
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${Math.random() * 15 + 12}s`,
        animationDelay: `${Math.random() * 10}s`,
        "--driftX-start": `${(Math.random() - 0.5) * 100}px`,
        "--driftX-end": `${(Math.random() - 0.5) * 200}px`,
      };
    });
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particleData.map((style, i) => (
          <div
            key={i}
            className="particle"
            style={style as React.CSSProperties}
          />
        ))}
      </div>
      <style jsx>{`
        .particle {
          position: absolute;
          bottom: -20px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          animation-name: driftAndRise;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
          filter: blur(0.5px);
        }

        @keyframes driftAndRise {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50vh) translateX(var(--driftX-start))
              scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--driftX-end))
              scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

const Hero = () => {
  return (
    <section
      className="relative flex h-[calc(100vh-1.5rem)] m-3 flex-col overflow-visible rounded-2xl sm:rounded-3xl pb-24 sm:pb-32 lg:pb-48"
      style={{
        background:
          "linear-gradient(180deg, rgb(119, 155, 193) 0%, rgb(154, 191, 218) 58%, rgb(203, 223, 236) 100%)",
      }}
    >
      {/* White gradient fade from bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 via-white/10 to-transparent pointer-events-none"></div>

      <Particles />
      <Navbar />

      {/* Main content area */}
      <div className="container relative z-10 mx-auto flex h-full flex-grow flex-col justify-between px-4 sm:px-6 lg:px-8">
        {/* Text content - centered in available space */}
        <div className="flex flex-grow flex-col items-center justify-center md:justify-start  text-center">
          <div className="mx-auto max-w-2xl mt-20 md:mt-32">
            <h1
              className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight tracking-tight text-white"
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.10)",
              }}
            >
              Inbox for Newsletters you care about
            </h1>

            <p className="mx-auto my-4 sm:mt-6 max-w-xl lg:max-w-xl text-sm md:text-md lg:text-lg leading-relaxed tracking-normal text-white/95 font-medium">
              All your favorite newsletters, in one place - organized and
              distraction-free. De-clutter your inbox and keep up with the
              Newsletters you care about.
            </p>

            <div className=" flex flex-col items-center justify-center gap-3 sm:gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-white px-6 sm:px-7 lg:px-8 py-2  text-sm sm:text-base lg:text-lg font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-sm hover:bg-gray-50"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <p className="text-sm md:text-md lg:text-base leading-relaxed tracking-normal text-white/95 font-medium">
                30-day free trial - No Credit Card
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Screenshot - overlaps hero bottom and stays fully visible below */}
      {/* <div className="absolute inset-x-0 -bottom-24 sm:-bottom-28 lg:-bottom-40 z-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src="/landing/desktop.png"
            alt="Rainbox Desktop App Screenshot"
            className="mx-auto h-auto w-full rounded-t-lg sm:rounded-t-xl border-x border-t border-black/5 shadow-2xl shadow-black/25 transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div> */}

      {/* CSS animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
