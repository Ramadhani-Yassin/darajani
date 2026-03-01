import Link from "next/link";

const WHATSAPP = "https://wa.me/255000000000";
const EMAIL = "info@darajani.com";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-16 text-[#F6F1E9]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <span className="font-serif text-2xl font-medium">Darajani</span>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              Motel, Camping & Tour Operations — Sana Juu, Siha, Kilimanjaro Region, Tanzania
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
        <p className="mt-12 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Darajani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
