// app/components/landing/05-Cta.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800">
            Inbox for Newsletters you care about
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Save and Organize Your Web Finds Seamlessly
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-brand-blue bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-blue-light transition-colors shadow-md"
            >
              Start for Free <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Cta;