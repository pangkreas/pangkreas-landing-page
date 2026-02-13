import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We understand your idea, goals, and define the best technical approach.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    desc: "We design system structure, workflows, and user experience.",
  },
  {
    number: "03",
    title: "Development",
    desc: "We build the product in focused iterations with regular updates.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    desc: "We test, refine, and prepare the product for real users.",
  },
  {
    number: "05",
    title: "Iteration & Growth",
    desc: "We help you improve and scale based on real feedback.",
  },
];

export default function ProcessPage() {
  const navigate = useNavigate();
  usePageTitle("Process");

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="py-24">
        <Container className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-slate-900">
            Our Process
          </h1>
          <p className="text-lg text-slate-600">
            A simple and transparent workflow to turn ideas into real products.
          </p>
        </Container>
      </section>

      {/* STEPS */}
      <section className="bg-slate-50 px-6 py-24 md:px-12">
        <Container>
          <div className="relative max-w-3xl mx-auto space-y-16">
            <div className="absolute left-5 top-0 h-full w-px bg-indigo-200"></div>
            {steps.map((step) => (
              <div key={step.number} className="relative pl-16">
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 py-24 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold">
          Ready to start your project?
        </h2>

        <Button
          onClick={() => navigate("/contact")}
          className="!bg-white !text-indigo-600 hover:!bg-indigo-50 px-8 py-4 text-lg font-semibold"
        >
          Start a Project
        </Button>
      </section>
    </div>
  );
}
