// app/components/landing/00-Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: "Discover Newsletters", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Sign in", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#">
            <Image src="/logo-lg.png" className='h-full w-32' alt="Rainbox Logo" width={110} height={32} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.title}
              </a>
            ))}
            <a
              href="#"
              className="bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants as any}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-card/90 backdrop-blur-lg p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <Image src="/logo-lg.png" className='h-full w-32' alt="Rainbox Logo" width={110} height={32} />
              <button onClick={toggleMenu} aria-label="Close menu">
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <a key={link.title} href={link.href} onClick={toggleMenu} className="text-foreground font-medium hover:text-primary">
                  {link.title}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 w-full text-center bg-primary text-primary-foreground font-bold px-5 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
              >
                Sign Up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;