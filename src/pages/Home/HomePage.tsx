
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Badge } from '../../components/ui';

/**
 * Pangkreas Landing Page
 * 
 * Focused on grounded creativity and builder mindset.
 */
export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 lg:pt-32 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-6 py-1 px-4 text-sm font-medium tracking-wide border-indigo-100 bg-indigo-50 text-indigo-700">
            Pangkalan Kreasi
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Ide yang <span className="text-indigo-600">Siap Dibangun.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-10 font-medium">
            Turning raw ideas into focused digital products. We help founders and small teams build MVPs, systems, and creative tools that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="h-14 px-8 text-lg font-semibold" onClick={() => navigate('/contact')}>
              Talk to Us
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg font-semibold" onClick={() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Explore Our Work
            </Button>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
          <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
            <path d="M10 10H90V90H10V10Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
          </svg>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-500 max-w-md">Focused capabilities designed to get your project from zero to one without the corporate fluff.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "MVP Development",
                desc: "Fast-track your core concept into a functional product that users can actually touch and test."
              },
              {
                title: "Bespoke Web Systems",
                desc: "Custom-built digital tools and dashboards tailored specifically to your business operations."
              },
              {
                title: "Creative Tech Collaboration",
                desc: "Need a technical partner for a unique idea? We blend design and code to find the solution."
              }
            ].map((service, i) => (
              <Card key={i} className="group hover:border-indigo-200 transition-colors bg-white">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 rounded-lg bg-indigo-600/5 text-indigo-600 flex items-center justify-center mb-6 font-bold text-xl border border-indigo-100">
                    0{i+1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="process" className="py-24 px-6 md:px-12 border-b border-slate-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">A streamlined, builder-first approach to software development that prioritizes clarity and execution.</p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-indigo-50 z-0"></div>
            
            {[
              { 
                step: "01", 
                title: "Understand", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                ),
                body: "We start by stripping away the noise to find the core problem. No assumptions, just listening and clarifying the objective." 
              },
              { 
                step: "02", 
                title: "Build", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                ),
                body: "We move fast and focused. We build the solution that fits your needs today, ensuring scalability for tomorrow." 
              },
              { 
                step: "03", 
                title: "Iterate", 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                ),
                body: "Software is never 'done'. We help you launch, listen to feedback, and refine the product based on real-world use." 
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center text-indigo-600 mb-8 shadow-sm group hover:border-indigo-600 transition-all duration-300">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {item.step}
                  </div>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pangkreas section (Moved up or kept as part of storytelling) */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Pangkreas?</h2>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <span className="text-indigo-400 font-bold">/</span>
                <p><strong className="text-white">Builder-First Mindset:</strong> We prefer code over slides. If it can be built, we'll build it right.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-indigo-400 font-bold">/</span>
                <p><strong className="text-white">Direct Communication:</strong> You talk directly to the people building your product. No middle layers.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-indigo-400 font-bold">/</span>
                <p><strong className="text-white">Practical Decisions:</strong> We don't chase trends. We choose technology that serves your goal.</p>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">Who fits here</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1 block">Founders</span>
                <p className="text-sm">People with a concrete vision but need a technical hand to bring it to life.</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1 block">Small Businesses</span>
                <p className="text-sm">Teams needing a custom digital tool to automate or improve their operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
