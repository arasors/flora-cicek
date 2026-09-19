import { AllServicesSection } from "@/components/sites/flora-cicek/root-8a5edab2/AllServicesSection";
import { FinalCtaSection } from "@/components/sites/flora-cicek/root-8a5edab2/FinalCtaSection";
import { HeroSection } from "@/components/sites/flora-cicek/root-8a5edab2/HeroSection";
import { InspirationCarouselSection } from "@/components/sites/flora-cicek/root-8a5edab2/InspirationCarouselSection";
import { ProjectsGridSection } from "@/components/sites/flora-cicek/root-8a5edab2/ProjectsGridSection";
import { ScrollReveal } from "@/components/sites/flora-cicek/root-8a5edab2/ScrollReveal";
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
        <ScrollReveal>
          <ServicesHighlightSection />
        </ScrollReveal>
        <ScrollReveal direction="scale">
          <ValueCtaSection />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <StatsSection />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <StorySection />
        </ScrollReveal>
        <ScrollReveal>
          <AllServicesSection />
        </ScrollReveal>
        <ScrollReveal direction="scale">
          <WholesaleBenefitsSection />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <InspirationCarouselSection />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <ProjectsGridSection />
        </ScrollReveal>
        <ScrollReveal direction="scale">
          <FinalCtaSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
