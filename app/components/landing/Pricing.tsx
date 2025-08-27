"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

const cn = (...inputs: (string | undefined | null | boolean)[]) =>
  inputs.filter(Boolean).join(" ")

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">(
    "yearly"
  )

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const otherCards = [
    {
      isPopular: true,
      title: "Lifetime Deal",
      desc: "Get life time access to Rainbox without a subscription",
      price: "$69",
      subtext: "pay once",
      btnText: "Pay Now"
    },
    {
      title: "Gift a friend",
      desc: "Gift Rainbox to your loved ones to make their day special",
      price: "$69",
      subtext: "pay once",
      btnText: "Gift Now"
    },
    {
      title: "Partner Program",
      desc: "Gift a lifetime deal to make their day special",
      price: "30%",
      subtext: "of every sale",
      btnText: "Join Now"
    }
  ]

  return (
    // EVEN MORE compact vertical padding
    <section className=" bg-white">
      <div className="container mx-auto px-4">
        {/* --- HEADING --- */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          {/* REDUCED font size */}
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Better reading simply at the price of a dinner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start with a{" "}
            <span className="rounded-2xl bg-blue-100 px-2 py-0.5 font-semibold italic text-blue-600">
              30-Day Free Trial
            </span>
          </p>
        </div>

        {/* --- PRICING CARDS --- */}
        {/* REDUCED gap and max-width for a tighter layout */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-5 lg:grid-cols-2">
          {/* --- LEFT CARD: SUBSCRIBE --- */}
          <div className="flex h-full flex-col rounded-2xl border border-gray-200 p-5 ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Subscribe</h3>
              <div className="flex items-center rounded-full border border-gray-300 bg-white p-0.5 shadow-sm">
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={cn(
                    "px-2.5 py-0.5 text-xs font-semibold rounded-full transition-colors",
                    billingCycle === "yearly"
                      ? "bg-gray-800 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  )}
                >
                  Yearly
                </button>
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={cn(
                    "px-2.5 py-0.5 text-xs font-semibold rounded-full transition-colors",
                    billingCycle === "monthly"
                      ? "bg-gray-800 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  )}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-end">
              <span className="text-3xl font-extrabold text-gray-900">
                ${billingCycle === "yearly" ? "29" : "5"}
              </span>
              <span className="mb-0.5 ml-1.5 text-xs font-medium text-gray-500">
                {billingCycle === "yearly" ? "billed yearly" : "per month"}
              </span>
            </div>

            <a
              href="#"
              className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-2xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700"
            >
              Subscribe now <ArrowRight size={14} />
            </a>

            <div className="mt-5 border-t border-gray-200 pt-5">
              <p className="text-xl font-semibold text-foreground">
                Unrestricted access to all features
              </p>
              <ul className="mt-2 space-y-2">
                {[
                  "Unlimited Newsletters",
                  "Gmail and Outlook integration",
                  "AI Summaries",
                  "Text to Audio",
                  "Highlight and bookmarks"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 ">
                    <CheckCircle className="shrink-0 text-blue-500" size={16} />
                    <span className=" text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- RIGHT CARDS CONTAINER --- */}
          <div className="flex flex-col gap-5">
            {otherCards.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "relative border rounded-2xl p-5 bg-white",
                  card.isPopular
                    ? "border-2 border-blue-500"
                    : "border-gray-200"
                )}
              >
                {card.isPopular && (
                  <div className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}

                {/* CORRECTED LAYOUT: Title/Desc on left, Price/Button on right */}
                <div className="flex items-center justify-between gap-4">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{card.desc}</p>
                  </div>

                  {/* Right Column */}
                  <div className="flex shrink-0 flex-col items-end">
                    <div className="align-center flex justify-center text-right">
                      <span className="text-2xl font-extrabold text-gray-900">
                        {card.price}
                      </span>
                      <span className="ml-2 mt-2 block text-xs font-medium text-gray-500">
                        {card.subtext}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700"
                    >
                      {card.btnText} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
