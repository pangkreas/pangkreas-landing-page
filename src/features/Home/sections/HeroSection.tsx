import { useNavigate } from "react-router-dom";
import { Button, Badge } from "@/components/ui";

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-100 px-6 pb-20 pt-24 md:px-12 lg:pb-32 lg:pt-32">
      <div className="mx-auto max-w-5xl">
        <Badge className="mb-6 border-indigo-100 bg-indigo-50 px-4 py-1 text-sm font-medium tracking-wide text-indigo-700">
          Apps • Automation • Internal Tools
        </Badge>

        <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
          We build software that <span className="text-indigo-600">actually ships.</span>
        </h1>

        <p className="mb-10 max-w-2xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
          From MVPs to automation bots and internal dashboards — we help teams turn ideas into real products.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="h-14 px-8 text-lg font-semibold" onClick={() => navigate("/contact")}>
            Start a Project
          </Button>

          <Button variant="outline" className="h-14 px-8 text-lg font-semibold" onClick={scrollToServices}>
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
