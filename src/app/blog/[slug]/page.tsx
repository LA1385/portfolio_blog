import { blogPosts } from "@/lib/data/posts";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Tell Next.js which blog posts exist to pre-render them
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Generate the browser tab title automatically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | MyPortfolio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the post. If it doesn't exist, show a 404 page.
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pb-20">
      
      {/* --- POST HEADER --- */}
      <section className="bg-surface-light dark:bg-surface-dark border-b border-surface-dark/10 dark:border-white/10 pt-20 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <time className="text-sm font-mono text-foreground/60">
              {post.date}
            </time>
            <span className="hidden sm:inline text-surface-dark/20 dark:text-white/20">•</span>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 px-2.5 py-1 rounded-full w-fit">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-outfit text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 border border-primary-600/20 dark:border-primary-400/20 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* --- POST CONTENT --- */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12">
        {/* 
          We use dangerouslySetInnerHTML here because our data file contains raw HTML strings.
          In a production app with user-generated content, you would sanitize this first. 
          Since we hardcoded the HTML ourselves, it is perfectly safe.
          
          We also use Prose (Tailwind Typography plugin styling) manually by styling HTML elements 
          to keep the codebase dependency-light instead of installing the actual prose plugin.
        */}
        <div 
          className="text-foreground/80 leading-loose text-lg space-y-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:font-outfit [&>h3]:text-foreground [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>p>code]:bg-surface-dark/5 [&>p>code]:dark:bg-white/10 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded [&>p>code]:text-primary-600 [&>p>code]:dark:text-primary-400"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

    </div>
  );
}
