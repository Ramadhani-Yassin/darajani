import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata = {
  title: "Darajani — Your Gateway to Mount Kilimanjaro, Culture & Community",
  description:
    "Start closer to the mountain — treks, accommodation, culture and community programs near Kilimanjaro International Airport. Sana Juu, Siha, Tanzania.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
