"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP = "https://wa.me/255764101435";
const BUDGET_OPTIONS = ["Budget", "Mid-range", "Premium"];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    dates: "",
    groupSize: "",
    budgetTier: "",
    interests: "",
  });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Name: ${form.name}\nDates: ${form.dates}\nGroup size: ${form.groupSize}\nBudget: ${form.budgetTier}\nInterests: ${form.interests}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="booking" className="bg-[#fefcf7] py-14 md:py-18" ref={ref}>
      <div className="mx-auto max-w-2xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5f6c66]"
        >
          Get in touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mt-2 text-4xl font-semibold text-[#1f543e]"
        >
          Booking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-3 text-[#5f6c66]"
        >
          Send your details and we&apos;ll respond via WhatsApp.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="tone-panel mt-10 space-y-5 rounded-[2.5rem] p-6 md:p-10"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#2d3e38]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="tone-pill w-full px-5 py-3 text-[#1e2a2f] placeholder-[#6f7a74] focus:border-[#2b6e4c] focus:outline-none focus:ring-2 focus:ring-[#2b6e4c]/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="dates" className="mb-1.5 block text-sm font-semibold text-[#2d3e38]">
              Dates
            </label>
            <input
              id="dates"
              name="dates"
              type="text"
              value={form.dates}
              onChange={handleChange}
              className="tone-pill w-full px-5 py-3 text-[#1e2a2f] placeholder-[#6f7a74] focus:border-[#2b6e4c] focus:outline-none focus:ring-2 focus:ring-[#2b6e4c]/20"
              placeholder="Preferred dates"
            />
          </div>
          <div>
            <label htmlFor="groupSize" className="mb-1.5 block text-sm font-semibold text-[#2d3e38]">
              Group Size
            </label>
            <input
              id="groupSize"
              name="groupSize"
              type="text"
              value={form.groupSize}
              onChange={handleChange}
              className="tone-pill w-full px-5 py-3 text-[#1e2a2f] placeholder-[#6f7a74] focus:border-[#2b6e4c] focus:outline-none focus:ring-2 focus:ring-[#2b6e4c]/20"
              placeholder="Number of people"
            />
          </div>
          <div>
            <label htmlFor="budgetTier" className="mb-1.5 block text-sm font-semibold text-[#2d3e38]">
              Budget Tier
            </label>
            <select
              id="budgetTier"
              name="budgetTier"
              value={form.budgetTier}
              onChange={handleChange}
              className="tone-pill w-full px-5 py-3 text-[#1e2a2f] focus:border-[#2b6e4c] focus:outline-none focus:ring-2 focus:ring-[#2b6e4c]/20"
            >
              <option value="">
                Select
              </option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="interests" className="mb-1.5 block text-sm font-semibold text-[#2d3e38]">
              Interests
            </label>
            <textarea
              id="interests"
              name="interests"
              rows={3}
              value={form.interests}
              onChange={handleChange}
              className="w-full resize-none rounded-[1.75rem] border border-[#dbd2c4] bg-[#fefaf5] px-5 py-3 text-[#1e2a2f] placeholder-[#6f7a74] focus:border-[#2b6e4c] focus:outline-none focus:ring-2 focus:ring-[#2b6e4c]/20"
              placeholder="e.g. Lemosho trek, cultural tour, volunteering"
            />
          </div>
          <button
            type="submit"
            className="tone-btn inline-flex h-14 min-w-[220px] items-center justify-center bg-[#25d366] text-lg font-semibold text-white shadow-lg hover:bg-[#20bd5a]"
          >
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
