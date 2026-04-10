"use client";

import { useState } from "react";
import BlogCard from "@/components/ui/BlogCard";
import { BlogPost } from "@/lib/data/posts";

type BlogGridProps = {
  posts: BlogPost[];
};

// Extractor helper to get unique tags from the blog posts list
const getUniqueTags = (posts: BlogPost[]) => {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return ["All", ...Array.from(tags)];
};

export default function BlogGrid({ posts }: BlogGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const tags = getUniqueTags(posts);
  
  const filteredPosts = activeFilter === "All" 
    ? posts 
    : posts.filter(post => post.tags.includes(activeFilter));

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      {/* Empty State Fallback (just in case) */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-24 border border-dashed border-surface-dark/20 dark:border-white/20 rounded-3xl">
          <p className="text-foreground/50 text-lg">No blog posts found matching the selected tag.</p>
        </div>
      )}
    </>
  );
}
