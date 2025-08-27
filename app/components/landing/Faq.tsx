// app/components/landing/04-Faq.tsx
"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X } from "lucide-react"
import { faqItems } from "../../data/mockData"

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="  bg-brand-gray-100">
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto max-w-5xl text-center">
          <h2 className="text-brand-gray-800 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div className="mx-auto mt-12 max-w-5xl space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-brand-gray-200 overflow-hidden rounded-2xl border bg-white"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex w-full items-center justify-between p-6 text-left text-lg font-semibold"
              >
                <span>{item.question}</span>
                <div className="transition-transform duration-300">
                  {openIndex === index ? <X size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Faq
