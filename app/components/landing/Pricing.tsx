// app/components/landing/05-Pricing.tsx
'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion'; // Import Variants type
import { ArrowRight, CheckCircle } from 'lucide-react';

// Helper function for conditional classnames
const cn = (...inputs: (string | undefined | null | boolean)[]) =>
  inputs.filter(Boolean).join(' ');

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  // Explicitly type the variants object to fix the TypeScript warning
  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const otherCards = [
    {
      isPopular: true,
      title: 'Lifetime Deal',
      desc: 'Get life time access to Rainbox without a subscription',
      price: '$69',
      subtext: 'pay once',
      btnText: 'Pay Now'
    },
    {
      title: 'Gift a friend',
      desc: 'Gift Rainbox to your loved ones to make their day special',
      price: '$69',
      subtext: 'pay once',
      btnText: 'Gift Now'
    },
    {
      title: 'Partner Program',
      desc: 'Gift a lifetime deal to make their day special',
      price: '30%',
      subtext: 'of every sale',
      btnText: 'Join Now'
    },
  ];

  return (
    // EVEN MORE compact vertical padding
    <section className="py-12 sm:py-16 bg-white">
      <div className="container px-4 mx-auto">
        {/* --- HEADING --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          // REDUCED bottom margin
          className="text-center max-w-3xl mx-auto mb-8"
        >
          {/* REDUCED font size */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Better reading simply at the price of a dinner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start with a{' '}
            <span className="bg-blue-100 text-blue-600 font-semibold italic px-2 py-0.5 rounded-md">
              30-Day Free Trial
            </span>
          </p>
        </motion.div>

        {/* --- PRICING CARDS --- */}
        {/* REDUCED gap and max-width for a tighter layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start max-w-4xl mx-auto">

          {/* --- LEFT CARD: SUBSCRIBE --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            // REDUCED padding
            className="border border-gray-200 rounded-xl p-5 h-full flex flex-col "
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">Subscribe</h3>
              <div className="flex items-center border border-gray-300 rounded-full p-0.5 bg-white shadow-sm">
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={cn('px-2.5 py-0.5 text-xs font-semibold rounded-full transition-colors',
                    billingCycle === 'yearly' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:bg-gray-100')}
                >
                  Yearly
                </button>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={cn('px-2.5 py-0.5 text-xs font-semibold rounded-full transition-colors',
                    billingCycle === 'monthly' ? 'bg-gray-800 text-white' : 'text-gray-500 hover:bg-gray-100')}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-end">
              <span className="text-3xl font-extrabold text-gray-900">${billingCycle === 'yearly' ? '29' : '5'}</span>
              <span className="ml-1.5 mb-0.5 text-xs text-gray-500 font-medium">
                {billingCycle === 'yearly' ? 'billed yearly' : 'per month'}
              </span>
            </div>

            <a href="#" className="mt-5 w-full flex items-center justify-center gap-1.5 bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-sm text-sm">
              Subscribe now <ArrowRight size={14} />
            </a>

            <div className="mt-5 pt-5 border-t border-gray-200">
              <p className="text-xl font-semibold text-foreground">Unrestricted access to all features</p>
              <ul className="mt-2 space-y-2">
                {['Unlimited Newsletters', 'Gmail and Outlook integration', 'AI Summaries', 'Text to Audio', 'xxx'].map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="text-blue-500 flex-shrink-0" size={16} />
                    <span className=' text-muted-foreground text-sm'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* --- RIGHT CARDS CONTAINER --- */}
          <div className="flex flex-col gap-5">
            {otherCards.map((card) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className={cn(
                  'relative border rounded-xl p-5 bg-white',
                  card.isPopular ? 'border-2 border-blue-500' : 'border-gray-200'
                )}
              >
                {card.isPopular && (
                  <div className="absolute top-0 right-5 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* CORRECTED LAYOUT: Title/Desc on left, Price/Button on right */}
                <div className="flex justify-between items-center gap-4">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-muted-foreground">{card.desc}</p>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col items-end flex-shrink-0">
                    <div className="text-right flex justify-center align-center">
                      <span className="text-2xl font-extrabold text-gray-900">{card.price}</span>
                      <span className="block text-xs text-gray-500 font-medium ml-2 mt-2">{card.subtext}</span>
                    </div>
                    <a href="#" className="mt-2 flex items-center justify-center gap-1.5 bg-gray-900 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-sm text-sm">
                      {card.btnText} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;