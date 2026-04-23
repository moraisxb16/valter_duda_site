import { AboutSection } from "@/components/home/AboutSection";
import { DetailedServicesSection } from "@/components/home/DetailedServicesSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MainServicesSection } from "@/components/home/MainServicesSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TechBackground } from "@/components/layout/TechBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageShell } from "@/components/motion/PageShell";

export default function Home() {
  return (
    <PageShell>
      <TechBackground />
      <div className="relative z-10 flex min-h-full flex-col text-slate-100">
        <SiteHeader />
        <main className="flex-1" data-scroll-journey>
          <HeroSection />
          <MainServicesSection />
          <div className="section-fade-to-light" aria-hidden />
          <MetricsSection />
          <DetailedServicesSection />
          <PartnersSection />
          <AboutSection />
          <FinalCtaSection />
        </main>
        <SiteFooter />
      </div>
    </PageShell>
  );
}
