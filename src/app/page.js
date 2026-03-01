import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Packages from "@/components/Packages";
import WhyDarajani from "@/components/WhyDarajani";
import AudienceTabs from "@/components/AudienceTabs";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experiences />
        <Packages />
        <WhyDarajani />
        <AudienceTabs />
        <Booking />
        <Footer />
      </main>
    </>
  );
}
