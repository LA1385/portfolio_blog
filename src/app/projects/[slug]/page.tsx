import { projectsData } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

// This tells Next.js which slugs exist at build time
export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.id }));
}

// This generates the page title dynamically per project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | MyPortfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the matching project — if none found, show a 404 page
  const project = projectsData.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <div className="pb-20">

      {/* --- PAGE HEADER --- */}
      <section className="bg-surface-light dark:bg-surface-dark border-b border-surface-dark/10 dark:border-white/10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Projects
          </Link>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-outfit text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: Long description + Features */}
          <div className="lg:col-span-2 space-y-10">

            {/* Project image mockup */}
            <div className="w-full h-72 rounded-3xl border border-surface-dark/10 dark:border-white/10 bg-surface-light dark:bg-surface-dark flex items-center justify-center text-8xl shadow-inner">
              {project.image}
            </div>

            {/* Full write-up */}
            <div>
              <h2 className="text-2xl font-bold font-outfit text-foreground mb-4">About this project</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">{project.longDescription}</p>
            </div>

            {/* Features list */}
            <div>
              <h2 className="text-2xl font-bold font-outfit text-foreground mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right sidebar: Links */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/30 dark:bg-surface-dark/30 p-6">
              <h3 className="text-lg font-bold font-outfit text-foreground mb-4">Project Links</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors shadow-sm"
                >
                  View Live Demo <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-medium text-foreground bg-white dark:bg-surface-dark border border-surface-dark/10 dark:border-white/10 hover:border-primary-500/40 rounded-xl transition-colors"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
