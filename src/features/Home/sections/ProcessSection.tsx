import Container from "@/components/layout/Container";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Understand",
    desc: "We clarify the real problem and define the right solution.",
  },
  {
    title: "Build",
    desc: "We develop fast, focused, and aligned with your goals.",
  },
  {
    title: "Iterate",
    desc: "We refine based on real user feedback and scale the product.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <Container className="text-center">
        <h2 className="mb-4 text-4xl font-bold text-slate-900">Our Process</h2>
        <p className="mb-20 text-slate-600 max-w-xl mx-auto">
          A simple, builder-first workflow designed to turn ideas into shipped products.
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <div className="rounded-xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" key={step.title}>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-bold mx-auto">0{i + 1}</div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/process"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Learn more about our process →
          </Link>
        </div>
      </Container>
    </section>
  );
}
