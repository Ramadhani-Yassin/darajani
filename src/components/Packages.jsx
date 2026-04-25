"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function gallerySrc(filename) {
  return `/assets/images_gallery/${encodeURIComponent(filename)}`;
}

const GALLERY_IMAGES = [
  {
    file: "front-darajani -motel.jpeg",
    alt: "Darajani motel exterior and welcome area",
    caption: "DJ001",
  },
  {
    file: "Bedroom.jpeg",
    alt: "Comfortable guest bedroom",
    caption: "DJ002",
  },
  {
    file: "Bedroom--2.jpeg",
    alt: "Bright guest bedroom interior",
    caption: "DJ003",
  },
  {
    file: "the green look.jpeg",
    alt: "Lush green grounds and landscaping at Darajani",
    caption: "DJ004",
  },
];

/** Copy exactly as provided — no additions */
const MAIN_TITLE = "DARAJANI KILIMANJARO TOURISM PACKAGES";

/** Unique inline vector marks per package (stroke icons, forest tone via currentColor) */
function PackageIcon({ name, className = "h-6 w-6 shrink-0 text-[#1F3D2B]" }) {
  const cn = className;
  switch (name) {
    case "sightseeing":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <circle cx="17.5" cy="6.5" r="2.2" />
          <path d="M3 18.5h18M5 18.5l4.5-7 3.5 4.5L16 8l5 10.5" strokeLinejoin="round" />
        </svg>
      );
    case "culture":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <path d="M8 21V10M16 21V10M6 10h12v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3Z" strokeLinejoin="round" />
          <path d="M10 6c0-1.1.9-2 2-2s2 .9 2 2v4h-4V6Z" strokeLinejoin="round" />
          <path d="M9 4V3M15 4V3" strokeLinecap="round" />
        </svg>
      );
    case "biology":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <path
            d="M12 3c-1.5 3-4.5 6.5-7 8 2.5 1.2 5 4 7 10 2-6 4.5-8.8 7-10-2.5-1.5-5.5-5-7-8Z"
            strokeLinejoin="round"
          />
          <path d="M12 8v8M9 10.5h6M9 13.5h6" strokeLinecap="round" />
        </svg>
      );
    case "biomedical":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" strokeLinejoin="round" />
          <path d="M12 8v8M8 12h8" strokeLinecap="round" />
          <path d="M17 17.5h2.5M17 20h2.5" strokeLinecap="round" />
        </svg>
      );
    case "volunteer":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <path
            d="M12 21s-5.5-4.2-7.5-8.2C2.8 9.5 4.5 7 7.2 7c1.8 0 3 1 4.8 3.2C13.8 8 15 7 16.8 7c2.7 0 4.4 2.5 2.7 5.8C17.5 16.8 12 21 12 21Z"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "circuit":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <path d="M12 3v4M10 5h4" strokeLinecap="round" />
          <path d="M8 7c0 0 1.5 3 4 3s4-3 4-3" strokeLinejoin="round" />
          <path d="M6 21h12M9 21V12l3-2 3 2v9" strokeLinejoin="round" />
          <path d="M3 18c2-1 4-1 6 0M15 18c2-1 4-1 6 0" strokeLinecap="round" />
        </svg>
      );
    case "transport":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <rect x="3" y="8" width="14" height="7" rx="1" strokeLinejoin="round" />
          <path d="M17 10h2.5l1.5 2v3h-2M5 21h2M14 21h2" strokeLinecap="round" />
          <path d="M3 17h18" strokeLinecap="round" />
          <path d="M7 8V6M13 8V6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
}

const PACKAGE_ITEMS = [
  {
    icon: "sightseeing",
    title: "Kilimanjaro & Arusha Sightseeing",
    body: "Waterfalls, hot springs, coffee traditions and immersive cultural programs.",
  },
  {
    icon: "biology",
    title: "Study Abroad & Volunteering",
    body: "Tailor-made study abroad, and volunteering programs, focused on early childhood education, ecology, biomedical & healthcare, and community services",
  },
  {
    icon: "circuit",
    title: " Northern Circuit Safari Package",
    body: "Explore Tanzania’s iconic parks—Tarangire National Park, Lake Manyara National Park, Ngorongoro Conservation Area, and Serengeti National Park.",
  },
    {
    icon: "circuit",
    title: "Coastal & Southern Highlands Safari Package",
    body: "Discover a blend of coast and wilderness in Zanzibar, Mikumi National Park, and Udzungwa Mountains National Park.",
  },
  {
    icon: "transport",
    title: "Train, Ferry & Road Travel Packages",
    body: "Experience Dar–Morogoro rail journeys, scenic Zanzibar ferry trips, and customized private road safari circuits.",
  },
];

function PackageCard({ item, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.04 + index * 0.03 }}
      className="tone-card flex h-full flex-col rounded-[1.75rem] p-7 md:p-8"
    >
      <div className="flex items-start gap-3.5">
        <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1F3D2B]/12 bg-[#fefaf5]">
          <PackageIcon name={item.icon} />
        </span>
        <h3 className="min-w-0 flex-1 text-lg font-semibold leading-snug text-[#1f543e] sm:text-xl">{item.title}</h3>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[#1A1A1A]/80 md:text-base">{item.body}</p>
    </motion.article>
  );
}

function GalleryLightbox({ activeIndex, onClose, onPrev, onNext }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, onClose, onPrev, onNext]);

  if (activeIndex === null) return null;

  const item = GALLERY_IMAGES[activeIndex];
  const total = GALLERY_IMAGES.length;

  const node = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-[#0d0d0d]/92 backdrop-blur-[2px]"
        aria-label="Close gallery"
        onClick={onClose}
      />
      <div className="relative z-[1] flex w-full max-w-5xl flex-col">
        <div className="mb-4 flex items-center justify-between gap-4 px-1">
          <p className="truncate text-sm font-medium tracking-wide text-white/90">
            <span className="text-white/55">Gallery</span>
            <span className="mx-2 text-white/35" aria-hidden>
              ·
            </span>
            <span>{item.caption}</span>
          </p>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            aria-label="Close"
          >
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          </button>
        </div>

        <div className="relative flex min-h-0 items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-2 shadow-2xl sm:p-4">
          <div className="relative aspect-[4/3] w-full max-h-[min(78vh,720px)] min-h-[220px] sm:aspect-[16/10] sm:min-h-[320px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.file}
                initial={{ opacity: 0.001 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.001 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={gallerySrc(item.file)}
                  alt={item.alt}
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#1F3D2B]/90 text-white shadow-lg transition hover:bg-[#2d5a3f] sm:left-4 sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <span className="text-lg" aria-hidden>
              ‹
            </span>
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#1F3D2B]/90 text-white shadow-lg transition hover:bg-[#2d5a3f] sm:right-4 sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <span className="text-lg" aria-hidden>
              ›
            </span>
          </button>
        </div>

        <p className="mt-4 text-center text-xs font-medium tracking-[0.2em] text-white/50">
          {activeIndex + 1} / {total}
        </p>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(node, document.body) : null;
}

export default function Packages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const onClose = useCallback(() => setLightboxIndex(null), []);
  const len = GALLERY_IMAGES.length;
  const onPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + len) % len));
  }, [len]);
  const onNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % len));
  }, [len]);
  const packageLayoutClass = (index) => {
    if (index === 0) return "lg:col-start-1 lg:col-span-3";
    if (index === 1) return "lg:col-start-4 lg:col-span-3";
    if (index === 2) return "lg:col-start-1 lg:col-span-3";
    if (index === 3) return "lg:col-start-4 lg:col-span-3";
    return "lg:col-start-2 lg:col-span-3";
  };

  return (
    <section id="packages" className="bg-[#fefcf7] py-14 md:py-18" ref={ref}>
      <GalleryLightbox activeIndex={lightboxIndex} onClose={onClose} onPrev={onPrev} onNext={onNext} />

      <div className="mx-auto max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="pb-10 text-center md:pb-12"
        >
          <h2 className="text-2xl font-semibold uppercase tracking-[0.08em] text-[#1f543e] sm:text-3xl md:leading-snug">
            {MAIN_TITLE}
          </h2>
        </motion.header>

        <div className="mx-auto mt-12 max-w-5xl md:mt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-7">
            {PACKAGE_ITEMS.map((item, i) => (
              <div key={item.title} className={packageLayoutClass(i)}>
                <PackageCard item={item} index={i} inView={inView} />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          id="gallery"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22 }}
          className="mx-auto mt-12 max-w-6xl scroll-mt-24 pt-8 md:mt-14 md:pt-10"
        >
          <div className="mb-8 md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5f6c66]">Gallery</p>
            <h3 className="mt-2 text-4xl font-semibold text-[#1f543e]">Amenities & Outdoor Spaces</h3>
          </div>

          <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {GALLERY_IMAGES.map((item, i) => (
              <li key={item.file}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3D2B]"
                >
                  <figure className="tone-card overflow-hidden rounded-[1.5rem] transition group-hover:border-[#1F3D2B]/22">
                    <div className="relative aspect-[4/3] w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[260px]">
                      <Image
                        src={gallerySrc(item.file)}
                        alt={item.alt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
                        aria-hidden
                      />
                      <span className="pointer-events-none absolute bottom-4 left-4 rounded-md bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1F3D2B] opacity-0 shadow-sm transition group-hover:opacity-100">
                        View
                      </span>
                    </div>
                    <figcaption className="border-t border-[#1F3D2B]/8 px-4 py-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7A5230]">{item.caption}</span>
                    </figcaption>
                  </figure>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
