import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { PricingSummary } from "@/components/sections/PricingSummary";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialCarousel />
      <PricingSummary />
      <FinalCTA />
    </>
  );
}
