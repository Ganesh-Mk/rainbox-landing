"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { title: "Discover Newsletters", href: "/newsletters" },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300); // Animation duration
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isHomePage = pathname === "/";
  const useHeroStyling = isHomePage && !isScrolled;

  const textColor = useHeroStyling ? "text-white" : "text-black";
  const borderColor = useHeroStyling ? "border-white/20" : "border-gray-200/80";
  const hoverColor = useHeroStyling
    ? "hover:text-white"
    : "hover:text-gray-700";
  const underlineColor = useHeroStyling ? "bg-white/30" : "bg-black/40";

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 p-3 m-3">
        <nav
          className={`relative flex w-full items-center justify-between rounded-full bg-white/10 backdrop-blur-lg border ${borderColor} md:grid md:grid-cols-3 transition-colors duration-300`}
        >
          <div className="flex-shrink-0 ml-0">
            <Link href="/" className="block">
              <Image
                src={"/landing/logo-lg.png"}
                alt="Rainbox Logo"
                width={100}
                height={28}
                className="h-auto w-auto transition-all duration-200"
                priority
              />
            </Link>
          </div>

          <div className="hidden items-center justify-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`${textColor} ${hoverColor} text-sm lg:text-md font-medium transition-all duration-300 hover:scale-105 relative group`}
              >
                {link.title}
                <span
                  className={`absolute -bottom-0.5 left-0 w-0 h-0.5 ${underlineColor} rounded-full transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="flex justify-end">
            <div className="hidden items-center gap-4 lg:gap-6 md:flex">
              <a
                href="https://app.rainbox.ai/auth"
                className={`text-sm lg:text-base font-medium ${textColor} ${hoverColor} transition-all duration-300 hover:scale-105`}
              >
                Sign in
              </a>
              <a
                href="https://app.rainbox.ai/auth"
                className="rounded-full bg-white px-5 mr-2 lg:px-6 py-2 lg:py-2 text-sm lg:text-sm font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:bg-gray-50"
              >
                Get Started
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="p-2 mr-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Menu
                    className={`absolute w-full h-full ${textColor} transition-all duration-300 ${
                      isOpen
                        ? "opacity-0 rotate-45 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute w-full h-full ${textColor} transition-all duration-300 ${
                      isOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-45 scale-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ease-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div className="absolute inset-0  backdrop-blur-md" />
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-4 right-4 left-4 mt-20 p-6 rounded-2xl border border-white/20 shadow-2xl  text-black transition-transform duration-300 ease-out ${
            isOpen && !isAnimating
              ? "transform translate-y-0"
              : "transform -translate-y-full"
          }`}
        >
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={toggleMenu}
                className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-xl hover:bg-white/10 transition-all duration-200 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 mt-6 pt-6 space-y-4">
            <Link
              href="https://app.rainbox.ai/auth"
              onClick={toggleMenu}
              className="block text-center w-full px-4 py-3 text-lg font-medium rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              href="https://app.rainbox.ai/auth"
              onClick={toggleMenu}
              className="block text-center w-full bg-white text-gray-900 py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-200 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
