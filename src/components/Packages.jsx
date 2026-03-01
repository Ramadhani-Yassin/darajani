"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PACKAGES = [
  { name: "Lemosho Route", duration: "7–8 days", highlight: true },
  { name: "Acclimatization & Training", duration: "2–4 days" },
  { name: "Airport Stopover", duration: "24–48 hours" },
  { name: "Chagga Cultural & Coffee", duration: "1–2 days" },
  { name: "Rural Siha Day Hike", duration: "1 day" },
  { name: "Volunteer & Community Immersion", duration: "Weekly" },
];

export default function Packages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="packages" className="bg-[#F6F1E9] py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A5230]"
        >
          Choose your journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mt-2 font-serif text-3xl font-medium text-[#1F3D2B] sm:text-4xl"
        >
          Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-3 text-[#1A1A1A]/75"
        >
          Custom combinations and durations available.
        </motion.p>
        <div className="mt-10 space-y-3">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              className={`flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white px-6 py-4 shadow-sm transition hover:shadow-md ${
                pkg.highlight ? "ring-2 ring-[#1F3D2B]/30" : ""
              }`}
            >
              <span className="font-semibold text-[#1A1A1A]">{pkg.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-[#1F3D2B] font-semibold">{pkg.duration}</span>
                <a
                  href="#booking"
                  className="rounded-lg bg-[#1F3D2B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d5a3f]"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
