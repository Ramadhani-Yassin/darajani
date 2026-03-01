"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP = "https://wa.me/255000000000";
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
    <section id="booking" className="bg-[#1F3D2B] py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-2xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F6F1E9]/70"
        >
          Get in touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mt-2 font-serif text-3xl font-medium text-white sm:text-4xl"
        >
          Booking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-3 text-[#F6F1E9]/85"
        >
          Send your details and we'll respond via WhatsApp.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-white/90">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[#7A5230] focus:outline-none focus:ring-1 focus:ring-[#7A5230]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="dates" className="mb-1.5 block text-sm font-semibold text-white/90">
              Dates
            </label>
            <input
              id="dates"
              name="dates"
              type="text"
              value={form.dates}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[#7A5230] focus:outline-none focus:ring-1 focus:ring-[#7A5230]"
              placeholder="Preferred dates"
            />
          </div>
          <div>
            <label htmlFor="groupSize" className="mb-1.5 block text-sm font-semibold text-white/90">
              Group Size
            </label>
            <input
              id="groupSize"
              name="groupSize"
              type="text"
              value={form.groupSize}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[#7A5230] focus:outline-none focus:ring-1 focus:ring-[#7A5230]"
              placeholder="Number of people"
            />
          </div>
          <div>
            <label htmlFor="budgetTier" className="mb-1.5 block text-sm font-semibold text-white/90">
              Budget Tier
            </label>
            <select
              id="budgetTier"
              name="budgetTier"
              value={form.budgetTier}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-[#7A5230] focus:outline-none focus:ring-1 focus:ring-[#7A5230]"
            >
              <option value="" className="bg-[#1F3D2B] text-white">
                Select
              </option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-[#1F3D2B] text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="interests" className="mb-1.5 block text-sm font-semibold text-white/90">
              Interests
            </label>
            <textarea
              id="interests"
              name="interests"
              rows={3}
              value={form.interests}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[#7A5230] focus:outline-none focus:ring-1 focus:ring-[#7A5230]"
              placeholder="e.g. Lemosho trek, cultural tour, volunteering"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-14 min-w-[220px] items-center justify-center rounded-lg bg-[#25d366] text-lg font-semibold text-white shadow-lg transition hover:bg-[#20bd5a]"
          >
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
