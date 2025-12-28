import React from "react";
import type { BlogPost } from "./blog.types";
import { Link } from "react-router-dom";

const BlogCardFeed: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="
        group block
        border-l-2 border-border-subtle
        pl-4 py-4
        transition-colors
        hover:border-primary
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        focus-visible:ring-offset-bg-page
      "
    >
      <div className="flex items-center gap-2 text-[11px] text-text-muted">
        <span className="font-semibold text-primary">{post.category}</span>
        <span>•</span>
        <time>{new Date(post.updatedAt).toLocaleDateString()}</time>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      <h3 className="mt-1 text-base font-semibold text-text-main leading-snug">
        {post.title}
      </h3>

      <p className="mt-1 text-sm text-text-muted line-clamp-2">
        {post.excerpt}
      </p>
    </Link>
  );
};

export default BlogCardFeed;
