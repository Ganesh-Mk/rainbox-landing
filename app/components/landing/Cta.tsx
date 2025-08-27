"use client"

import { ArrowRight } from "lucide-react"
import { useMemo } from "react"

// --- Particle Animation Component (as seen in Hero) ---
// This creates the floating, rising particle effect.
const Particles = () => {
  const particleData = useMemo(() => {
    // We can use fewer particles for a smaller section
    return Array.from({ length: 15 }).map(() => {
      const size = Math.random() * 3 + 2
      return {
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${Math.random() * 15 + 12}s`,
        animationDelay: `${Math.random() * 10}s`,
        "--driftX-start": `${(Math.random() - 0.5) * 100}px`,
        "--driftX-end": `${(Math.random() - 0.5) * 200}px`
      }
    })
  }, [])

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
          /* Adjust the animation path for a potentially shorter section */
          100% {
            transform: translateY(-100vh) translateX(var(--driftX-end))
              scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

// --- Main CTA Component ---
const Cta = () => {
  return (
    // The section now has the gradient, rounded corners, and relative positioning
    <section
      className="relative m-3 overflow-hidden rounded-2xl sm:rounded-3xl py-20 sm:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgb(119, 155, 193) 0%, rgb(154, 191, 218) 58%, rgb(203, 223, 236) 100%)"
      }}
    >
      {/* Background elements from Hero section */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 via-white/10 to-transparent pointer-events-none"></div>
      <Particles />

      {/* Container is made relative to sit on top of the background elements */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Text color changed to white with a subtle shadow for readability */}
          <h2
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.10)" }}
          >
            Inbox for Newsletters you care about
          </h2>
          {/* Muted text is now a lighter variant of white */}
          <p className="mt-4 text-lg text-white/95">
            Save and Organize Your Web Finds Seamlessly
          </p>
          <div className="mt-8 flex justify-center">
            {/* Button style updated to match the primary CTA from the Hero section */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-white px-6 sm:px-7 py-2.5 text-base font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-sm hover:bg-gray-50"
            >
              Start for Free
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
          {/* Sub-text also updated for visibility */}
          <p className="md:text-md mx-auto mt-3 max-w-2xl text-sm text-white/95">
            30-day free trial - No Credit Card
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cta