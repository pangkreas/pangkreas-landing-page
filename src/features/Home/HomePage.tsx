import { 
  HeroSection,
  ServicesSection,
  ProjectsSection,
  ProcessSection,
  WhySection,
  CTASection
} from "./sections";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <WhySection />
      <CTASection />
    </div>
  );
}
