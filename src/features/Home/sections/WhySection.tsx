export default function WhySection() {
  return (
    <section className="bg-slate-900 px-6 py-24 text-white md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        
        {/* Left content */}
        <div>
          <h2 className="mb-6 text-3xl font-bold">Why Pangkreas?</h2>

          <ul className="space-y-6 text-slate-400">
            <li className="flex gap-4">
              <span className="font-bold text-indigo-400">/</span>
              <p>
                <strong className="text-white">Builder-First Mindset:</strong>{" "}
                We prefer shipping real software over making slides.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="font-bold text-indigo-400">/</span>
              <p>
                <strong className="text-white">Direct Communication:</strong>{" "}
                You talk directly to the people building your product.
              </p>
            </li>

            <li className="flex gap-4">
              <span className="font-bold text-indigo-400">/</span>
              <p>
                <strong className="text-white">Practical Technology:</strong>{" "}
                We choose tools based on your goals, not trends.
              </p>
            </li>
          </ul>
        </div>

        {/* Right card */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
          <h3 className="mb-6 text-2xl font-bold">Who we work best with</h3>

          <div className="space-y-4">
            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-indigo-400">
                Founders
              </span>
              <p className="text-sm">
                People with a clear vision who need a technical partner to bring it to life.
              </p>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-indigo-400">
                Small Businesses
              </span>
              <p className="text-sm">
                Teams that need custom tools to automate and scale operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
