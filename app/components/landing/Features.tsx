// app/components/landing/Features.tsx
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { featureCards } from "@/app/data/mockData";

const Features = () => {
  return (
    <section className="py-12 md:py-16 md:px-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for Power Readers in mind
          </h2>
          {/* REDUCED: Margin-top on paragraph */}
          <p className="mt-3 text-lg text-muted-foreground">
            Everything you need to conquer your newsletter backlog and retain what matters.
          </p>
        </motion.div>

        {/* REDUCED: Margin-top and gap */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Organize like a Pro */}
          <motion.div
            className="bg-card p-5 rounded-xl border border-border lg:row-span-2 flex flex-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-foreground">Organize like a Pro</h3>
            {/* REDUCED: Spacing */}
            <p className="mt-1.5 text-muted-foreground">Effortless organize your subscriptions unmatched simplicity.</p>
            <div className="mt-3 flex-grow">
              <Image src="/mock-bg.png" alt="Organize Feature" width={400} height={500} className="w-full h-full object-cover rounded-lg" />
            </div>
          </motion.div>

          {/* All your newsletter in one place */}
          <motion.div
            className="bg-card p-5 rounded-xl border border-border lg:col-span-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground">All your newsletter in one place</h3>
            <p className="mt-1.5 text-muted-foreground">Declutter your inbox - bringing your newsletters from Gmail and Outlook</p>
            {/* REDUCED: Height and margin */}
            <div className="mt-3 bg-background rounded-lg h-36 flex items-center justify-center">
              <Image src="/mock-bg.png" alt="All in one place" width={500} height={200} className="w-full h-full object-cover rounded-lg" />
            </div>
          </motion.div>

          {/* AI Summaries & Listen on the Go */}
          {[
            { title: "AI Summaries", desc: "Skim faster with AI-powered summaries.", delay: 0.3, alt: "AI Summaries" },
            { title: "Listen On The Go", desc: "Turn any newsletter into a podcast-style experience.", delay: 0.4, alt: "Listen on the Go" }
          ].map(item => (
            <motion.div
              key={item.title}
              className="bg-card p-5 rounded-xl border border-border"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-muted-foreground">{item.desc}</p>
              {/* REDUCED: Height and margin */}
              <div className="mt-3 bg-background rounded-lg h-28 flex items-center justify-center">
                <Image src="/mock-bg.png" alt={item.alt} width={200} height={150} className="w-full h-full object-cover rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* REDUCED: Margin-top and gap */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              // REDUCED: Padding
              className="bg-card p-5 rounded-xl border border-border text-center"
            >
              <div className="inline-block bg-primary/10 p-3 rounded-lg">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              {/* REDUCED: Spacing */}
              <h3 className="mt-3 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1.5 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;