import { Card, CardContent, Badge, Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Inventory Management Dashboard",
    category: "Web App",
    desc: "Custom dashboard for stock tracking, reporting, and analytics.",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    title: "Marketplace Automation Bot",
    category: "Automation",
    desc: "Automation for product monitoring and order workflow.",
    tech: ["Python", "API Integration"],
  },
  {
    title: "Internal CRM System",
    category: "Web System",
    desc: "Lead tracking and pipeline management system.",
    tech: ["React", "Node.js"],
  },
  {
    title: "Analytics Dashboard",
    category: "Dashboard",
    desc: "Real-time business metrics visualization.",
    tech: ["React", "Charts", "API"],
  },
  {
    title: "WhatsApp Notification Bot",
    category: "Bot",
    desc: "Automated customer notifications and reminders.",
    tech: ["Node.js", "WhatsApp API"],
  },
  {
    title: "Admin CMS Panel",
    category: "CMS",
    desc: "Custom CMS for content and operations management.",
    tech: ["React", "Laravel"],
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-6 pt-24 pb-20 text-center md:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-slate-900">
            Selected Work
          </h1>
          <p className="text-lg text-slate-600">
            Examples of digital products and automation we helped build.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-slate-50 px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="bg-white hover:shadow-lg transition">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-100">
                  {project.category}
                </Badge>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm text-slate-600">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-6 py-24 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold">
          Want to build something similar?
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
