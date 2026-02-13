import { Card, CardContent, Badge } from "@/components/ui";
import Container from "@/components/layout/Container";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Inventory Management Dashboard",
    category: "Web App",
    desc: "Custom dashboard to track stock, orders, and real-time reporting for small businesses.",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    title: "Marketplace Automation Bot",
    category: "Automation",
    desc: "Automated product monitoring and order workflow for online marketplace operations.",
    tech: ["Python", "API Integration"],
  },
  {
    title: "Internal CRM System",
    category: "Web System",
    desc: "Tailored CRM to manage leads, pipelines, and team collaboration.",
    tech: ["React", "Node.js"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <Container>
        {/* Heading */}
        <div className="mb-20">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Selected Work
          </h2>
          <p className="max-w-md text-slate-500">
            A glimpse of the digital products and automation we help build.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-8">
                
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

        <div className="mt-16 text-center">
          <Link
            to="/work"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all projects →
          </Link>
        </div>
      </Container>
    </section>
  );
}
