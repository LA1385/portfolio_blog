import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Import the shared type from our data file
import { BlogPost } from "@/lib/data/posts";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group flex flex-col rounded-3xl border border-surface-dark/10 dark:border-white/10 bg-white dark:bg-surface-dark p-6 sm:p-8 transition-all hover:shadow-xl dark:hover:shadow-primary-900/20 hover:-translate-y-1"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
        <time className="text-sm font-mono text-foreground/50 mb-2 sm:mb-0">
          {post.date}
        </time>
        <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/10 px-2.5 py-1 rounded-full w-fit">
          {post.readTime}
        </span>
      </div>

      <h2 className="text-2xl font-bold font-outfit text-foreground mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {post.title}
      </h2>

      <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs font-medium text-foreground/60 border border-surface-dark/10 dark:border-white/10 px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 mt-auto pt-5 border-t border-surface-dark/10 dark:border-white/10">
        Read Article <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
