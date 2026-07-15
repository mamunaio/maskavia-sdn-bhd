import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TrustMarquee from "@/components/sections/TrustMarquee";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
