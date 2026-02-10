// import { useNavigate } from "react-router-dom";
// import { Button, Card, CardContent, Badge } from "@/components/ui";

// const services = [
//   {
//     title: "MVP Development",
//     desc: "Fast-track your core concept into a functional product that users can actually touch and test.",
//   },
//   {
//     title: "Bespoke Web Systems",
//     desc: "Custom-built digital tools and dashboards tailored specifically to your business operations.",
//   },
//   {
//     title: "Creative Tech Collaboration",
//     desc: "Need a technical partner for a unique idea? We blend design and code to find the solution.",
//   },
// ];

// const processSteps = [
//   {
//     step: "01",
//     title: "Understand",
//     body: "We start by stripping away the noise to find the core problem. No assumptions, just listening and clarifying the objective.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "02",
//     title: "Build",
//     body: "We move fast and focused. We build the solution that fits your needs today, ensuring scalability for tomorrow.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
//       </svg>
//     ),
//   },
//   {
//     step: "03",
//     title: "Iterate",
//     body: "Software is never 'done'. We help you launch, listen to feedback, and refine the product based on real-world use.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581"/>
//       </svg>
//     ),
//   },
// ];

// export default function HomePage() {
//   const navigate = useNavigate();

//   const scrollToServices = () => {
//     document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="flex w-full flex-col">
//       {/* HERO */}
//       <section className="relative overflow-hidden border-b border-slate-100 px-6 pb-20 pt-24 md:px-12 lg:pb-32 lg:pt-32">
//         <div className="mx-auto max-w-5xl">
//           <Badge className="mb-6 border-indigo-100 bg-indigo-50 px-4 py-1 text-sm font-medium tracking-wide text-indigo-700">
//             Pangkalan Kreasi
//           </Badge>

//           <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
//             Ide yang <span className="text-indigo-600">Siap Dibangun.</span>
//           </h1>

//           <p className="mb-10 max-w-2xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
//             Turning raw ideas into focused digital products.
//           </p>

//           <div className="flex flex-col gap-4 sm:flex-row">
//             <Button className="h-14 px-8 text-lg font-semibold" onClick={() => navigate("/contact")}>
//               Talk to Us
//             </Button>

//             <Button variant="outline" className="h-14 px-8 text-lg font-semibold" onClick={scrollToServices}>
//               Explore Our Work
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section id="services" className="bg-slate-50 px-6 py-24 md:px-12">
//         <div className="mx-auto max-w-7xl">
//           <h2 className="mb-16 text-3xl font-bold text-slate-900">What We Do</h2>

//           <div className="grid gap-8 md:grid-cols-3">
//             {services.map((service, i) => (
//               <Card key={service.title} className="bg-white transition-colors hover:border-indigo-200">
//                 <CardContent className="pt-8">
//                   <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-600/5 text-xl font-bold text-indigo-600">
//                     0{i + 1}
//                   </div>
//                   <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
//                   <p className="text-sm text-slate-600">{service.desc}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section id="process" className="border-b border-slate-100 bg-white px-6 py-24 md:px-12">
//         <div className="mx-auto max-w-7xl text-center">
//           <h2 className="mb-20 text-4xl font-bold text-slate-900">How We Work</h2>

//           <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
//             {processSteps.map((item) => (
//               <div key={item.step} className="flex flex-col items-center text-center">
//                 <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-indigo-50 bg-white text-indigo-600 shadow-sm">
//                   {item.icon}
//                 </div>
//                 <h3 className="mb-4 text-2xl font-bold text-slate-900">{item.title}</h3>
//                 <p className="text-sm text-slate-600 lg:text-base">{item.body}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

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
