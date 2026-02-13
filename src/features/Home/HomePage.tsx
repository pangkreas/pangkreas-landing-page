import { 
  HeroSection,
  ServicesSection,
  ProjectsSection,
  ProcessSection,
  WhySection,
  CTASection
} from "./sections";
import usePageTitle from "@/hooks/usePageTitle";

export default function HomePage() {
  usePageTitle("Home");
  return (
    <div className="flex flex-col">
      <HeroSection />

      <section className="bg-slate-50 border-t border-slate-100">
        <ServicesSection />
      </section>
      <section className="border-t border-slate-100">
        <ProjectsSection />
      </section>

      <section className="bg-slate-50 border-t border-slate-100">
        <ProcessSection />
      </section>

      <section className="border-t border-slate-100">
        <WhySection />
      </section>

      <CTASection />
    </div>
  );
}
