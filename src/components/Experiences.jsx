"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  {
    title: "Mount Kilimanjaro Trekking",
    description:
      "Guided summit treks on the scenic Lemosho route. Start from our base near JRO for a smoother, closer-to-mountain experience.",
    image: "/assets/mt-kilimanjaro-route.png",
    alt: "Lemosho Route map",
  },
  {
    title: "Motel, Camping & Host Families",
    description:
      "Flexible stays from comfortable motel rooms and camping to authentic host-family immersion.",
    image: "/assets/mountain-camping-white-kid.png",
    alt: "Camping in nature",
  },
  {
    title: "Chagga Culture & Coffee",
    description:
      " Local farming, Coffee tradition, ghee making, stingless-honey bee farming,Chagga cuisine&indigenous medicinal practices.",
    image: "/assets/coffee.png",
    alt: "Kilimanjaro coffee",
  },
  {
    title: "Safari",
    description:
      "Northen ircuit: Tarangire,Lake Manyara, Ngorongoro,Serengeti,Costal &Southern Highlands-Zanzibar-Mikumi-Udzungwa Gorilla trekking",
    image: "/assets/safari.png",
    alt: "Cultural exchange in Siha",
  },
  {
    title: "Study abroad & volunteering",
    description:
      "Meaningful community engagement with supervision and clear learning outcomes in education, healthcare, and community programs",
    image: "/assets/volunteer-and-educational-programs.png",
    alt: "Community and culture",
  },
];

function ExperienceCard({ title, description, image, alt, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="tone-card group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#1A1A1A]"
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-serif text-xl font-medium sm:text-2xl">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/85">{description}</p>
      </div>
    </motion.article>
  );
}

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experiences" className="bg-[#F6F1E9] pb-14 pt-10 md:pb-18 md:pt-12" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5f6c66]"
        >
          What we offer
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="mt-2 text-4xl font-semibold text-[#1f543e]"
        >
          Experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-3 max-w-xl text-[#5f6c66]"
        >
          From summit treks to cultural immersion, find the experience that fits you.
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.slice(0, 3).map((item, i) => (
            <ExperienceCard key={item.title} {...item} index={i} />
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {EXPERIENCES.slice(3, 5).map((item, i) => (
            <ExperienceCard key={item.title} {...item} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
