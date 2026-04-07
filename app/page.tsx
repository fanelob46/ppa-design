import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProbleSection";
import FeaturesSection from "./components/OverViewSection";
import CurriculumSection from "./components/CurriculumSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <CurriculumSection />
        <TestimonialsSection />
        <PricingSection />
        <Footer />
      
      </main>
    </div>
  );
}
