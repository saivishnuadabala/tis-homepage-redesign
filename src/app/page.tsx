import { CustomCursor } from "@/components/animation/CustomCursor";
import { ScrollProgress } from "@/components/animation/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { CampusLifeSection } from "@/components/sections/CampusLifeSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RankingsSection } from "@/components/sections/RankingsSection";
import { SportsSection } from "@/components/sections/SportsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <CampusLifeSection />
        <SportsSection />
        <RankingsSection />
        <TestimonialsSection />
        <AdmissionsCTA />
      </main>
      <Footer />
    </>
  );
}
