import ProjectsGrid from "@/components/layout/ProjectsGrid";
import { projectsData } from "@/lib/data/projects";

export const metadata = {
  title: "Projects | MyPortfolio",
  description: "A showcase of my recent web development projects and open source contributions.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-20">

      {/* --- PAGE HEADER --- */}
      <section className="bg-surface-light dark:bg-surface-dark border-b border-surface-dark/10 dark:border-white/10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-outfit text-foreground mb-6">
            Featured <span className="text-primary-600 dark:text-primary-400">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
            A collection of things I've built — from simple components to complex dashboards, showcasing my journey in frontend development.
          </p>
        </div>
      </section>

      {/* --- PROJECTS GRID (client component handles filtering) --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16">
        <ProjectsGrid projects={projectsData} />
      </section>

    </div>
  );
}
