import { Card, CardContent } from "@/components/ui";
import Container from "@/components/layout/Container";

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
    <section id="services" className="py-24">
      <Container>
        <h2 className="mb-16 text-3xl font-bold text-slate-900">Services</h2>
        <p className="mb-16 max-w-xl text-slate-600">
          Focused capabilities designed to turn ideas into real products.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Card key={service.title} className="bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-600/5 text-xl font-bold text-indigo-600 shadow-sm">
                  0{i + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
