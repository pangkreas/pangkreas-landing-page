import { Button, Card, CardContent } from "@/components/ui";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-6 pt-24 pb-20 md:px-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-slate-900">
            Services
          </h1>
          <p className="text-lg text-slate-600">
            We help teams build custom software, automation, and internal tools.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-slate-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-white">
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
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="px-6 py-24 md:px-12 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-3xl font-bold text-slate-900">
            How we work together
          </h2>

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
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center px-6 py-24">
        <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
        <Button
          onClick={() => navigate("/contact")}
          className="!bg-white !text-indigo-600 hover:!bg-indigo-50 px-8 py-4 text-lg font-semibold"
        >
          Contact Us
        </Button>
      </section>
    </div>
  );
}
