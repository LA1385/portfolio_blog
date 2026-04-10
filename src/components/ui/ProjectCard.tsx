import { ExternalLink } from "lucide-react";
import Link from "next/link";

// We import the shared type from the data file so both files stay in sync
import { Project } from "@/lib/data/projects";

type ProjectProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    // The outer wrapper is still a div so the bottom external links work independently
    <div className="group flex flex-col rounded-3xl border border-surface-dark/10 dark:border-white/10 bg-white dark:bg-surface-dark overflow-hidden transition-all hover:shadow-xl dark:hover:shadow-primary-900/20 hover:-translate-y-2">
      
      {/* 
        This Link wraps ONLY the image + content area (not the action buttons).
        Clicking the card body navigates to the detail page for this project.
      */}
      <Link href={`/projects/${project.id}`} className="flex flex-col flex-grow cursor-pointer">

        {/* Project Image Area */}
        <div className="h-64 bg-surface-light dark:bg-surface-dark/50 border-b border-surface-dark/10 dark:border-white/10 flex items-center justify-center text-7xl shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-500/0 transition-colors duration-500 group-hover:bg-primary-500/5"></div>
          <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">{project.image}</span>
        </div>

        {/* Project Content */}
        <div className="flex flex-col flex-grow p-6 sm:p-8">

          {/* Tech Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(tech => (
              <span key={tech} className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          {/* Title — changes color on hover to signal it's clickable */}
          <h2 className="text-2xl font-bold text-foreground mb-3 font-outfit group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h2>

          {/* Short Description */}
          <p className="text-foreground/70 leading-relaxed flex-grow">
            {project.description}
          </p>

        </div>
      </Link>

      {/* 
        Action Buttons live OUTSIDE the Link so they don't interfere
        with the card-level navigation. Clicking these goes to external URLs.
      */}
      <div className="flex items-center gap-6 px-6 sm:px-8 py-5 border-t border-surface-dark/10 dark:border-white/10">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-semibold text-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Live Demo <ExternalLink className="ml-1.5 h-4 w-4" />
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-foreground/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Source Code
        </a>
      </div>

    </div>
  );
}
