export const metadata = {
  title: "About Me | MyPortfolio",
  description: "Learn more about my journey as a Frontend Developer and CS student.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      
      {/* --- PAGE HEADER --- */}
      <section className="bg-surface-light dark:bg-surface-dark border-b border-surface-dark/10 dark:border-white/10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-outfit text-foreground mb-6">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
            Passionate about bridging the gap between elegant design and complex engineering.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT & BIO --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Detailed Bio (Takes up 2/3 of the space on desktop) */}
          <div className="lg:col-span-2 text-foreground/80 leading-relaxed space-y-6 text-lg">
            <h2 className="text-2xl font-bold font-outfit text-foreground mb-4">The Journey So Far</h2>
            <p>
              Hey there! I'm a Computer Science student currently diving deep into the world of web development. 
              My journey started when I built my first HTML page and realized the sheer power of turning abstract logic into 
              visual, interactive spaces that anyone around the world can experience.
            </p>
            <p>
              I specialize in <strong className="text-foreground">Frontend Development</strong>, focusing heavily on React, Next.js, and Tailwind CSS. While I love the logic 
              behind complex CS algorithms in school, I'm uniquely drawn to the visual aspect of the web. I obsess over clean UI, 
              fluid animations, and creating accessible interfaces that feel effortless to use.
            </p>
            <p>
              When I'm not writing code or studying for exams, you can find me analyzing Dribbble for UI design trends, 
              experimenting with new responsive layout techniques, or playing video games.
            </p>
          </div>

          {/* Sidebar Area */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/30 dark:bg-surface-dark/30 p-6">
              <h3 className="text-xl font-bold font-outfit text-foreground mb-2">Resume</h3>
              <p className="text-sm text-foreground/70 mb-6">
                Grab a copy of my resume for a detailed look at my CS coursework and technical experience.
              </p>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 rounded-xl transition-colors shadow-sm"
              >
                Download PDF
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
      
      {/* --- SKILLS SECTION --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold font-outfit text-foreground mb-10">Technical Toolkit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="block rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/30 dark:bg-surface-dark/30 p-6">
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-md bg-white dark:bg-surface-dark border border-surface-dark/10 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="block rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/30 dark:bg-surface-dark/30 p-6">
            <h3 className="text-lg font-bold text-accent-600 dark:text-accent-400 mb-4">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-md bg-white dark:bg-surface-dark border border-surface-dark/10 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="block rounded-2xl border border-surface-dark/10 dark:border-white/10 bg-surface-light/30 dark:bg-surface-dark/30 p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "VS Code", "Figma", "Vercel", "Postman"].map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-md bg-white dark:bg-surface-dark border border-surface-dark/10 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION TIMELINE SECTION --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold font-outfit text-foreground mb-10">Education</h2>
        
        <div className="relative border-l-2 border-surface-dark/10 dark:border-white/10 ml-3 md:ml-4 pl-8 space-y-12">
          
          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] bg-white dark:bg-surface-dark border-4 border-primary-500 rounded-full h-5 w-5 mt-1.5"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground">B.S. Computer Science</h3>
              <span className="text-sm font-mono text-primary-600 dark:text-primary-400">Class of 2026</span>
            </div>
            <h4 className="text-md font-medium text-foreground/70 mb-4">University of Technology</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Focusing on algorithms, data structures, and web engineering. Actively participating in the web development and hackathon clubs to build real-world software.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20 px-2 py-1 rounded">Key Coursework</span>
              <span className="text-xs text-foreground/60 border border-surface-dark/10 dark:border-white/10 px-2 py-1 rounded hidden sm:inline-block">Data Structures</span>
              <span className="text-xs text-foreground/60 border border-surface-dark/10 dark:border-white/10 px-2 py-1 rounded hidden sm:inline-block">Web Architecture</span>
              <span className="text-xs text-foreground/60 border border-surface-dark/10 dark:border-white/10 px-2 py-1 rounded hidden sm:inline-block">Database Systems</span>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}
