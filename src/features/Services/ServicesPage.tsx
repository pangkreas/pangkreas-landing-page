import { Button, Card, CardContent } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";

const services = [
  {
    title: "Custom Web & App Development",
    points: [
      "Startup MVP development",
      "SaaS platforms",
      "Internal dashboards",
      "Admin panels & portals",
    ],
  },
  {
    title: "Automation & Bot Development",
    points: [
      "WhatsApp & Telegram bots",
      "Marketplace automation",
      "Data scraping & integrations",
      "Workflow automation",
    ],
  },
  {
    title: "Internal Tools & CMS",
    points: [
      "Custom CMS systems",
      "Backoffice platforms",
      "Business automation tools",
      "Operational dashboards",
    ],
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  usePageTitle("Services");

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="py-24">
        <Container className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold text-slate-900">
              Services
            </h1>
            <p className="text-lg text-slate-600">
              From MVPs to automation and internal systems — we help turn ideas into real products.
            </p>
        </Container>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 text-slate-600">
                    {service.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="py-24">
        <Container className="text-center max-w-4xl">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-3xl font-bold text-slate-900">
              How we work together
            </h2>
            <p className="text-slate-600 mb-16">
              Flexible collaboration models depending on your needs.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-bold text-xl mb-3">Project Based</h3>
                <p className="text-slate-600">Best for MVPs and one-time builds.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3">Monthly Partnership</h3>
                <p className="text-slate-600">Ongoing product development & support.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-3">Custom Engagement</h3>
                <p className="text-slate-600">Flexible collaboration tailored to your needs.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 py-24 text-center text-white">
        <Container>
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <Button
            onClick={() => navigate("/contact")}
            className="!bg-white !text-indigo-600 hover:!bg-indigo-50 px-8 py-4 text-lg font-semibold"
          >
            Contact Us
          </Button>
        </Container>
      </section>
    </div>
  );
}
