"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/lib/data/projects";

type ProjectsGridProps = {
  projects: Project[];
};

// Extractor helper to get unique tags from the projects list
const getUniqueTags = (projects: Project[]) => {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tech.forEach((tech) => tags.add(tech));
  });
  return ["All", ...Array.from(tags)];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const tags = getUniqueTags(projects);
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tech.includes(activeFilter));

  return (
    <>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeFilter === tag
                ? "bg-primary-600 text-white shadow-md dark:bg-primary-600"
                : "bg-surface-light dark:bg-surface-dark border border-surface-dark/10 dark:border-white/10 text-foreground/70 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/30"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Empty State Fallback */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-24 border border-dashed border-surface-dark/20 dark:border-white/20 rounded-3xl">
          <p className="text-foreground/50 text-lg">No projects found matching the selected filter.</p>
        </div>
      )}
    </>
  );
}
