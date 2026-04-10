import BlogGrid from "@/components/layout/BlogGrid";
import { blogPosts } from "@/lib/data/posts";

export const metadata = {
  title: "Blog | MyPortfolio",
  description: "Writing about frontend development, React, Next.js, and my journey in tech.",
};

export default function BlogPage() {
  return (
    <div className="pb-20">
      
      {/* --- PAGE HEADER --- */}
      <section className="bg-surface-light dark:bg-surface-dark border-b border-surface-dark/10 dark:border-white/10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-outfit text-foreground mb-6">
            Latest <span className="text-primary-600 dark:text-primary-400">Thoughts</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
            I write about web development, design patterns, and my experience navigating the tech industry as a Computer Science student.
          </p>
        </div>
      </section>

      {/* --- BLOG GRID & FILTER --- */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16">
        <BlogGrid posts={blogPosts} />
      </section>

    </div>
  );
}
