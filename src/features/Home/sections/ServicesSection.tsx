import { Card, CardContent } from "@/components/ui";

const services = [
  {
    title: "Custom Web & App Development",
    desc: "MVPs, dashboards, SaaS, and internal tools tailored to your business.",
  },
  {
    title: "Automation & Bot Development",
    desc: "Marketplace bots, WhatsApp automation, scraping, and workflow automation.",
  },
  {
    title: "Internal Tools & CMS",
    desc: "Admin panels, backoffice systems, and custom CMS to scale your operations.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-3xl font-bold text-slate-900">Services</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Card key={service.title} className="bg-white transition hover:border-indigo-200">
              <CardContent className="pt-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-600/5 text-xl font-bold text-indigo-600">
                  0{i + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
