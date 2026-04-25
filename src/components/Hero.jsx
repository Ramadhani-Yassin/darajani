"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/255764101435";
const EMAIL = "info@darajanikilimanjaro.com";

export default function Hero() {
  return (
    <section id="hero" className="relative mb-14 flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/assets/kilimanjaro-sun-set.png"
        alt="Mount Kilimanjaro at sunset"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/66 via-[#1A1A1A]/44 to-[#1A1A1A]/72" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-4 inline-flex rounded-full bg-[#fffff0]/20 px-4 py-1.5 text-sm font-medium tracking-[0.08em] text-[#F6F1E9]"
        >
          Siha - Tanzania
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
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
            className="tone-btn inline-flex h-12 min-w-[160px] items-center justify-center px-6 font-semibold text-white shadow-lg"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-6 font-semibold text-white transition hover:bg-white hover:text-[#2b6e4c]"
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
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm"
        aria-label="Scroll to experiences"
      >
        <span className="block h-2 w-2 rounded-full bg-white" />
      </motion.a>
    </section>
  );
}
