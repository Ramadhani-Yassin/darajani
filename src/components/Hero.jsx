"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/255000000000";
const EMAIL = "info@darajani.com";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/assets/kilimanjaro-sun-set.png"
        alt="Mount Kilimanjaro at sunset"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/50 to-[#1A1A1A]/80"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#F6F1E9]/80"
        >
          Sanya Juu, Siha — Kilimanjaro Region
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Your Gateway to Mount Kilimanjaro, Culture & Community
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90"
        >
          Start closer to the mountain — treks, accommodation, culture and community programs
          near Kilimanjaro International Airport.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-[#25d366] px-6 font-semibold text-white shadow-lg transition hover:bg-[#20bd5a]"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg border-2 border-white/80 bg-white/10 px-6 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Email
          </a>
        </motion.div>
      </div>
      <motion.a
        href="#experiences"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm"
        aria-label="Scroll to experiences"
      >
        <span className="block h-2 w-2 rounded-full bg-white" />
      </motion.a>
    </section>
  );
}
