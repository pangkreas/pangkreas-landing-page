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
    <section id="process" className="border-b border-slate-100 bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-20 text-4xl font-bold text-slate-900">Our Process</h2>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="mb-6 text-4xl font-bold text-indigo-600">0{i + 1}</div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
