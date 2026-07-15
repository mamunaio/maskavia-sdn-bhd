import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/sections/HeroSlider";
import Stats from "@/components/sections/Stats";
import Welcome from "@/components/sections/Welcome";
import ZigZagFeatures from "@/components/sections/ZigZagFeatures";
import Process from "@/components/sections/Process";
import Technology from "@/components/sections/Technology";
import CTA from "@/components/sections/CTA";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Insights from "@/components/sections/Insights";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSlider />
        <Stats />
        <Welcome />
        <ZigZagFeatures />
        <Process />
        <Technology />
        <Services />
        <Industries />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
