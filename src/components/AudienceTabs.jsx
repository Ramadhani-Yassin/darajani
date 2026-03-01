"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TABS = [
  {
    id: "tourists",
    label: "Tourists",
    content:
      "Convenience, authentic experiences, and flexible budgets. Whether you're summiting Kilimanjaro or exploring Chagga culture, we tailor your stay to your pace and interests.",
  },
  {
    id: "agents",
    label: "Agents",
    content:
      "Net rates, customization, and reliability. We work with tour agents on commission and volume — contact us for agent agreements and confidential net rates.",
  },
  {
    id: "ngos",
    label: "NGOs",
    content:
      "Community impact, supervision, reporting, and safeguarding. We support NGO partnerships with structured programs and clear outcomes for projects in Siha.",
  },
  {
    id: "schools",
    label: "Schools",
    content:
      "Safety, supervision, and learning outcomes. Educational groups get dedicated support, certificates, and programs designed for student groups.",
  },
];

export default function AudienceTabs() {
  const [active, setActive] = useState("tourists");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const current = TABS.find((t) => t.id === active);

  return (
    <section id="audiences" className="bg-[#F6F1E9] py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A5230]"
        >
          For every traveller
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mt-2 font-serif text-3xl font-medium text-[#1F3D2B] sm:text-4xl"
        >
          For You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-3 text-[#1A1A1A]/75"
        >
          Whether you're a traveller, agent, NGO, or school, we have something for you.
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                active === tab.id
                  ? "bg-[#1F3D2B] text-white"
                  : "bg-white text-[#1A1A1A] hover:bg-white/90"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-xl bg-white p-8 shadow-sm"
          >
            <p className="text-[#1A1A1A]/85 leading-relaxed">{current?.content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
