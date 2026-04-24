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
    <section id="audiences" className="bg-[#fefcf7] py-14 md:py-18" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#5f6c66]"
        >
          For every traveller
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mt-2 text-center text-4xl font-semibold text-[#1f543e]"
        >
          For You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-3 text-center text-[#5f6c66]"
        >
          Whether you&apos;re a traveller, agent, NGO, or school, we have something for you.
        </motion.p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 border-b border-[#ddd8cf] pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                active === tab.id
                  ? "bg-[#2b6e4c] text-white"
                  : "text-[#3d5a4c] hover:bg-[#eff3ef]"
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
            className="tone-panel mt-6 rounded-[2.25rem] p-8"
          >
            <p className="text-[#1A1A1A]/85 leading-relaxed">{current?.content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
