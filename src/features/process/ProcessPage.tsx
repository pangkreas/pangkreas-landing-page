import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-6 pt-24 pb-20 text-center md:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-slate-900">
            Our Process
          </h1>
          <p className="text-lg text-slate-600">
            A simple and transparent workflow to turn ideas into real products.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-slate-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="text-4xl font-bold text-indigo-600">
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
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-6 py-24 text-center text-white">
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
