import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
          {/* Glowing Orb */}
          <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 dark:bg-primary-500/20 blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center rounded-full border border-surface-dark/10 dark:border-white/10 bg-white/50 dark:bg-surface-dark/50 px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 backdrop-blur-sm mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          {/* Main Headline */}
          <h1 className="font-outfit text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl mb-8">
            Building digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
              experiences
            </span>
          </h1>
          
          {/* Subtitle / Bio */}
          <p className="mx-auto max-w-2xl text-lg text-foreground/70 sm:text-xl mb-10 leading-relaxed">
            I'm a Frontend Developer and CS student specializing in building exceptional, accessible, and dynamic digital experiences using React, Next.js, and modern web technologies.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/projects" 
              className="group flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white shadow-md bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 rounded-full transition-all"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-foreground bg-white dark:bg-surface-dark border border-surface-dark/10 dark:border-white/10 hover:border-primary-500 dark:hover:border-primary-400 rounded-full transition-colors shadow-sm"
            >
              Github
            </Link>
          </div>

        </div>
      </section>

      {/* --- ABOUT SNAPSHOT SECTION --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/50 dark:bg-surface-dark/30 p-8 sm:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Bio */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4">About Me</h2>
              <h3 className="text-3xl font-bold text-foreground mb-4 font-outfit">Code with purpose.</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                I'm a computer science student with a passion for beautifully crafted user interfaces. I bridge the gap between design and engineering, ensuring that every pixel serves a purpose while maintaining robust architecture under the hood.
              </p>
              <Link href="/about" className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                Read full story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-6 md:mb-4">Core Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Git"].map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center rounded-full bg-white dark:bg-surface-dark border border-surface-dark/10 dark:border-white/10 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS SECTION --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">Portfolio</h2>
            <h3 className="text-3xl font-bold text-foreground font-outfit">Featured Work</h3>
          </div>
          <Link href="/projects" className="hidden sm:inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            View all projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="group rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-white dark:bg-surface-dark overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary-900/10 hover:-translate-y-1">
            <div className="h-48 bg-surface-dark/5 dark:bg-surface-light/5 w-full border-b border-surface-dark/10 dark:border-white/10 flex items-center justify-center text-foreground/40 font-mono text-sm">
              [Image Placeholder]
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">E-Commerce Dashboard</h4>
              <p className="text-sm text-foreground/70 mb-4 line-clamp-2">A beautiful analytics dashboard with real-time sales data, inventory management, and chart visualizations.</p>
              <div className="flex gap-2 text-xs font-medium text-primary-600 dark:text-primary-400">
                <span>Next.js</span> • <span>Tailwind</span> • <span>Chart.js</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-white dark:bg-surface-dark overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary-900/10 hover:-translate-y-1">
            <div className="h-48 bg-surface-dark/5 dark:bg-surface-light/5 w-full border-b border-surface-dark/10 dark:border-white/10 flex items-center justify-center text-foreground/40 font-mono text-sm">
              [Image Placeholder]
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-2">Dev Flow Kanban</h4>
              <p className="text-sm text-foreground/70 mb-4 line-clamp-2">A drag-and-drop kanban board built for developers with local storage syncing and beautiful UI components.</p>
              <div className="flex gap-2 text-xs font-medium text-primary-600 dark:text-primary-400">
                <span>React</span> • <span>Framer Motion</span> • <span>Zustand</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400">
            View all projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* --- LATEST THOUGHTS (BLOG) SECTION --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">Writing</h2>
            <h3 className="text-3xl font-bold text-foreground font-outfit">Latest Thoughts</h3>
          </div>
          <Link href="/blog" className="hidden sm:inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            View all posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Post Card 1 */}
          <Link href="/blog/understanding-react-server-components" className="group rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/30 dark:bg-surface-dark/30 p-6 transition-all hover:bg-white hover:shadow-lg dark:hover:bg-surface-dark dark:hover:shadow-primary-900/10 hover:-translate-y-1">
            <time className="text-xs font-mono text-foreground/50 mb-3 block">April 4, 2026</time>
            <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Understanding React Server Components</h4>
            <p className="text-sm text-foreground/70 line-clamp-2">A deep dive into how RSCs change the paradigm of web development and why you should care.</p>
          </Link>

          {/* Post Card 2 */}
          <Link href="/blog/css-grid-vs-flexbox" className="group rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/30 dark:bg-surface-dark/30 p-6 transition-all hover:bg-white hover:shadow-lg dark:hover:bg-surface-dark dark:hover:shadow-primary-900/10 hover:-translate-y-1">
            <time className="text-xs font-mono text-foreground/50 mb-3 block">March 15, 2026</time>
            <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">CSS Grid vs Flexbox in Modern Layouts</h4>
            <p className="text-sm text-foreground/70 line-clamp-2">When to use which tool, and how they can be combined to build completely responsive, flawless web designs.</p>
          </Link>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400">
            View all posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* --- CTA / CONTACT STRIP --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full mt-20 mb-10">
        <div className="relative rounded-3xl overflow-hidden bg-primary-600 dark:bg-primary-900 border border-primary-500/30 p-8 sm:p-12 text-center">
          {/* Subtle background glow effect over the primary color */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white mb-4">Let's build something amazing.</h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Whether you have a project in mind or just want to chat about web development, I'm always open to new connections and exciting opportunities.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-primary-600 bg-white hover:bg-surface-light rounded-full transition-colors shadow-lg">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
