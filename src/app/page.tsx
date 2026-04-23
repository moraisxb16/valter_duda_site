import { AboutSection } from "@/components/home/AboutSection";
import { DetailedServicesSection } from "@/components/home/DetailedServicesSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MainServicesSection } from "@/components/home/MainServicesSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageShell } from "@/components/motion/PageShell";

export default function Home() {
  return (
    <PageShell>
      <div className="relative z-10 flex min-h-full flex-col bg-slate-50 text-slate-900">
        <SiteHeader />
        <main className="flex-1" data-scroll-journey>
          <HeroSection />
          <MainServicesSection />
          <SocialProofSection />
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
