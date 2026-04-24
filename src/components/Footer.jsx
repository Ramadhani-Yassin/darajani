import Link from "next/link";
import Image from "next/image";

const WHATSAPP = "https://wa.me/255764101435";
const EMAIL = "info@darajanikilimanjaro.com";
const FACEBOOK = "https://facebook.com/darajanimotel";
const INSTAGRAM = "https://www.instagram.com/darajani_motel";

const socialLinks = [
  {
    href: FACEBOOK,
    label: "Facebook",
    icon: (
      <svg className="h-5 w-5" fill="#A8C5F0" viewBox="0 0 24 24" aria-hidden>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: INSTAGRAM,
    label: "Instagram",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path fill="url(#ig-gradient)" fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    href: `mailto:${EMAIL}`,
    label: "Gmail / Email",
    icon: (
      <svg
        className="h-5 w-5 text-[#A8C5F0]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-16 text-[#F6F1E9]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="shrink-0">
              <span className="relative flex h-12 w-12 overflow-hidden rounded-full border-2 border-white/40 shadow-md ring-2 ring-white/10">
                <Image
                  src="/assets/Logo.png"
                  alt="Darajani — Motel, Camping & Tour Operations"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Kilimanjaro to Safari—Your Journey, Your Way.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-white/90 hover:text-white">
              Email
            </a>
            <Link href="#experiences" className="text-sm font-medium text-white/90 hover:text-white">
              Experiences
            </Link>
            <Link href="#packages" className="text-sm font-medium text-white/90 hover:text-white">
              Packages
            </Link>
            <Link href="#booking" className="text-sm font-medium text-white/90 hover:text-white">
              Book
            </Link>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4 border-t border-white/10 pt-8">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="rounded-full p-2 transition hover:opacity-80 hover:bg-white/10"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Darajani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
