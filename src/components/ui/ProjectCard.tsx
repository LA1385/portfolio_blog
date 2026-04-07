import { ExternalLink } from "lucide-react";

type ProjectProps = {
  project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    githubUrl: string;
    image: string;
  }
};

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group flex flex-col rounded-3xl border border-surface-dark/10 dark:border-white/10 bg-white dark:bg-surface-dark overflow-hidden transition-all hover:shadow-xl dark:hover:shadow-primary-900/20 hover:-translate-y-2">
      {/* Project Image Area (Mockup Emoji for now) */}
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

        {/* Title */}
        <h2 className="text-2xl font-bold text-foreground mb-3 font-outfit group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h2>
        
        {/* Description */}
        <p className="text-foreground/70 leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>
        
        {/* Action Links */}
        <div className="flex items-center gap-6 mt-auto pt-5 border-t border-surface-dark/10 dark:border-white/10">
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-semibold text-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Live Demo <ExternalLink className="ml-1.5 h-4 w-4" />
          </a>
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-foreground/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
             Source
          </a>
        </div>
      </div>
    </div>
  );
}
