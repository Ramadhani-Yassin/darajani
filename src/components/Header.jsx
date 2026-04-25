"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "#hero", label: "Home" },
  { href: "#experiences", label: "Experiences" },
  { href: "#packages", label: "Packages" },
  { href: "#gallery", label: "Gallery" },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1f543e]/95 backdrop-blur-md shadow-md" : "bg-transparent"
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
              className={`text-sm font-medium transition ${
                scrolled ? "text-white/90 hover:text-white" : "text-white/90 hover:text-[#b9e7cf]"
              }`}
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
            className={`h-0.5 w-6 transition-all ${
              "bg-white"
            } ${
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
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#0d1f17]/50 backdrop-blur-[2px] md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 330, damping: 34 }}
              className="mobile-drawer fixed inset-y-0 left-0 z-50 w-[88vw] max-w-sm md:hidden"
            >
              <div className="mobile-drawer-top">
                <span className="mobile-drawer-brand">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="mobile-drawer-close"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>
              </div>
              <nav className="mobile-drawer-body">
                {NAV.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="mobile-drawer-link"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
