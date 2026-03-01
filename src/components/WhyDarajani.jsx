"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ITEMS = [
  {
    icon: "✈",
    title: "Close to JRO",
    description:
      "Save time and transport costs. Start your Kilimanjaro journey from our base near Kilimanjaro International Airport.",
  },
  {
    icon: "🏔",
    title: "Ideal Acclimatization Base",
    description:
      "Perfect pre-trek stay to adjust to altitude in a comfortable, supported environment.",
  },
  {
    icon: "◇",
    title: "Flexible Pricing",
    description:
      "Budget, mid-range, or premium — we offer options to match your group size and preferences.",
  },
  {
    icon: "♥",
    title: "Community Impact",
    description:
      "Your stay supports the local economy and community programs in Sana Juu, Siha.",
  },
];

export default function WhyDarajani() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" className="bg-white py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A5230]"
        >
          The Darajani difference
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mt-2 font-serif text-3xl font-medium text-[#1F3D2B] sm:text-4xl"
        >
          Why Darajani
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-3 max-w-xl text-[#1A1A1A]/75"
        >
          We combine convenience, comfort, and genuine local connection.
        </motion.p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="rounded-xl border-l-4 border-[#1F3D2B] bg-[#F6F1E9]/60 p-6 transition hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-3 font-semibold text-[#1F3D2B]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
