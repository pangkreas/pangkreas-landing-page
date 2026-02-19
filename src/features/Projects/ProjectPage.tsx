import { Card, CardContent, Badge, Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import Container from "@/components/layout/Container";
import usePageTitle from "@/hooks/usePageTitle";
import { useFeaturedProjects } from "./hooks/useFeaturedProjects";

// const projects = [
//   {
//     title: "Inventory Management Dashboard",
//     category: "Web App",
//     desc: "Custom dashboard for stock tracking, reporting, and analytics.",
//     tech: ["React", "Laravel", "MySQL"],
//   },
//   {
//     title: "Marketplace Automation Bot",
//     category: "Automation",
//     desc: "Automation for product monitoring and order workflow.",
//     tech: ["Python", "API Integration"],
//   },
//   {
//     title: "Internal CRM System",
//     category: "Web System",
//     desc: "Lead tracking and pipeline management system.",
//     tech: ["React", "Node.js"],
//   },
//   {
//     title: "Analytics Dashboard",
//     category: "Dashboard",
//     desc: "Real-time business metrics visualization.",
//     tech: ["React", "Charts", "API"],
//   },
//   {
//     title: "WhatsApp Notification Bot",
//     category: "Bot",
//     desc: "Automated customer notifications and reminders.",
//     tech: ["Node.js", "WhatsApp API"],
//   },
//   {
//     title: "Admin CMS Panel",
//     category: "CMS",
//     desc: "Custom CMS for content and operations management.",
//     tech: ["React", "Laravel"],
//   },
// ];

export default function ProjectsPage() {
  const { data: projects = [], isLoading } = useFeaturedProjects();
  const navigate = useNavigate();
  usePageTitle("Work");

  if (isLoading) {
    return (
      <section className="bg-slate-50 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl text-center text-slate-500">
          Loading projects...
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="py-24 pb-16">
        <Container className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-slate-900">
            Selected Work
          </h1>
          <p className="text-lg text-slate-600">
            A selection of apps, automation, and internal tools we've helped bring to life.
          </p>
        </Container>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {projects?.map((project) => (
              <Card key={project.title} className="bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-100">
                    {project.category}
                  </Badge>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm text-slate-600">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 py-24 text-center text-white">
        <Container>
          <h2 className="mb-6 text-4xl font-bold">
            Want to build something similar?
          </h2>

          <Button
            onClick={() => navigate("/contact")}
            className="!bg-white !text-indigo-600 hover:!bg-indigo-50 px-8 py-4 text-lg font-semibold"
          >
            Start a Project
          </Button>
        </Container>
      </section>
    </div>
  );
}
