"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "#experiences", label: "Experiences" },
  { href: "#packages", label: "Packages" },
  { href: "#why", label: "Why Darajani" },
  { href: "#audiences", label: "For You" },
  { href: "#booking", label: "Book" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1F3D2B]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center shrink-0">
          <span className="relative flex h-12 w-12 overflow-hidden rounded-full border-2 border-white/40 shadow-md ring-2 ring-white/10">
            <Image
              src="/assets/Logo.png"
              alt="Darajani — Motel, Camping & Tour Operations"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-10">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-[#1F3D2B] md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="py-3 text-white/90 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
