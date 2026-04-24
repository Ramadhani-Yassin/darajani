import { Inter } from "next/font/google";
import "./globals.css";

const interSerif = Inter({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const interSans = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Darajani — Your Gateway to Mount Kilimanjaro, Culture & Community",
  description:
    "Start closer to the mountain — treks, accommodation, culture and community programs near Kilimanjaro International Airport. Sanya Juu, Siha, Tanzania.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interSerif.variable} ${interSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
