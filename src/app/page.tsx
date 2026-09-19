import { AllServicesSection } from "@/components/sites/flora-cicek/root-8a5edab2/AllServicesSection";
import { FinalCtaSection } from "@/components/sites/flora-cicek/root-8a5edab2/FinalCtaSection";
import { HeroSection } from "@/components/sites/flora-cicek/root-8a5edab2/HeroSection";
import { InspirationCarouselSection } from "@/components/sites/flora-cicek/root-8a5edab2/InspirationCarouselSection";
import { ProjectsGridSection } from "@/components/sites/flora-cicek/root-8a5edab2/ProjectsGridSection";
import { ServicesHighlightSection } from "@/components/sites/flora-cicek/root-8a5edab2/ServicesHighlightSection";
import { SiteFooter } from "@/components/sites/flora-cicek/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/flora-cicek/root-8a5edab2/SiteHeader";
import { StatsSection } from "@/components/sites/flora-cicek/root-8a5edab2/StatsSection";
import { StorySection } from "@/components/sites/flora-cicek/root-8a5edab2/StorySection";
import { ValueCtaSection } from "@/components/sites/flora-cicek/root-8a5edab2/ValueCtaSection";
import { WhatsAppFab } from "@/components/sites/flora-cicek/root-8a5edab2/WhatsAppFab";
import { WholesaleBenefitsSection } from "@/components/sites/flora-cicek/root-8a5edab2/WholesaleBenefitsSection";

export default function Home() {
  return (
    <div className="flora-site">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesHighlightSection />
        <ValueCtaSection />
        <StatsSection />
        <StorySection />
        <AllServicesSection />
        <WholesaleBenefitsSection />
        <InspirationCarouselSection />
        <ProjectsGridSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
